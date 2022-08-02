import "./App.scss";
import ProjectsContainer from "./components/ProjectsContainer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
	return (
		<div className="container">
			<Navbar />
			<Hero />
			<ProjectsContainer />
		</div>
	);
}

export default App;
