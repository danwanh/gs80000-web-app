import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">会社情報</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>日本スーパー電子株式会社</p>
              <p>〒123-4567</p>
              <p>埼玉県さいたま市見沼区東大宮6-36-16</p>
              <p>TEL: 03-1234-5678</p>
              <p>FAX: 03-1234-5679</p>
            </div>
          </div>

          {/* Business */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">事業案内</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/business/electronics" className="hover:text-[#0071bc] ">
                  電子機器設計
                </Link>
              </li>
              <li>
                <Link href="/business/manufacturing" className="hover:text-[#0071bc] ">
                  製造サービス
                </Link>
              </li>
              <li>
                <Link href="/business/consulting" className="hover:text-[#0071bc] ">
                  技術コンサルティング
                </Link>
              </li>
              <li>
                <Link href="/business/maintenance" className="hover:text-[#0071bc] ">
                  保守・メンテナンス
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">製品情報</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/products/industrial" className="hover:text-[#0071bc] ">
                  産業用機器
                </Link>
              </li>
              <li>
                <Link href="/products/medical" className="hover:text-[#0071bc] ">
                  医療機器
                </Link>
              </li>
              <li>
                <Link href="/products/automotive" className="hover:text-[#0071bc] ">
                  自動車部品
                </Link>
              </li>
              <li>
                <Link href="/products/consumer" className="hover:text-[#0071bc] ">
                  民生機器
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">サポート</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/support/contact" className="hover:text-[#0071bc] ">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/support/faq" className="hover:text-[#0071bc] ">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="/support/download" className="hover:text-[#0071bc] ">
                  資料ダウンロード
                </Link>
              </li>
              <li>
                <Link href="/support/warranty" className="hover:text-[#0071bc] ">
                  保証について
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 text-sm text-gray-600 mb-4 md:mb-0">
            <Link href="/privacy" className="hover:text-[#0071bc] ">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="hover:text-[#0071bc] ">
              利用規約
            </Link>
            <Link href="/sitemap" className="hover:text-[#0071bc] ">
              サイトマップ
            </Link>
          </div>
          <p className="text-sm text-gray-600">© 2024 日本スーパー電子株式会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
