function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => {
      s.classList.remove('active');
      s.style.display = 'none';
    });
  
    const target = document.getElementById(id);
    target.style.display = 'block';
    setTimeout(() => {
      target.classList.add('active');
    }, 10);
  
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
  