import Sidebar from "~/app/components/sidebar"

export default function Info12Page() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">冬季休業と休業に伴う発送のご案内</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <p className="text-right mb-5">2024/12/13</p>
            <div className="ml-3">
                <p className="mb-10">
                    平素は格別のご愛顧を賜り、厚く御礼申し上げます。 <br></br>
                    弊社の夏季休業と休業に伴うオンラインショップ注文の発送について、下記の通りご案内申し上げます。
                </p>
                <p className="mb-5">
                    冬季休業日　12月28日(土)～1月6日(月)<br></br>
                    ※ハピネスプラザにつきましては、各店舗ごとにお休みが異なります※ハピネスプラザにつきましては、各店舗ごとにお休みが異なりますので店長へご確認くださいので店長へご確認ください
                </p>

                {/* Black white bar */}
                <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                  <h4 className="ml-2 text-black font-bold text-lg">オンラインショップ発送スケジュール</h4>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>

                <p className="mb-10">
                    12月26日(木)正午までのご注文→12月27日(金)発送 <br></br>
                    12月26日(木)正午以降～1月6日までのご注文→1月8日(火)発送
                </p>

                <p>
                    休業期間中は、お問い合わせメール・お電話には対応できません。 <br></br>
                    メールの受信は行っておりますが、お返事・発送は1月7日以降となります。<br></br>
                    ご迷惑をおかけいたしますが、何卒ご了承くださいますようお願い申し上げます。
                </p>

            </div>
            
        </div>
      </div>
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
    
  )
}
