import Image from "next/image"
import Sidebar from "~/app/components/sidebar"
import Link from "next/link"

export default function PhisolophyPage() {
  const events = [
    { date: "1987年7月", text: "埼玉県さいたま市に日本スーパー電子株式会社を設立\n電位治療器の販売の開始" },
    { date: "1990年5月", text: "直販体制の強化と業務拡大のためさいたま市見沼区へ本社移転" },
    { date: "1995年3月", text: "ＮＳＤ本社ビル完成" },
    { date: "1997年3月", text: "代理店制度開始" },
    { date: "1997年4月", text: "自社ブランド商品 電位治療器（エナジートロンYK9000）発売" },
    { date: "2006年3月", text: "電位治療器（エナジートロンTT-MAX8）発売" },
    { date: "2008年6月", text: "サプリメント事業開始" },
    { date: "2010年4月", text: "通信販売事業参入" },
    { date: "2012年1月", text: "関節系サプリメント「MAXコラーゲンUC・Ⅱプレミアム」発売" },
    { date: "2016年9月", text: "エナジートロンデジタルKS14000発売" },
    { date: "2021年7月", text: "洗濯補助用品「まるオチくん」発売" },
    { date: "2022年7月", text: "創立35周年" },
    { date: "2022年7月", text: "サプリ「知能プレミアム」発売" },
    { date: "2023年10月", text: "酵素サプリ「YASEKO」発売" },
  ];

  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">会社案内</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <Image src="/company_014.jpg" 
              alt="会社案内" 
              width={900}
              height={128}
              className="rounded mb-4"
            />
            <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 mb-6">
              <h2 className="text-[#0071bc] font-bold text-lg">日本スーパー電子（株）について</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            <div className="space-y-2">
              <p className="mb-4">当社は、高圧電位治療器、健康補助食品、美容品等を直営店舗「ハピネスプラザ」を中心に宣伝、販売等を展開しています。</p>
              <p>医療の中心になっている現代西洋医学の発展により、確実に救われる命は増え、寿命も延びました。</p>
              <p>しかし、病気で苦しむ人々は依然多く、肩こりや慢性便秘、不眠症など、生活習慣病の多くは、現代医学で治療しても、なかなか完治にいたらないことが多いことに気づかされます。</p>
              <p>このように苦しんでいる人々を健康にするために、私たちに何かできることはないか、その思いから創業時よりウェルネス事業に取り組んできました。</p>
              <p>私たちが最初に取り組んだのが、自然電界を応用し、免疫力の向上を目的とした高圧電位療法です。</p>
              <p>さらに、栄養面の観点から自社ブランドを中心としたサプリメントを取り入れることで、健康増進を目的に、総合ウェルネス企業として成長してきました。</p>
              <p className="mb-15">今後は、現代医学における問題（医療費の高騰や医療従事者の不足など）が深刻になる中、その解決策の一つとして期待される、「統合医療」を積極的に取り入れようとしている企業や医師の方々と共に、医療の革新、人類の繁栄に貢献すべく、総合ウェルネス事業の発展に取り組んでまいります。</p>
            </div>
            <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 mb-6">
              <h2 className="text-[#0071bc] font-bold text-lg">企業理念</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <p>企業理念・ビジョン・行動指針の全体像</p>
            <Image src="/company_022.jpg" 
              alt="会社案内" 
              width={600}
              height={256}
              className="rounded mb-4"
            />

            <div className="mb-10">
              <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">企業理念</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
              </div>
              <p>社業を通じて万民に心から奉仕し、社会に貢献できる人間性を重視した集団による、優良で且つゆとりある理想的企業を目指す。</p>
            </div>

            <div className="mb-10">
              <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">ミッション</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
              </div>
              <p>日本中の人々を元気にする。</p>
            </div>

            <div className="mb-10">
              <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">経営ビジョン</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
              </div>
              <p>感動生活創造企業として、人々の幸福を実現し、すべてのステークホルダーにとって高い存在価値のある企業であり続ける。</p>
            </div>

            <div className="mb-10">
              <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">事業領域</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
              </div>
              <p>ＮＳＤでは、体感型ショールーム「ハピネスプラザ」を運営しているプラザ運営事業を中核に置き、安全で効果性の高い機能を備えた治療器の開発と普及を行っている医療機器事業、毎日の健康を支えるサプリメント事業、通信販売事業など、健康増進分野で新たな価値と常に期待を超える感動を創造しています。</p>
              <Image src="/company_026.jpg" 
                alt="会社案内" 
                width={600}
                height={256}
                className="rounded mb-4"
              />
              <Link href="/service" className="font-medium underline decoration-dotted underline-offset-4 text-[#0071bc] mb-2">» 事業案内はこちら</Link>
            </div>

            <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 mb-6">
              <h2 className="text-[#0071bc] font-bold text-lg">沿革</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            <div className="max-w-3xl mx-auto mb-10">
              {events.map((event, index) => (
              <div key={index} className="grid grid-cols-5 gap-2">
                {/* Date */}
                <div className="text-gray-700 font-bold py-4">{event.date}</div>
                {/* Event */}
                <div
                  className={`col-span-4 whitespace-pre-line text-gray-800 py-4 ${
                    index !== 0 ? "border-t border-dotted border-gray-300" : ""
                  }`}
                >
                  {event.text}
                </div>
              </div>
              ))}
            </div>
            <div>
              <p>社員一人ひとりの発想により活動し、日本国内、及びアジア地域で起こったさまざまな災害に対する支援活動や、発展途上国で病気に苦しんでいる子供たちへの救済、また地球環境を守るための支援を目的とした「ハピネスプロジェクト」の活動履歴はこちら。</p>
              <Link href="/hapiness" className="font-medium underline decoration-dotted underline-offset-4 text-[#0071bc] mb-2">» 事業案内はこちら</Link>
            </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
    
  )
}
