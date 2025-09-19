import Image from "next/image"
import Sidebar from "~/app/components/sidebar"

export default function EnergyPage() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-15">
              <h2 className="text-white font-medium text-lg">エナジー倶楽部</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            <div className="ml-5">
                <p className="mb-10">NSDはウェルネスブランドを展開し、直営店、オンラインストアでそれぞれの商品を提供しています。</p>
                <div className="mb-15">
                    <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                        <h4 className="ml-2 text-black font-bold text-lg">NSDは「健康創造企業」です。</h4>
                        <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                    </div>
                    <p className="mb-2">
                        ２００９年１月、エナジートロンご愛用者様とそのご家族の健康生活を生涯通じて幅広くサポートすることを目指し、さまざまな特典をお楽しみいただける便利な会員システム「NSDエナジー倶楽部」を発足いたしました。<br></br>
                        日々の健康管理サポートから健康増進・福祉事業まで、お客様の必要とする商品やサービスをご提供してまいります。
                    </p>
                </div>

                <div className="mb-15">
                    <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                        <h4 className="ml-2 text-black font-bold text-lg">NSDエナジー倶楽部のご案内</h4>
                        <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                    </div>
                    <Image
                        src="/energy_013.jpg"
                        alt="医療機器"
                        height={300}
                        width={800}
                        className="rounded object-cover"
                        />
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
