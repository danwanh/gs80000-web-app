import Image from "next/image"
import Sidebar from "~/app/components/sidebar"
import Link from "next/link"

export default function MedicalPage() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-15">
              <h2 className="text-white font-medium text-lg">医療機器の開発</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            <div className="ml-5">
                <div className="mb-10">
                    <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 mb-6">
                        <h2 className="text-[#0071bc] font-bold text-lg">医療機器、健康機器の開発・販売</h2>
                        <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                    </div>
                    <p>NSDは「日本中の人々を元気にする」というミッションのもと、お客様に応える安全で効果性の高い治療機の開発に取り組んでいます。</p>
                </div>
                <div className="mb-10">
                    <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                    <h4 className="ml-2 text-black font-bold text-lg">事業領域</h4>
                    <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                    </div>
                    <p className="mb-5"> エナジートロンとは、高圧電位治療器(電位･温熱組合せ家庭用医療機器)のことで、電界を利用してバランスの良い体に整えるお手伝いをします。</p>
                    <p className="mb-5">人体は60兆個の細胞から成り立ち、そのひとつひとつから電気が発生しています。</p>
                    <p>エナジートロンは、この細胞電気(生体電位)を活性化させ、健康づくりに役立てるために開発された家庭用医療機器です。</p>
                    <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <Image src="/gs80000.jpg" 
                            alt="image" 
                            width={900}
                            height={256}
                            className="w-full max-w-full h-auto rounded mb-10"
                            />
                        </div>
                        <div>
                            <Image src="/product_digital_ks_001.jpg" 
                            alt="image" 
                            width={900}
                            height={256}
                            className="w-full max-w-full h-auto rounded mb-10"
                            />
                        </div>
                    </div>
                    <p className="mb-10">エナジートロンは、指定管理医療機器に分類され薬事法に定められている「医療機器製造業」としての認可を取得し世界基準ＩＳＯ１３４８５(医療機器用)を取得した工場で生産されています。</p>
                    <ul className="list-disc">
                        <li>管理医療機器認証番号　第217AFBZX00002000号</li>
                        <li>社団法人日本ホームヘルス機器協会登録商品</li>
                        <li>ＩＳＯ１３４８５(国際品質規格)</li>
                    </ul>
                </div>


            </div>
        </div>

            
      </div>
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
    
  )
}
