import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ToTop from './components/ToTop';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Nav />
			<ToTop />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="projects" element={<Projects />} />
				<Route exact path="about" element={<About />} />
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
