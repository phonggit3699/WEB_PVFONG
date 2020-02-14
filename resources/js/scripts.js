//-------------show-slide------------------------------------------------//
var slides = $('.mySlides');
var dots = $('.dot');
var i;
var timer = null;
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}
function showSlides(n) {
  if (n === undefined) { n = ++slideIndex; }
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  timer = setTimeout(showSlides, 4000);
}


//-------------------owl------------------------------------------------------------------------//
$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
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
//-------------------------------------------about-user-------------------------------------------------//
// Login ----------------/
function login() {
  $('.about-user').removeClass('show');
  $('.about-user').addClass('show');
  $('.login-frame').css("display", "block");
  $('.create-frame').css("display", "none");
  $('.btnLogin2').addClass('bor-bot');
  $('.btnCreate2').removeClass('bor-bot');
}
$('.btnLogin').click(login);
$('.btnLogin2').click(login);
//-----Close-------------//
$('.btnClose').click(
  function change() {
    $('.about-user').removeClass('show');
  }
);
//-----Sign-up--------//
function signUp() {
  $('.about-user').removeClass('show');
  $('.about-user').addClass('show');
  $('.login-frame').css("display", "none");
  $('.create-frame').css("display", "block");
  $('.btnCreate2').addClass('bor-bot');
  $('.btnLogin2').removeClass('bor-bot');
}
$('.btnCreate').click(signUp);
$('.btnCreate2').click(signUp);
//-------------------seeMore-------------------//
$('.seeMore').click(
  function(){
    $('.some_products-row2').css("display", "block")
    $('.another').css("display", "none")
  }
)
