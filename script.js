  const toggle = document.getElementById('filter');

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      // Scroll to "My Works"
      document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
    } else {
      // Scroll to "Home"
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
  });

  window.addEventListener('scroll', () => {
  const worksTop = document.getElementById('works').offsetTop;
  if (window.scrollY >= worksTop - window.innerHeight / 2) {
    toggle.checked = true;
  } else {
    toggle.checked = false;
  }
});

