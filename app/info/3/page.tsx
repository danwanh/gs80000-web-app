import Image from "next/image"
import Sidebar from "~/app/components/sidebar"

export default function Info3Page() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">せんげん台「2周年記念」バスツアー</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <p className="text-right">2024/04/15</p>
            <div className="space-y-2 ml-3">
                <p>日頃店舗でお世話になっているお客様と<br></br>
                    せんげん台「2周年記念」バスツアーに行ってきました！ </p>

                <p>★行先 <br></br>
                    水戸【偕楽園・大洗(昼食)・那珂湊(買い物)・めんたいパーク見学】</p>
                <p>【担当者からのコメント】</p>
                <p> 総勢45名のたくさんのお客様にご参加頂き、とても楽しい一日を共に過ごさせて頂きました。</p>
                <Image src="/info_003.png" 
                                alt="image" 
                                width={800}
                                height={256}
                                className="rounded mb-4"
                                />
                <p>
                    これからの人生、<br></br>
                    『健康で好きなことを好きなだけ、大切な方達と過ごして行きたい』
                </p>

                <p>そんなお客様の願いをお手伝いが出来れば幸いです。</p>

                <p>次回は3周年記念の11月を予定しております。</p>

                <p>たくさんのお客様のご来店心よりお待ちしております。</p>

                <p>担当  小島貴宏</p>
            
            </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
    
  )
}
