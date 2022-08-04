import "./Hero.scss";
const Hero = (props) => {
	return (
		<section className={"hero"}>
			<div className={"title-con"}>
				<h1>Hello, I am a Frontend Web Developer</h1>
			</div>
			<div className={"title-con"}>
				<h2>
					My Name Is Christopher Goldsmith. I have over one year of developement
					experience. Thanks for visiting my page!
				</h2>
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
			</section>
		</section>
	);
};

export default Hero;
