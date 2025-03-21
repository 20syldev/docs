$(document).ready(function() {
    // Debounce function to optimize resize events
    function debounce(func, wait) {
        let timeout;
        return function () {
            clearTimeout(timeout);
            timeout = setTimeout(func, wait);
        };
    }

    // Toggle sidebar full-width
    $('.btn-toggle-fullwidth').on('click', function() {
        $(this).find('.fa-solid').toggleClass('fa-caret-left fa-caret-right');

        // For mobile sizes, toggle offcanvas sidebar
        if ($(window).innerWidth() < 1278) {
            $('body').toggleClass('offcanvas-active');
        }
    });

    // Handle resize events
    $(window).on('resize', debounce(function () {
        if ($(window).innerWidth() >= 1278) {
            $('body').removeClass('offcanvas-active');
        }
    }, 200));

    // On window load, adjust height
    $(window).on('load', function() {
        if ($('.main').height() < $('#sidebar-nav').height()) {
            $('.main').css('min-height', $('#sidebar-nav').height());
        }
    });

    // Toggle active class for collapsed elements
    $('.sidebar a[data-bs-toggle="collapse"]').on('click', function() {
        $(this).toggleClass('active');
    });
});
