import { Fragment, useEffect, useState } from "react";
import "./Project.scss";
const makeTechStack = (tech) => {
	return tech.map((i) => {
		return <li>{i}</li>;
	});
};

const Project = (props) => {
	const [techStack, setTechStack] = useState();

	useEffect(() => {
		const techList = makeTechStack(props.techStack);
		setTechStack(techList);
	}, []);
	return (
		<section className="project">
			<div className="description">
				<h2 className="title">{props.title}</h2>

				<p>{props.description}</p>
				<ul className="source">
					<li>
						<a href={props.website} target={"_blank"}>
							WEBSITE
						</a>
					</li>
					<li>
						<a href={props.source}>GITHUB</a>
					</li>
				</ul>
			</div>
			<div className="picture-resources">
				<figure className="picture">
					<img src={props.image} alt="poop" />
				</figure>
				<ul className="resource">{techStack}</ul>
			</div>
		</section>
	);
};

export default Project;
