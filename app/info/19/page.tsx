import Image from "next/image"
import Sidebar from "~/app/components/sidebar"

export default function Info18Page() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">ハピネスプラザ「新小岩]オープンのお知らせ</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <p className="text-right mb-5">2025/07/01</p>
            
            <Image src="/info_019.png" 
                            alt="会社案内" 
                            width={900}
                            height={256}
                            className="rounded mb-4"
                          />
             <div className="space-y-5">
                <p>7月8日（水）10：00
                <br></br>新小岩店がオープンいたします！</p>

                <p>
                    毎日の生活が、肩こりや、頭痛などの不快な症状で悩まされることはとてもつらいことです。<br></br>
                    皆様が少しでも健康を取り戻し、苦痛から開放された楽しい毎日を送れるように <br></br>
                    私たちは全力で、お手伝いさせていただきます。
                </p>

                <p>皆様のご来店、心よりお待ちしております‼</p>

                <p>〒124-0023　東京都葛飾区東新小岩5-18-9 カーレッヂ1階
                <br></br>営業時間　10：00～19：00
                <br></br>休憩時間　13：00～14：00
                <br></br>休日　土・日・祝日</p>

                <a
                    href={"https://maps.app.goo.gl/uJDnrttWMBg78JNg8"}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    » 地図を見る
                </a>
            </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
    
  )
}
