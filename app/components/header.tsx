"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const menuItems = [
    {
      title: "ホーム",
      href: "/",
      submenu: [],
    },
    {
      title: "会社案内",
      href: "/company",
      submenu: [
        { title: "NSDについて", href: "/company/about" },
        { title: "ご挨拶", href: "/company/greeting" },
        { title: "企業理念", href: "/company/philosophy" },
        { title: "沿革", href: "/company/history" },
        { title: "会社概要", href: "/company/overview" },
      ],
    },
    {
      title: "事業内容",
      href: "/business",
      submenu: [
        { title: "電子機器開発", href: "/business/electronics" },
        { title: "システム開発", href: "/business/systems" },
        { title: "製造・生産", href: "/business/manufacturing" },
        { title: "品質管理", href: "/business/quality" },
      ],
    },
    {
      title: "自社ブランド",
      href: "/products",
      submenu: [
        { title: "医療機器", href: "/products/medical" },
        { title: "産業機器", href: "/products/industrial" },
        { title: "通信機器", href: "/products/communication" },
        { title: "測定機器", href: "/products/measurement" },
      ],
    },
    {
      title: "採用情報",
      href: "/recruit",
      submenu: [
        { title: "新卒採用", href: "/recruit/graduate" },
        { title: "中途採用", href: "/recruit/career" },
        { title: "インターンシップ", href: "/recruit/internship" },
        { title: "福利厚生", href: "/recruit/benefits" },
      ],
    },
    {
      title: "お問い合わせ",
      href: "/contact",
      submenu: [],
    },
  ]

  return (
    <>
      {/* Top blue bar */}
      <div className="bg-blue-600 text-white text-sm py-1 px-4">
        <div className="max-w-7xl mx-auto text-center">
          からだの内側から健康に。愛と健康をサポート健康な未来を。NSDは健康創造企業です。
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-sm border-b relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">NSD</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">日本スーパー電子株式会社</h1>
                  <p className="text-sm text-gray-600">NIPPON SUPER DENSHI CO., LTD.</p>
                </div>
              </Link>
            </div>

            {/* Right side links */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <Link href="/energy" className="text-blue-600 hover:text-blue-800 border-r pr-4">
                エナジー関連事業
              </Link>
              <Link href="/happiness" className="text-blue-600 hover:text-blue-800 border-r pr-4">
                ハピネスプロジェクト
              </Link>
              <Link href="/shop" className="text-blue-600 hover:text-blue-800">
                オンラインショップ
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block border-t">
            <div className="flex justify-center space-x-0">
              {menuItems.map((item, index) => (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`block px-6 py-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors ${
                      index === 0 ? "border-b-2 border-blue-600 bg-blue-50" : ""
                    }`}
                  >
                    {item.title}
                  </Link>

                  {/* Dropdown menu */}
                  {item.submenu.length > 0 && activeDropdown === item.title && (
                    <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-lg z-50">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 last:border-b-0"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t absolute top-full left-0 right-0 z-50 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {/* Top links for mobile */}
              <div className="border-b pb-2 mb-2">
                <Link href="/energy" className="block py-2 text-blue-600 hover:text-blue-800">
                  エナジー関連事業
                </Link>
                <Link href="/happiness" className="block py-2 text-blue-600 hover:text-blue-800">
                  ハピネスプロジェクト
                </Link>
                <Link href="/shop" className="block py-2 text-blue-600 hover:text-blue-800">
                  オンラインショップ
                </Link>
              </div>

              {/* Main menu items */}
              {menuItems.map((item) => (
                <div key={item.title}>
                  <Link href={item.href} className="block py-2 font-medium text-gray-700 hover:text-blue-600">
                    {item.title}
                  </Link>
                  {item.submenu.length > 0 && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
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
