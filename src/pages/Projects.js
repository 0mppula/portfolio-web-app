import React from 'react';
import ProjectItem from '../components/ProjectItem';

import projects from '../data/projects.json';
import { useTitle } from '../hooks/useTitle';

const Projects = () => {
	useTitle('Projects');
	return (
		<div className="container">
			<div className="content-container">
				<div className="content-header">
					<h1>some of my projects</h1>
					<div className="header-underline"></div>
				</div>

				<div className="project-items">
					{projects.map((project, index) => (
						<ProjectItem key={`${project}-${index}`} project={project} index={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
