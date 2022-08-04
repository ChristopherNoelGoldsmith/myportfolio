import { Fragment, useEffect, useState } from "react";
import "./Project.scss";
import { useInView } from "react-intersection-observer";

const makeTechStack = (tech) => {
	return tech.map((i) => {
		return <li key={Math.floor(Math.random() * 100000)}>{i}</li>;
	});
};
// /${entry.IntersectionObserverEntry && "visible"}
const Project = (props) => {
	const [techStack, setTechStack] = useState();
	const { ref, inView, entry } = useInView({
		trackVisibility: true,
		delay: 100,
		triggerOnce: true,
	});
	useEffect(() => {
		const techList = makeTechStack(props.techStack);
		setTechStack(techList);
	}, []);

	return (
		<section ref={ref} className="project">
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
			<div className={`picture-resources ${inView && "visible"} `}>
				<figure className="picture">
					<img src={props.image} alt="poop" />
				</figure>
				<ul className="resource">{techStack}</ul>
			</div>
		</section>
	);
};

export default Project;
