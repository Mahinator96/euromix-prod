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