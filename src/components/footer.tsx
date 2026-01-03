/**
 * Footer component that displays a copyright notice with the current year.
 *
 * @returns {JSX.Element} A footer element with centered text, border styling, and responsive dark mode support.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t px-4 py-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
      © {year} All rights reserved.
    </footer>
  )
}

export default Footer
