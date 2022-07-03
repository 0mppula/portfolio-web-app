import React from 'react';
import Frame from '../components/Frame';

import aboutImg from '../images/about_image.jpg';

const About = () => {
	return (
		<div className="container">
			<div className="content-container">
				<div className="content-header">
					<h1>a little about me</h1>
					<div className="header-underline"></div>
				</div>

				<div className="about-content">
					<div className="about-image">
						<img src={aboutImg} alt="about_me_image" />
					</div>
					<div className="about-text">
						<h1>Software Engineering</h1>
						<div className="about-info">
							<div>
								<p>
									My name is{' '}
									<b>
										Omar <span className="secondary-color">Kraidié</span>
									</b>
									. I'm a second year software engineering student currently
									studying in LAB University of Applied Sciences in Lahti!
								</p>
							</div>
							
							<div>
								<p>Milestones</p>
								<ul>
									<li>
										<b>Q3 2019</b> Wrote my first Hello World! web-app.
									</li>
									<li>
										<b>Q1 2020</b> Decided to seariously pursue software
										engineering as a full-time career.
									</li>
									<li>
										<b>Q4 2020</b> Developed first my couple of projects with
										HTML, CSS & JavaScript.
									</li>
									<li>
										<b>Q1 2021</b> Started Bachelor's degree in Computer Science
										at my local University LAB.
									</li>
									<li>
										<b>Q2 2021</b> Decided to start learning Python & use it as
										my <b>secondary</b> programming language.
									</li>
									<li>
										<b>Q3 2021</b> Began internship at Tavata Global Oy
										(web-development).
									</li>
									<li>
										<b>Q1 2022</b> Started first <b>real</b> part-time web-dev
										job at Tavata Global Oy.
									</li>
									<li>
										<b>Q2 2022</b> Started <b>second</b> part-time web-dev job
										at Ovio Carbook Oy.
									</li>
								</ul>

								<Frame />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
