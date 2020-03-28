let i = 0;
const cover = document.querySelector('.cover');
const descrtptions = document.querySelectorAll('.animate');

const runAnimation = setInterval(() => {
	descrtptions[i].style.display = 'inline-block';
	descrtptions[i].setAttribute('class', 'fade-in');
	i++;
	if (!descrtptions[i]) {
		clearInterval(runAnimation);

		setTimeout(() => {
			cover.style.filter = 'none';
		}, 1500);
	}
}, 1500);
