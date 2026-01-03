export function ThemeScript() {
  const script = `
    (function () {
      try {
        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = stored ?? (prefersDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', theme === 'dark');
      } catch (_) {}
    })();
  `

  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
