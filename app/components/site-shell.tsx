"use client"

import type React from "react"
import { Suspense } from "react"
import { usePathname } from "next/navigation"
import Header from "./header"
import Footer from "./footer"

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isRecruit = pathname.startsWith("/recruit")

  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      {!isRecruit && <Header />}
      <main className="min-h-screen text-[14px]">{children}</main>
      {!isRecruit && <Footer />}
    </Suspense>
  )
}
