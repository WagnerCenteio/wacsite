let i = 0;
const descrtptions = document.querySelectorAll('.animate');
const isToAnimateDescription = localStorage.getItem('isDescriptionAnimated');
const profilePic = document.querySelector('.profile-pic img');

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
				profilePic.style.filter = 'none';
			}, 1500);
		}
	}, 1500);
} else {
	descrtptions.forEach((item) => (item.style.display = 'inline-block'));
	profilePic.style.filter = 'none';
}

function openModal() {
	const modal = document.querySelector('.modal');
	modal.style.display = 'block';
}

function closeModal() {
	const modal = document.querySelector('.modal');
	modal.style.display = 'none';
}

document.querySelectorAll('.card').forEach((card) => card.addEventListener('click', openModal));

document.querySelector('.close').addEventListener('click', closeModal);
