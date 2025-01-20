import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Umair - UI & UX Designer',
  description:
    'Professional UI/UX designer specializing in creating intuitive and engaging digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
