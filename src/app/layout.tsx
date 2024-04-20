import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import NavBar from './NavBar'
import Footer from './Footer'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  title: 'lucasnethercott.com',
  description: "Lucas Nethercott's project portfolio.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} bg-black text-white font-sans max-w-6xl m-auto px-5`}>
        <header>
          <NavBar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
