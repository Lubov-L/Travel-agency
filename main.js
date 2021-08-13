/*Slider */



/*Modal window */
const modalLinks = document.querySelectorAll('.modal-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (modalLinks.length > 0) {
	for (let index = 0; index < modalLinks.length; index++) {
		const modalLink = modalLinks[index];
		modalLink.addEventListener("click", function (e) {
			const modalName = modalLink.getAttribute('href').replace('#', '');
			const curentModal = document.getElementById(modalName);
			modalOpen(curentModal);
			e.preventDefault();
		});
	}
}
const modalCloseButton = document.querySelectorAll('.modal-close');
if (modalCloseButton.length > 0) {
	for (let index = 0; index < modalCloseButton.length; index++) {
		const el = modalCloseButton[index];
		el.addEventListener('click', function (e) {
			modalClose(el.closest('.modal'));
			e.preventDefault();
		});
	}
}

function modalOpen(curentModal) {
	if (curentModal && unlock) {
		const modalActive = document.querySelector('.popup.open');
		if (modalActive) {
			modalClose(modalActive, false);
		} else {
			bodyLock();
		}
		curentModal.classList.add('open');
		curentModal.addEventListener("click", function (e) {
			if (!e.target.closest('.modal__content')) {
				modalClose(e.target.closest('.modal'));
			}
		});
	}
}

function modalClose(modalActive, doUnlock = true) {
	if (unlock) {
		modalActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const modalActive = document.querySelector('.modal.open');
		modalClose(modalActive);
	}
});

