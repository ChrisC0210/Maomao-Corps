$(function () {
  console.log('Hello Bootstrap5');
  $(".login-click").click(function () {
    $(this).text(function (i, text) {
      return text === "登入/註冊" ? "登出" : "登入/註冊";
    })
  });
  //
  $('.banner-slide').slick({
    dots: true,
    arrows: false,
    lazyLoad: 'ondemand',
  });
  //
  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    //centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          //centerPadding: '20px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          //centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});