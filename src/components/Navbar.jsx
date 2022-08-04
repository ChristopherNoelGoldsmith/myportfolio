import { useEffect, useState } from "react";
import "./Navbar.scss";

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
	},
];

const navListDir = (list) => {
	return list.map((item) => {
		return (
			<li key={Math.floor(Math.random() * 100000)}>
				<a href={item.href} target="_blank">
					<div className="text" text={item.text}></div>
					{item.icon}
				</a>
			</li>
		);
	});
};

const Navbar = (props) => {
	const [navIcons, setNavIcons] = useState();

	useEffect(() => {
		const icons = navListDir(navList);
		return setNavIcons(icons);
	}, []);

	return (
		<nav className="navbar">
			<h1>
				<span>CHRISTOPHER GOLDSMITH</span>
			</h1>
			<ul>{navIcons}</ul>
		</nav>
	);
};

export default Navbar;
