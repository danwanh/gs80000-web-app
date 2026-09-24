import Sidebar from "~/app/components/sidebar"

export default function Info2Page() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">【重要なお知らせ】出張費価格改定のお知らせ</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <div className="space-y-2">
                <p className="text-right">2024/03/25</p>
                <p>平素は格別のご高配を賜り、厚く御礼申し上げます。</p>
                <p>さて、弊社では現在まで出張費の価格維持に努めてまいりましたが、<br></br> 車両維持・管理費等高騰に伴って現行価格での提供が難しくなっております。<br></br>弊社でもコスト削減に努め、出張費を長年維持しておりましたが、<br></br>自助努力だけでは従来の価格を維持する事が困難な状況となりました。</p>
                <p>つきましては、誠に不本意ではございますが令和6年4月1日より <br></br>出張費の改定を実施させて頂くことと致しました。</p>
                <p>令和6年4月1日からの変更内容</p>
                <p>【出張費】</p>
                <p>現行価格5,500円(税込) ⇒ 改定価格8,800円(税込)</p>
                <p>弊社としては今後共より一層のサービス向上に努めていく所存でございますので、何卒ご理解の程を賜ります様お願い申し上げます。</p>
                <p>お問い合わせ：(NIPPON GROUP)</p>
                <p>埼玉県さいたま市見沼区東大宮6-36-16</p>
                <p>営業時間：月～金曜日9：00－18：00</p>
                <p>TEL：048-683-2977</p>
            </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
    
  )
}
