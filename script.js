document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-bar ul li a');
  navLinks.forEach(function(element) {
    element.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('event', event);

      document.querySelector(event.target.hash).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
