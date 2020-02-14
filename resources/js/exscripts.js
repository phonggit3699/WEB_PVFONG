//-------img-slide-----------------------------------//
var slideIndex;
var img = $('.imgSlide');
var imgClick = $('.img-click');
function currentImg(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  for (i = 0; i < imgClick.length; i++) {
    imgClick[i].className = imgClick[i].className.replace(" blueborder", "");
  }
  img[slideIndex-1].style.display = "block";
  imgClick[slideIndex-1].className +=" blueborder";
}

$('.owl-carousel').owlCarousel({
  loop: true,
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
//---------------------------------------------------------------//
//-------------Choose-Btn---------------------//
$('.btn-plus').click(
    function () {
        var value = $('.quantity').val();
        if (value >= 10) {$('.quantity').val("10")}
        else{
            value++;
            $('.quantity').val(value);
        }
        
    }
);
$('.btn-minus').click(
    function () {
        var value = $('.quantity').val();
        if (value <= 1) {$('.quantity').val("1")}
        else {
            value--;
            $('.quantity').val(value);
        } 
    }
)
//-----------------------------------------------------------//
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