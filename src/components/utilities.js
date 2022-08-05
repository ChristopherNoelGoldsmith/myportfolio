export const scrollEvent = (callbackDown, callbackUp) => {
	return (window.onscroll = () => {
		const currentPosition = window.scrollY;

		setTimeout(() => {
			const prevPosition = window.scrollY;
			if (currentPosition === prevPosition) return;
			//IF SCROLLING DOWN
			if (currentPosition > prevPosition) return callbackDown();
			//IF SCROLLING UP;
			return callbackUp();
		}, 200);
		return;
	});
};
