import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import cv from '../data/omar-kraidié-cv.pdf';
import { useTitle } from '../hooks/useTitle';

const CV = () => {
	const [timeout, setIsTimeout] = useState(false);
	useTitle('CV');

	useEffect(() => {
		window.location.href = cv;
		document.title = `Omar Kraidié - CV`;

		const timer = setTimeout(() => {
			setIsTimeout(true);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="container">
			<div className="content-container">
				{timeout && (
					<p>
						If you don't see the CV, please try{' '}
						<Link to="/cv" onClick={() => window.location.reload()}>
							refreshing the page
						</Link>
						.
					</p>
				)}
			</div>
		</div>
	);
};

export default CV;
