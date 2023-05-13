import React, { useEffect } from 'react';

import cv from '../data/omar-kraidié-cv.pdf';
import { useTitle } from '../hooks/useTitle';

const CV = () => {
	useTitle('CV');

	useEffect(() => {
		window.location.href = cv;
		document.title = `Omar Kraidié - CV`;
	}, []);

	return <div className="container" />;
};

export default CV;
