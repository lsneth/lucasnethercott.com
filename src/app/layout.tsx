import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './_components/NavBar'

const inter = Inter({ subsets: ['latin'] })

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
      <body className="bg-black text-white font-mono max-w-screen-xl m-auto">
        <NavBar />
        {children}
      </body>
    </html>
  )
}
