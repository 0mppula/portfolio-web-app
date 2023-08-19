import React, { Fragment } from 'react';
import ProjectItem from '../components/ProjectItem';
import projectThumbnails from '../data/project-thumbnails';
import projects from '../data/projects.json';
import legacyProjects from '../data/legacy-projects.json';
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
					<h1>My Projects</h1>
					<div className="header-underline"></div>
				</div>

				<div className="project-items">
					{projects.map((project, index) => (
						<Fragment key={`${project}-${index}`}>
							<ProjectItem
								project={project}
								thumbnail={getProjectThumbnail(project)}
								index={index}
							/>

							{index !== projects.length - 1 && <hr />}
						</Fragment>
					))}
				</div>

				<div className="content-header">
					<h2>Legacy Projects</h2>
					<div className="header-underline"></div>
				</div>

				<div className="project-items">
					{legacyProjects.map((project, index) => (
						<Fragment key={`${project}-${index}`}>
							<ProjectItem
								project={project}
								thumbnail={getProjectThumbnail(project)}
								index={index}
							/>

							{index !== legacyProjects.length - 1 && <hr />}
						</Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
