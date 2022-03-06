import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useTitle } from './hooks/useTitle';

function App() {
	const [activePage, setActivePage] = useState('home');
	useTitle(activePage);

	return (
		<Router>
			<Nav activePage={activePage} setActivePage={setActivePage} />
			<Routes>
				<Route exact path="/projects" element={<Projects />} />
				<Route exact path="/about" element={<About />} />
				<Route path="*" element={<Home setActivePage={setActivePage} />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
