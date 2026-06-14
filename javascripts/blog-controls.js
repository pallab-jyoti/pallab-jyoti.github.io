(function () {
  const storageKeys = {
    theme: 'blog-theme',
    fontSize: 'blog-font-size'
  };

  const fontSizes = ['small', 'medium', 'large'];
  const body = document.body;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const fontButtons = document.querySelectorAll('[data-font-action]');

  function getStoredValue(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function setStoredValue(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      return;
    }
  }

  function applyTheme(theme) {
    body.dataset.theme = theme;

    if (themeToggle) {
      const isDark = theme === 'dark';
      themeToggle.textContent = isDark ? 'Light mode' : 'Dark mode';
      themeToggle.setAttribute('aria-pressed', String(isDark));
    }

    setStoredValue(storageKeys.theme, theme);
  }

  function applyFontSize(fontSize) {
    body.dataset.fontSize = fontSize;
    setStoredValue(storageKeys.fontSize, fontSize);
  }

  function getNextFontSize(direction) {
    const currentFontSize = body.dataset.fontSize || 'medium';
    const currentIndex = fontSizes.indexOf(currentFontSize);
    const safeIndex = currentIndex === -1 ? 1 : currentIndex;
    const nextIndex = direction === 'increase'
      ? Math.min(fontSizes.length - 1, safeIndex + 1)
      : Math.max(0, safeIndex - 1);

    return fontSizes[nextIndex];
  }

  const preferredTheme = getStoredValue(storageKeys.theme)
    || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const preferredFontSize = getStoredValue(storageKeys.fontSize) || 'medium';

  applyTheme(preferredTheme === 'dark' ? 'dark' : 'light');
  applyFontSize(fontSizes.includes(preferredFontSize) ? preferredFontSize : 'medium');

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      applyTheme(body.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }

  fontButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const action = button.dataset.fontAction;

      if (action === 'increase') {
        applyFontSize(getNextFontSize('increase'));
      }

      if (action === 'decrease') {
        applyFontSize(getNextFontSize('decrease'));
      }

      if (action === 'reset') {
        applyFontSize('medium');
      }
    });
  });
})();
