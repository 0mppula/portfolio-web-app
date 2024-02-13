import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import legacyProjects from '../data/legacy-projects.json';
import projects from '../data/projects.json';
import { useTitle } from '../hooks/useTitle';
import { formatDistance, format } from 'date-fns';

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

	useTitle(project?.repositoryName);

	// Check if the repositoryName is a valid project
	useEffect(() => {
		if (!isValidProject) {
			// Navigate back to projects page if the project is not valid
			navigate('/projects');
		}
	}, [isValidProject, navigate]);

	const { data, isLoading, isFetching, isError, hasNextPage, fetchNextPage } = useInfiniteQuery({
		queryKey: [project?.repositoryName],
		queryFn: (params) => getProjectCommits(params),
		getNextPageParam: (lastPage, _) => {
			return lastPage?.linkHeader?.match(nextCommitsPagePattern)?.[0];
		},
		refetchOnWindowFocus: false,
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
					<h1>{project?.repositoryName} - Commits</h1>
					<div className="header-underline"></div>
				</div>

				<div
					style={{
						width: '100%',
						justifySelf: 'flex-start',
					}}
				>
					<Link
						className="btn"
						to="/projects"
						aria-label="Navigate back to the projects page"
					>
						<span aria-hidden>⬅ Projects</span>
					</Link>
				</div>

				<div className="commit-container">
					{groupedCommits.map((commits, index) => {
						const date = new Date(commits[0].commit.author.date).toDateString();

						return (
							<div
								key={index}
								style={{
									marginBottom: '2rem',
								}}
							>
								<h2
									style={{
										marginBottom: '2rem',
									}}
								>
									Commits on {format(date, 'MMM dd, yyyy')}
								</h2>

								<ul
									className="card"
									style={{
										listStyleType: 'none',
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									{commits.map((commit, index) => {
										return (
											<li
												key={commit.commit.author.date}
												style={{ padding: '1rem' }}
											>
												<div
													style={{
														gap: '1rem',
														display: 'flex',
														flexDirection: 'column',
													}}
												>
													<a
														href={commit.html_url}
														target="_blank"
														rel="noreferrer"
														style={{
															textDecoration: 'none',
															color: 'var(--text-color)',
														}}
													>
														<h3
															style={{
																fontSize: '1.25rem',
																lineHeight: '24px',
																margin: 0,
															}}
														>
															{commit.commit.message}
														</h3>
													</a>

													<div
														style={{
															gap: '1rem',
															display: 'flex',
															justifyContent: 'space-between',
														}}
													>
														<div
															style={{
																display: 'flex',
																alignItems: 'center',
																gap: '0.5rem',
															}}
														>
															<a
																href={commit.author.html_url}
																target="_blank"
																rel="noreferrer"
																style={{
																	display: 'flex',
																}}
															>
																<img
																	src={commit.author.avatar_url}
																	alt="Avatar of the author of the commit"
																	style={{
																		width: '32px',
																		height: '32px',
																		borderRadius: '50%',
																	}}
																/>
															</a>

															<div
																style={{
																	display: 'flex',
																	alignItems: 'center',
																}}
															>
																<a
																	href={commit.author.html_url}
																	target="_blank"
																	rel="noreferrer"
																>
																	{commit.author.login}
																</a>

																<span
																	style={{
																		paddingLeft: '0.25rem',
																	}}
																>
																	committed
																</span>

																<span
																	style={{
																		paddingLeft: '0.25rem',
																	}}
																>
																	{formatDistance(
																		new Date(
																			commit.commit.author.date
																		),
																		new Date(),
																		{
																			addSuffix: true,
																		}
																	)}
																</span>
															</div>
														</div>

														<div
															style={{
																display: 'flex',
																gap: '0.5rem',
															}}
														>
															{/* Repository at this point */}
															<a
																className="btn"
																href={commit.html_url}
																target="_blank"
																rel="noreferrer"
															>
																Commit details
															</a>

															<a
																className="btn"
																href={`https://github.com/0mppula/${project?.repositoryName}/tree/${commit.sha}`}
																target="_blank"
																rel="noreferrer"
															>
																Repository at this point
															</a>
														</div>
													</div>
												</div>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}

					{(isLoading || isFetching) && <p>Loading...</p>}

					{isError && <p>Something went wrong...</p>}
				</div>

				{hasNextPage && (
					<button
						className="btn"
						type="button"
						onClick={fetchNextPage}
						disabled={isFetching || isLoading}
					>
						Load more commits
					</button>
				)}
			</div>
		</div>
	);
};

export default ProjectCommits;
