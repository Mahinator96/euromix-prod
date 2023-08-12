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

const thumbSlider = new Swiper(".sale__slider-thumb", {
	spaceBetween: 10,
	slidesPerView: 4,
	// freeMode: true,
	watchSlidesProgress: true,
	// width: 395,
	navigation: {
		nextEl: ".sale__thumb-button-next",
		prevEl: ".sale__thumb-button-prev",
	},
});
const mainSlider = new Swiper(".sale__slider-main", {
	spaceBetween: 10,
	slidesPerView: 1,
	thumbs: {
		swiper: thumbSlider,
	},
});
// Все табы
const infoTabs = Array.from(document.querySelectorAll('.info__box-tab'));
// Все листы
const infoItems = Array.from(document.querySelectorAll('.info__box-item'));
// Активный класс для таба
const tabActive = 'info__box-tab--active';
// Активный класс для листа
const listActive = 'info__box-item--active';
// Проверочный (основной класс) таба
const tabClosest = '.info__box-tab';

// console.log(infoTabs);

// Спрятать все активные табы и списки
const hideTabList = (tab, tabs, lists, tabActive, listActive) => {
	if (!tab.classList.contains(tabActive)) {
		tabs.forEach(item => {
			item.classList.remove(tabActive);
		})
		lists.forEach(item => {
			item.classList.remove(listActive);
		})
	}
}

// Добавить табу и листу активные классы
const showTabList = function(e, tab, tabData, tabClosest, tabActive, ) {
	if ( e.target.closest(`${tabClosest}`)) {
		
		if (!tab.classList.contains(tabActive)) {
			tab.classList.add(tabActive);
			
			if (tabData) {
				const listId = document.getElementById(`${tabData}`);

				if (listId) {
					listId.classList.add(listActive);
				}
			}
		}
	}
}

infoTabs.forEach(tab => {
	const tabData = tab.dataset.info;
	
	tab.addEventListener('click', function(e) {
		console.log(tabData);

		hideTabList(tab, infoTabs, infoItems, tabActive, listActive);

		showTabList(e, tab, tabData, tabClosest, tabActive, listActive);
	})
})