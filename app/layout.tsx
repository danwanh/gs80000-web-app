import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import SiteShell from "./components/site-shell"

export const metadata: Metadata = {
  title: "GS80000",
  description: "GS80000 - 健康と美をサポートするウェブサイト",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
