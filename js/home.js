/* Owl Carousel */
$(document).ready(function () {
    const owl1 = $("#owl-1");
    owl1.owlCarousel({
        margin: 40,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $('#owl-1-next').click(() => {
        owl1.trigger('next.owl.carousel');
    })
    $('#owl-1-prev').click(() => {
        owl1.trigger('prev.owl.carousel');
    })
    const owl2 = $("#owl-2");
    owl2.owlCarousel({
        margin: 10,
        rtl: true,
        dots: false,
        responsive: {
            0: {
                items: 1,

            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });
    $('#owl-2-next').click(() => {
        owl2.trigger('next.owl.carousel');
    })
    $('#owl-2-prev').click(() => {
        owl2.trigger('prev.owl.carousel');
    })
    const owl3 = $("#owl-3");
    owl3.owlCarousel({
        margin: 10,
        rtl: true,
        dots: false,
        responsive: {
            0: {
                items: 1,

            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });
    $('#owl-3-next').click(() => {
        owl3.trigger('next.owl.carousel');
    })
    $('#owl-3-prev').click(() => {
        owl3.trigger('prev.owl.carousel');
    })
});