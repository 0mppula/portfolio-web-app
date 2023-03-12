import React from 'react';

import placeHolderInfo from '../utils/placeholderInfo';
import Frame from '../components/Frame';
import getProjectTechnologyIcons from '../utils/getProjectTechnologyIcons';

const ProjectItem = ({ project, index, thumbnail }) => {
	return (
		<div id={index + 1} className="project-item">
			<a href={`${project.url}`} className="project-image" target="_blank" rel="noreferrer">
				<img src={thumbnail} alt={`${project.title} mock image`} loading="lazy" />

				<div className="index">{index + 1}</div>
			</a>

			<div className="project-text">
				<div className="project-header">
					<h2>{project.title}</h2>

					<div className="project-tech-icons">
						{getProjectTechnologyIcons(project).map((icon) => (
							<span
								key={icon.technology}
								alt={icon.technology}
								title={icon.technology}
							>
								{icon.component}
							</span>
						))}
					</div>
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
