import { useEffect } from 'react';

/** Hook for changing title */
export const useTitle = (title) => {
	useEffect(() => {
		const oldTitle = document.title;
		if (title) {
			let formattedTitle = title?.charAt(0).toUpperCase() + title?.slice(1);
			document.title = `Omar Kraidié ${formattedTitle}`;
		}
		// following line is optional, but will reset title when component unmounts
		return () => (document.title = oldTitle);
	}, [title]);
};
