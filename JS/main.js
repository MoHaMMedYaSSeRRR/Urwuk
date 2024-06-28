const scrollToTop = document.getElementById('scrollToTop');

  scrollToTop.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
