import Link from "next/link"
import Image from "next/image"
import Slider from "./components/slider"
import Sidebar from "./components/sidebar"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full">
        <Slider />
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* News Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="bg-[#0071bc]  text-white px-4 py-2 rounded-t-lg -mx-6 -mt-6 mb-6">
                  <h2 className="font-bold">最新情報</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* News Item 1 */}
                  <div className="border rounded-lg p-4">
                    <div className="w-full h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
                      <Image
                        src="/test.jpg"
                        alt="医療機器"
                        width={200}
                        height={128}
                        className="rounded"
                      />
                    </div>
                    <Link href="/service/medical_equipment" className="font-bold text-[#0071bc]  mb-2">医療機器の新製品</Link>
                    <p className="text-sm text-gray-600">当社の最新医療機器が厚生労働省の認可を取得しました。</p>
                  </div>

                  {/* News Item 2 */}
                  <div className="border rounded-lg p-4">
                    <div className="w-full h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
                      <Image
                        src="/test.jpg"
                        alt="AI技術"
                        width={200}
                        height={128}
                        className="rounded"
                      />
                    </div>
                    <Link href="/product" className="font-bold text-[#0071bc]  mb-2">AI技術の応用</Link>
                    <p className="text-sm text-gray-600">人工知能を活用した新しいソリューションを開発中です。</p>
                  </div>

                  {/* News Item 3 */}
                  <div className="border rounded-lg p-4">
                    <div className="w-full h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
                      <Image
                        src="/test.jpg"
                        alt="製造工場"
                        width={200}
                        height={128}
                        className="rounded"
                      />
                    </div>
                    <Link href="/home" className="font-bold text-[#0071bc]  mb-2">新工場建設</Link>
                    <p className="text-sm text-gray-600">生産能力向上のため、新しい製造工場の建設を開始しました。</p>
                  </div>

                  {/* News Item 4 */}
                  <div className="border rounded-lg p-4">
                    <div className="w-full h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
                      <Image
                        src="/test.jpg"
                        alt="展示会"
                        width={200}
                        height={128}
                        className="rounded"
                      />
                    </div>
                    <Link href="/service/index02" className="font-bold text-[#0071bc]  mb-2">展示会出展</Link>
                    <p className="text-sm text-gray-600">来月開催される電子機器展示会に出展いたします。</p>
                  </div>
                </div>
              </div>

              {/* News List */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4">お知らせ</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-sm text-gray-500 whitespace-nowrap">2024.03.15</span>
                    <Link href="/news/1" className="text-sm text-[#0071bc]  hover:text-[#0071bc]">
                      新製品「スマートセンサーシリーズ」を発表しました
                    </Link>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-sm text-gray-500 whitespace-nowrap">2024.03.10</span>
                    <Link href="/news/2" className="text-sm text-[#0071bc]  hover:text-[#0071bc]">
                      ISO14001認証を取得いたしました
                    </Link>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-sm text-gray-500 whitespace-nowrap">2024.03.05</span>
                    <Link href="/news/3" className="text-sm text-[#0071bc]  hover:text-[#0071bc]">
                      春季休業のお知らせ
                    </Link>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-sm text-gray-500 whitespace-nowrap">2024.02.28</span>
                    <Link href="/news/4" className="text-sm text-[#0071bc]  hover:text-[#0071bc]">
                      技術セミナー開催のご案内
                    </Link>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-sm text-gray-500 whitespace-nowrap">2024.02.20</span>
                    <Link href="/news/5" className="text-sm text-[#0071bc]  hover:text-[#0071bc]">
                      新卒採用説明会を開催いたします
                    </Link>
                  </li>
                </ul>
                <div className="mt-4 text-right">
                  <Link href="/news" className="text-sm text-[#0071bc]  hover:text-[#0071bc]">
                    一覧を見る →
                  </Link>
                </div>
              </div>
            </div>
          
            <Sidebar />
          </div>
        </div>
      </section>
    </div>
  )
}
