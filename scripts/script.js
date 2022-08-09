(function () {
  $(".mobilemenu-group").click(function () {
    $(this).find(".mobilemenu-section").toggleClass('active');
    $(".mobilemenu-overlay").toggleClass('active');
  });
  $("mobilemenu-link-back").click(function () {
    $(".mobilemenu-section").toggleClass('active');
  });
  $('.mobilebutton').click(function () {
    $(this).toggleClass('active');
    $('.mobilemenu').toggleClass('active');
    $('.text').toggleClass('active');
    return $('.mask').toggleClass('active');
  });
  $(".mobilemenu-overlay").click(function () {
    $(this).toggleClass('active');
    return $(".mobilemenu-section").removeClass('active');
  });
  $('.mask').click(function () {
    $(this).toggleClass('active');
    $('.mobilemenu').toggleClass('active');
    $('.text').toggleClass('active');
    $('.mobilebutton').toggleClass('active');
    $(".mobilemenu-overlay").removeClass('active');
    return $(".mobilemenu-section").removeClass('active');
  });
}).call(this);

window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-finish');
})


  