import { useEffect, useState } from "react";
import "./Navbar.scss";
import { scrollEvent } from "./utilities";
const navList = [
	{
		icon: <i className="fa-brands fa-linkedin"></i>,
		text: "LinkedIn",
		href: "https://www.linkedin.com/in/christopher-goldsmith-723868132/",
	},
	{
		icon: <i className="fa-brands fa-square-github"></i>,
		text: "Github",
		href: "https://github.com/ChristopherNoelGoldsmith",
	},
	{
		icon: <i className="fa-solid fa-file"></i>,
		text: "Resume",
		href: "../assets/resume.pdf",
		download: true,
	},
];

const navListDir = (list) => {
	return list.map((item) => {
		return (
			<li key={Math.floor(Math.random() * 100000)}>
				<a href={item.href} target="_blank" download={item.download}>
					<div className="text" text={item.text}></div>
					{item.icon}
				</a>
			</li>
		);
	});
};

const Navbar = (props) => {
	const [navIcons, setNavIcons] = useState();
	const [navClassVis, setNavVis] = useState();
	const navbarVis = (dir) => {
		if (dir === "DOWN") setNavVis("not-vis");
		if (dir === "UP") setNavVis("");
		return;
	};
	useEffect(() => {
		const icons = navListDir(navList);
		scrollEvent(
			() => navbarVis("UP"),
			() => navbarVis("DOWN")
		);
		return setNavIcons(icons);
	}, []);

	return (
		<nav className={`navbar`}>
			<div className={`navbar ${navClassVis}`}>
				<h1>
					<span></span>
				</h1>
				<ul>{navIcons}</ul>
			</div>
		</nav>
	);
};

export default Navbar;
