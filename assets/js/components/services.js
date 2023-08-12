servicesTabs.forEach(tab => {
	const tabData = tab.dataset.tab;

	tab.addEventListener('click', function(e) {

		hideTabList(tab, servicesTabs, servicesLists, 'services__tab--active', 'services__tab-wrapper--active');

		showTabList(e, tab, tabData, '.services__tab', 'services__tab--active', 'services__tab-wrapper--active');
	})
})