import React from 'react';

import placeHolderInfo from '../utils/placeholderInfo';
import Frame from '../components/Frame';
import getTechnologyIcon from '../utils/getTechnologyIcon';

const ProjectItem = ({ project, index, thumbnail }) => {
	return (
		<div id={index + 1} className="project-item">
			<a
				href={`${project.liveUrl || project.codeUrl}`}
				className="project-image"
				target="_blank"
				rel="noreferrer"
			>
				<img src={thumbnail} alt={`${project.title} mock`} loading="lazy" />

				<div className="index">{index + 1}</div>
			</a>

			<div className="project-text">
				<div className="project-header">
					<h2>{project.title}</h2>

					<div className="project-tech-icons">
						{project.technologies.map((technology) => (
							<span key={technology} alt={technology} title={technology}>
								{getTechnologyIcon(technology)}
							</span>
						))}
					</div>
				</div>

				<div className="project-content">
					<p>{project.info || placeHolderInfo}</p>

					<div className="project-button-container">
						{project.liveUrl && <button className="btn">Live Site</button>}
						{project.codeUrl && <button className="btn">Source Code</button>}
					</div>
					<Frame />
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
