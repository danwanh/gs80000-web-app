import Image from "next/image"
import Sidebar from "~/app/components/sidebar"

export default function Info7Page() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">ハピネスプラザ「東久留米滝山]オープンのお知らせ</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <p className="text-right mb-5">2024/07/10</p>
            
            <Image src="/info_007.png" 
                            alt="会社案内" 
                            width={900}
                            height={256}
                            className="rounded mb-4"
                          />
            <div className="space-y-5">
                <p>7月2日（火）9：00
                <br></br>久喜青葉店がオープンいたします！</p>

                <p>
                    毎日の生活が、肩こりや、頭痛などの不快な症状で悩まされることはとてもつらいことです。<br></br>
                    皆様が少しでも健康を取り戻し、苦痛から開放された楽しい毎日を送れるように <br></br>
                    私たちは全力で、お手伝いさせていただきます。
                </p>
                <p>皆様のご来店、心よりお待ちしております‼</p>

                <p>〒346-0013　埼玉県久喜市青葉2-6-2
                <br></br>営業時間　
                <br></br>月・水　9：00～16：00
                <br></br>火・木・金　9：00～18：00　
                <br></br> 休憩時間　13：00～14：00
                <br></br>休日　土・日・祝日</p>

                <a
                    href={"https://maps.app.goo.gl/Gpgqt4UNhDcmbTVz8"}
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
