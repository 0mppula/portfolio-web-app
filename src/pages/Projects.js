import React from 'react';
import Frame from '../components/Frame';

import projects from '../data/projects.json';
import placeHolderInfo from '../utils/placeholderInfo';
import projectImg from '../images/project_bg.jpg';

const Projects = () => {
	const mouseoverImage = (e) => {
		if (e.target.classList.contains('hover')) {
			let image = e.target;
			image.classList.toggle('active', true);
		}
	};

	const mouseoutImage = (e) => {
		if (e.target.classList.contains('hover')) {
			let image = e.target;
			image.classList.toggle('active', false);
		}
	};

	const redirectProjectUrl = (e) => {
		if (e.target.classList.contains('hover')) {
			let id = e.target.parentElement.parentElement.id;
			window.open(`${projects[id - 1].url}`, '_blank');
		}
	};

	const printTools = (projectTools) => {
		let tools = [...projectTools];

		tools.sort();
		if (tools.length === 1) {
			tools = tools[0]; // 1 tool
		} else if (tools.length === 2) {
			tools = `${tools[0]} & ${tools[1]}`; // 2 tools
		} else {
			tools = tools.join(', '); // >2 tools
		}

		return tools;
	};

	return (
		<div className="container">
			<div className="content-container">
				<div className="content-header">
					<h1>here are some of my projects</h1>
					<div className="header-underline"></div>
				</div>

				<div className="project-items">
					{projects.map((project, index) => (
						<div key={`project-${index + 1}`} id={index + 1} className="project-item">
							<div className="project-image" onClick={redirectProjectUrl} >
								<img src={projectImg} alt="project-background" />
								<div className="hover"></div>
								<div
									id="index"
									className={`index ${(index + 1) % 2 === 0 ? 'right' : 'left'}`}
								>
									{index + 1}
								</div>
							</div>
							<div className="project-text">
								<div className="project-header">
									<h2>{project.title}</h2>
									<h3>{printTools(project.tools)}</h3>
								</div>
								<div className="project-content">
									<p>{project.info || placeHolderInfo}</p>
									<Frame />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
