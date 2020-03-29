let i = 0;
const descrtptions = document.querySelectorAll('.animate');
const isToAnimateDescription = localStorage.getItem('isDescriptionAnimated');
const cover = document.querySelector('.cover');

/**
 ** FIXME:  Set the blur filter programaticaly instead of css hardcoded
 */
if (!isToAnimateDescription) {
	const runAnimation = setInterval(() => {
		descrtptions[i].style.display = 'inline-block';
		descrtptions[i].setAttribute('class', 'fade-in');
		i++;
		if (!descrtptions[i]) {
			clearInterval(runAnimation);
			localStorage.setItem('isDescriptionAnimated', true);
			setTimeout(() => {
				cover.style.filter = 'none';
			}, 1500);
		}
	}, 1500);
} else {
	descrtptions.forEach(item => (item.style.display = 'inline-block'));
	cover.style.filter = 'none';
}
