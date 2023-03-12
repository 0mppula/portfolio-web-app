import React from 'react';

import placeHolderInfo from '../utils/placeholderInfo';
import Frame from '../components/Frame';

const ProjectItem = ({ project, index, thumbnail }) => {
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
		<div id={index + 1} className="project-item">
			<a
				href={`${project.url}`}
				className="project-image"
				onMouseOver={mouseoverImage}
				onMouseOut={mouseoutImage}
				target="_blank"
				rel="noreferrer"
			>
				<img src={thumbnail} alt="project-background" />
				<div className="hover" />
				<div id="index" className={`index ${(index + 1) % 2 === 0 ? 'right' : 'left'}`}>
					{index + 1}
				</div>
			</a>

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
	);
};

export default ProjectItem;
