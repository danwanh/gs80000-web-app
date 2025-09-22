import Image from "next/image"
import Sidebar from "~/app/components/sidebar"

export default function Info11Page() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">新年のご挨拶</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <p className="text-right mb-5">2025/01/01</p>
            
            <Image src="/info_013.jpg" 
                            alt="会社案内" 
                            width={900}
                            height={256}
                            className="rounded mb-4"
                          />
             <div className="space-y-5">
                <p>
                    新年、明けましておめでとうございます。<br></br>
                    昨年は格別の御厚情を賜り、厚く御礼を申し上げます。<br></br>
                    本年も社員一同、一人でも多くのお客様にご満足いただけるサービスを心がける所存でございますので <br></br>
                    何とぞ昨年同様のご愛顧を賜わりますよう、お願い申し上げます。<br></br>
                    皆様のご健康とご多幸をお祈りし、新年のご挨拶とさせていただきます。
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
