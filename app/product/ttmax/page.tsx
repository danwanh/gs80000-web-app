import Sidebar from "~/app/components/sidebar"
import Image from "next/image"
import Link from "next/link"
export default function DetailPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            {/* Header bar */}
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">管理医療機器</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <div className="space-y-5">
                <p>エナジートロンとは、高圧電位治療器(電位･温熱組合せ家庭用医療機器)のことで、電界を利用してバランスの良い体に整えるお手伝いをします。</p>
                <p>人体は60兆個の細胞から成り立ち、そのひとつひとつから電気が発生しています。</p>
                <p>エナジートロンは、この細胞電気(生体電位)を活性化させ、健康づくりに役立てるために開発された家庭用医療機器です。</p>

            </div>
            <div className="ml-5">
                <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                        <Image src="/gs80000.jpg" 
                        alt="image" 
                        width={900}
                        height={256}
                         className="w-full max-w-full h-auto rounded mb-2"
                        />
                        <p className="text-center font-bold text-xl">DIGITAL-GS-80000</p>
                    </div>
                    <div>
                        <Image src="/product_digital_ks14000_001.jpg" 
                        alt="image" 
                        width={900}
                        height={256}
                         className="w-full max-w-full h-auto rounded mb-2 mt-8 sm:mt-30"
                        />
                        <p className="text-center font-bold text-xl">DIGITAL-KS-14000</p>
                    </div>
                </div>

                <p className="mb-15">
                    エナジートロンは、指定管理医療機器に分類され薬事法に定められている「医療機器製造業」としての認可を取得し世界基準ＩＳＯ１３４８５(医療機器用)を取得した工場で生産されています。
                </p>
                <ul className="list-disc ml-15 mb-15">
                    <li>社団法人日本ホームヘルス機器協会登録商品 </li>
                    <li>ＩＳＯ１３４８５(国際品質規格)</li>
                </ul>
                {/* Black white bar */}
                <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                  <h4 className="ml-2 text-black font-bold text-lg">信頼と安心のＨＡＰＩマーク</h4>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>

                <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-5 gap-8">
                    <div className="lg:col-span-1">
                        <Image src="/hapi.jpg" 
                            alt="image" 
                            width={100}
                            height={100}
                            />
                    </div>
                    <div className="col-span-4 space-y-5">
                        <p>
                            「エナジートロン」にはられている信頼と安心のためのHAPIマークは、
                            厚生労働省および通商産業省共管のもとに設立認可された「社団法人日本ホームヘルス機器協会」が発行している登録証です。
                        </p>
                        <p>HAPIマークがはられている製品は、「生産物賠償責任保険」が適用されます。</p>
                    </div>
                </div>
                {/* Sub header bar */}
                <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 mb-6">
                    <h3 className="text-[#0071bc] font-bold text-lg">エナジートロンの効能・効果</h3>
                    <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>

                {/* Black white bar */}
                <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                  <h4 className="ml-2 text-black font-bold text-lg">■温熱による効能・効果</h4>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                <Image src="/gs80000_001.jpg" 
                    alt="image" 
                    width={400}
                    height={100}
                    className="mb-15"
                    />
                {/* Black white bar */}
                <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300 p-2 mb-6">
                  <h4 className="ml-2 text-black font-bold text-lg">■電位による効能・効果</h4>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                <Image src="/gs80000_002.jpg" 
                    alt="image" 
                    width={500}
                    height={200}
                    className="mb-15"
                    />
                {/* Black white bar */}
                <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300 p-2 mb-6">
                  <h4 className="ml-2 text-black font-bold text-lg">国際品質</h4>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                <p>エナジートロンは国際品質マネジメントシステムISO13485及び9001にもとづいて製造されております。</p>
            </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
    
  )
}
