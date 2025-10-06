import Image from "next/image"
import Sidebar from "~/app/components/sidebar"
import Link from "next/link"

export default function ServicePage() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-15">
              <h2 className="text-white font-medium text-lg">事業内容</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            <div className="ml-5">
                <p className="mb-10">NSDはウェルネスブランドを展開し、直営店、オンラインストアでそれぞれの商品を提供しています。</p>
                <div className="mb-15">
                    <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 mb-6">
                        <h2 className="text-[#0071bc] font-bold text-lg">健康サロン</h2>
                        <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                    </div>
                    <p className="mb-2">
                        人生100年を見据え、健康で楽しい生き方を提案する健康サロン「ハピプラ」<br></br>
                        ハピプラでは、治療器などヘルスケア製品の効果を心ゆくまで体感できます。<br></br>
                        足を運ぶことで楽しく健康になり、 通えば通うほどに元気になる。<br></br>
                        お越しいただいた皆様の健康増進に貢献できる体感型健康サロンを目指しています。
                    </p>
                    <Link
                        href="/service/health_salon"
                        className="text-[#0071bc] underline decoration-dotted underline-offset-2 hover:text-green-800"
                        target="_blank"
                    >
                        » ハピプラ
                    </Link>
                </div>

                <div className="mb-15">
                    <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 mb-6">
                        <h2 className="text-[#0071bc] font-bold text-lg">通信販売事業（ネットショップ）</h2>
                        <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                    </div>
                    <p className="mb-2">
                        皆様の健康へのお手伝いが少しでもできるように、全国のお客様に向けて自社製品を中心としたネットショップ『ハピプラ』を運営しております。<br></br>
                        ケイ素の恵み、水晶の恵み、まるオチくん、MAXコラーゲン、ユーグレナなどを取り揃えております。
                    </p>
                    {/* <Link
                        href="/hapipla"
                        className="text-[#0071bc] underline decoration-dotted underline-offset-2 hover:text-green-800"
                        target="_blank"
                    >
                        » オンラインショップ
                    </Link> */}
                </div>

                <div className="mb-10">
                    <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 mb-6">
                        <h2 className="text-[#0071bc] font-bold text-lg">自社ブランド開発</h2>
                        <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                    </div>
                    <p className="mb-2">
                        ウェルネス市場におけるブランドとして「メディカル」「サプリ」「ビューティ」「エコ」など、豊かな人生、輝く人生を目指すための製品開発を行っていきます。
                    </p>
                    {/* <Link
                        href="/product"
                        className="text-[#0071bc] underline decoration-dotted underline-offset-2 hover:text-green-800"
                        target="_blank"
                    >
                        » 自社ブランド
                    </Link> */}
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
