import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"
import Header from "./components/header"
import Footer from "./components/footer"
import { Suspense } from "react"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
})

export const metadata: Metadata = {
  title: "日本スーパー電子株式会社 - NSD Well",
  description: "電子機器の設計・製造・販売を通じて、お客様の課題解決をサポートします。",
  generator: "v0.app",
  keywords: "電子機器, 医療機器, 産業機器, IoT, 日本スーパー電子",
  authors: [{ name: "日本スーパー電子株式会社" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
