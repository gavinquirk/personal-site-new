// Portfolio Nav Scroll
$(".portfolio-link").click(function(){
    $('html,body').animate({
        scrollTop: $(".portfolio-section").offset().top
     });
});

// Contact Nav Scroll
$(".contact-link").click(function(){
    $('html,body').animate({
        scrollTop: $(".contact-section").offset().top
     });
});