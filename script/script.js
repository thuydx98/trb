AOS.init();

// onload

function scrollTop() {
	window.scrollTo(0, 0);
}

function stateSwiperButton() {
	let btnLeft = document.getElementById('swiper-button-left');

	if (btnLeft) {
		btnLeft.style.opacity = '0.3';
	}
}

function onLoad() {
	// scrollTop();
	stateSwiperButton();
}

window.onload = onLoad;

// slide
var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		prevEl: '.swiper-button-left',
		nextEl: '.swiper-button-right',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 2,
		},
		640: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1413: {
			slidesPerView: 4,
		},
	},
});

// scroll top
function onOval() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

// toggle menu
window.onscroll = () => {
	this.toggleMenu();
};

function toggleMenu() {
	let contentHeader = document.querySelector('#content-header');
	let top = window.scrollY;

	let menu = document.querySelector('#menu');

	if (top >= contentHeader.offsetTop && menu) {
		menu.classList.add('active');
	} else if (menu) {
		menu.classList.remove('active');
	}
}

// scroll register
function scrollForm() {
	let contentHeader = document.querySelector('#register');

	if (contentHeader) {
		let offsetTop = contentHeader.offsetTop;
		window.scrollTo({ top: offsetTop - 10, behavior: 'smooth' });
	}
}

// onInfor
function onInfor(model) {
	let searchForm = document.querySelector(model);
	let freeze = document.querySelector('.freeze');
	if (searchForm) {
		freeze.style.overflow = 'hidden';

		searchForm.classList.add('active');
		searchForm.style.top = '0 !important';
		let menu = document.querySelector('#menu');
		menu.classList.remove('active');
	}
}

// close Infor
function closeInfor() {
	let searchForm = document.querySelectorAll('#search-form');
	let freeze = document.querySelector('.freeze');

	if (searchForm) {
		freeze.style.overflow = 'auto';
		searchForm.forEach((form) => {
			form.classList.remove('active');
			this.toggleMenu();
		});
	}
}

// button slide action advise
function onSwiperAdvise(direction) {
	setTimeout(() => {
		let lists = document.querySelector('#swiper-pagination-advise');
		let childs = lists.childNodes;

		if (childs) {
			childs.forEach((child, index) => {
				let find = child.className.includes('swiper-pagination-bullet-active');

				if (find && index == 0) {
					let prev = document.getElementById('swiper-button-left');
					prev.style.opacity = '0.3';
				} else if (find && index > 0) {
					let prev = document.getElementById('swiper-button-left');
					prev.style.opacity = '1';
				}

				if (find && index == childs.length - 1) {
					let prev = document.getElementById('swiper-button-right');
					prev.style.opacity = '0.3';
				} else {
					let prev = document.getElementById('swiper-button-right');
					prev.style.opacity = '1';
				}
			});
		}
	}, 300);
}
