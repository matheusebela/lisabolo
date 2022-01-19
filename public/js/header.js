$(function(){
  $(document).scroll(function(){
    if($(this).scrollTop() === 0) {
      $('#header').removeClass('header-scrolled');
    } else {
      $('#header').addClass('header-scrolled');
    }
  });
});