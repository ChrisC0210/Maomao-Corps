$(function () {
  // console.log('Hello Bootstrap5');
  // $(".login-click").click(function () {
  //   $(this).text(function (i, text) {
  //     return text === "登入/註冊" ? "登出" : "登入/註冊";
  //   })
  // });
  //
  //
  window.addEventListener('load', function () {
    $('.banner-slide').slick({
      dots: true,
      arrows: false,
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 5000,
    });
    $('.doctor-slide').slick({
      dots: true,
      arrows: false,
      lazyLoad: 'ondemand',
    });
    //partner slider
    $('.partner-slide').slick({
      arrows: false,
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
    //
    AOS.refresh();
  });
  $(window).on("scroll", function () {
    AOS.init({
    });
  });
  //sweet alert
  $('#button1').click(function () {
    let timerInterval
    Swal.fire({
      title: '驗證碼已寄出！',
      //html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  });
  $('#button2').click(function () {
    let timerInterval
    Swal.fire({
      title: '恭喜，完成訂閱！',
      //html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  });
  //login
  $('#login').click(function () {
    let timerInterval
    Swal.fire({
      icon: 'success',
      html: '登入成功!',
      timer: 4000,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  });

  //
});