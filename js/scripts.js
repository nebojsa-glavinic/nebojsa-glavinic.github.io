
(function($) {
    
    // Remove no-js class
    $('html').removeClass('no-js');

    
    //typeit
    new TypeIt("#ng", {
		strings: "Nebojša Glavinić",
		speed: 72,
		waitUntilVisible: true,
		cursor:false
	}).go();

    //About - img slider
	$(document).ready(function(){
		slideShow();
	   });
		function slideShow() {
		var current = $('.pic .show');
		var next = current.next().length ? current.next() : current.parent().children(':first');
	   
		current.hide().removeClass('show');
		next.fadeIn().addClass('show');
	   
        setTimeout(slideShow, 4400);
    }

    //All Projects - slick plugin
    
    $('.responsive').slick({
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
            }
          }
        ]
    });
    //Counter - Statistics
    function counterUp(elem, duration, delay){
		var animationStarted = false;
		var value = parseFloat(elem.innerText);
		var starter = 0;
		var steps = duration / delay;
		var step = value / steps;
		elem.innerText = starter;
		function startAnimate(){
		    var intId = setInterval(function(){
		        if  (starter >= value){
		            starter = value;
		            clearInterval(intId);
		        }
		        elem.innerText = starter.toFixed(0);
		        starter += step;
		    }, delay)
		}
		document.addEventListener("scroll", function(){
		    //var windowHeight = window.innerHeight;
		    var scrollTop = elem.getBoundingClientRect().top;
		    if(scrollTop < 800 && !animationStarted){
		        startAnimate();
		        animationStarted = true;
		    }
		});
	}
	var elements = document.querySelectorAll(".count");
	elements.forEach(function(el){
		counterUp(el, 2000, 20);
	});
    //Menu
	const menuLinks = [
		{
			link: "#about",
			title: "About"
		},
		{
			link: "#experience",
			title: "Experience"
		},
		{
			link: "#education",
			title: "Education"
		},
		{
			link: "#projects",
			title: "Projects"
		},
		{
			link: "#skills",
			title: "Skills"
		},
		{
			link: "#contact",
			title: "Contact"
		},
	]; 
	function addMenuLink(menuLink) {
        var liPlacehoder = document.createElement('li');
        var linkPlaceholder = document.createElement('a');
        linkPlaceholder.innerHTML = menuLink.title;
        linkPlaceholder.href = menuLink.link;

        liPlacehoder.appendChild(linkPlaceholder);
		document.getElementById('menu').appendChild(liPlacehoder);
	};
    menuLinks.forEach(element=>addMenuLink(element));

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

    // Testimonials
    $('.testimonial-pics img').click(function(){
        $(".testimonial-pics img").removeClass("active");
        $(this).addClass("active");
        $(".testimonial").removeClass("active");
        $("#"+$(this).attr("alt")).addClass("active");
    });

})(jQuery);
