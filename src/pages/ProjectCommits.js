import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import legacyProjects from '../data/legacy-projects.json';
import projects from '../data/projects.json';
import { useTitle } from '../hooks/useTitle';

const ProjectCommits = () => {
	const [cachedCommits, setCachedCommits] = useState([]);
	const queryClient = useQueryClient();
	const { repositoryName } = useParams();
	const navigate = useNavigate();
	const nextCommitsPagePattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;

	const validProjects = useMemo(() => {
		return [...projects, ...legacyProjects];
	}, [projects, legacyProjects]);

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
		console.log(!isValidProject);
		if (!isValidProject) {
			// Navigate back to projects page if the project is not valid
			navigate('/projects');
		}
	}, [isValidProject]);

	const { data, isLoading, isError } = useQuery({
		queryKey: [project?.repositoryName],
		queryFn: () => getProjectCommits(),
	});

	const getProjectCommits = async (
		url = `https://api.github.com/repos/0mppula/${project?.repositoryName}/commits`
	) => {
		if (!isValidProject) return null;

		const response = await axios.get(url);

		const linkHeader = response.headers.link;

		setCachedCommits((prevCommits) => [...prevCommits, ...response.data]);

		return { data: [...cachedCommits, ...response.data], linkHeader };
	};

	console.log(data?.data, isLoading, isError, data?.linkHeader);

	const handleFetchMoreCommits = () => {
		queryClient.fetchQuery([project?.repositoryName], () =>
			getProjectCommits(data?.linkHeader.match(nextCommitsPagePattern)[0])
		);
	};

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

					<button className="btn" onClick={handleFetchMoreCommits}>
						Get more commits
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCommits;
