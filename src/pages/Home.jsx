import React from 'react';
import { Link } from 'react-router-dom';

import { FaEnvelope } from 'react-icons/fa';
import Frame from '../components/Frame';
import { useTitle } from '../hooks/useTitle';

const Home = () => {
	useTitle('home');
	return (
		<div className="hero-container">
			<div className="greet-card">
				<h1>
					<span>Hello 👋🏼,</span>
					<span>I'm Omar</span>
				</h1>

				<div className="greet-bottom">
					<div className="greet-info">
						<p>
							I'm a full-stack software engineer based in Finland. I like developing
							cool and useful software by leveraging modern technologies!
						</p>

						<p>
							Feel free to view some of my showcased projects and their code.
							Additionally, you can take a look at my CV or reach out to me via email
							by clicking the buttons below.
						</p>
						<Frame />
					</div>

					<div className="greet-buttons">
						<Link to="/projects" type="button" className="btn" aria-label="projects">
							Projects
						</Link>

						<Link
							to="/cv"
							target="_blank"
							rel="noreferrer"
							type="button"
							className="btn"
							aria-label="CV"
						>
							CV (.PDF)
						</Link>

						<a
							href="mailto:devomarkraidie@gmail.com"
							target="_blank"
							rel="noreferrer"
							type="button"
							className="btn"
							aria-label="Email"
							title="Send me an email!"
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								fontSize: '1.375rem',
							}}
						>
							<FaEnvelope className="icon" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
