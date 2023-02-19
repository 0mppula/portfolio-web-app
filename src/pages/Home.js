import React from 'react';
import { Link } from 'react-router-dom';

import cv from '../data/omar-kraidié-cv.pdf';
import Frame from '../components/Frame';
import { useTitle } from '../hooks/useTitle';

const Home = () => {
	useTitle('home');
	return (
		<div className="hero-container">
			<div className="greet-card">
				<h1 id="greet-txt">hello there,</h1>
				<h1 id="greet-txt">my name is</h1>
				<h1 id="greet-txt">
					<span className="secondary-color"> omar</span>
				</h1>
				<div className="greet-bottom">
					<div className="greet-info">
						<p>
							I'm a third year software engineering student currently studying in LAB
							University of Applied Sciences in Lahti.
							<br />
							<br />
							Feel free to view some of my projects and take a look at my CV by
							clicking the buttons below.
						</p>
						<Frame />
					</div>
					<Link to="/projects" type="button" className="greet-btn btn">
						Projects
					</Link>
					<a
						type="button"
						className="cv-btn btn"
						target="_blank"
						rel="noreferrer"
						href={cv}
					>
						CV (.PDF)
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
