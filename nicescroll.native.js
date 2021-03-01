{	// scrollbar behaviour
	let timer = null, isOver = false, isDown = false;
	const remove = t => timer = setTimeout(() => document.body.classList.remove('hover'), t || 1000);

	window.addEventListener('mousemove', e => {
		if (timer) clearTimeout(timer);

		if (e.pageX > document.body.offsetWidth) {
			isOver = true;
			if (!document.body.classList.contains('hover'))
				document.body.classList.add('hover');
		} else {
			isOver = false;
			if (!isDown) remove();
		}
	});

	document.addEventListener('mouseleave', remove);

	document.addEventListener('mousedown', () => {
		if (timer) clearTimeout(timer);
		if (isOver) isDown = true;
	});

	document.addEventListener('mouseup', () => (isDown = false));

	window.addEventListener('scroll', () => {
		if (timer) clearTimeout(timer);
		if (!document.body.classList.contains('hover'))
			document.body.classList.add('hover');

		if (!isDown) remove();
	});
}