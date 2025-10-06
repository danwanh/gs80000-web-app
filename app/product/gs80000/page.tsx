import Sidebar from "~/app/components/sidebar"
import Image from "next/image"
export default function gs80000Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
           {/* Header bar */}
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-small text-lg">DIGITAL-GS-80000詳細</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            {/* <Image src="/product_ttmax_018.jpg" 
                            alt="image" 
                            width={900}
                            height={256}
                            className="rounded mb-4"
                          /> */}

            {/* Sub header bar */}
            <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300 p-2 mt-10">
                <h3 className="text-[#0071bc] font-bold text-lg">電子ペンとローラーで部分ケア</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-2 mb-10">
                  <div>
                    <Image src="/product_ttmax_026_01.jpg" 
                            alt="image" 
                            width={300}
                            height={300}
                            className="rounded mb-4"
                          />
                  </div>
                  <div className="space-y-5">
                      <p>
                          肩や首のこりなどは、痛みを感じる所(ツボ)などを局所的に押したりもんだりする
                          ことで効果を得る事が出来ます。
                      </p>
                      <p>
                        針･灸･指圧などと同じ治療法です。
                      </p>
                      <p>
                        そこで本器では、電子ペンやローラーを装備しました。
                      </p>
                      <p>
                        熟練した技術などがなくても、自分ひとりで肩や首などのケアが出来ます。
                      </p> 
                  </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                <Image src="/product_ttmax_019.jpg" 
                        alt="image" 
                        width={900}
                        height={256}
                        className="rounded mb-4"
                        />
                </div>
                <div className="space-y-5">
                    <p>
                    高圧電位治療器は人体の影響で正負の比率(プラス･マイナス)に変動が起きやすいと言われていますが本器ではこれを自動調節。
                    </p>
                    <p>
                    治療時に人体の影響を受けにくく常に正負1対3の安定した高圧電位出力で治療効果を高めます。
                    </p>
                </div>
                <div>
                    <Image src="/gs80000_003.png" 
                        alt="image" 
                        width={900}
                        height={256}
                        className="rounded mb-4"
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
