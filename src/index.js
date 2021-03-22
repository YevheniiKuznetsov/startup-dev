import 'bootstrap/dist/css/bootstrap.min.css';
import './less/fonts.less';
import './less/style.less';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import MyGrid from './modules/my-grid/my-grid.js';
import './modules/my-grid/my-grid.less';
import icons from 'glyphicons';

$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		navText: ["<img src='src/images/prevslide.png'>", "<img src='src/images/nextslide.png'>"],
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 3,
				nav: false
			},
			1000: {
				items: 4,
				nav: true,
				loop: false
			}
		},
	});



	$("a.topLink").click(function () {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});


	function menu() {
		var n = false;

		$(window).scroll(function (event) {
			var scroll = $(window).scrollTop();
			var viewportHeight = $(window).outerHeight();
			$('.mobile-menu')[0].style.height = '0'
			//$('.mobile-menu')[0].style.display="none";
			if (n) mobileIconAnimation();
			n = false;
			if (scroll > 0 && scroll < viewportHeight - 55) {
				$("#navigation").css({
					'background': 'rgba(192, 48, 28, 1)'
				});
			} else if (scroll >= viewportHeight - 55 || scroll === 0) {
				$("#navigation").css({
					'background': ''
				});
			};
			scroll >= viewportHeight - 55 ? $("#navigation").addClass('scroll') : $("#navigation").removeClass('scroll');
		});

		$(".block-icon").click(function () {
			showMobileMenu();
			mobileIconAnimation();
		});


		function showMobileMenu() {
			n = !n;
			n ? $('.mobile-menu')[0].style.height = '260px' : $('.mobile-menu')[0].style.height = '0';
			//        n ? $('.mobile-menu')[0].style.display="block" : hide();
			//        function hide(){
			//            $('.mobile-menu')[0].style.display="none";
			//        };
		};

		function mobileIconAnimation() {
			$(".stick").toggleClass(function () {
				return $(this).is('.open, .close') ? 'open close' : 'open';
			});
		};
	};
	menu();

	var my = new MyGrid({
		quantityRowElements: 4,
		rowGap: '30px',
		elementGap: '30px',
		responsive: [
			{
				breakpoint: 1280,
				quantityRowElements: 3
			},
			{
				breakpoint: 720,
				quantityRowElements: 2
			},
			{
				breakpoint: 320,
				quantityRowElements: 1
			},
		]
	});
	my.myStart()
});