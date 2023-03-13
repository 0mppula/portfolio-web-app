import React from 'react';

import Frame from '../components/Frame';
import { useTitle } from '../hooks/useTitle';
import aboutImg from '../images/about_image.jpg';

const About = () => {
	useTitle('About');

	return (
		<div className="container">
			<div className="content-container">
				<div className="content-header">
					<h1>A Little About Me</h1>
					<div className="header-underline"></div>
				</div>

				<div className="about-content">
					<div className="about-image">
						<img src={aboutImg} alt="about_me_image" />
					</div>
					<div className="about-text">
						<h2>Software Engineering</h2>
						<div className="about-info">
							<div>
								<p>
									My name is <b>Omar Kraidié</b>
									. I'm a third year software engineering student currently
									studying in LAB University of Applied Sciences in Lahti!
									<br />
									<br />I like to create useful software that can be leveraged in
									everyday applications. Furthermore, I'm enthusiastic about
									learning how to use new technologies and finding efficient ways
									of implementing modern design patterns. In short, if you have a
									software problem that needs to be resolved I <b>will</b> develop
									the perfect and sustainable solution for you.
									<br />
									<br />
									In addition to coding, I'm interested in investing, economics,
									artificial intelligence and personal development.
									<br />
									<br />
									If you're interested, here's a full list of the{' '}
									<a
										href="https://www.goodreads.com/review/list/135003326-0mppu?ref=nav_mybooks&shelf=programming"
										target="_blank"
										rel="noreferrer"
										className="link"
									>
										tech books
									</a>{' '}
									that I've read.
								</p>
							</div>

							<div>
								<h3>Career Milestones</h3>
								<ul>
									<li>
										<b>Q3 2019</b> Wrote my first Hello World! web-app. 🌍
									</li>
									<li>
										<b>Q1 2020</b> Decided to pursue software engineering as a
										full-time career. 💡
									</li>
									<li>
										<b>Q3 2020</b> Developed my first projects with HTML, CSS &
										JavaScript. 👨🏼‍💻
									</li>
									<li>
										<b>Q1 2021</b> Started a Bachelor's degree in Computer
										Science. 🏫
									</li>
									<li>
										<b>Q2 2021</b> Started learning Python & data science. 📊
									</li>
									<li>
										<b>Q3 2021</b> Began internship at Tavata Global Oy
										(web-development). 💻
									</li>
									<li>
										<b>Q1 2022</b> Started a part-time web developer role at
										Tavata Global Oy. 💻
									</li>
									<li>
										<b>Q2 2022</b> Started a part-time web developer role at
										Ovio Carbook Oy. 💻
									</li>
									<li>
										<b>Q4 2022</b> Started a full-time web developer role at
										twoday Finland. 💻
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
