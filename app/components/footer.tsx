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
              <p>東京都○○区○○1-2-3</p>
              <p>TEL: 03-1234-5678</p>
              <p>FAX: 03-1234-5679</p>
            </div>
          </div>

          {/* Business */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">事業案内</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/business/electronics" className="hover:text-blue-600">
                  電子機器設計
                </Link>
              </li>
              <li>
                <Link href="/business/manufacturing" className="hover:text-blue-600">
                  製造サービス
                </Link>
              </li>
              <li>
                <Link href="/business/consulting" className="hover:text-blue-600">
                  技術コンサルティング
                </Link>
              </li>
              <li>
                <Link href="/business/maintenance" className="hover:text-blue-600">
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
                <Link href="/products/industrial" className="hover:text-blue-600">
                  産業用機器
                </Link>
              </li>
              <li>
                <Link href="/products/medical" className="hover:text-blue-600">
                  医療機器
                </Link>
              </li>
              <li>
                <Link href="/products/automotive" className="hover:text-blue-600">
                  自動車部品
                </Link>
              </li>
              <li>
                <Link href="/products/consumer" className="hover:text-blue-600">
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
                <Link href="/support/contact" className="hover:text-blue-600">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/support/faq" className="hover:text-blue-600">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="/support/download" className="hover:text-blue-600">
                  資料ダウンロード
                </Link>
              </li>
              <li>
                <Link href="/support/warranty" className="hover:text-blue-600">
                  保証について
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 text-sm text-gray-600 mb-4 md:mb-0">
            <Link href="/privacy" className="hover:text-blue-600">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="hover:text-blue-600">
              利用規約
            </Link>
            <Link href="/sitemap" className="hover:text-blue-600">
              サイトマップ
            </Link>
          </div>
          <p className="text-sm text-gray-600">© 2024 日本スーパー電子株式会社. All rights reserved.</p>
        </div>
      </div>

      {/* Special banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-white font-bold text-lg mb-2">いのちの応援</h3>
          <p className="text-white text-sm">ハピスマプロジェクト</p>
        </div>
      </div>
    </footer>
  )
}
