import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import PostHogPageviewTracker from './components/PostHogPageviewTracker';
import ScrollToTop from './components/ScrollToTop';
import ToTop from './components/ToTop';
import About from './pages/About';
import CV from './pages/CV';
import Home from './pages/Home';
import ProjectCommits from './pages/ProjectCommits';
import Projects from './pages/Projects';

const queryClient = new QueryClient();

posthog.init(process.env.REACT_APP_PUBLIC_POSTHOG_KEY, {
	api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
	person_profiles: 'identified_only',
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<PostHogProvider client={posthog}>
				<Router>
					<PostHogPageviewTracker />
					<ScrollToTop />
					<Nav />

					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="projects" element={<Projects />} />
						<Route exact path="projects/:repositoryName" element={<ProjectCommits />} />
						<Route exact path="about" element={<About />} />
						<Route exact path="cv" element={<CV />} />
						<Route path="*" element={<Navigate replace to="/" />} />
					</Routes>

					<ToTop />
					<Footer />
				</Router>
			</PostHogProvider>
		</QueryClientProvider>
	);
}

export default App;
