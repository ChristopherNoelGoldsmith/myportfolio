import { useState, useEffect } from "react";

const useScroll = () => {
	const [prevPose, setPose] = useState();

	const checkYScroll = useEffect(() => {
		window.onscroll(() => {
			const currentPose = window.scrollY;

			if (currentPose > prevPose) return;

			setPose(window.scrollY);
		});
	}, []);

	return checkYScroll;
};

export default useScroll;
