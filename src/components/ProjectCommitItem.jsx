import { formatDistance } from 'date-fns';
import React from 'react';
import { FaCode } from 'react-icons/fa6';
import { Tooltip } from 'react-tooltip';

const ProjectCommitItem = ({ commit, project }) => {
	return (
		<li>
			{/* Commit message */}
			<h3>
				<a href={commit.html_url} target="_blank" rel="noreferrer">
					{commit.commit.message}
				</a>
			</h3>

			<div>
				{/* Commit author & distance */}
				<div>
					<a href={commit.author.html_url} target="_blank" rel="noreferrer">
						<img
							src={commit.author.avatar_url}
							alt="Avatar of the author of the commit"
						/>
					</a>

					<div>
						<a href={commit.author.html_url} target="_blank" rel="noreferrer">
							{commit.author.login}
						</a>

						<span>committed</span>

						<span>
							{formatDistance(new Date(commit.commit.author.date), new Date(), {
								addSuffix: true,
							})}
						</span>
					</div>
				</div>

				{/* Commit details & repository at that point */}
				<div>
					<a
						data-tooltip-id={commit.html_url}
						data-tooltip-content="View commit details"
						className="btn"
						href={commit.html_url}
						target="_blank"
						rel="noreferrer"
						aria-label="View commit details on GitHub"
					>
						{commit.sha.slice(0, 7)}
					</a>

					<Tooltip id={commit.html_url} delayShow={300} />

					<a
						data-tooltip-id={`https://github.com/0mppula/${project?.repositoryName}/tree/${commit.sha}`}
						data-tooltip-content="View repository at this commit"
						className="btn icon-btn"
						href={`https://github.com/0mppula/${project?.repositoryName}/tree/${commit.sha}`}
						target="_blank"
						rel="noreferrer"
						aria-label="View repository at this commit on GitHub"
					>
						<FaCode size={18} />
					</a>

					<Tooltip
						id={`https://github.com/0mppula/${project?.repositoryName}/tree/${commit.sha}`}
						delayShow={300}
					/>
				</div>
			</div>
		</li>
	);
};

export default ProjectCommitItem;
