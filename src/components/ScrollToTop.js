import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
	const { pathname } = useLocation();

	window.onbeforeunload = function () {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'auto',
		});
	};

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'auto',
		});
	}, [pathname]);

	return null;
};

export default ScrollToTop;
