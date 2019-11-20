document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.bar-links');
  navLinks.forEach(function(element) {
    element.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('event', event);

      document.querySelector(event.target.hash).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      document.getElementById('nav').style.backgroundColor =
        ' rgba(45, 45, 45, 0.98)';
      jQuery('#nav a').css('color', 'white');
    } else {
      document.getElementById('nav').style.backgroundColor = '#fafafa';
      jQuery('#nav a').css('color', 'black');
    }
  }
});
