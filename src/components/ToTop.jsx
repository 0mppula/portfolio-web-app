import React, { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ToTop = () => {
	const [active, setActive] = useState(false);

	window.addEventListener('scroll', () => {
		// Limit in y-axis pixels when to show scroll to top element
		const SCROLL_LIMIT = 450;

		let pageY = window.pageYOffset;
		pageY > SCROLL_LIMIT && setActive(true);
		pageY < SCROLL_LIMIT && setActive(false);
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<button
			tabIndex={active ? 0 : -1}
			onClick={scrollToTop}
			className={`to-top ${active ? 'active' : ''}`}
		>
			<FaChevronUp />
		</button>
	);
};

export default ToTop;
