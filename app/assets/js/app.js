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

ScrollReveal().reveal("[data-reveal-title]", {
    viewFactor: .2
});
ScrollReveal().reveal("[data-reveal-section-head] > *", {
    viewFactor: .2
});
ScrollReveal().reveal("[data-reveal-section]", {
    viewFactor: .2
});
ScrollReveal().reveal("[data-reveal-grid] > *", {
    viewFactor: .2,
    interval: 200
});
ScrollReveal().reveal(".p-home .tabs", {
    viewFactor: .2
});

$(function () {
    $(".resume__form-trigger").click(function (event) {
        event.preventDefault()
        $(this).hide();
        $(".resume__form").fadeIn(300);
        $("#intro .buy").addClass("active");
        $("#intro h1").addClass("source");
    });
    $(".resume__form .more-trigger").click(function (event) {
        event.preventDefault()
        $(this).hide();
        $(this).next().slideDown(200);
    });
    $("input.number").keypress(function (event) {
        var key, keyChar;
        if (!event) var event = window.event;
        if (event.keyCode) key = event.keyCode;
        else if (event.which) key = event.which;
        if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
        keyChar = String.fromCharCode(key);
        if (!/\d/.test(keyChar)) return false;
    });
    $(".resume__form input.required").on("change paste keyup", function () {
        var step = $(this).parents(".step");
        var next = $(step).find(".next-step");
        $(step).find(".required").each(function () {
            if ($(this).val()) {
                $(next).removeClass("disabled");
            } else {
                $(next).addClass("disabled");
            }
        });
    });

    $(".custom-select ul").click(function () {
        var select = $(this).closest(".custom-select");
        if (!$(select).hasClass("disabled")) {
            if ($(select).hasClass("active")) {
                $(select).removeClass("active");
            } else {
                $(select).addClass("active");
            }
        }
    });


    $(".custom-select li").click(function () {
        var select = $(this).closest(".custom-select");
        $(select).find("input").val($(this).text());
        if ($(select).hasClass("container-type")) {

            if ($(".container-condition input").val()) {
                $(this).closest(".step").find(".next-step").removeClass("disabled");
            }
        }
        if ($(select).hasClass("container-condition")) {
            if ($(".container-type input").val()) {
                $(this).closest(".step").find(".next-step").removeClass("disabled");
            }
        }
    });
    $(".containers-intro .container-type li.active").click().closest(".custom-select").removeClass("active");

    $(".resume__form .next-step").click(function (event) {
        event.preventDefault()
        $('body,html').animate({
            scrollTop: 0
        }, 100);
        $(".resume__form .step.active").hide().removeClass("active").next().fadeIn(1000).addClass("active");
        $(".resume__form .steps-switcher .active").removeClass("active").addClass("done").next().addClass("active");
        $(".resume__form .steps-switcher").hide().fadeIn(500);
    });
    $(".resume__form .steps-switcher li").click(function () {
        var num = $(this).index() + 1;
        $(".resume__form .step.active").hide().removeClass("active");
        $(".resume__form .step:nth-of-type(" + num + ")").fadeIn(500).addClass("active");
        $(this).addClass("active").siblings().removeClass("active");
        $(".resume__form .steps-switcher").hide().fadeIn(500);
    });
});

$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
    });

    $('.btn-prev').on('click', function () {
        $('.slider').slick('slickPrev');
    });

    $('.btn-next').on('click', function () {
        $('.slider').slick('slickNext');
    });
});

var header = $('nav'),
    scrollPrev = 0;

$(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 100 && scrolled > scrollPrev) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});

$(window).scroll(function () {
    var st = $(this).scrollTop();
    $(".demands span").css({
        "transform": "translate( -" + st / 120 + "%"
    });
});

window.onload = function () {
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

$('.btn-cloce').click(function () {
    $('.widget').slideUp(200);
})

$('.open__info').click(function () {
    $('.info__img').slideToggle(300);
    $(this).toggleClass('open');
})

$('.nav__burger').click(function () {
    $(this).toggleClass('is-active');
    $('body').toggleClass('menu-open');
    $('.nav__block').slideToggle(400);
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