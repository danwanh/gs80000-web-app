import Image from "next/image"
import Sidebar from "~/app/components/sidebar"

export default function Info5Page() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">ハピネスプラザ「大泉学園通り]オープンのお知らせ</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <p className="text-right mb-5">2024/06/24</p>
            
            <Image src="/info_005.png" 
                            alt="会社案内" 
                            width={900}
                            height={256}
                            className="rounded mb-4"
                          />
            <div className="space-y-5">
                <p>7月1日（月）9：30
                <br></br>大泉学園通り店がオープンいたします！</p>

                <p>
                    毎日の生活が、肩こりや、頭痛などの不快な症状で悩まされることはとてもつらいことです。<br></br>
                    皆様が少しでも健康を取り戻し、苦痛から開放された楽しい毎日を送れるように <br></br>
                    私たちは全力で、お手伝いさせていただきます。
                </p>
                <p>皆様のご来店、心よりお待ちしております‼</p>

                <p>〒178-0061　東京都練馬区大泉学園町7-2-22<br></br>
                営業時間　 9：30～19：00
                <br></br>休憩時間　13：00～14：30
                <br></br>休日　土・日・祝日</p>

                <a
                    href={"https://maps.app.goo.gl/HKUqVXtxVYrEvSmw6"}
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
