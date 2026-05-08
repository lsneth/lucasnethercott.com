import type { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ubuntu",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lucasnethercott.com"),
  title: "Lucas Nethercott | Software Developer",
  description:
    "Portfolio of Lucas Nethercott, a passionate frontend developer specializing in React, Next.js, and TypeScript.",
  openGraph: {
    title: "Lucas Nethercott | Software Developer",
    description:
      "Portfolio of Lucas Nethercott, a passionate frontend developer specializing in React, Next.js, and TypeScript.",
    url: "https://www.lucasnethercott.com",
    siteName: "Lucas Nethercott Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Nethercott | Software Developer",
    description:
      "Portfolio of Lucas Nethercott, a passionate frontend developer specializing in React, Next.js, and TypeScript.",
    images: ["/logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} m-auto max-w-6xl bg-black px-5 font-sans text-white`}
      >
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
