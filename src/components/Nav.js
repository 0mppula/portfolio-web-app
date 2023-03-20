import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const links = ['home', 'projects', 'about'];

const Nav = () => {
	const [sideNav, setSideNav] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);

		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	const handleWindowResize = () => {
		const w = window.innerWidth;
		if (w > 800) {
			setSideNav(false);
		}
	};

	const handleLinkFocus = (e) => {
		if (e.target.tagName === 'A' && !sideNav) {
			let link = e.target.children[0];
			link.classList.toggle('mouseover-links', true);
			link.classList.toggle('mouseout-links', false);
		}
	};

	const handleLinkBlur = (e) => {
		if (e.target.tagName === 'A' && !sideNav) {
			let link = e.target.children[0];
			link.classList.toggle('mouseover-links', false);
			link.classList.toggle('mouseout-links', true);
		}
	};

	const handleNavClick = () => {
		setSideNav(!sideNav);
	};

	const handleLinkClick = () => {
		setSideNav(false);
	};

	return (
		<div className="navbar">
			<div className="nav-header">
				<span>
					<a href="./index.html">omar kraidié</a>
				</span>
			</div>

			<ul className={`nav-links ${sideNav ? 'nav-links-active' : ''}`}>
				{links.map((link, index) => (
					<li
						key={link}
						style={{
							animation: sideNav
								? `fade-nav-links 0.3s ease forwards ${index / 7 + 0.1}s`
								: '',
						}}
					>
						<NavLink
							className="list-item"
							to={`/${link === 'home' ? '' : link}`}
							onClick={() => handleLinkClick(link)}
							onMouseEnter={(e) => handleLinkFocus(e)}
							onMouseLeave={(e) => handleLinkBlur(e)}
						>
							{link} <span className="underline" />
						</NavLink>
					</li>
				))}
			</ul>

			<div className={`burger ${sideNav ? 'burger-active' : ''}`} onClick={handleNavClick}>
				<div className="line-1"></div>
				<div className="line-2"></div>
				<div className="line-3"></div>
			</div>
		</div>
	);
};

export default Nav;
