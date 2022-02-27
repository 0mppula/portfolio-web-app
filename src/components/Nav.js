import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ activePage, setActivePage }) => {
	const [sideNav, setSideNav] = useState(false);

	const links = ['home', 'projects', 'about'];

	const navLinksRef = useRef();

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);

		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

  const handleWindowResize = () => {
    const w = window.innerWidth
    if(w > 800) {
      setSideNav(false)
    }
  };

	const handleMouseOver = (e) => {
		if (e.target.classList.contains('list-item') && !sideNav) {
			let link = e.target.children[0];
			link.classList.toggle('mouseover-links', true);
			link.classList.toggle('mouseout-links', false);
		}
	};

	const handleMouseOut = (e) => {
		if (e.target.classList.contains('list-item') && !sideNav) {
			let link = e.target.children[0];
			link.classList.toggle('mouseover-links', false);
			link.classList.toggle('mouseout-links', true);
		}
	};

	const handleNavClick = () => {
		setSideNav(!sideNav);
	};

	const handleLinkClick = (link) => {
		setSideNav(false);
		setActivePage(link);
	};

	return (
		<div className="navbar">
			<div className="nav-header">
				<h1>
					<a href="./index.html">
						omar <span className="secondary-color">kraidié</span>
					</a>
				</h1>
			</div>

			<ul
				className={`nav-links ${sideNav ? 'nav-links-active' : ''}`}
				onMouseOver={(e) => handleMouseOver(e)}
				onMouseOut={(e) => handleMouseOut(e)}
				ref={navLinksRef}
			>
				{links.map((link, index) => (
					<li
						key={link}
						style={{
							animation: sideNav
								? `fade-nav-links 0.3s ease forwards ${index / 7 + 0.1}s`
								: '',
						}}
					>
						<Link
							className={`list-item ${activePage === link ? 'active' : ''}`}
							to={`/${link === 'home' ? '' : link}`}
							onClick={() => handleLinkClick(link)}
						>
							{link} <span className="underline"></span>
						</Link>
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
