import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Frame from '../components/Frame';
import { useTitle } from '../hooks/useTitle';
import hero from '../images/hero.png';

const Home = () => {
	useTitle('home');
	return (
		<div className="hero-container">
			<div>
				<div className="secondary-avatar">
					<img src={hero} alt="Omar Kraidié"></img>
				</div>

				<h1>Fullstack Developer, Omar Kraidié 👋🏼</h1>

				<div>
					{/* Greet card */}
					<div className="greet-card">
						<div>
							<p>
								I'm a fullstack developer based in Finland. I like developing cool
								and useful software by leveraging modern technologies!
							</p>

							<p>
								Feel free to view some of my showcased projects and their code.
								Additionally, you can take a look at my CV or reach out to me via
								email by clicking the buttons below.
							</p>
							<Frame />
						</div>

						<div className="greet-buttons">
							<Link
								to="/projects"
								type="button"
								className="btn"
								aria-label="projects"
							>
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

						<div className="greet-card-stars">
							<div>
								{[...Array.from({ length: 5 })].map((_, i) => (
									<img key={i} src="" alt="" />
								))}
							</div>

							<p>Github Stargazers</p>
						</div>
					</div>
				</div>
			</div>

			<img src={hero} alt="Omar Kraidié" />
		</div>
	);
};

export default Home;
