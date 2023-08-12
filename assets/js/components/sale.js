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