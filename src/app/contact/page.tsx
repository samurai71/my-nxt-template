import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
}
export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <h2>Contact</h2>
      </div>
    </div>
  )
}
