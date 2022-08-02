import "./Hero.scss";
const Hero = (props) => {
	return (
		<section className={"hero"}>
			<div className={"title-con"}>
				<h1>Hello, I am a Frontend Web Developer</h1>
			</div>
			<div className={"title-con"}>
				<h2>
					I have over year of experience in developement, and am excited that
					you have decided to visit my page!
				</h2>
			</div>
			<section className={"contact"}>
				<p>
					<span>PHONE</span>: 702-666-9106
				</p>
				<p>
					<span>EMAIL</span>: ChristopherGoldsmith101@yahoo.com
				</p>
			</section>
		</section>
	);
};

export default Hero;
