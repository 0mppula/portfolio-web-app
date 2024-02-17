import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { format } from 'date-fns';
import React, { Fragment, useEffect, useMemo } from 'react';
import { FaCodeCommit } from 'react-icons/fa6';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProjectCommitItem from '../components/ProjectCommitItem';
import ProjectCommitItemSkeletons from '../components/ProjectCommitItemSkeletons';
import legacyProjects from '../data/legacy-projects.json';
import projects from '../data/projects.json';
import { useTitle } from '../hooks/useTitle';

const ProjectCommits = () => {
	const { repositoryName } = useParams();
	const navigate = useNavigate();
	const nextCommitsPagePattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;

	const validProjects = useMemo(() => {
		return [...projects, ...legacyProjects];
	}, []);

	const isValidProject = useMemo(() => {
		return validProjects.some(
			(project) => project.repositoryName.toLowerCase() === repositoryName.toLowerCase()
		);
	}, [validProjects, repositoryName]);

	const project = useMemo(() => {
		return validProjects.find(
			(project) => project.repositoryName.toLowerCase() === repositoryName.toLowerCase()
		);
	}, [validProjects, repositoryName]);

	useTitle(`${project?.title} Commits`);

	// Check if the repositoryName is a valid project
	useEffect(() => {
		if (!isValidProject) {
			// Navigate back to projects page if the project is not valid
			navigate('/projects');
		}
	}, [isValidProject, navigate]);

	const { data, isLoading, isFetching, isError, hasNextPage, isInitialLoading, fetchNextPage } =
		useInfiniteQuery({
			queryKey: [project?.repositoryName],
			queryFn: (params) => getProjectCommits(params),
			getNextPageParam: (lastPage, _) => {
				return lastPage?.linkHeader?.match(nextCommitsPagePattern)?.[0];
			},
			staleTime: 1000 * 60 * 10, // 10 minutes
			refetchInterval: 1000 * 60 * 10, // 10 minutes
		});

	const getProjectCommits = async ({
		pageParam = `https://api.github.com/repos/0mppula/${project?.repositoryName}/commits`,
	}) => {
		if (!isValidProject) return null;

		const response = await axios.get(pageParam);

		const linkHeader = response.headers.link;

		return { data: response.data, linkHeader };
	};

	// Group commits by date in a nested array.
	const groupedCommits = useMemo(() => {
		if (!data) return [];

		const commits = data.pages.flatMap((page) => page.data);

		const grouped = commits.reduce((acc, commit) => {
			const date = new Date(commit.commit.author.date).toDateString();

			if (!acc[date]) {
				acc[date] = [];
			}

			acc[date].push(commit);

			return acc;
		}, {});

		return Object.values(grouped);
	}, [data]);

	return (
		<div className="container">
			<div className="content-container">
				<div className="content-header">
					<h1>{project?.title} / Commits</h1>
					<div className="header-underline"></div>
				</div>

				<div style={{ alignSelf: 'flex-start' }}>
					<Link
						className="btn"
						to="/projects"
						aria-label="Navigate back to the projects page"
					>
						<span aria-hidden>⬅ Projects</span>
					</Link>
				</div>

				<div className="commit-container">
					{isLoading ? (
						<ProjectCommitItemSkeletons />
					) : (
						<>
							{groupedCommits.map((commits, i) => {
								const date = new Date(commits[0].commit.author.date).toDateString();

								return (
									<div key={i}>
										<div>
											{i === 0 ? null : <span />}

											<div>
												<FaCodeCommit size={28} />
												<h2>Commits on {format(date, 'MMM dd, yyyy')}</h2>
											</div>
											<span />
										</div>

										<ul className="card">
											{commits.map((commit, i) => {
												return (
													<Fragment key={commit.commit.author.date}>
														<ProjectCommitItem
															project={project}
															commit={commit}
														/>

														{i === commits.length - 1 ? null : <hr />}
													</Fragment>
												);
											})}
										</ul>
									</div>
								);
							})}
						</>
					)}

					{isError && <p>Something went wrong...</p>}
				</div>

				{hasNextPage && (
					<button
						className="btn"
						type="button"
						onClick={fetchNextPage}
						disabled={isFetching || isLoading}
					>
						{isFetching && !isInitialLoading ? (
							<span>Loading...</span>
						) : (
							<span>Load more commits</span>
						)}
					</button>
				)}
			</div>
		</div>
	);
};

export default ProjectCommits;
