import React from 'react';
import { FaEnvelope, FaGithub, FaGoodreads, FaLinkedin } from 'react-icons/fa';

const year = new Date().getFullYear();

const FinnishFlag = ({ className }) => (
	<svg
		viewBox="0 0 18 11"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		className={className}
	>
		<rect width="18" height="11" fill="#FFFFFF" />
		<rect x="5" width="3" height="11" fill="#002F6C" />
		<rect y="4" width="18" height="3" fill="#002F6C" />
	</svg>
);

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-links">
				<a
					href="https://github.com/0mppula"
					target="_blank"
					rel="noreferrer"
					aria-label="Github"
				>
					<FaGithub className="footer-icon icon" />
				</a>

				<a
					href="mailto:devomarkraidie@gmail.com"
					target="_blank"
					rel="noreferrer"
					aria-label="Email"
				>
					<FaEnvelope className="footer-icon icon" />
				</a>

				<a
					href="https://www.linkedin.com/in/omarkraidie/"
					target="_blank"
					rel="noreferrer"
					aria-label="Linkedin"
				>
					<FaLinkedin className="footer-icon icon" />
				</a>

				<a
					href="https://www.goodreads.com/review/list/135003326-omar-kraidi?ref=nav_mybooks&shelf=read"
					target="_blank"
					rel="noreferrer"
					aria-label="Books that I have read"
				>
					<FaGoodreads className="footer-icon icon" />
				</a>
			</div>

			<div className="footer-text">
				<div className="footer-text-row">
					<p>
						Developed by{' '}
						<a
							className="footer-author"
							href="https://www.omarkraidie.com/"
							target="_blank"
							rel="noreferrer"
						>
							Omar Kraidié
						</a>
					</p>

					<span aria-hidden="true" className="footer-dot">
						·
					</span>

					<p className="footer-made-in">
						Made in Finland
						<FinnishFlag className="footer-flag" />
					</p>
				</div>

				<p>
					<span className="copyright">&copy; {year}</span>{' '}
					Kraidie&nbsp;Consulting&nbsp;Oy. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
