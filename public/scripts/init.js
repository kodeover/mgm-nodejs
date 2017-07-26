(function ($) {
    $(function () {

        $('.button-collapse').sideNav({});

        $('.parallax').parallax();

        // SELF PARALLAX



        //Side Nav

        // $('.button-collapse').sideNav({
        //     menuWidth: 300, // Default is 300
        //     edge: 'right', // Choose the horizontal origin
        //     closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        //     draggable: true, // Choose whether you can drag to open on touch screens,
        //     onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
        //     onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed}
        // });

        // VIDEO

        document.getElementById("video").play();

        $(window).on('scroll', function () {
            var scrollTop = $(window).scrollTop(),
                elementOffset = $('.main_section').offset().top,
                distance = (elementOffset - scrollTop);

            if (distance > 120) {
                document.getElementById("video").play();

            } else if (distance < 120) {
                document.getElementById("video").pause();
            }


            // wHeight = window.innerHeight;
            // console.log(wHeight);
            // console.log("Scroll top:", scrollTop);
            // console.log("Distanta pana sus este:", distance);
        });

        //  Sticky Navbar
        $navbar_height = $('nav').height();
        $navbar = $('nav');
        $menu_items = $('#nav_bar ul a');
        $logo = $('nav .brand-logo');
        $main_logo = $('#logo-container img');
        $button_collapse = $('.button_collapse');
        $header = $('header');

        $(window).scroll(function () {
            if ($(this).scrollTop() > $navbar_height) {

                $navbar.addClass('sticky z-depth-1 animated fadeInDown');
                $menu_items.addClass('sticky_items');
                $logo.addClass('sticky_items');
                $main_logo.attr('src', '../img/m_logo.svg');
                $button_collapse.css('color', '#444');
                // $header.addClass('navbar-fixed');
                $navbar.css('position', 'fixed');
                $navbar.css('top', '0');

            } else {

                $navbar.removeClass('sticky z-depth-1');
                $menu_items.removeClass('sticky_items');
                $logo.removeClass('sticky_items');
                $main_logo.attr('src', '../img/m_logo_white.svg');
                $button_collapse.css('color', '#fafafa');
                // $header.removeClass('navbar-fixed');
                $navbar.css('position', 'absolute');
                $navbar.css('top', '20px');
            }
        });

        //    Action Button
        // $('.fixed-action-btn').openFAB();
        // $('.fixed-action-btn').closeFAB();
        // $('.fixed-action-btn.toolbar').openToolbar();
        // $('.fixed-action-btn.toolbar').closeToolbar();


        //    Scrollspy
        $('.scrollspy').scrollSpy();

        // Smooth scrolling


        //    Side menu

        $side_menu_btn = $('#side_menu_btn');
        $side_nav = $('#nav_mobile');
        $menu_icon = $('#hamburger_icon');

        function hamburger() {
            $menu_icon_val = $menu_icon.text();

            if ($menu_icon_val === "menu") {

                $menu_icon.empty();
                $menu_icon.text('close');
                $menu_icon.toggleClass('animated rotateIn');

            } else if ($menu_icon_val === "close") {

                $menu_icon.empty();
                $menu_icon.text('menu');
                $menu_icon.toggleClass('animated rotateIn');
            }
        }


        $side_menu_btn.click(function () {
            $side_nav.addClass('animated');
            $side_nav.addClass('flip');
            $side_nav.toggle();
            $('body').toggleClass('fix_the_body');
            $('#sidenav_overlay').toggleClass('side_overlay');
            hamburger();
        });

        $nav_link = $('.nav_link');

        $nav_link.click(function () {
            $side_nav.toggle();
            $('body').toggleClass('fix_the_body');
            $('#sidenav_overlay').toggleClass('side_overlay');
            hamburger();
        });


        //    MODAL

        $(document).ready(function () {
            // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
            $('.modal').modal();
        });

        //MATERIALBOXED

        $(document).ready(function () {
            $('.materialboxed').materialbox();
        });

        //    SLIDER

        $(document).ready(function () {

            $left = $('#left_arrow');
            $right = $('#right_arrow');

            $('.slider').slider();

            $left.click(function () {
                $('.slider').slider('prev');
            });

            $right.click(function () {
                $('.slider').slider('next');
            })

        });


    }); // end of document ready
})(jQuery); // end of jQuery name space

