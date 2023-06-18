(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);



// about me box
fetch('index.html')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(data, 'text/html');
    const aboutMeDiv = htmlDoc.getElementById('about_me');
    const readMoreLink = htmlDoc.getElementById('read_more');
    readMoreLink.remove(); // Remove unwanted element
    document.getElementById('about_me_container').appendChild(aboutMeDiv);
  });

//   footer
  fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(data, 'text/html');
    const footerDiv = htmlDoc.getElementById('footer');
    document.getElementById('footer').appendChild(footerDiv);
  });

//   Portfolio
  fetch('portfolio.html')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(data, 'text/html');
    const mySkillsDiv = htmlDoc.getElementById('mySkills');
    document.getElementById('mySkills_1').appendChild(mySkillsDiv);
  });

//   Img Box
  var fullImgBox = document.getElementById("fullImgBox");
  var fullImg = document.getElementById("fullImg");

  function openFullImg(pic) {
      fullImgBox.style.display = "flex";
      fullImg.src = pic;
      image_1.style.display = "flex";
  }

  function closeFullImg() {
      fullImgBox.style.display = "none";
  };

  let imgBx = document.querySelectorAll('.imgBx');
  imgBx.forEach(popup => popup.addEventListener('click', () => {
      popup.classList.toggle('active')
  }))

//   Carousel
const carousel = document.querySelector('.gallery-carousel');
const slides = carousel.querySelector('.carousel-slides');
const dots = carousel.querySelector('.carousel-dots');
const images = slides.querySelectorAll('img');
const dotArray = [];

let index = 0;

function showImage() {
  images.forEach(image => image.classList.remove('active'));
  images[index].classList.add('active');
  
  dotArray.forEach(dot => dot.classList.remove('active'));
  dotArray[index].classList.add('active');

  index = (index + 1) % images.length;
}

function createDots() {
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    dot.addEventListener('click', () => {
      index = i;
      showImage();
    });
    dots.appendChild(dot);
    dotArray.push(dot);
  }
  dotArray[0].classList.add('active');
}

createDots();

showImage(); // Show the first image immediately

setInterval(showImage, 5000); // Show the next image every 5 seconds

