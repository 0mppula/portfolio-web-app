import React, { useEffect } from 'react';

import cv from '../data/omar-kraidié-cv.pdf';
import { useTitle } from '../hooks/useTitle';

const CV = () => {
	useTitle('CV');

	useEffect(() => {
		window.location.href = cv;
		document.title = `Omar Kraidié - CV`;
	}, []);

	return (
		<div style={{ opacity: 0 }} className="container">
			<div className="content-container">
				<div className="content-header">
					<h1>Omar Kraidié - CV</h1>
					<div className="header-underline" />
				</div>
			</div>
		</div>
	);
};

export default CV;
