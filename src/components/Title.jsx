import "./Title.scss";

const Title = (props) => {
	return (
		<header className="line">
			<h2>{props.title}</h2>
		</header>
	);
};

export default Title;
