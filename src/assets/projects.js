import image from "./dummy.png";
import allmighty from "./am1.png";
import stoncks from "./neonmarket.jpg";
import cygnus from "./cygnus.png";

const projects = [
	{
		image: cygnus,
		title: "UVS Cygnus",
		description:
			"UVS Cygnus is a full-stack MERN (MongoDB, Express, React, Node) application with some frontend tools to manage the cards and users in the database. All CRUD functionality is available. Currently, the website is still under construction, and new features are being added. It has basic functionality with its search engine and deck-building tools, along with login and registration. ",
		techStack: ["React", "Express", "MongoDB", "Tailwind"],
		source: "https://github.com/ChristopherNoelGoldsmith/Ecommerce",
		website: "https://ucscygnus.cyclic.app/",
	},
	{
		image: allmighty,
		title: "Allmighty CCG",
		description:
			"Allmighty CCG is a fully functional prototype, of an e-commerce website.  It features 144 products, an animated cart, Login, Password Change,  and payment through stripe.  To attempt a test payment use any information and any card number ending in 4242.  Password reset and other features built into the API coming soon to the frontend.",
		techStack: ["React", "Express", "MongoDB", "Stripe"],
		source: "https://github.com/ChristopherNoelGoldsmith/Ecommerce",
		website: "https://allmightyccg.netlify.app/",
	},
	{
		image: stoncks,
		title: "Market Masters",
		description:
			"Market Masters is a stock market insights tool.  At the moment you can track the quarterly EPS, market cap, current price and shares outstanding of a company.  Upcoming features include: related news, company financials, and market news.",
		techStack: ["React"],
		source: "https://github.com/ChristopherNoelGoldsmith/stocks",
		website: "https://marketmasters.netlify.app/",
	},
	{
		image: image,
		title: "Universis Sim",
		description:
			"Universus Sim is a game state tracker for the collectable card game Universus.  I created it for the locals at my hobby shop.  Features realted to the game: damage counter, speed counter, zone counter, life tracker, animated health bar, changable names and max health. It's UI is only meant for mobile.",
		techStack: ["React"],
		source: "https://github.com/ChristopherNoelGoldsmith/game-state",
		website: "https://universus-sim.netlify.app/",
	},
];

export default projects;
