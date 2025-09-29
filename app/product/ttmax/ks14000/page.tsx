import Sidebar from "~/app/components/sidebar"
import Image from "next/image"
export default function ks14000Page() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
           {/* Header bar */}
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-small text-lg">DIGITAL-KS-14000詳細</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            {/* Sub header bar */}
            <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300 p-2 mb-10">
                <h3 className="text-[#0071bc] font-bold text-lg">革新的なデジタル技術</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            <Image src="/product_digital_ks14000_001.jpg" 
                            alt="会社案内" 
                            width={900}
                            height={256}
                            className="rounded mb-4"
                          />

            <div className="mb-10">
                <p>
                    <span className="font-bold">大幅な軽量化を実現</span>
                    トランスが付属していないため、大幅な軽量化を実現しました。本体重量「4.6kg」。<br></br>
                    ※トランス治療器の約半分の重量
                </p>
            </div>

            {/* Sub header bar */}
            <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 mb-6">
                <h3 className="text-[#0071bc] font-bold text-lg">豊富な治療モードを搭載</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            {/* Black white bar */}
            <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">波形のバリエーション</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            <Image src="/product_digital_ks14000_002.jpg" 
                            alt="会社案内" 
                            width={900}
                            height={256}
                            className="rounded mb-4"
                          />
            <div className="mb-10">
                <p>
                    トランスを使用せず、コンピューターのプログラミングにより出力波形のバリエーションを実現。<br></br>
                    様々な治療バリエーションにより目的に合わせた有用性を向上しました。<br></br>
                    （お客様の症状、好みに合わせた治療選択が可能）
                </p>
            </div>

            {/* Black white bar */}
            {/* <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">治療電圧の選択</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            <Image src="/product_digital_ks14000_003.jpg" 
                            alt="会社案内" 
                            width={900}
                            height={256}
                            className="rounded mb-4"
                          />
            <div className="mb-10">
                <p>
                    治療電圧は1,000V ～ 14,000Vまで「1,000V単位」で選択が可能です。
                </p>
            </div> */}

            {/* Black white bar */}
            {/* <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">治療時間の選択</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            <Image src="/product_digital_ks14000_004.jpg" 
                            alt="会社案内" 
                            width={900}
                            height={256}
                            className="rounded mb-4"
                          />
            <div className="mb-10">
                <p>
                    高電圧で1時間治療後、自動で低電圧治療に切り替わります。<br></br>
                    高電圧2,000V～14,000Vの治療は最長1時間、1時間を経過すると自動的に低電圧1,000Vへ変化します。 <br></br>
                    （治療時間は最長8時間で、1時間単位で時間の選択が可能です）                
                </p>
            </div> */}

            {/* Sub header bar */}
            {/* <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 mb-6">
                <h3 className="text-[#0071bc] font-bold text-lg">オペレーションの簡易性・見易さ</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <Image src="/product_digital_ks14000_005.jpg" 
                            alt="会社案内" 
                            width={900}
                            height={256}
                            className="rounded mb-4"
                          />
            <p>液晶パネルのボタン表示をアイコン化することにより操作が分かり易くなり、残り治療時間はパネル数字のカウントダウンすることで把握し易くなりました。</p> */}

            {/* Sub header bar */}
            {/* <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300 p-2 mb-6 mt-6">
                <h3 className="text-[#0071bc] font-bold text-lg">液晶パネルの明るさを調節可能</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <Image src="/product_digital_ks14000_006.jpg" 
                            alt="会社案内" 
                            width={900}
                            height={256}
                            className="rounded mb-4"
                          />
            <p>液晶パネルの明るさを手動により調整が可能、お部屋の明暗に合わせてお好みの明るさに調整できます。</p> */}

            {/* Sub header bar */}
            {/* <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300 p-2 mb-6 mt-6">
                <h3 className="text-[#0071bc] font-bold text-lg">通電(電床)マット、絶縁技術の改新</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div> */}
            {/* Black white bar */}
            {/* <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">ポイント①：通電マットの特徴</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <Image src="/product_digital_ks14000_007.jpg" 
                            alt="会社案内" 
                            width={400}
                            height={256}
                            className="rounded mb-4"
                          />
            <p>マットのサイズは、ほとんどの椅子にフィットするように作られています。</p>
            <Image src="/product_digital_ks14000_008.jpg" 
                            alt="会社案内" 
                            width={400}
                            height={256}
                            className="rounded mb-4 mt-4"
                          />
            <p>
                通電マットは片面通電方式を採用したことにより、表裏面の区別が可能になりました。<br></br>
                ※裏面の絶縁面を作ることにより、通電効率が向上しました。
            </p> */}

            {/* Black white bar */}
            {/* <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6 mt-6">
                <h4 className="ml-2 text-black font-bold text-lg">ポイント②：絶縁技術の改新</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <Image src="/product_digital_ks14000_009.jpg" 
                            alt="会社案内" 
                            width={400}
                            height={256}
                            className="rounded mb-4"
                          />
            <p>
                コードにも２重の絶縁加工を施しました。<br></br>
                絶縁シートには数種類のラインナップがあり、絶縁効果のより高いウェットスーツ素材のシートもご用意しております。<br></br>
                標準装備として、絶縁効率を向上させるゴム板も付いています。<br></br>
                ※椅子の下に敷くことにより、以下の効果がございます。<br></br>
                ・絶縁率の向上 <br></br>
                ・シートへの痛み防止
            </p> */}

            {/* Sub header bar */}
            {/* <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300 p-2 mb-6 mt-6">
                <h3 className="text-[#0071bc] font-bold text-lg">温熱レベルの調整が可能に</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <Image src="/product_digital_ks14000_010.jpg" 
                            alt="会社案内" 
                            width={600}
                            height={256}
                            className="rounded mb-4"
                          />
            <p>     
                温熱の強弱が可能になりました。<br></br>
                ※弱から強まで６段階（40℃～45℃）の　温度調整が可能です。
            </p> */}

            {/* Sub header bar */}
            {/* <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300 p-2 mb-6 mt-6">
                <h3 className="text-[#0071bc] font-bold text-lg">異常エラー時の判断が明確化</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <Image src="/product_digital_ks14000_011.jpg" 
                            alt="会社案内" 
                            width={600}
                            height={256}
                            className="rounded mb-4"
                          />
            <p>     
                エラー発生時に、パネルにエラーコードが表示されることにより、エラー原因の特定が容易になりました。
            </p> */}

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
                本体は５年、部品は３年の充実した保証期間です。
            </p>
        </div>
      </div>
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
    
  )
}
