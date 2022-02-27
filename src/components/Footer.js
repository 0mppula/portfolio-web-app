import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	const [year, setyear] = useState(new Date().getFullYear().toString());

	return (
		<div className="footer">
			<div className="footer-links">
				<a href="https://github.com/0mppula" target="_blank" rel="noreferrer">
					<FontAwesomeIcon className="footer-icon icon" icon={faGithub} />
				</a>
				<a href="https://www.linkedin.com/in/omar-kraidi%C3%A9-b7a8141a8/" target="_blank">
          <FontAwesomeIcon className="footer-icon icon" icon={faLinkedin} />
				</a>
				<a href="https://twitter.com/OmarKraidie" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="footer-icon icon" icon={faTwitter} />
				</a>
				<a href="https://www.youtube.com/channel/UCdpM1SUen7ZxX2owolyIGyQ" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="footer-icon icon" icon={faYoutube} />
				</a>
			</div>

			<div className="footer-text">
				<p>
					Copyright{' '}
					<span id="copyright" className="copyright">
						{`${year} ©`}
					</span>{' '}
					Lahti, Finland. All Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
