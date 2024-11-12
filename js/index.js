$(document).ready(function() {
    $('.btn-toggle-fullwidth').on('click', function() {
        $('body').toggleClass('layout-fullwidth');
        $(this).find('.fa-solid').toggleClass('fa-caret-left fa-caret-right');
        if($(window).innerWidth() < 1025) $('body').toggleClass('offcanvas-active');
    });

    $(window).on('load', function() {
        if($(window).innerWidth() < 1025) {
            $('.btn-toggle-fullwidth').find('.icon-arrows')
                .removeClass('icon-arrows-move-left').addClass('icon-arrows-move-right');
        }
        $('.right-sidebar').css('top', $('.navbar').innerHeight());
        if($('.has-content-menu').length > 0) {
            $('.navbar + .main-content').css('padding-top', $('.navbar').innerHeight());
        }
        if($('.main').height() < $('#sidebar-nav').height()) {
            $('.main').css('min-height', $('#sidebar-nav').height());
        }
        reorderMenuItems();
    });

    $('.sidebar a[data-toggle="collapse"]').on('click', function() {
        $(this).toggleClass('active');
    });

    $('.panel .btn-remove').click(function(e) {
        e.preventDefault();
        $(this).parents('.panel').fadeOut(300, function() {
            $(this).remove();
        });
    });

    function reorderMenuItems() {
        var count = 1;
        $('.nav > li').each(function() {
            var subMenu = $(this).find('.collapse');
            if(subMenu.length) {
                var newId = 'subPages' + count;
                subMenu.attr('id', newId);
                $(this).children('a').attr('href', '#' + newId);
                count++;
            }
        });
    }
});

$.fn.clickToggle = function(f1, f2) {
    return this.each(function() {
        var clicked = false;
        $(this).on('click', function() {
            clicked ? (clicked = false, f2.apply(this, arguments)) : (clicked = true, f1.apply(this, arguments));
        });
    });
}
