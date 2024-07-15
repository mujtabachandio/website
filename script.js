document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      body.classList.add(savedTheme);
      header.classList.add('dark-mode');
      footer.classList.add('dark-mode');
      navLinks.forEach(link => link.classList.add('dark-mode'));
    }
  
    // Toggle dark mode on button click
    themeToggleButton.addEventListener('click', () => {
      if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        header.classList.remove('dark-mode');
        footer.classList.remove('dark-mode');
        navLinks.forEach(link => link.classList.remove('dark-mode'));
        localStorage.setItem('theme', '');
      } else {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        navLinks.forEach(link => link.classList.add('dark-mode'));
        localStorage.setItem('theme', 'dark-mode');
      }
    });
  });
  