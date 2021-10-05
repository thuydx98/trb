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

function isValidEmailAddress(emailAddress) {
	var pattern =
		/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	return pattern.test(emailAddress);
}

$('#register-form').submit(function (event) {
	event.preventDefault();
	let isError = false;
	let $element = $('input[name=first_name]');
	const first_name = $element.val().trim();
	if (first_name === '') {
		isError = true;
		$element.addClass('error');
		$element.closest('.input').find('.error-icon').show();
		$element.closest('.input').find('.error-message').css('display', 'block');
	}

	$element = $('input[name=last_name]');
	const last_name = $element.val().trim();
	if (last_name === '') {
		isError = true;
		$element.addClass('error');
		$element.closest('.input').find('.error-icon').show();
		$element.closest('.input').find('.error-message').css('display', 'block');
	}

	$element = $('input[name=email]');
	const email = $element.val().trim();
	if (email === '') {
		isError = true;
		$element.addClass('error');
		$element.closest('.input').find('.error-icon').show();
		$element.closest('.input').find('.error-message').css('display', 'block');
		$element.closest('.input').find('.error-message').text('Vui lòng nhập email');
	} else if (!isValidEmailAddress(email)) {
		isError = true;
		$element.addClass('error');
		$element.closest('.input').find('.error-icon').show();
		$element.closest('.input').find('.error-message').css('display', 'block');
		$element.closest('.input').find('.error-message').text('Vui lòng nhập đúng định dạng email');
	}

	$element = $('select[name=gender]');
	const gender = $element.val().trim();
	if (gender === '') {
		isError = true;
		$element.closest('.custom-select').find('.select-selected').addClass('error');
		$('.error-gender').css('display', 'block');
	}

	$element = $('input[name=birthday]');
	const birthday = $element.val().trim();
	if (birthday === '') {
		isError = true;
		$element.addClass('error');
		$element.closest('.input').find('.error-icon').show();
		$element.closest('.input').find('.error-message').css('display', 'block');
	}

	$element = $('input[name=birth_place]');
	const birth_place = $element.val().trim();
	if (birth_place === '') {
		isError = true;
		$element.addClass('error');
		$element.closest('.input').find('.error-icon').show();
		$element.closest('.input').find('.error-message').css('display', 'block');
	}

	$element = $('input[name=phone]');
	const phone = $element.val().trim();
	if (phone === '') {
		isError = true;
		$element.addClass('error');
		$element.closest('.input').find('.error-icon').show();
		$element.closest('.input').find('.error-message').css('display', 'block');
	}

	$element = $('input[name=address]');
	const address = $element.val().trim();
	if (address === '') {
		isError = true;
		$element.addClass('error');
		$element.closest('.input').find('.error-icon').show();
		$element.closest('.input').find('.error-message').css('display', 'block');
	}

	$element = $('input[name=company]');
	const company = $element.val().trim();
	if (company === '') {
		isError = true;
		$element.addClass('error');
		$element.closest('.input').find('.error-icon').show();
		$element.closest('.input').find('.error-message').css('display', 'block');
	}

	$element = $('input[name=department]');
	const department = $element.val().trim();
	if (department === '') {
		isError = true;
		$element.addClass('error');
		$element.closest('.input').find('.error-icon').show();
		$element.closest('.input').find('.error-message').css('display', 'block');
	}

	$element = $('input[name=is_accept]');
	if ($('input[name=is_accept]').is(':checked') == false) {
		isError = true;
		$element.addClass('error');
	}

	if (isError) return;

	$('button[type=submit]').html('<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>');

	request = $.ajax({
		url: 'https://id.azurewebsites.net/api/webinars/83310241529/registrants',
		type: 'post',
		headers: { 'Content-Type': 'application/json' },
		data: JSON.stringify({
			first_name,
			last_name,
			email,
			custom_questions: [
				{
					title: 'Giới tính',
					value: gender,
				},
				{
					title: 'Ngày sinh (dd/mm/yyyy)',
					value: birthday,
				},
				{
					title: 'Nơi sinh',
					value: birth_place,
				},
				{
					title: 'Số điện thoại',
					value: phone,
				},
				{
					title: 'Địa chỉ liên hệ',
					value: address,
				},
				{
					title: 'Đơn vị công tác',
					value: company,
				},
				{
					title: 'Chuyên khoa công tác',
					value: department,
				},
			],
		}),
	});

	request.done(function () {
		onInfor('.model_6');
	});

	request.error(function (jqXHR) {
		$('button[type=submit]').text('Đăng ký');
		if (jqXHR.status == 429) $('.ajax-error').text('Bạn đã đăng ký tham gia chương trình bằng email này.').show();
		else $('.ajax-error').text('Lỗi hệ thống. Vui lòng thử lại sau.').show();
	});
});

$('input').on('change keyup paste search', function () {
	if ($(this).val().trim() === '') {
		$(this).addClass('error');
		$(this).closest('.input').find('.error-icon').show();
		$(this).closest('.input').find('.error-message').css('display', 'block');
	} else {
		$(this).removeClass('error');
		$(this).closest('.input').find('.error-icon').hide();
		$(this).closest('.input').find('.error-message').css('display', 'none');
	}
});

$('input[name=email]').on('change keyup paste search', function () {
	$('.ajax-error').hide();
	const email = $(this).val().trim();
	if (email === '') {
		isError = true;
		$(this).addClass('error');
		$(this).closest('.input').find('.error-icon').show();
		$(this).closest('.input').find('.error-message').css('display', 'block');
		$(this).closest('.input').find('.error-message').text('Vui lòng nhập email');
	} else if (!isValidEmailAddress(email)) {
		isError = true;
		$(this).addClass('error');
		$(this).closest('.input').find('.error-icon').show();
		$(this).closest('.input').find('.error-message').css('display', 'block');
		$(this).closest('.input').find('.error-message').text('Vui lòng nhập đúng định dạng email');
	} else {
		$(this).removeClass('error');
		$(this).closest('.input').find('.error-icon').hide();
		$(this).closest('.input').find('.error-message').css('display', 'none');
	}
});

$('input[name=is_accept]').on('change keyup paste search', function () {
	if ($(this).is(':checked') == false) {
		$(this).addClass('error');
	}
});
