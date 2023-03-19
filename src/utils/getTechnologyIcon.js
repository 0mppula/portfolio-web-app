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
	SiSass,
	SiGit,
	SiHeroku,
	SiJest,
	SiNetlify,
	SiNumpy,
	SiPandas,
	SiGithub,
	SiGitlab,
	SiFigma,
	SiAdobephotoshop,
	SiMeteor,
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
	Sass: <SiSass />,
	Git: <SiGit />,
	Heroku: <SiHeroku />,
	Jest: <SiJest />,
	Netlify: <SiNetlify />,
	Numpy: <SiNumpy />,
	Pandas: <SiPandas />,
	Github: <SiGithub />,
	Gitlab: <SiGitlab />,
	Figma: <SiFigma />,
	Adobephotoshop: <SiAdobephotoshop />,
	'Meteor.js': <SiMeteor />,
};

const getTechnologyIcon = (technology) => {
	// Returns a components for the passed in technology.

	return iconComponents[technology];
};

export default getTechnologyIcon;
