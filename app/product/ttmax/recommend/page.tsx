import Sidebar from "~/app/components/sidebar"
import Image from "next/image"
export default function RecommendPage() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
           {/* Header bar */}
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">こんな方にお勧め</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            {/* Black white bar */}
            <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">電位治療の効能・効果</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <Image
                src="/product_ttmax_033.jpg"
                alt="医療機器"
                width={900}
                height={200}
                className="rounded hover:opacity-80 transition mt-10"
            />

            {/* Black white bar */}
            <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">温熱治療の効能・効果</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <Image
                src="/product_ttmax_034.jpg"
                alt="医療機器"
                width={900}
                height={200}
                className="rounded hover:opacity-80 transition mt-10"
            />
        </div>
      </div>
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
    
  )
}
