import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
	const [activePage, setActivePage] = useState('home');

	return (
		<Router>
			<Nav activePage={activePage} setActivePage={setActivePage} />
			<Routes>
				<Route path="/" element={<Home setActivePage={setActivePage} />}></Route>
				<Route path="/projects" element={<Projects />}></Route>
				<Route path="/about" element={<About />}></Route>
			</Routes>
      <Footer />
		</Router>
	);
}

export default App;
