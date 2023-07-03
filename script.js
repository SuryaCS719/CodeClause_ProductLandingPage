// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form validation (example)
const form = document.querySelector('#contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Perform form validation logic here
  // Display success or error message
});
