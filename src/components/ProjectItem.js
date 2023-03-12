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
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								type="button"
								className="btn"
								target="_blank"
								rel="noreferrer"
							>
								Live Site
							</a>
						)}
						{project.codeUrl && (
							<a
								href={project.codeUrl}
								type="button"
								className="btn"
								target="_blank"
								rel="noreferrer"
							>
								Source Code
							</a>
						)}
					</div>
					<Frame />
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
