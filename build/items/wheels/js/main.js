$(function () {
	$('.click').click(function () {
		$('.menu__dropdown-menu').toggle();
		$('.menu__text').toggle();
		$('.menu__burger-item:nth-child(1)').toggleClass('first');
		$('.menu__burger-item:nth-child(2)').toggleClass('middle');
		$('.menu__burger-item:nth-child(3)').toggleClass('last');
	});
});