import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-xs">
        {/* Responsive grid: 1 col (mobile), 2 cols (tablet), 5 cols (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Company Info */}
          <div>
            <div className="space-y-2 text-gray-600">
              <Link href="/service/medical_equipment" className="text-[#0071bc] font-medium">
                NIPPON GROUP
              </Link>
              <p className="mt-2">〒123-4567</p>
              <p>埼玉県さいたま市見沼区東大宮6-36-16</p>
              <p>TEL: 03-1234-5678</p>
              <p>FAX: 03-1234-5679</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/company/about" className="text-[#0071bc] font-medium">
                  会社案内
                </Link>
              </li>
              <ul className="mt-2 ml-2 space-y-2">
                <li><Link href="/company/greetings" className="hover:underline">ご挨拶</Link></li>
                <li><Link href="/company/philosophy" className="hover:underline">企業理念</Link></li>
                <li><Link href="/company/profile" className="hover:underline">会社概要</Link></li>
                {/* <li><Link href="/company/profile/#history" className="hover:underline">沿革</Link></li> */}
              </ul>
            </ul>
          </div>

          {/* Business */}
          <div>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/service" className="text-[#0071bc] font-medium">
                  事業内容
                </Link>
              </li>
              <ul className="mt-2 ml-2 space-y-2">
                <li><Link href="/service/medical_equipment" className="hover:underline">医療機器の開発</Link></li>
                {/* <li><Link href="/service/health_salon" className="hover:underline">ヘルス・スキンケア製品開発</Link></li> */}
                <li><Link href="/health_salon" className="hover:underline">プラザ事業</Link></li>
              </ul>
            </ul>
          </div>

          {/* Products */}
          <div>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/product" className="text-[#0071bc] font-medium">
                  取扱商品
                </Link>
              </li>
              <ul className="mt-2 ml-2 space-y-2">
                <li><Link href="/product/ttmax" className="hover:underline">管理医療機器</Link></li>
                {/* <li><Link href="/product" className="hover:underline">ケイ素商品</Link></li> */}
                {/* <li><Link href="/product" className="hover:underline">水晶の恵み</Link></li>
                <li><Link href="/product" className="hover:underline">MAXコラーゲンプレミアムパワー</Link></li>
                <li><Link href="/product" className="hover:underline">知能プレミアム</Link></li> */}
              </ul>
            </ul>
          </div>

          {/* Support */}
          <div>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/contact" className="text-[#0071bc] font-medium">
                  お問い合わせ
                </Link>
              </li>
              <ul className="mt-2 ml-2 space-y-2">
                <li><Link href="/dairiten" className="hover:underline">代理店募集</Link></li>
                <li><Link href="/privacy" className="hover:underline">プライバシーポリシー</Link></li>
              </ul>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-gray-100 text-gray-400 text-center text-xs py-3 border-t">
        Copyright © 2025 Japan Superdenshi All rights Reserved.
      </div>
    </footer>
  )
}
