// Verificar si window está definido para evitar errores en entornos no relacionados con el navegador
if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const scrollButton = document.querySelector('.scroll-top') as HTMLElement;
      if (window.scrollY > 100) {
        scrollButton.classList.add('active');
        scrollButton.classList.remove('hidden');
      } else {
        scrollButton.classList.remove('active');
        setTimeout(() => {
          scrollButton.classList.add('hidden');
        }, 300); // Retrasar la ocultación del botón para que la transición tenga tiempo de completarse
      }
    });
  
    document.querySelector('.scroll-top')?.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Hacer que el desplazamiento sea suave
      });
    });
  }
  