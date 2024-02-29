import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import Frame from '../components/Frame';
import getTechnologyIcon from '../utils/getTechnologyIcon';
import placeHolderInfo from '../utils/placeholderInfo';

const ProjectItem = ({ project, index, thumbnail }) => {
	return (
		<section
			id={project.repositoryName.toLowerCase()}
			className={`project-item ${index % 2 !== 0 ? 'row-reverse' : ''} `}
		>
			<a
				href={`${project.liveUrl || project.codeUrl}`}
				className="project-image"
				target="_blank"
				rel="noreferrer"
				tabIndex={-1}
			>
				<img src={thumbnail} alt={`${project.title} mock`} loading="lazy" />

				<div className="index">#{index + 1}</div>
			</a>

			<div className="project-text">
				<div className="project-header">
					<h3>
						{project.title} {project.new && <span className="new">New!</span>}
					</h3>
					<div className="project-tech-icons">
						{project.technologies.sort().map((technology) => (
							<React.Fragment key={technology}>
								<span
									data-tooltip-id={`${technology}-tooltip`}
									data-tooltip-content={technology}
								>
									{getTechnologyIcon(technology)}
								</span>

								<Tooltip id={`${technology}-tooltip`} />
							</React.Fragment>
						))}
					</div>
				</div>

				<div className="project-body">
					<div className="project-content">
						<p>{project.info || placeHolderInfo}</p>
						<Frame />
					</div>

					<div className="project-button-container">
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								type="button"
								className="btn"
								target="_blank"
								rel="noreferrer"
							>
								Website
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
								Code
							</a>
						)}

						{project.codeUrl && (
							<Link
								href={project.repositoryName}
								className="btn"
								to={`${project.repositoryName}`}
								aria-label="Navigate back to the projects page"
							>
								Commits
							</Link>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectItem;
