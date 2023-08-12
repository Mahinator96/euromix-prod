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