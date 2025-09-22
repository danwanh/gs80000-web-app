import Sidebar from "~/app/components/sidebar"

export default function PrecautionPage() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
           {/* Header bar */}
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">使用上のご注意</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            {/* Black white bar */}
            <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-l">次のような医用電気機器との併用は、影響を与える恐れがあるので、絶対にしないで下さい。</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <div className="mb-10 space-y-5">
                <p>
                    （1）ペースメーカー、埋込み型除細動器などの電磁障害の影響を受けやすい体内埋込み型医用電気機器
                </p>
                <p>
                    （2）心電計などの装着形の医用電気機器 
                </p>
            </div>


            {/* Black white bar */}
            <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-l">心臓病と診断され、日常の過激な運動を制限されている人は使用しないで下さい。</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            {/* Black white bar */}
            <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-l">次の人は医師とご相談の上、ご使用下さい。</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <div className="mb-10">
                <p>
                    （1）悪性腫瘍のある人 <br></br>
                    （2）心臓に障害のある人 <br></br>
                    （3）妊娠初期の不安定気、または出産直後の人 <br></br>
                    （4）体温38℃以上（有熱期）の人 <br></br>
                    （5）医師に安静を指示されている人 <br></br>
                    （6）急性疾患の人（せきついの骨折、ねんざ、肉離れなど） <br></br>
                    （7）知覚障害のある人（糖尿病などによる高度な末しょう循環障害による）
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
