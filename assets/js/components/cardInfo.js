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