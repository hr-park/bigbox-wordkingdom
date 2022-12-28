$(function(){
	var visual_slide = new Swiper('.visual_slide', {
		effect : 'fade', 
		autoplay: {
			delay: 3000,
		},
		spaceBetween: 104,
		//speed: 1000,
		arrows: true,
		loop:true,
		navigation: {
			nextEl: '.visual_slide .swiper-button-next',
			prevEl: '.visual_slide .swiper-button-prev',
		},
		pagination: {
			el: ".visual_slide .swiper-pagination",
		},
	});

	var slide_game = new Swiper('.slide_game', {
		spaceBetween: 53,
		speed: 1000,
		arrows: true,
		navigation: {
			nextEl: '.slide_game .swiper-button-next',
			prevEl: '.slide_game .swiper-button-prev',
		},
		pagination: {
			el: ".slide_game .swiper-pagination",
		},
	});

	var slide_card = new Swiper('.slide_card', {
		spaceBetween: 53,
		speed: 1000,
		arrows: true,
		navigation: {
			nextEl: '.slide_card .swiper-button-next',
			prevEl: '.slide_card .swiper-button-prev',
		},
		pagination: {
			el: ".slide_card .swiper-pagination",
		},
	});

	var pop_slide_intro = new Swiper('.pop_slide_intro', {
		speed: 1000,
		arrows: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.pop_slide_intro .swiper-button-next',
			prevEl: '.pop_slide_intro .swiper-button-prev',
		},
		pagination: {
			el: ".pop_slide_intro .swiper-pagination",
		},
	});
			

	var tab_slide = new Swiper('.tab_slide', {
		autoplay: {
		  delay: 2000
		},
		autoplayDisableOnInteraction:false,
		speed: 1000,
		arrows: false,
		pagination: {
			el: ".tab_slide .swiper-pagination",
		},
		/*on: {
			slideChange: function () {
				var slider = this;
				if (tab_slide.activeIndex == 3) {
					$('.tab li').addClass('active');
 
				} else{
					$('.tab li').removeClass('active');
					$('.tab li').eq(tab_slide.activeIndex).addClass('active');
				}
			}
		}*/
	});

	/*$('.section3 .tab li').click(function () {
		var thisIdx = $(this).index();
		tab_slide.slideTo(thisIdx, 300, false);
	});*/

	$('.btn_video_pop').click(function(){
		$('.pop_video iframe').attr('src','https://www.youtube.com/embed/GbEE6qxG7cs');
	});

	$('.pop_video .btn_close').click(function(){
		$('.pop_video iframe').attr('src','');
	});

	var slide_grm = new Swiper('.slide_grm', {
		effect : 'fade', 
		//direction: 'vertical',
		autoplay: {
		  delay: 2000
		},
		//speed: 1000,
		observer: true,
		observeParents: true,
	});	
});

//팝업 열기
function openPop(id) {
	$('body').css('overflow','hidden');
	$('.dim').show();
	$('.pop_wrap').hide();
	$('#'+ id).show();
}
//팝업 닫기
function closePop(id) {
	$('body').css('overflow','visible');
	$('.dim').hide();
	$('#'+ id).hide();
}
