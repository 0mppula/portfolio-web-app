import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaEnvelope } from 'react-icons/fa';
import { FaEllipsis } from 'react-icons/fa6';

import { Link } from 'react-router-dom';
import Frame from '../components/Frame';
import legacyProjects from '../data/legacy-projects.json';
import projects from '../data/projects.json';
import { useTitle } from '../hooks/useTitle';
import hero from '../images/hero-2.jpg';

const stargazersToRememove = [97590272, 76154107];
const projectsWithoutRepo = ['Simple JavaScript Projects'];

const allProjects = [...projects, ...legacyProjects].filter(
	(repo) => !projectsWithoutRepo.includes(repo.title),
);

const fallbackStargazerAvatarUrls = [
	'https://avatars.githubusercontent.com/u/117259733?v=4',
	'https://avatars.githubusercontent.com/u/60621382?v=4',
	'https://avatars.githubusercontent.com/u/71003132?v=4',
	'https://avatars.githubusercontent.com/u/57848655?v=4',
	'https://avatars.githubusercontent.com/u/140701144?v=4',
	'https://avatars.githubusercontent.com/u/2363295?v=4',
	'https://avatars.githubusercontent.com/u/34961099?v=4',
	'https://avatars.githubusercontent.com/u/159700711?v=4',
	'https://avatars.githubusercontent.com/u/47819048?v=4',
	'https://avatars.githubusercontent.com/u/156190087?v=4',
];

const Home = () => {
	useTitle('home');

	const {
		data: stargazers,
		isLoading: stargazersIsLoading,
		isError: stargazersIsError,
	} = useQuery({
		queryKey: ['stargazers'],
		queryFn: getProjectStargazers,
		staleTime: Infinity,
	});

	async function getProjectStargazers() {
		const urls = allProjects.map((project) => {
			return `https://api.github.com/repos/0mppula/${project.repositoryName}/stargazers`;
		});

		const promises = [
			'https://api.github.com/repos/0mppula/portfolio-web-app/stargazers',
			...urls,
		].map((url) => {
			return axios.get(url, {
				headers: {
					Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
				},
			});
		});

		try {
			const responses = await Promise.all(promises);
			const rawStargazers = responses.map((res) => res.data).flat();
			// remove duplicates
			const filteredStargazers = [
				...new Map(rawStargazers.map((item) => [item.id, item])).values(),
			]
				.filter((stargazer) => !stargazersToRememove.includes(stargazer.id))
				.sort(() => Math.random() - 0.5)
				.slice(0, 9);

			return filteredStargazers || [];
		} catch (error) {
			console.error('Error fetching stargazers:', error.name);
		}
	}

	return (
		<div className="hero-container">
			<div>
				<div className="secondary-avatar">
					<img src={hero} alt="Omar Kraidié"></img>
				</div>

				<h1>Fullstack Developer, Omar Kraidié 👋🏼</h1>

				<div>
					{/* Greet card */}
					<div className="greet-card">
						<div>
							<p>
								I'm a fullstack developer based in Finland. I like developing cool
								and useful software by leveraging modern technologies!
							</p>

							<p>
								Feel free to view some of my showcased projects and their code.
								Additionally, you can check out my CV with the button below. If you
								like what you see and want to build beautiful web apps reach out to
								me via email by clicking the button below.
							</p>
							<Frame />
						</div>

						<div className="greet-buttons">
							<Link
								to="/projects"
								type="button"
								className="btn"
								aria-label="projects"
							>
								Projects
							</Link>

							<Link
								to="/cv"
								target="_blank"
								rel="noreferrer"
								type="button"
								className="btn"
								aria-label="CV"
							>
								CV (.PDF)
							</Link>

							<a
								href="mailto:devomarkraidie@gmail.com"
								target="_blank"
								rel="noreferrer"
								type="button"
								className="btn"
								aria-label="Email"
								title="Send me an email!"
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									fontSize: '1.375rem',
								}}
							>
								<FaEnvelope className="icon" />
							</a>
						</div>

						<div className="greet-card-stars">
							{stargazersIsLoading ? (
								<div className="skeleton" />
							) : (
								<h2>Awesome Devs Who Starred My GitHub ⭐</h2>
							)}

							<div>
								{stargazersIsLoading ? (
									Array.from({ length: 10 }).map((_, i) => (
										<div
											key={`stargazer-skeleton-${i + 1}`}
											className="stargazer-skeleton"
										/>
									))
								) : !stargazersIsError ? (
									<>
										{(stargazers || []).map((sg, i) => (
											<img
												className="stargazer"
												key={`${sg.id}-${i + 1}`}
												src={sg.avatar_url}
												alt={`stargazer ${i + 1}`}
												style={{
													zIndex: stargazers.length + i,
												}}
											/>
										))}
										<div className="ellipsis">
											<FaEllipsis />
										</div>
									</>
								) : (
									fallbackStargazerAvatarUrls.map((url, i) => (
										<img
											key={url}
											src={url}
											alt={`stargazer ${i + 1}`}
											style={{
												zIndex: fallbackStargazerAvatarUrls.length - i,
											}}
										/>
									))
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			<img src={hero} alt="Omar Kraidié" />
		</div>
	);
};

export default Home;
