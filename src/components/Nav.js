import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const links = ['home', 'projects', 'about'];

const Nav = () => {
	const [sideNav, setSideNav] = useState(false);
	const { pathname } = useLocation();

	useEffect(() => {
		setSideNav(false);
	}, [pathname]);

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	const handleWindowResize = () => {
		const w = window.innerWidth;
		if (w > 800) {
			setSideNav(false);
		}
	};

	const handleNavClick = () => {
		setSideNav(!sideNav);
	};

	return (
		<div className="navbar">
			<div className="nav-header">
				<span>
					<a href="/">OMAR KRAIDIÈ</a>
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
							onBlur={(e) => {
								!window.document.hasFocus() && e.preventDefault();
							}}
						>
							{link}
						</NavLink>
					</li>
				))}
			</ul>

			<div className={`burger ${sideNav ? 'burger-active' : ''}`} onClick={handleNavClick}>
				<div className="line-1" />
				<div className="line-2" />
				<div className="line-3" />
			</div>
		</div>
	);
};

export default Nav;
