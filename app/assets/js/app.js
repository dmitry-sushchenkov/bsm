ScrollReveal({
    delay: 0,
    distance: '100px',
    duration: 600,
    easing: 'cubic-bezier(.25,.1,.25,1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },
    scale: 1,
    cleanup: false,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.0,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    afterReset: function afterReset(el) {},
    afterReveal: function afterReveal(el) {},
    beforeReset: function beforeReset(el) {},
    beforeReveal: function beforeReveal(el) {}
});

ScrollReveal().reveal("[data-reveal-title]", { viewFactor: .2 });
ScrollReveal().reveal("[data-reveal-section-head] > *", { viewFactor: .2 });
ScrollReveal().reveal("[data-reveal-section]", { viewFactor: .2 });
ScrollReveal().reveal("[data-reveal-grid] > *", { viewFactor: .2, interval: 200 }); 
ScrollReveal().reveal(".p-home .tabs", { viewFactor: .2 });

$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
    });

    $('.btn-prev').on('click', function() {
        $('.slider').slick('slickPrev');
    });

    $('.btn-next').on('click', function() {
        $('.slider').slick('slickNext');
    });
});

var header = $('nav'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});

$(window).scroll(function() {           
    var st = $(this).scrollTop(); 
    $(".demands span").css({ "transform" : "translate( -" + st /120 + "%" });
});

window.onload = function() {
    const video = selector => document.querySelector(selector),
        on = 'addEventListener';

        video('#btnPlay')[on]('click', () => myPlayer.play());
        video('#myPlayer')[on]('click', () => myPlayer.pause());

        $('#btnPlay').click(function () {
            $('.video__play').fadeOut(500);
        })

        $('#myPlayer').click(function () {
            $('.video__play').fadeIn(500);
        })
}

$('.open__info').click(function () {
    $('.info__img').slideToggle(300);
    $(this).toggleClass('open');  
})

DG.then(function () {
    map = DG.map('map', {
        center: [43.107631, 131.875720],
        zoom: 17,
        touchZoom: true,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        geoclicker: false,
        zoomControl: false,
        boxZoom: false,
        fullscreenControl: false,
    });

myIcon = DG.icon({
    iconUrl: '/assets/icons/marker.svg',
        iconSize: [100]
    });

    DG.marker([43.107631, 131.875720], {
        icon: myIcon
    }).addTo(map);
});