
// Set initial theme on page load (before Astro renders)
(function () {
    if (typeof localStorage !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
    }
})();
  