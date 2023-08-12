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