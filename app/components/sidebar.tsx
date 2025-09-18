import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface NavigationItem {
  title: string
  href: string
  subItems?: NavigationItem[]
}

const companyProfile: NavigationItem[] = [
  { title: "NSDについて", href: "/company/about" },
  { title: "ご挨拶", href: "/company/greetings" },
  { title: "企業理念", href: "/company/corporate-philosophy" },
  { title: "沿革", href: "/company/history" },
  { title: "会社概要", href: "/company/company-overview" },
]
const businessDetails: NavigationItem[] = [
  // {title: "事業内容", },
  {title: "医療機器の開発", href: "service/medical-equipment"},
  {title: "ヘルス・スキンケア製品の開発", href: "service/cosme"},
  {title: "健康サロン", href: "service/health-salon"}
]

const productsDetails: NavigationItem[] = [
  {
    title: "管理医療機器", href: "/products/ttmax",
    subItems: [
      { title: "TT-MAX8詳細", href: "/products/ttmax" },
      { title: "DIGITAL-KS-14000詳細", href: "/products/ttmax/ks14000" },
      { title: "こんな方にお勧め", href: "/products/ttmax/recommend" },
      { title: "よくあるご質問", href: "/products/ttmax/faq" },
      { title: "使用上のご注意", href: "/products/ttmax/caution" },
    ],
  },
  {
    title: "ケイ素商品", href: "/products/keiso",
    subItems: [
      { title: "「ケイ素の恵み」が選ばれる理由", href: "/products/keiso/reason" },
      { title: "ケイ素の働き", href: "/products/keiso/function" },
      { title: "実際の使用例", href: "/products/keiso/example" },
    ],
  },
  { title: "水晶の恵み", href: "/products/suisho" },
  { title: "MAXコラーゲンプレミアムパワー", href: "/products/uc2" },
  { title: "知能プレミアム", href: "/products/chinou" },
]

export default function Sidebar() {
  return (
    <div className= "space-y-10">
      {/* Block 1 */}
      <div className="bg-gray-200 p-3 shadow-sm space-10">
        {/* Title */}
        <h2 className="text-[#0071bc]  text-l font-medium">会社案内</h2>

        {/* Horizontal separator line */}
        <div className="border-t border-gray-300 mb-4"></div>

        {/* White inner box with navigation items */}
        <div className="bg-white rounded border border-gray-300">
          {companyProfile.map((item, index) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="flex items-center justify-between px-4 py-3 text-[#0071bc]  hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0071bc]  transition-colors" />
                  <span className="text-sm">{item.title}</span>
                </div>
              </Link>

              {/* Subitems */}
              {item.subItems && item.subItems.length > 0 && (
                <div className="ml-8">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:underline"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}

              {/* Separator line between items (except last) */}
              {index < companyProfile.length - 1 && (
                <div className="border-t border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Block 2 */}
        <div className="bg-gray-200 p-3 shadow-sm space-10">
        {/* Title */}
        <h2 className="text-[#0071bc]  text-l font-medium">会社案内</h2>

        {/* Horizontal separator line */}
        <div className="border-t border-gray-300 mb-4"></div>

        {/* White inner box with navigation items */}
        <div className="bg-white rounded border border-gray-300">
          {businessDetails.map((item, index) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="flex items-center justify-between px-4 py-3 text-[#0071bc]  hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0071bc]  transition-colors" />
                  <span className="text-sm">{item.title}</span>
                </div>
              </Link>

              {/* Subitems */}
              {item.subItems && item.subItems.length > 0 && (
                <div className="ml-8">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:underline"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}

              {/* Separator line between items (except last) */}
              {index < businessDetails.length - 1 && (
                <div className="border-t border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Block 3 */}
        <div className="bg-gray-200 p-3 shadow-sm space-10">
        {/* Title */}
        <h2 className="text-[#0071bc]  text-l font-medium">会社案内</h2>

        {/* Horizontal separator line */}
        <div className="border-t border-gray-300 mb-4"></div>

        {/* White inner box with navigation items */}
        <div className="bg-white rounded border border-gray-300">
          {productsDetails.map((item, index) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="flex items-center justify-between px-4 py-3 text-[#0071bc]  hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0071bc]  transition-colors" />
                  <span className="text-sm">{item.title}</span>
                </div>
              </Link>

              {/* Subitems */}
              {item.subItems && item.subItems.length > 0 && (
                <div className="ml-8">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:underline"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}

              {/* Separator line between items (except last) */}
              {index < productsDetails.length - 1 && (
                <div className="border-t border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
  </div>
    
  )
}
