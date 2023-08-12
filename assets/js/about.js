const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.header__nav-close');
const headerNav = document.querySelector('.header__nav');
const headerNavItems = document.querySelectorAll('.header__nav-item');
const headerNavArrows = document.querySelector('.header__nav-arrow');
const modalCloses = document.querySelectorAll('.modal__close');
const userEnter = document.querySelector('.header-top__enter');
const headerCallPhone = document.querySelector('.header-top__order');
const modalEntry = document.querySelector('.modal__entry');
const modalPhone = document.querySelector('.modal__phone');
const btnBasket = document.querySelector('.header-top__basket');
const modalCart = document.querySelector('.modal__cart');
const registerLink = document.querySelector('.modal__you-link');
const modalКegister = document.querySelector('.modal__register');
burger.addEventListener('click', function(e) {
	// e.target.classList.toggle('burger--active');
	body.classList.add('_lock');
	headerNav.classList.add('header__nav--open');
})
burgerClose.addEventListener('click', function(e) {
	body.classList.remove('_lock');
	headerNav.classList.remove('header__nav--open');
})

headerNavItems.forEach(item => {
	if (!item.querySelector('.header__nav-sublist')) {
		item.querySelector('.header__nav-arrow').style.display = 'none';
	}
})

userEnter.addEventListener('click', function() {
	modalEntry.classList.add('modal--open');
	body.classList.add('_lock');
})

headerCallPhone.addEventListener('click', function() {
	modalPhone.classList.add('modal--open');
	body.classList.add('_lock');
})

btnBasket.addEventListener('click', function() {
	modalCart.classList.add('modal--open');
	body.classList.add('_lock');
})
modalCloses.forEach(btn => {
	btn.addEventListener('click', function() {
		const btnParentModal = btn.parentElement.parentElement;
		if (btnParentModal.classList.contains('modal')) {
			btnParentModal.classList.remove('modal--open');
		}
		body.classList.remove('_lock');
	})
})

registerLink.addEventListener('click', function() {
	modalEntry.classList.remove('modal--open');
	modalКegister.classList.add('modal--open');
})