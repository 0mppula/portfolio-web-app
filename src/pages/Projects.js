import React from 'react';
import ProjectItem from '../components/ProjectItem';

import projects from '../data/projects.json';
import projectThumbnails from '../data/project-thumbnails';
import { useTitle } from '../hooks/useTitle';

const Projects = () => {
	useTitle('Projects');

	const getProjectThumbnail = (project) => {
		return projectThumbnails[project?.repositoryName] || projectThumbnails['placeholder'];
	};

	return (
		<div className="container">
			<div className="content-container">
				<div className="content-header">
					<h1>Some of My Projects</h1>
					<div className="header-underline"></div>
				</div>

				<div className="project-items">
					{projects.map((project, index) => (
						<ProjectItem
							key={`${project}-${index}`}
							project={project}
							thumbnail={getProjectThumbnail(project)}
							index={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
