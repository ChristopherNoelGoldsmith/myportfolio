import image from "./dummy.png";
import allmighty from "./am1.png";
import weather from "./weather.png";

const projects = [
	{
		image: allmighty,
		title: "E-Commerce Shop & E-Commerce API",
		description:
			"Allmighty CCG is a fully functional rough draft, of an e-commerce website.  It features 144 products, an animated cart, Login, Password Change,  and payment through stripe.  To attempt a test payment use any information and any card number ending in 4242.  Password reset and other features built into the API coming soon to the frontend.",
		techStack: [
			"HTML",
			"SASS",
			"React",
			"Redux",
			"Express",
			"MongoDB",
			"Stripe",
		],
		source: "https://github.com/ChristopherNoelGoldsmith/Ecommerce",
		website: "https://allmightyccg.netlify.app/",
	},
	{
		image: image,
		title: "Universis Sim",
		description:
			"Universus Sim is a game state tracker for the collectable card game Universus.  I created it for the locals at my hobby shop.  Features realted to the game: damage counter, speed counter, zone counter, life tracker, animated health bar, changable names and max health. It's UI is only meant for mobile.",
		techStack: ["HTML", "SASS", "React"],
		source: "https://github.com/ChristopherNoelGoldsmith/game-state",
		website: "https://universus-sim.netlify.app/",
	},
	{
		image: weather,
		title: "Weather App",
		description:
			"This application was my first javascript project (outside of a class or tutorial).  It utilizes a reverse geocoder api to obtain the latitude and longitude of a location, and a weather api to give the average forecast of the next 14 days of a chosen location.  It also features a favorites menus powered by local storage.",
		techStack: ["HTML", "SCSS", "Javascript"],
		source: "https://github.com/ChristopherNoelGoldsmith/weather_app",
		website: "https://forcastdeck.netlify.app/",
	},
];

export default projects;
