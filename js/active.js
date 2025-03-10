$(document).ready(function() {
	
	/*
		Aleksey Skubaev

		askubaev@gmail.com
		icq - 322253350
		Разработка шаблонов для DLE и кроссбраузерная верстка
		------------------
		Необходимые jQuery скрипты.
	
	*/
	
	$('body').on('click', '.oom', function(){
		$('.mpanel').fadeIn();
		$('body').toggleClass('vntyhj-fix-scroll');
		return false;
	});
	
	$('body').on('click', '.mpanel-close', function(){
		$('.mpanel').fadeOut();
		$('body').toggleClass('vntyhj-fix-scroll');
		return false;
	});
	
	
	
	$('body').on('click', '.vntyhj-mindex ol li', function(){
		$('html, body').animate({
			scrollTop: -200 + $('.vntyhj-bnts [rel="'+$(this).attr('rel')+'"]').offset().top
		}, 800);
		return false;
	});
	
	$('body').on('click', '.faq-title', function(){
		$(this).parent().toggleClass('faq-active');
		$(this).parent().find('.faq-text').slideToggle(200);
		return false;
	});
	
	let swiper1 = new Swiper('.sld1', {
		slidesPerView: 2,
		spaceBetween: 20,
		lazy: true,
		pagination: {
			el: ".hslider-nav",
			clickable: true,
		},
		navigation: {
			nextEl: ".vntyhj-sld1-right",
			prevEl: ".vntyhj-sld1-left",
		},
		 autoplay: {
          delay: 10000,
          disableOnInteraction: false,
        },
		loop: true,
		
		breakpoints: {
			730: {
			  slidesPerView: 1,
			},
			1600: {
			  slidesPerView: 'auto',
			},
		  },
	});
	
			$('body').on('click', '.vntyhj-head-promo', function(){
				var $temp = $("<input>");
				$("body").append($temp);
				$temp.val($('.vntyhj-head-promo-code span').text()).select();
				document.execCommand("copy");
				$temp.remove();
				
				DLEalert('Код скопирован');
				
				return false;
			});	
			
	$('.vntyhj-bnts h1,.vntyhj-bnts h2, .vntyhj-bnts h3, .vntyhj-bnts h4, .vntyhj-bnts h5').addClass('npn');
	var i = 1;
	$('.npn').each(function(){
	   $(this).attr('rel',i)
	   $('.vntyhj-mindex ol').append('<li rel="'+i+'">'+$(this).text()+'</li>');
	   i++;
	});
	
	
	$('.tt-tabs').ttabs();
	
	var handleMatchMedia = function (mediaQuery) {
		if (mediaQuery.matches) {
			
			$('.cln2').clone().appendTo('.mpanel2');
			$('.cln').clone().appendTo('.mpanel2');
			
			
		} else {
			
			$('.mpanel2').empty();
			
		}
	}
	mql = window.matchMedia('all and (max-width: 1200px)');

	handleMatchMedia(mql);
	mql.addListener(handleMatchMedia); 
	
	
});
