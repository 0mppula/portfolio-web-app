import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const links = ['home', 'projects', 'about'];

const Nav = () => {
	const [sideNav, setSideNav] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
		window.addEventListener('focus', dontLinkFocusOnWindowFocus);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
			window.removeEventListener('focus', dontLinkFocusOnWindowFocus);
		};
	}, []);

	const handleWindowResize = () => {
		const w = window.innerWidth;
		if (w > 800) {
			setSideNav(false);
		}
	};

	const dontLinkFocusOnWindowFocus = () => {
		document.getElementById('focus-handler').focus();
	};

	const handleLinkFocus = (e) => {
		if (e.target.tagName === 'A' && !sideNav) {
			let link = e.target.children[0];
			link.classList.toggle('mouseover-links', true);
			link.classList.toggle('mouseout-links', false);
		}
	};

	const handleLinkBlur = (e) => {
		const isFocused = document.activeElement === e.target && window.document.hasFocus();
		const conditions = [e.target.tagName === 'A', !sideNav, !isFocused];

		if (conditions.every((condition) => condition === true)) {
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
					<a href="./index.html">OMAR KRAIDIÈ</a>
				</span>
			</div>

			<input
				tabIndex={-1}
				id="focus-handler"
				style={{ opacity: 0, height: 0, position: 'absolute' }}
			/>

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
							onMouseOver={(e) => handleLinkFocus(e)}
							onMouseOut={(e) => handleLinkBlur(e)}
							onFocusCapture={(e) => handleLinkFocus(e)}
							onBlurCapture={(e) => handleLinkBlur(e)}
							datatype={index}
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
