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
							<p>
								My name is <b>Omar <span className="secondary-color">Kraidié</span></b>. I'm a 2'nd year software engineering student
								currently studying in LAB University of Applied Sciences in Lahti!
							</p>
							<p>
								I wrote my first hello world app with HTML & CSS in 2019 when
								programming was first introduced to me in an introductionary
								programming course in vocational school.
							</p>
							<p>
								I Started seariously pursuing my coding career in early 2020 on my
								last year of IT-vocational school. I began with self-learning more
								complex HTML & CSS, and quickly advancing to JavaScript which is my
								favourite programming language today 🙂.
							</p>
							<p>
								In 2021 after learning the ropes with JS, and creating a few
								projects with the language. I started my Bachelor's degree in
								Computer Science at my local University LAB.
							</p>
							<p>
								On January 2022, after my 4 month long web-dev internship role at my
								local start-up Tavata Global Oy, I got my first <b>real</b> part-time web-dev job at the
								company.
							</p>
							<Frame />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
