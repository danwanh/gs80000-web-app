import Image from "next/image"
import Sidebar from "~/app/components/sidebar"

export default function Info10Page() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">ハピネスプラザ　リニューアルオープンのお知らせ</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <p className="text-right mb-5">2024/09/25</p>
            
            <Image src="/info_010.png" 
                            alt="image" 
                            width={900}
                            height={256}
                            className="rounded mb-4"
                          />
            <div className="space-y-5">
                <p>いつもご愛好いただき、誠にありがとうございます。</p>

                <p>ハピネスプラザ白井大橋店はリニューアルオープンいたします。</p>
                <p>10月1日（火）OPEN</p>
                <p>
                    リニューアルに伴い、9月13日（金）～30日(月)を一時クローズとさせていただきます。<br></br>
                    ご迷惑をおかけいたしますが、ご理解くださいますよう、よろしくお願いいたします。
                </p>
                <p>皆様のご来店を心よりお待ち申し上げます。</p>
                <p>〒270-1431　千葉県白井市根143-3
                <br></br>営業時間　10：00～19：00
                <br></br>休憩時間　13：00～14：00
                <br></br>休日　土・日・祝日</p>

                <a
                    href={"https://maps.app.goo.gl/wgNBtJpQrFNTTXc36"}
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
