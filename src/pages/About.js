import React from 'react';

import Frame from '../components/Frame';
import { useTitle } from '../hooks/useTitle';
import getTechnologyIcon from '../utils/getTechnologyIcon';

const technologies = [
	'JavaScript',
	'Redux Toolkit',
	'Styled Components',
	'React.js',
	'Css3',
	'Html5',
	'TypeScript',
	'Node.js',
	'Python',
	'MongoDB',
	'Express.js',
	'Firebase',
	'Sass',
	'Git',
	'Heroku',
	'Jest',
	'Netlify',
	'Numpy',
	'Pandas',
	'Github',
	'Gitlab',
	'Figma',
	'Adobephotoshop',
	'Meteor.js',
];

const About = () => {
	useTitle('About');

	return (
		<div className="container">
			<div className="content-container">
				<div className="content-header">
					<h1>A Little About Me</h1>
					<div className="header-underline"></div>
				</div>
			</div>

			<div className="about-content-container">
				<div className="about-content">
					<div className="about-image" />
				</div>

				<div className="about-content">
					<h2>Info</h2>
					<div>
						<p>
							My name is <b>Omar Kraidié</b>
							. I'm a third year software engineering student currently studying in
							LAB University of Applied Sciences in Lahti!
							<br />
							<br />I like to create useful software that can be leveraged in everyday
							applications. Furthermore, I'm enthusiastic about learning how to use
							new technologies and finding efficient ways of implementing modern
							design patterns. In short, if you have a software problem that needs to
							be resolved I <b>will</b> develop the perfect and sustainable solution
							for you.
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
						<Frame />
					</div>
				</div>

				<div className="about-content">
					<h2>Career Milestones</h2>
					<div>
						<ul>
							<li>
								<b>Q3 2019</b> Wrote my first Hello World! web-app. 🌍
							</li>
							<li>
								<b>Q1 2020</b> Decided to pursue software engineering as a full-time
								career. 💡
							</li>
							<li>
								<b>Q3 2020</b> Developed my first projects with HTML, CSS &
								JavaScript. 👨🏼‍💻
							</li>
							<li>
								<b>Q1 2021</b> Started a Bachelor's degree in Computer Science. 🏫
							</li>
							<li>
								<b>Q2 2021</b> Started learning Python & data science. 📊
							</li>
							<li>
								<b>Q3 2021</b> Began internship at Tavata Global Oy
								(web-development). 💻
							</li>
							<li>
								<b>Q1 2022</b> Started a part-time web developer role at Tavata
								Global Oy. 💻
							</li>
							<li>
								<b>Q2 2022</b> Started a part-time web developer role at Ovio
								Carbook Oy. 💻
							</li>
							<li>
								<b>Q4 2022</b> Started a full-time web developer role at twoday
								Finland. 💻
							</li>
						</ul>
						<Frame />
					</div>
				</div>

				<div className="about-content">
					<h2>My Tech Stack</h2>
					<div className="project-tech-icons">
						{[...technologies]
							.sort()
							.reverse()
							.map((technology) => (
								<span key={technology} alt={technology} title={technology}>
									{getTechnologyIcon(technology)}
								</span>
							))}
						<Frame />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
