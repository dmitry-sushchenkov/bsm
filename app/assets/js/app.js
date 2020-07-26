ScrollReveal({
    delay: 0,
    distance: '100px',
    duration: 600,
    // easing: 'cubic-bezier(0.5, 0, 0, 1)',
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
ScrollReveal().reveal("[data-reveal-section]", { viewFactor: .2 }); // sections
ScrollReveal().reveal("[data-reveal-grid] > *", { viewFactor: .2, interval: 200 }); 
ScrollReveal().reveal(".p-home .tabs", { viewFactor: .2 }); // cards in grid

$(window).scroll(function() {           
    var st = $(this).scrollTop(); 
    $("span").css({ "transform" : "translate( -" + st /120 + "%" });
});