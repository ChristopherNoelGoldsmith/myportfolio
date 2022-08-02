import Project from "./Project";
import image from "../assets/dummy.png";
import { useEffect, useState } from "react";
import "./ProjectsContainer.scss";
import Title from "./Title";

const DUMMY_DATA = [
	{
		image: image,
		title: "E-Commerce Shop & E-Commerce API",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi recusandae qui maxime est velit beatae nobis enim accusamus. Minus dolorem odit, debitis illo similique obcaecati eveniet exercitationem quam consectetur veritatis.",
		techStack: ["HTML", "SCSS", "React", "Redux", "Express", "MongoDB"],
		source: "https://github.com/ChristopherNoelGoldsmith/Ecommerce",
		website: "https://allmightyccg.netlify.app/",
	},
	{
		image: image,
		title: "E-Commerce Shop & E-Commerce API",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi recusandae qui maxime est velit beatae nobis enim accusamus. Minus dolorem odit, debitis illo similique obcaecati eveniet exercitationem quam consectetur veritatis.",
		techStack: ["HTML", "SCSS", "React", "Redux", "Express", "MongoDB"],
		source: "https://github.com/ChristopherNoelGoldsmith/Ecommerce",
		website: "https://allmightyccg.netlify.app/",
	},
	{
		image: image,
		title: "E-Commerce Shop & E-Commerce API",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi recusandae qui maxime est velit beatae nobis enim accusamus. Minus dolorem odit, debitis illo similique obcaecati eveniet exercitationem quam consectetur veritatis.",
		techStack: ["HTML", "SCSS", "React", "Redux", "Express", "MongoDB"],
		source: "https://github.com/ChristopherNoelGoldsmith/Ecommerce",
		website: "https://allmightyccg.netlify.app/",
	},
	{
		image: image,
		title: "E-Commerce Shop & E-Commerce API",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi recusandae qui maxime est velit beatae nobis enim accusamus. Minus dolorem odit, debitis illo similique obcaecati eveniet exercitationem quam consectetur veritatis.",
		techStack: ["HTML", "SCSS", "React", "Redux", "Express", "MongoDB"],
		source: "https://github.com/ChristopherNoelGoldsmith/Ecommerce",
		website: "https://allmightyccg.netlify.app/",
	},
];

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
		const newProjects = createList(DUMMY_DATA);

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
