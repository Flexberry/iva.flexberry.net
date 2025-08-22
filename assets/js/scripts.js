$(document).ready(function() {
  function toggleHeader() {
    if ($(window).scrollTop() > 0) {
      $('.header').addClass('visible');
    } else {
      $('.header').removeClass('visible');
    }
  }

  toggleHeader();

  $(window).on('scroll', function() {
    toggleHeader();
  });
});
