import "./Hero.scss";
const Hero = (props) => {
	return (
		<main className={"hero"}>
			<div className={"title-con"}>
				<h1>Hello, I am a Frontend Web Developer</h1>
			</div>
			<div className={"title-con"}>
				<p>
					My Name Is <span className={"highlight"}>Christopher Goldsmith</span>.
					I am a software engineer specializing in
					<span className={"blue"}> React</span> delopment and other frontend
					technologies.
					<br />
					<br />
					Thanks for visiting my page!
				</p>
			</div>
			<section className={"contact"}>
				<p>
					<i className="fa-solid fa-phone"></i>
					<span>PHONE</span>: 702-666-9106
				</p>
				<p>
					<i className="fa-solid fa-envelope"> </i>
					<span>EMAIL</span>: ChristopherGoldsmith101@yahoo.com
				</p>
				<div className="buttons">
					<button>
						<a href="#about-me">About Me</a>
					</button>
					<button>
						<a href="#projects">Projects</a>
					</button>
				</div>
			</section>
		</main>
	);
};

export default Hero;
