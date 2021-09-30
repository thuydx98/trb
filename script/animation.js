$(window).on('load', function () {
	$('.field-wrapper .field-placeholder').on('click', function () {
		$(this).closest('.field-wrapper').find('input').focus();
	});
	$('.field-wrapper input').on('keyup', function () {
		var value = $.trim($(this).val());
		if (value) {
			$(this).closest('.field-wrapper').addClass('hasValue');
		} else {
			$(this).closest('.field-wrapper').removeClass('hasValue');
		}
	});

	$('.field-wrapper input').on('search', function () {
		var value = $.trim($(this).val());
		if (value) {
			$(this).closest('.field-wrapper').addClass('hasValue');
		} else {
			$(this).closest('.field-wrapper').removeClass('hasValue');
		}
	});

	$('.field-wrapper .select-items div').on('click', function () {
		var value = $.trim($(this)[0].innerHTML);
		if (value) {
			$(this).closest('.field-wrapper').addClass('hasValue');
		}
	});
});
