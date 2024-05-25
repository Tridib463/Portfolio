

   const DarkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme_toggle');
  
    // State
    const theme = localStorage.getItem('theme');
  
    // On mount
    theme && document.body.classList.add(theme);
  
    // Handlers
    const handleThemeToggle = () => {
      document.body.classList.toggle('light_mode');
      if (document.body.classList.contains('light_mode')) {
        localStorage.setItem('theme', 'light_mode');
      } else {
        localStorage.removeItem('theme');
        document.body.removeAttribute('class');
      }
    };
  
    // Events
    themeToggleBtns.forEach(btn =>
      btn.addEventListener('click', handleThemeToggle)
    );
  };
  
  export default DarkMode;