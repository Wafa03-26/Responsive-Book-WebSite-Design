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

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line' // L'icône qui s'affiche en mode sombre

// Thème précédemment sélectionné (si l'utilisateur a déjà visité le site)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// On récupère le thème actuel de la page en vérifiant la classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// On applique le thème précédent si existant
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activer / désactiver le thème manuellement avec le bouton
themeButton.addEventListener('click', () => {
    // Ajoute ou retire la classe dark-theme sur le body
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // On sauvegarde le choix de l'utilisateur
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})