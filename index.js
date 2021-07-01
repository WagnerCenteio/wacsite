function loadModalContent(modal, { title, body }) {
	const modalTitle = modal.querySelector('.modal-title-text');
	const modalBody = modal.querySelector('.modal-content');
	modalTitle.append(title);
	modalBody.append(body);
}

function cleanModalContent(modal) {
	const title = modal.querySelector('.modal-title-text');
	const content = modal.querySelector('.modal-content');
	title.innerHTML = '';
	content.innerHTML = '';
}

function openModal() {
	const modal = document.querySelector('.modal');
	modal.style.display = 'block';
	return modal;
}

function closeModal() {
	const modal = document.querySelector('.modal');
	cleanModalContent(modal);
	modal.style.display = 'none';
}

function createForm() {
	const form = document.createElement('form');
	form.setAttribute('method', 'post');
	const subject = document.createElement('input');
	subject.setAttribute('type', 'text');
	subject.setAttribute('name', 'subject');
	subject.setAttribute('placeholder', 'Enter the subject here');
	const from = document.createElement('input');
	from.setAttribute('type', 'text');
	from.setAttribute('name', 'from');
	from.setAttribute('placeholder', 'Enter your email here');
	const content = document.createElement('textarea');
	content.setAttribute('name', 'textarea');
	content.setAttribute('placeholder', 'Enter the content here');
	content.setAttribute('rows', 18);
	content.setAttribute('cols', 140);
	const subjectLabel = document.createElement('label');
	subjectLabel.innerHTML = 'Subject:';
	const fromLabel = document.createElement('label');
	fromLabel.innerHTML = 'Email:';
	const contentLabel = document.createElement('label');
	contentLabel.innerHTML = 'Content:';
	const submitButton = document.createElement('button');
	submitButton.innerHTML = 'Send';
	form.appendChild(subjectLabel);
	form.appendChild(subject);
	form.appendChild(document.createElement('br'));
	form.appendChild(fromLabel);
	form.appendChild(from);
	form.appendChild(document.createElement('br'));
	form.appendChild(contentLabel);
	form.appendChild(content);
	form.appendChild(submitButton);
	return form;
}

// --- event handlers

document.querySelector('#contact').addEventListener('click', (e) => {
	e.preventDefault();
	const modal = openModal();
	const form = createForm();
	loadModalContent(modal, { title: 'Contact Information', body: form });
});

document.querySelectorAll('.card').forEach((card) =>
	card.addEventListener('click', () => {
		const modal = openModal();
		loadModalContent(modal, { title: 'card', body: 'card' });
	})
);

document.querySelector('.close').addEventListener('click', closeModal);

document.querySelector('#about').addEventListener('click', () => {
	e.preventDefault();
	const aboutSection = document.querySelector('.description');
	aboutSection.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
});

document.querySelector('#experience').addEventListener('click', () => {
	e.preventDefault();
	const expSection = document.querySelector('.experience');
	expSection.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
});

document.querySelector('#skills').addEventListener('click', (e) => {
	e.preventDefault();
	const skillsSection = document.querySelector('.skills');
	skillsSection.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
});

document.querySelector('#work').addEventListener('click', () => {
	//todo:
	// const aboutSection = document.querySelector('.description');
	// aboutSection.scrollIntoView();
});
