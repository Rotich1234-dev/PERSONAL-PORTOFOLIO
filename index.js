document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Responsive navigation menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
  
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
  
    // Close the navigation menu when a link is clicked
    document.querySelectorAll('nav a').forEach(item => {
      item.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    });
  
    // Add smooth scroll to top button
    const scrollTopButton = document.querySelector('.scroll-top');
  
    window.addEventListener('scroll', function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = 'block';
      } else {
        scrollTopButton.style.display = 'none';
      }
    });
  
    scrollTopButton.addEventListener('click', function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });
  