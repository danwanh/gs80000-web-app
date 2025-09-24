import Sidebar from "~/app/components/sidebar"
import Image from "next/image"
import Link from "next/link"
export default function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-4 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            {/* Header bar */}
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">自社ブランド</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
                        
            <Image src="/cosme_001.jpg" 
                            alt="会社案内" 
                            width={900}
                            height={256}
                            className="rounded mb-10"
                            />
            <div className="ml-5">
                {/* Sub header bar */}
                <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 mb-6">
                    <h3 className="text-[#0071bc] font-bold text-lg">自社ブランドの企画開発</h3>
                    <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                <p className="mb-15">
                    ヘルスケアやサプリメントといった分野とスキンケアの分野からなる、内外両面から美と健康を追求する事業を展開しています。<br></br>
                    健康で楽しい毎日を過ごすために、日常の生活・食事で不足している栄養成分を補うことと、デトックスに主眼をおいた高機能なサプリメント、
                    健康的で美しい素肌を目指して天然成分にこだわった高品質なスキンケア製品の企画開発を行っています。
                </p>
                {/* Black white bar */}
                <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                  <h4 className="ml-2 text-black font-bold text-lg">高圧電位治療器　エナジートロン</h4>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <Image src="/gs80000.jpg" 
                            alt="会社案内" 
                            width={200}
                            height={256}
                            className=""
                            />
                    </div>
                    <div className="col-span-3 space-y-5">
                        <p>エナジートロンとは、高圧電位治療器(電位･温熱組合せ家庭用医療機器)のことで、電界を利用してバランスの良い体に整えるお手伝いをします。 <br></br>
                            人体は60兆個の細胞から成り立ち、そのひとつひとつから電気が発生しています。<br></br>
                            エナジートロンは、この細胞電気(生体電位)を活性化させ、健康づくりに役立てるために開発された家庭用医療機器です。
                        </p>
                        <Link href="product/ttmax" className="font-medium underline decoration-dotted underline-offset-4 text-[#0071bc] mt-10">» 商品詳細</Link>
                    </div>
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
