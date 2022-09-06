$(document).ready(function(){

    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
   
    $('.top-nav .nav-links').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    $('.skill-per').each(function(){
        var $this = $(this);
        var per=$this.attr('per');
        $this.css("width",per+"%");
        $({animateValue:0}).animate({animateValue:per},{
            duration :1000,
            step: function(){
                $this.attr('per',Math.floor(this.animateValue)+ "%");
            },
            complete: function(){
            $this.attr('per',Math.floor(this.animateValue)+ "%");
            }

        });


    });
    $('.scroll-to-acceuil').click(function () {
        $('html,body').animate({
            scrollTop: $('header').offset().top
        },1000);
    });

    $('.scroll-to-about').click(function () {
        $('html,body').animate({
            scrollTop: $('.about').offset().top
        },1000);
    });
    $('.scroll-to-cv').click(function () {
        $('html,body').animate({
            scrollTop: $('.career').offset().top
        },1000);
    });
    $('.scroll-to-services').click(function () {
        $('html,body').animate({
            scrollTop: $('.my-services').offset().top
        },1000);
    });
    $('.scroll-to-porfolio').click(function () {
        $('html,body').animate({
            scrollTop: $('.portfolio').offset().top
        },1000);
    });
    $('.scroll-to-contact').click(function () {
        $('html,body').animate({
            scrollTop: $('.contact-info').offset().top
        },1000);
    });
    $('.scroll-contact').click(function () {
        $('html,body').animate({
            scrollTop: $('.contact-info').offset().top
        },1000);
    });
    $('.scroll-portfolio').click(function () {
        $('html,body').animate({
            scrollTop: $('.portfolio').offset().top
        },1000);
    });
    $('.scroll-portfolio').click(function () {
        $('html,body').animate({
            scrollTop: $('.portfolio').offset().top
        },1000);
    });
    
    $('.scroll-header').click(function () {
        $('html,body').animate({
            scrollTop: $('header').offset().top
        },1000);
    });

    gsap.from('.landing-text h1', {
        duration: 2,
        delay: .8,
        opacity: 0,
        scale: .7

    });
    
    gsap.from('.landing-text h6', {
        duration:1.6,
        delay:1.7,
        opacity:0,
        x:-45
    });
    gsap.from('.logo-name', {
        duration:1,
        delay:3,
        opacity:0,
        x:-35
    });
    gsap.from('.menu-toggler', {
        duration:1.6,
        delay:3.6,
        opacity:0,
        x: 45,
        stagger:0.2
    });
   
  AOS.init();
  AOS.init({
    once: true
 })
  
    










});