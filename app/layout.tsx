"use client"
import type React from "react"
import type { Metadata } from "next"
import Header from "./components/header"
import Footer from "./components/footer"
import { Suspense } from "react"
import "./globals.css"
import { usePathname } from "next/navigation"

// export const metadata: Metadata = {
//   title: "日本スーパー電子株式会社 - NSD Well",
//   description: "電子機器の設計・製造・販売を通じて、お客様の課題解決をサポートします。",
//   generator: "v0.app",
//   keywords: "電子機器, 医療機器, 産業機器, IoT, 日本スーパー電子",
//   authors: [{ name: "日本スーパー電子株式会社" }],
//   viewport: "width=device-width, initial-scale=1",
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname();
  const isRecruit = pathname.startsWith("/recruit");
  return (
    <html lang="ja">
      <body className="antialiased">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          {!isRecruit && <Header />}
          <main className="min-h-screen text-[14px]"> {children} </main>
          {!isRecruit && <Footer />}
        </Suspense>
      </body>
    </html>
  )
}
