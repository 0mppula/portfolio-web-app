import React, { useEffect } from 'react';

import cv from '../data/omar-kraidié-cv.pdf';
import { useTitle } from '../hooks/useTitle';

const CV = () => {
	useTitle('CV');

	useEffect(() => {
		window.location.href = cv;
		document.title = `Omar Kraidié - CV`;
	}, []);

	return (
		<div style={{ opacity: 0 }} className="container">
			<div className="content-container">
				<div className="content-header">
					<h1>Omar Kraidié</h1>
					<div className="header-underline"></div>
				</div>

				<div className="project-items">
					<p>
						<a href="https://github.com/0mppula">github.com/0mppula</a> |{' '}
						<a href="https://omarkraidie.com/projects">
							omarkraidie.com/projects (portfolio)
						</a>{' '}
						| <a href="mailto:omarkraidie1996@gmail.com">omarkraidie1996@gmail.com</a>
					</p>

					<h2>Skills</h2>

					<p>
						<b>Languages</b>: JavaScript, TypeScript, Python, CSS, HTML, C#, SQL, Visual
						Basic,
					</p>

					<p>
						<b>Technologies</b>: React, MongoDB, Redux, Node, Express, Sass, MUI, Git,
						NumPy, Meteor.js, MySQL,
					</p>

					<p>
						<b>Linguistics</b>: Finnish (<i>native</i>), English (<i>fluent</i>), Arabic
						(<i>adequate</i>), Swedish (<i>basics</i>)
					</p>

					<p>&nbsp;</p>

					<h2>Professional Experience</h2>

					<p>
						twoday Finland <span>Tampere, Finland, Oct 2022 – Present</span>
					</p>

					<p>IT Services & Consulting Company</p>

					<p>
						Developed the frontend of epics, provided expert consulting services,
						debugged client issued bugs.
					</p>

					<p>&nbsp;</p>

					<p>
						Ovio CarBook Oy <span>Lahti, Finland, May 2022 – Sep 2022</span>
					</p>

					<p>Vehicle maintenance SaaS Company</p>

					<p>
						Developed & maintained the company's web-application using React and Django.
					</p>

					<p>&nbsp;</p>

					<p>
						Tavata Global Oy <span>Lahti, Finland, Aug 2021 – Nov 2022</span>
					</p>

					<p>Event & networking Company</p>

					<p>
						Built the front & backend of components used by thousands of users from
						scratch with React.
					</p>

					<p>
						Created an internal data analysis & automation tool with Python that
						substantially improves workflow.
					</p>

					<p>&nbsp;</p>

					<h2>Education</h2>

					<p>
						<b>LAB University – Bachelor's Degree Computer Science (GPA 4.88)</b>{' '}
						<span>Jan 2021 – Present</span>
					</p>

					<p>
						<b>Salpaus – Undergraduate Degree Computer Science (GPA 4.93)</b>{' '}
						<span>Sep 2018 – Sep 2020</span>
					</p>

					<p>
						<b>Internships</b>: Tavata Global Oy <span>Aug 2021 – Dec 2021</span>
					</p>

					<p>
						<b>Courses</b>: Web development, MERN, React.js, Data analysis, Objects &
						databases, Artificial intelligence
					</p>

					<p>
						<b>Tech Books</b>: You Don't Know JS 1-6, Clean Code, You Don't Know JS Yet
						1-2 and more...{' '}
						<a href="https://www.goodreads.com/review/list/135003326-0mppu?order=d&amp;ref=nav_mybooks&shelf=programming&sort=date_read">
							see full list
						</a>
					</p>
					<p>&nbsp;</p>

					<h2>Projects</h2>

					<p>
						<a href="https://www.koronkorko.com/">
							<b>KoronKorko</b>
						</a>
						Finance app offering user auth and various saveable financial calculators.
					</p>

					<p>
						<a href="https://bookstackr.netlify.app/">
							<b>BookStackr</b>
						</a>
						Comprehensive book tracker with secure Firebase Google authentication.
					</p>

					<p>
						<a href="https://wsb-tickers.netlify.app/">
							<b>WSB-Tickers</b>
						</a>
						Displays the top 50 stocks on reddit/r/wallstreetbets/ on a given date.
					</p>

					<p>
						<a href="https://coincaps.netlify.app/">
							<b>CoinCaps</b>
						</a>
						Cryptocurrency dashboard with currency and dark/light mode selection.
					</p>

					<h2>Interests</h2>

					<p>
						UX – UI – MERN Stack – Personal Development – Reading – Learning – Finance –
						Economics – Business – Science
					</p>
				</div>
			</div>
		</div>
	);
};

export default CV;
