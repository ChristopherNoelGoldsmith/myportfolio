import "./AboutMe.scss";
import vegas from "../assets/vegas.jpg";
import { Fragment } from "react";
import Title from "./Title";
import { useInView } from "react-intersection-observer";

const AboutMe = (props) => {
	const { ref, inView, entry } = useInView({
		trackVisibility: true,
		delay: 100,
		triggerOnce: true,
	});

	return (
		<Fragment>
			<section ref={ref} id={"about-me"} className={`background-me`}>
				<Title title={"Background"} />
				<div class={`${inView && "visable-fade"} row`}>
					<figure className={"vegas-img"}>
						<img src={vegas} alt="image of las vegas" />
					</figure>
					<div className={"about-me"}>
						<h2>I am from Las Vegas, Nevada!</h2>
						<p className={"intro"}>
							<span className={"fierce"}>VEGAS STRONG AND GO KNIGHTS!</span>{" "}
						</p>

						<p className={"background-about"}>
							I was a LEGO child. I have always loved building things, taking
							them apart, and understanding how they work. Gravitating towards
							development was natural for me. My first exposure was in 2019,
							trying to make javascript plugins for RPG Maker MV. I made a few
							small projects that are lost on an old pc. At the time, it was
							just a hobby, however after being exposed to web development and
							the other nuances of the industry; I am hooked. Thanks for reading
							my bio!
						</p>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default AboutMe;
