import Sidebar from "~/app/components/sidebar"
import Image from "next/image"
export default function ttmaxPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
           {/* Header bar */}
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-small text-lg">TT-MAX8詳細</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <Image src="/product_ttmax_018.jpg" 
                            alt="会社案内" 
                            width={900}
                            height={256}
                            className="rounded mb-4"
                          />

            {/* Sub header bar */}
            <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300 p-2 mb-10">
                <h3 className="text-[#0071bc] font-bold text-lg">豊富な治療モードを搭載</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            {/* Black white bar */}
            <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">【１】　正負１対３の安定した高圧電位出力で治療効果</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-2 gap-8">
                  <div>
                    <Image src="/product_ttmax_019.jpg" 
                            alt="会社案内" 
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
                      <Image src="/product_ttmax_029.jpg" 
                            alt="会社案内" 
                            width={900}
                            height={256}
                            className="rounded mb-4"
                          />
                  </div>
            </div>
            {/* Black white bar */}
            <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">【２】　だんだんと強くカラダにやさしい使い心地</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-2 gap-8">
                  <div>
                    <Image src="/product_ttmax_020.jpg" 
                            alt="会社案内" 
                            width={900}
                            height={256}
                            className="rounded mb-4"
                          />
                  </div>
                  <div className="space-y-5">
                      <p>
                        電界治療では、通常出力パワーは一定ですが、本器では自動的に少しずつ強くしていき(潜入)
                        、最も強くなってから再び徐々に弱くなる(潜出)ようにプログラムされています。(プラス･マイナス)に変動が起きやすいと言われていますが本器ではこれを自動調節。
                      </p>
                      <p>
                        この潜入･潜出法により、電界変化による生体反応を軽減します。
                      </p>
                  </div>
            </div>
            {/* Black white bar */}
            <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">【３】　選べる２つのインターバル設定</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <div className="space-y-5">
              <p>
                風邪をひいた時、薬をただ飲むだけでなく、
                飲んだ後睡眠をとる(体を休める)方が回復が早いと医師に言われたことはありませんか？このように、
                電界治療も睡眠時に使用することをオススメします。
              </p>
              <p>
                60分の治療時間を30分ずつに分けその間にインターバル(休憩)をとる事が出来る
                2種類の予約プログラムを開発しました。
              </p>
              <p>休憩は4時間で、4時間後に再び30分間の治療がスタートします。</p>
            </div>

            {/* Sub header bar */}
            <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300 p-2 mt-10">
                <h3 className="text-[#0071bc] font-bold text-lg">電子ペンとローラーで部分ケア</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-2 mb-10">
                  <div>
                    <Image src="/product_ttmax_026_01.jpg" 
                            alt="会社案内" 
                            width={200}
                            height={200}
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
            {/* Sub header bar */}
            <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300 p-2 mb-10">
                <h3 className="text-[#0071bc] font-bold text-lg">調光回路採用</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <p className="mb-10">
              部屋の明るさに合わせて、液晶パネルの明るさが変わります。<br></br>
              部屋が明るいと液晶パネルも明るく、暗いと暗くなります。
            </p>

            {/* Sub header bar */}
            <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300 p-2 mb-10">
                <h3 className="text-[#0071bc] font-bold text-lg">安全回路内臓</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <p className="mb-10">
              内部検知回路により、万一の異常発生を検知すると安全回路が作動し、出力を自動的に停止させますので、安心してご使用できます。
            </p>

            {/* Sub header bar */}
            <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300 p-2 mb-6 mt-6">
                <h3 className="text-[#0071bc] font-bold text-lg">電気代</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <Image src="/product_digital_ks14000_012.jpg" 
                            alt="会社案内" 
                            width={200}
                            height={256}
                            className="rounded mb-4"
                          />
            <p>     
                電気代は、なんと1日に約2円程度に。<br></br>
                ※治療モードによって異なります。
            </p>

            {/* Sub header bar */}
            <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300 p-2 mb-6 mt-6">
                <h3 className="text-[#0071bc] font-bold text-lg">安心の保証</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <Image src="/product_digital_ks14000_013.jpg" 
                            alt="会社案内" 
                            width={900}
                            height={50}
                            className="rounded mb-4"
                          />
            <p>     
                本体は 1 0 年、部品は３年の充実した保証期間です。
            </p>
        </div>
      </div>
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
    
  )
}
