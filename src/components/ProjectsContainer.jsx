import Project from "./Project";
//import image from "../assets/dummy.png";
import { useEffect, useState } from "react";
import "./ProjectsContainer.scss";
import Title from "./Title";
import data from "../assets/projects.js";

const createList = (list) => {
	const contentList = list.map((content) => {
		return (
			<Project
				image={content.image}
				title={content.title}
				description={content.description}
				techStack={content.techStack}
				website={content.website}
				source={content.source}
			/>
		);
	});

	return contentList;
};

const ProjectsContainer = (props) => {
	const [projects, setProjects] = useState();

	useEffect(() => {
		const newProjects = createList(data);

		setProjects(newProjects);
	}, []);

	return (
		<section className={"projects-container"}>
			<Title title={"Projects"} />
			{projects}
		</section>
	);
};

export default ProjectsContainer;
