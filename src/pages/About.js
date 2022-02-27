import React from 'react';
import Frame from '../components/Frame';

import aboutImg from '../images/about_image.jpg'


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
								My name is Omar Kraidié. I'm a software engineering student
								currently studying in LAB University of Applied Sciences in Lahti!
							</p>
							<p>
								I wrote my first hello world app with HTML & CSS in 2019 when it was
								introduced to me in an introductionary undergraduate programming
								course.
							</p>
							<p>
								I Started seariously pursuing my coding career in early 2020 on my
								last year of undergrad school. By self-learning more complex HTML &
								CSS, and quickly advancing to JavaScript which is my favourite
								programming language 🙂.
							</p>
							<p>
								In 2021 after learning the ropes with JS, and creating a few
								projects with the language. I started my Bachelor's degree in
								Computer Science at my local University LAB.
							</p>
							<p>
								On January 2022, after my internship I got my first web-dev job at
								Tavata Global Oy.
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
