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
const requestCheck = document.querySelector('.request__form-check');
const requestInput = requestCheck.querySelector('input');
const catalogLists = document.querySelectorAll('.catalog__list');
const catalogTabs = Array.from(document.querySelectorAll('.catalog__tab'));
const catalogFactoryItems = Array.from(document.querySelectorAll('.catalog__factory-item'));
const catalogProductsItems = Array.from(document.querySelectorAll('.catalog__products-item'));
const catalogCompleteItems = Array.from(document.querySelectorAll('.catalog__complete-item'));
const partnersSlider = document.querySelector('.partners__slider');
const servicesTabs = Array.from(document.querySelectorAll('.services__tab'));
const servicesLists = document.querySelectorAll('.services__tab-wrapper');
const sertificSlider = document.querySelector('.sertific__slider');
const bannerCallBtn = document.querySelector('.baner__call-btn');

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
requestCheck.addEventListener('change', function() {
	requestCheck.classList.toggle('request__form-check--not')
})
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

// Добавить табу и классу активные классы
const showTabList = function(e, tab, tabData, tabClosest, tabActive, listActive) {
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

catalogTabs.forEach(tab => {
	const tabData = tab.dataset.catalog;
	
	tab.addEventListener('click', function(e) {
		console.log(tabData);

		hideTabList(tab, catalogTabs, catalogLists, 'catalog__tab--active', 'catalog__list--active');

		showTabList(e, tab, tabData, '.catalog__tab', 'catalog__tab--active', 'catalog__list--active');
	})
})

// Скрывает лишние карточки
const hideCards = (cards, maxCardsMath) => {
	cards.forEach((item, index) => { 	// Перебрать все карточки
		item.classList.add('hidden'); 	// Скрыть все карточки

		if (index <= maxCardsMath) { 				// Если карточек меньше чем указано в параметре
			item.classList.remove('hidden');
		}
	})
}

// При изменении ширины (динамика) происходит расчёт карточек и показ(скрытие) кнопки
window.addEventListener('resize', event => {
	let eventWidth = event.target.window.innerWidth

    if (eventWidth <= 1920 && eventWidth > 640) hideCards(catalogFactoryItems, 4);
    if (eventWidth <= 640 && eventWidth > 320) hideCards(catalogFactoryItems, 2);

    if (eventWidth <= 1920 && eventWidth > 640) hideCards(catalogProductsItems, 4);
    if (eventWidth <= 640 && eventWidth > 320) hideCards(catalogProductsItems, 2);

    if (eventWidth <= 1920 && eventWidth > 640) hideCards(catalogCompleteItems, 4);
    if (eventWidth <= 640 && eventWidth > 320) hideCards(catalogCompleteItems, 2);
})
bannerCallBtn.addEventListener('click', function() {
	modalPhone.classList.add('modal--open');
	body.classList.add('_lock');
})
const partnersSwiper = new Swiper(partnersSlider, {
	pagination: {
		slidesPerView: 1,
    el: '.partners__slider-pagination',
  },
})
servicesTabs.forEach(tab => {
	const tabData = tab.dataset.tab;

	tab.addEventListener('click', function(e) {

		hideTabList(tab, servicesTabs, servicesLists, 'services__tab--active', 'services__tab-wrapper--active');

		showTabList(e, tab, tabData, '.services__tab', 'services__tab--active', 'services__tab-wrapper--active');
	})
})
const sertificSliderSwiper = new Swiper(sertificSlider, {
	pagination: {
    el: '.sertific__slider-pagination',
		clickable: true,
  },

	breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      // spaceBetween: 20
    },
		440: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
    // when window width is >= 480px
    640: {
			slidesPerView: 3,
			spaceBetween: 40,
    },

  }
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