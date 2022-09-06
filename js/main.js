var spy = new Gumshoe('#nav  a');
// Burger
   $('.burger').on('click', function (event) {
        $(this).toggleClass('open');
        $('.navigation-bar').toggleClass('show');
    })

    // Darkmode
    $('.darkmode-btn').on('click', function (event) {
        $('body').toggleClass('darkmode');
    })

    // modal
    $('.btn-view1').on('click', function (event) {
        $('.modal-container1').addClass('active');
    })
    $('.btn-view2').on('click', function (event) {
        $('.modal-container2').addClass('active');
    })
    $('.btn-view3').on('click', function (event) {
        $('.modal-container3').addClass('active');
    })
    $('.btn-view4').on('click', function (event) {
        $('.modal-container4').addClass('active');
    })
    $('.btn-view5').on('click', function (event) {
        $('.modal-container5').addClass('active');
    })
    $('.btn-view6').on('click', function (event) {
        $('.modal-container6').addClass('active');
    })
    
    $('.close-modal').on('click', function(event){
        $('.modal-container1').removeClass('active');
    })
    $('.close-modal').on('click', function(event){
        $('.modal-container2').removeClass('active');
    })
    $('.close-modal').on('click', function(event){
        $('.modal-container3').removeClass('active');
    })
    $('.close-modal').on('click', function(event){
        $('.modal-container4').removeClass('active');
    })
    $('.close-modal').on('click', function(event){
        $('.modal-container5').removeClass('active');
    })
    $('.close-modal').on('click', function(event){
        $('.modal-container6').removeClass('active');
    })

// Sticky navbar
$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navHeight = $('header').height();
        if ($(window).scrollTop() > navHeight) {
            $('header').addClass('fixed');
         }
        else {
            $('header').removeClass('fixed');
         }
    });
});
// Scroll to TOP
var btn = $('.scrollup');
$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});

    // testmonial
    $('.testmonial-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: true,
        smartSpeed: 700,
        margin:30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
    // Reveal animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '90px',
        duration: 2000,
        reset: true
    });
    ScrollReveal().reveal('.social-icon, .feature-item, .progressbar-item, .services-block, .project-item, .form-item', { interval: 100 });
    ScrollReveal().reveal('.sub-heading');
    ScrollReveal().reveal('.col-right')
    ScrollReveal().reveal('.heading', { delay: 100 });
    ScrollReveal().reveal('.heading2', { delay: 200 });
    ScrollReveal().reveal('.paragraph', { delay: 300 });
    ScrollReveal().reveal('.btn-blk', { delay: 400 });
    // About
    ScrollReveal().reveal('.about-col-left');
    ScrollReveal().reveal('.about-heading');
    ScrollReveal().reveal('.about2', { delay: 100 });
    ScrollReveal().reveal('.about3', { delay: 200 });
    ScrollReveal().reveal('.about-btn-blk', { delay: 300 });
    // CTA
    ScrollReveal().reveal('.cta-inner', { delay: 100 })
    ScrollReveal().reveal('.btn-outline', { delay: 200 });
    // testmonail
    ScrollReveal().reveal('.testmonial-slider');
    // Contact form
    ScrollReveal().reveal('.contact-inner');
     ScrollReveal().reveal('.education-content');
      ScrollReveal().reveal('.item');
      ScrollReveal().reveal('.card');



 const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('#nav-content .close-btn');
const navLinks = document.querySelectorAll('#nav-content nav ul li a');
const scrollButton = document.querySelector(".scroll-top");

// scroll TOP Button Events

if(scrollButton){
  window.addEventListener('scroll', ()=> {
    if(pageYOffset > (window.innerHeight * 1.2)){
      scrollButton.style.display="flex";
    }else{
      scrollButton.style.display="none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

// Hamburger Menu events
hamburgerMenu.addEventListener('click', ()=>{
  navContent.classList.add('show');
  document.body.style.overflow="hidden";
});
closeNavButton.addEventListener('click', ()=>{
  navContent.classList.remove('show');
  document.body.style.overflow="initial";
});
navLinks.forEach( link => {
  link.addEventListener('click', ()=> {
    navContent.classList.remove('show');
    document.body.style.overflow="initial";
  })
})

$(document).ready(function() {
  
  setTimeout(function() {
    $('#ctn-preloader').addClass('loaded');
    // Una vez haya terminado el preloader aparezca el scroll
    $('body').removeClass('no-scroll-y');

    if ($('#ctn-preloader').hasClass('loaded')) {
      // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
      $('#preloader').delay(1000).queue(function() {
        $(this).remove();
      });
    }
  }, 3000);
  
});