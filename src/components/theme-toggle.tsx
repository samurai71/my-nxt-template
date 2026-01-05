'use client'

import * as React from 'react'

import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'

type Theme = 'light' | 'dark'

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const [theme, setTheme] = React.useState<Theme>('light')

  // Read initial theme
  React.useEffect(() => {
    setMounted(true)

    let stored: Theme | null = null
    try {
      const g = globalThis as unknown as {
        localStorage?: { getItem: (k: string) => string | null }
      }
      if (g.localStorage) {
        stored = g.localStorage.getItem('theme') as Theme | null
      }
    } catch (_e) {
      stored = null
    }

    if (stored) {
      setTheme(stored)
      return
    }

    const gMatch = globalThis as unknown as {
      matchMedia?: (q: string) => { matches: boolean }
    }
    const prefersDark = !!(
      gMatch.matchMedia &&
      gMatch.matchMedia('(prefers-color-scheme: dark)').matches
    )

    setTheme(prefersDark ? 'dark' : 'light')
  }, [])

  // Apply + persist theme
  React.useEffect(() => {
    if (!mounted) return

    const gDoc = globalThis as unknown as {
      document?: {
        documentElement?: {
          classList?: { toggle: (c: string, v?: boolean) => void }
        }
      }
      localStorage?: { setItem: (k: string, v: string) => void }
    }

    if (gDoc.document?.documentElement?.classList?.toggle) {
      gDoc.document.documentElement.classList.toggle('dark', theme === 'dark')
    }

    try {
      if (gDoc.localStorage?.setItem) {
        gDoc.localStorage.setItem('theme', theme)
      }
    } catch (_e) {
      // ignore write errors (e.g. blocked storage)
    }
  }, [theme, mounted])

  if (!mounted) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative"
    >
      <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  )
}
