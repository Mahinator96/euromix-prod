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