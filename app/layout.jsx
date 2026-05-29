import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AURA AI — Your Universal Life Assistant',
  description: 'One app for everything — AI, Finance, Health, Learning & more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-dark text-white">
          {children}
        </main>
      </body>
    </html>
  )
}
