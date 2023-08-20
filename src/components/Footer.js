import React from 'react';
import { FaEnvelope, FaGithub, FaGoodreads, FaLinkedin } from 'react-icons/fa';

const year = new Date().getFullYear().toString();

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

			<div>
				<p>Developed by Omar Kraidié.</p>
				<p>
					Copyright{' '}
					<span id="copyright" className="copyright">
						{`${year}©`}
					</span>{' '}
					Lahti, Finland. All Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
