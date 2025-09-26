"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const menuItems = [
    {
        title: "ホーム",
        subtitle: "HOME",
        href: "/",
        submenu: [],
    },
    {
        title: "会社案内",
        subtitle: "COMPANY",
        href: "/company/about",
        submenu: [
        { title: "NSDについて", href: "/company/about" },
        { title: "ご挨拶", href: "/company/greetings" },
        { title: "企業理念", href: "/company/philosophy" },
        // { title: "沿革", href: "/company/about/#history" },
        { title: "会社概要", href: "/company/profile" },
        ],
    },
    {
        title: "事業内容",
        subtitle: "SERVICE",
        href: "/service",
        submenu: [
        { title: "医療機器の開発", href: "/service/medical_equipment" },
        { title: "自社製品の開発", href: "/product" },
        { title: "健康サロン", href: "/service/health_salon" }
        ],
    },
    {
        title: "自社ブランド",
        subtitle: "PRODUCT",
        href: "/product",
        submenu: [],
    },
    {
        title: "採用情報",
        subtitle: "RECRUIT",
        href: "/recruit",
        submenu: [],
    },
    {
        title: "お問い合わせ",
        subtitle: "CONTACT",
        href: "/contact",
        submenu: [
            {title: "代理店募集", href: "/dairiten"}
        ],
    },
    ]


  return (
    <>
      {/* Top blue bar */}
      <div className="bg-[#0071bc] text-white text-xs py-1 px-4">
        <div className="max-w-7xl mx-auto">
          からだの内側から健康に。美と健康をサポート健康な未来を。NSDは”健康創造企業です”。
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                    src="/logo.jpg"
                    alt="医療機器"
                    width={350}
                    height={256}
                    className="rounded"
                    />
              </Link>
            </div>

            {/* Right side links */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <Link href="/energy" className="text-[#0071bc] hover:text-blue-800 border-r pr-4">
                エナジー関連事業
              </Link>
              <Link href="/happiness" className="text-[#0071bc] hover:text-blue-800 pr-4">
                ハピネスプロジェクト
              </Link>
              {/* <Link href="/hapipla" className="text-[#0071bc] hover:text-blue-800">
                オンラインショップ
              </Link> */}
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
            <nav className="hidden lg:flex justify-center ">
            {menuItems.map((item, index) => (
                <div key={item.title} className="relative group text-center border-b-2 border-gray-200" 
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}>
                <Link
                    href={item.href}
                    className={`block px-16 py-1 transition-colors duration-200 border-l-1 border-r-1 border-dashed border-gray-200
                    ${pathname === item.href ? "bg-blue-50 text-[#0071bc] " : "hover:text-blue-600 hover:bg-gray-50"}
                    `}
                >
                    <div className="text-sm text-gray-800">{item.title}</div>
                    <div className="text-xs text-[#0071bc] mt-1 tracking-wide">{item.subtitle}</div>
                </Link>

                <span
                    className={`absolute left-0 bottom-0 h-[2px] w-full 
                    bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left
                    ${pathname === item.href ? "scale-x-100" : ""}
                    `}
                />
                {/* Dropdown menu */}
                  {item.submenu.length > 0 && activeDropdown === item.title && (
                    <div className="absolute top-full left-0 w-52 bg-gray-50 border border-dashed border-gray-200 shadow-lg z-50">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-dashed border-gray-200 last:border-b-0"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
            ))}
            </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t absolute top-full left-0 right-0 z-50 shadow-lg">
            <div className="px-4 py-2 text-sm space-y-1">
              {/* Top links for mobile */}
              <div className="border-b pb-2 mb-2">
                <Link
                  href="/energy"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-blue-600 hover:text-blue-800"
                >
                  エナジー関連事業
                </Link>
                <Link
                  href="/happiness"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-blue-600 hover:text-blue-800"
                >
                  ハピネスプロジェクト
                </Link>
                {/* <Link
                  href="/hapipla"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-blue-600 hover:text-blue-800"
                >
                  オンラインショップ
                </Link> */}
              </div>

              {/* Main menu items */}
              {menuItems.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}  // đóng menu khi click
                    className="block py-2 font-medium text-gray-700 hover:text-blue-600"
                  >
                    {item.title}
                  </Link>
                  {item.submenu.length > 0 && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          onClick={() => setIsMenuOpen(false)} // đóng menu khi click submenu
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </header>
    </>
  )
}
