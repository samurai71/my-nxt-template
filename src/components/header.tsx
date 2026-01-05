'use client'

import * as React from 'react'

import Link from 'next/link'

import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="border-b bg-white dark:bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/" className="text-lg font-semibold">
            My Template
          </Link>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/" className="uppercase">
              Home
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about" className="uppercase">
              About
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact" className="uppercase">
              Contact
            </Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate the site</SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-2 p-4">
                <Link href="/" className="hover:bg-accent rounded-md px-3 py-2">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:bg-accent rounded-md px-3 py-2"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:bg-accent rounded-md px-3 py-2"
                >
                  Contact
                </Link>

                <div className="mt-4 border-t pt-4">
                  {/* <ThemeToggle /> */}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
