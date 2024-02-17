const ProjectCommitItemSkeletons = () => {
	return (
		<div className="skeleton-container">
			{Array.from({ length: 3 }).map((_, i) => (
				<div key={`skeleton-${i}`} className="skeleton-container">
					{/* Commit header */}
					<div className="skeleton commits-list-header-skeleton" />

					{/* 3 Commits list */}
					<div className="skeleton commits-list-skeleton" />
				</div>
			))}
		</div>
	);
};

export default ProjectCommitItemSkeletons;
