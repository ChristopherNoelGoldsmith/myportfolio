import "./App.scss";
import ProjectsContainer from "./components/ProjectsContainer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Helmet } from "react-helmet";
import AboutMe from "./components/AboutMe";

function App() {
	return (
		<div
			className="container"
			onScroll={(e) => {
				return console.log(e);
			}}
		>
			<Navbar />
			<Hero />
			<ProjectsContainer />
			<AboutMe />
			<Helmet>
				<meta charSet="utf-8" />
				<title>Christopher Goldsmith Dev</title>
				<link
					rel="canonical"
					href="
					https://christophergoldsmith.dev/"
				/>
			</Helmet>
		</div>
	);
}

export default App;
