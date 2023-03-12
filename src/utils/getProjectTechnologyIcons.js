import {
	SiJavascript,
	SiRedux,
	SiStyledcomponents,
	SiReact,
	SiHtml5,
	SiCss3,
	SiTypescript,
	SiNodedotjs,
	SiPython,
	SiMongodb,
	SiExpress,
	SiFirebase,
} from 'react-icons/si';

const iconComponents = {
	JavaScript: <SiJavascript />,
	'Redux.js': <SiRedux />,
	'Redux Toolkit': <SiRedux />,
	'Styled Components': <SiStyledcomponents />,
	'React.js': <SiReact />,
	Css3: <SiCss3 />,
	Html5: <SiHtml5 />,
	TypeScript: <SiTypescript />,
	'Node.js': <SiNodedotjs />,
	Python: <SiPython />,
	MongoDB: <SiMongodb />,
	'Express.js': <SiExpress />,
	Firebase: <SiFirebase />,
};

const getProjectTechnologyIcons = (project) => {
	// Returns an array of icons representing the technology stack used in a project.

	let techIcons = project.technologies.map((tech) => ({
		component: iconComponents[tech],
		technology: tech,
	}));

	return techIcons;
};

export default getProjectTechnologyIcons;
