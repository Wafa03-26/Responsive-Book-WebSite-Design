const header = document.querySelector('header');
      window.addEventListener('scroll', () => {
        header.classList.toggle('window-scroll', window.scrollY > 0);
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('section, .fade-in').forEach(section => {
        section.classList.add('reveal-effect');
        observer.observe(section);
      });
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line' // Icon to show when in Dark Mode

// 1. Check if user previously chose a theme
const selectedTheme = localStorage.getItem('selected-theme')

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
}

// 2. Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark theme class
    document.body.classList.toggle(darkTheme)
    
    // Save the theme choice in local storage
    localStorage.setItem('selected-theme', getCurrentTheme())
    themeButton.classList.toggle('ri-moon-line')
    themeButton.classList.toggle('ri-sun-line')
})

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'