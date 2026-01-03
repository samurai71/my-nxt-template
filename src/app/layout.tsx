import type { Metadata } from "next"

import { Geist, Geist_Mono } from "next/font/google"

import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

import "@/styles/globals.css"

import { ThemeScript } from "./theme-script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: {
    template: "%s | My Template",
    default: "My Template", // a default is required when creating a template
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="flex items-center justify-end p-4 border-b">
          <ThemeToggle />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
