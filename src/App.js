import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ToTop from './components/ToTop';
import CV from './pages/CV';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Nav />
			
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="projects" element={<Projects />} />
				<Route exact path="about" element={<About />} />
				<Route exact path="cv" element={<CV />} />
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>

			<ToTop />
			<Footer />
		</Router>
	);
}

export default App;
