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