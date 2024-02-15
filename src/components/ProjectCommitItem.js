import { formatDistance } from 'date-fns';
import React, { useCallback, useEffect, useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import { FaCheck, FaCode } from 'react-icons/fa6';
import { Tooltip } from 'react-tooltip';

const ProjectCommitItem = ({ commit, project }) => {
	const [showCopied, setshowCopied] = useState(false);

	useEffect(() => {
		if (showCopied) {
			const timeout = setTimeout(() => {
				setshowCopied(false);
			}, 2000);

			return () => clearTimeout(timeout);
		}
	}, [showCopied]);

	const handleCopy = useCallback((sha) => {
		navigator.clipboard.writeText(sha);
		setshowCopied(true);
	}, []);

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

					<button
						data-tooltip-id={commit.sha}
						data-tooltip-content={`Copy full SHA for ${commit.sha.slice(0, 7)}`}
						className="btn icon-btn"
						onClick={() => handleCopy(commit.sha)}
						aria-label={`Copy full SHA for ${commit.sha.slice(0, 7)}`}
					>
						{showCopied ? <FaCheck size={16} /> : <FaCopy size={16} />}
					</button>

					<Tooltip id={commit.sha} delayShow={300} />

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
