import Link from "next/link"
import Image from "next/image"
import Slider from "./components/slider"
import Sidebar from "./components/sidebar"
import { news } from "./data/news"
import { ChevronRight } from "lucide-react"

export default function HomePage() {
  const latestNews = [...news].sort((a, b) => b.id - a.id).slice(0, 5)

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
              <div className="bg-white shadow-sm p-6 mb-10">
                <div className="bg-[#0071bc]  text-white px-4 py-2">
                  <h2 className="font-bold">最新情報</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* News Item 1 */}
                  <div>
                    <div className="mt-3 w-full h-50 bg-gray-200 relative">
                      <Image
                        src="/top_service_001.jpg"
                        alt="医療機器"
                        fill
                        className="rounded object-cover"
                      />
                    </div>
                    <div className="border border-gray-200 text-center bg-gray-100 h-10 flex items-center justify-center">
                      <Link
                        href="/service/medical_equipment"
                        className="font-bold text-[#0071bc] text-base"
                      >
                        医療機器の開発
                      </Link>
                    </div>
                    <p className="mt-3 text-sm">コア事業の医療機器分野では安全で効果性の高い治療機の開発に取り組んでいます。</p>
                  </div>

                  {/* News Item 2 */}
                  <div>
                    <div className="mt-3 w-full h-50 bg-gray-200 relative">
                      <Image
                        src="/top_service_002.jpg"
                        alt="医療機器"
                        fill
                        className="rounded object-cover"
                      />
                    </div>
                    <div className="border border-gray-200 text-center bg-gray-100 h-10 flex items-center justify-center">
                      <Link
                        href="/service/product"
                        className="font-bold text-[#0071bc] text-base"
                      >
                        自社ブランドの商品開発
                      </Link>
                    </div>
                    <p className="mt-3 text-sm">ウェルネス市場におけるブランドとして「メディカル」「サプリ」「ビューティ」「エコ」など、豊かな人生、輝く人生を目指すための製品開発を行っていきます。</p>
                  </div>

                  {/* News Item 3 */}
                  <div>
                    <div className="mt-3 w-full h-50 bg-gray-200 relative">
                      <Image
                        src="/top_service_003.jpg"
                        alt="医療機器"
                        fill
                        className="rounded object-cover"
                      />
                    </div>
                    <div className="border border-gray-200 text-center bg-gray-100 h-10 flex items-center justify-center">
                      <Link
                        href="/service/hapila"
                        className="font-bold text-[#0071bc] text-base"
                      >
                        通信販売
                      </Link>
                    </div>
                    <p className="mt-3 text-sm">
                      皆様の健康へのお手伝いが少しでもできるように、全国のお客様に向けて自社製品を中心としたネットショップ『ハピプラ』を運営しております。
                    </p>
                  </div>

                  {/* News Item 4 */}
                  <div>
                    <div className="mt-3 w-full h-50 bg-gray-200 relative">
                      <Image
                        src="/top_service_004.jpg"
                        alt="医療機器"
                        fill
                        className="rounded object-cover"
                      />
                    </div>
                    <div className="border border-gray-200 text-center bg-gray-100 h-10 flex items-center justify-center">
                      <Link
                        href="/service/health_salon"
                        className="font-bold text-[#0071bc] text-base"
                      >
                        健康サロン
                      </Link>
                    </div>
                    <p className="mt-3 text-sm">
                      体感型健康サロン「ハピネスプラザ」を運営。お客様に最高の喜びと感動を！<br></br>
                      ご来店を心よりお待ち申し上げております。
                      </p>
                  </div>
                </div>
              </div>


              {/* News List */}
              <div className="bg-gray-100 border border-gray-200 p-3 shadow-sm space-10">
                {/* Title */}
                <div className="flex justify-between">
                  <h2 className="text-[#0071bc]  text-l font-medium">お知らせ</h2>
                  <div className="text-[#0071bc]">
                    »   
                    <Link href="/service" className="font-medium underline decoration-dotted underline-offset-4  mb-2">一覧</Link>
                  </div>

                </div>
                {/* Horizontal separator line */}
                <div className="border-t border-gray-300 mb-4"></div>
                {/* White inner box */}
                <div className="bg-white rounded border border-gray-300">
                  {latestNews.map((item, index) => (
                    <div key={item.id}>
                      <Link
                        href={`/info/${item.id}`}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex text-gray-500 items-center gap-2 mb-2">
                          <ChevronRight className="w-2 h-2 text-gray-400 group-hover:text-[#0071bc]" />
                          <span className="text-xs font-medium underline underline-ofset-1">{item.title}</span>
                        </div>
                        <p className="text-xs text-gray-500 ml-4">{item.date}</p>
                      </Link>

                      {/* Separator line between items */}
                      {index < latestNews.length - 1 && (
                        <div className="border-t border-gray-200"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/happiness">
                <Image
                  src="/top_inochi.jpg"
                  alt="医療機器"
                  width={900}
                  height={200}
                  className="rounded hover:opacity-80 transition mt-10"
                />
              </Link>
            </div>
          
            <Sidebar />
          </div>
        </div>
      </section>
    </div>
  )
}
