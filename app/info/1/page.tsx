import Image from "next/image"
import Sidebar from "~/app/components/sidebar"

export default function Info1Page() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">ハピネスプラザ　移転リニューアルオープンのお知らせ</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <p className="text-right">2024/05/13</p>
            
            <Image src="/info_001.jpg" 
                            alt="会社案内" 
                            width={800}
                            height={256}
                            className="rounded mb-4"
                          />
            <p>
                いつもご愛好いただき、誠にありがとうございます。
                <br></br> <br></br>
                ハピネスプラザ立川店は内装も新たに移転リニューアルオープンいたします。
                <br></br> <br></br>
                3月21日（木）OPEN
                <br></br> <br></br>
                移転に伴い、3月18日（月）～２０日(水)を一時クローズとさせていただきます。
                <br></br>
                ご迷惑をおかけいたしますが、ご理解くださいますよう、よろしくお願いいたします。
                <br></br> <br></br>
                新店舗でも皆様のご来店を心よりお待ち申し上げます。
                <br></br> <br></br>
                〒190-0011　東京都立川市高松町2-9-21 <br></br>
                営業時間　10：00～19：00 <br></br>
                休憩時間　13：00～14：00 <br></br>
                休日　土・日・祝日 <br></br>
            </p>
            <a
                href={"https://maps.app.goo.gl/Gk2ujGS5SMryusSg6"}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                >
                » 地図を見る
            </a>

        </div>
      </div>
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
    
  )
}
