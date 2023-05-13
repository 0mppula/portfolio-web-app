import React from 'react';
import { Link } from 'react-router-dom';

import Frame from '../components/Frame';
import { useTitle } from '../hooks/useTitle';

const Home = () => {
	useTitle('home');
	return (
		<div className="hero-container">
			<div className="greet-card">
				<h1>
					<span>Hello,</span>
					<span>I'm Omar</span>
				</h1>

				<div className="greet-bottom">
					<div className="greet-info">
						<p>
							I'm a full stack JavaScript software engineer from Finland. I like
							developing cool and useful software by leveraging modern technologies!
							👨🏼‍💻🤓
							<br />
							<br />
							Feel free to view some of my projects and take a look at my CV by
							clicking the buttons below.
						</p>
						<Frame />
					</div>

					<div className="greet-buttons">
						<Link to="/projects" type="button" className="btn">
							Projects
						</Link>

						<Link to="/cv" target="_blank" rel="noopener" type="button" className="btn">
							CV (.PDF)
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
