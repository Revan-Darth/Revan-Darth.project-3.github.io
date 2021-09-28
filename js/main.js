$(document).ready(function()	{
	$('.portfolio__link').click(function(tabs){
		tabs.preventDefault();

		$('.portfolio__link').removeClass('portfolio__link--active');
		$('.portfolio__tabs_content').removeClass('portfolio__tabs--active');

		$(this).addClass('portfolio__link--active');
		$($(this).attr('href')).addClass('portfolio__tabs--active');
	});

		$('.portfolio__link:first').click();

		$('.adaptive__btn').click(function(event){
			$('.adaptive__btn, .adaptive__menu').toggleClass('active');
		});
});