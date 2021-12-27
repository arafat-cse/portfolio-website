$('.home-middle-content').animatedHeadline({
    animationType: 'rotate-1',
    animationDelay: 2500,
    barAnimationDelay: 3800,
    barWaiting: 800,
    lettersDelay: 50,
    typeLettersDelay: 150,
    selectionDuration: 500,
    typeAnimationDelay: 1300,
    revealDuration: 600,
    revealAnimationDelay: 1500
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
// ===============---->

$(document).ready(function () {
    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar-nav",
        offset: 67
    });
    // Add smooth scrolling on all links inside the navbar
    $(".navbar-nav a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
            $(".navbar-collapse").collapse("hide");

        } // End if

    });

    $('.portfolio-gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    var $gallery = $('#gellary').isotope({

    });

    $('.filter').on('click', 'span', function () {
        var filtervalue = $(this).attr('data-filter');
        $gallery.isotope({
            filter: filtervalue
        });
    });

    $('.filter').on('click', 'span', function () {
        $(this).addClass('active').siblings().removeClass('active')
    });

    $('.skill-per').each(function () {
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width", per + '%');
        $({
            animatedValue: 0
        }).animate({
            animatedValue: per
        }, {
            duration: 5000,
            step: function () {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            },
            complete: function () {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            }
        });
    });

    $('#videolink').magnificPopup({
        type: 'inline',
        midClick: true
    });

    // tabs services
    $("#services-tabs").responsiveTabs({
        animation: 'fade',
        duration: 500,
    });


});
// header fixed
window.onscroll = function () {
    const docScrollTop = document.documentElement.scrollTop;
    if (window.innerWidth > 991) {
        if (docScrollTop > 100) {
            document.querySelector(".header").classList.add("fixed")
        } else {
            document.querySelector(".header").classList.remove("fixed")
        }
    }
}
$(document).ready(function () {

      $('#videolink').magnificPopup({
          type: 'inline',
          midClick: true
      });
      
    $('#testimonial-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 1
            }
        }
    });
});

const navbar = document.querySelector(".priching-chart");
a = navbar.querySelectorAll(".priicing-cont-items-dec");


a.forEach(function (element) {
    element.addEventListener("click", function () {
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove("active");
        }

        this.classList.add("active")
        document.querySelector(".accordion").classList.toggle("show");
    })
});
// navbar links

// const navbar = document.querySelector( ".navbar" );
// a = navbar.querySelectorAll( "a" );


// a.forEach( function ( element ) {
//     element.addEventListener( "click", function () {
//         for ( let i = 0; i < a.length; i++ ) {
//             a[ i ].classList.remove( "active" );
//         }

//         this.classList.add( "active" )
//         document.querySelector( ".navbar" ).classList.toggle( "show" );
//     } )
// } )
