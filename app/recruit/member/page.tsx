"use client"

import Image from "next/image"
import { Allura } from "next/font/google"
import Link from "next/link"
import { Pencil } from "lucide-react";

const allura = Allura({
  subsets: ["latin"],
  weight: "400", 
})

export default function Member() {
  return (
    <div className="min-h-screen" style={{
        fontFamily: `Lato, "游ゴシック体", "Yu Gothic", YuGothic, 
        "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", 
        "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif`,
      }}
    >
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <Link href="/recruit">
                  <Image 
                    src="/logo.jpg" 
                    alt="image" 
                    width={300} 
                    height={200} 
                    className="rounded cursor-pointer" 
                  />
                </Link>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/recruit/#message" className="text-sm text-gray-700 hover:text-[#0071bx]">
                メッセージ
              </a>
              <a href="/recruit/#about" className="text-sm text-gray-700 hover:text-[#0071bx]">
                会社情報
              </a>
              <a href="/recruit/#member" className="text-sm text-gray-700 hover:text-[#0071bx]">
                人材情報
              </a>
              <a href="/recruit/#work" className="text-sm text-gray-700 hover:text-[#0071bx]">
                働く環境
              </a>
              <button onClick={() => window.location.href = "/recruitform"} className="bg-[#0071bc] hover:bg-gray-900 text-white px-6 py-2 text-sm rounded transition-colors">
                採用エントリー
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="mt-20">
        <h1 className={`${allura.className} text-[40px] text-center`}>NSD People</h1>
        <div className="max-w-7xl mx-auto sm:px-12 lg:px-16 py-16 text-[16px] space-y-20">
          <h1 className="font-medium text-xl">所属する部署の役割と現在取り組んでいる仕事を聞いてみました。</h1>
          <div id="ito" className=" mt-15 grid grid-cols-3 lg:grid-cols-3 gap-5">
            <div className="col-span-1">
              <Image src="/staff_ito.jpg" 
                                      alt="image" 
                                      width={300}
                                      height={400}
                                      className="rounded"
                                    />
            </div>
            <div className="col-span-2 space-y-5">
              <p className="text-xl font-medium">2015年入社　営業部プラザ運営課　店長　伊東 七香</p>
              <p className="text-red-500 text-xl font-medium underline underline-offset-3 decoration-dotted"> 難しい仕事を乗り越えたられた時、更に人間としても成長出来る。</p>
              <p>
                私たちのお店に来られるお客様の多くはどこか体に悩みを抱えた人たちです。
                <br/><br/>
                実際に商品の効果を体感していただきながら、悩みなどを傾聴することで、お客様をよく知り、その方に最も適した健康法や商品を提案していきます。
                <br/><br/>
                一人でも多くのお客様に商品を購入していただくのが営業の仕事ですが、商品が素晴らしいので〝売る″ということよりも、お客様との信頼関係を築き、それを積み上げていくことを日々行っています。
                <br/><br/>
                心がけていることは、来店された方全員と、笑顔で話をする事。とにかく皆様が笑顔で来て下さる、その為に、最高の笑顔でお迎えさせて頂きたい、そう思っています。
                <br/><br/>
                私にも出来る事、私にしかできない事。それを感じられる仕事でもあり、難しい事もありますが、それを乗り越えたられた時、更に人間としても成長出来る、全てがやりがいです
              </p>
            </div>
          </div>

          <div id="kojima" className=" mt-15 grid grid-cols-3 lg:grid-cols-3 gap-5">
            <div className="col-span-1">
              <Image src="/staff_kojima.jpg" 
                                      alt="image" 
                                      width={300}
                                      height={400}
                                      className="rounded"
                                    />
            </div>
            <div className="col-span-2 space-y-5">
              <p className="text-xl font-medium">2012年入社　営業部プラザ運営課　店長　小島 貴宏 七香</p>
              <p className="text-red-500 text-xl font-medium underline underline-offset-3 decoration-dotted"> 高みを目指してチャレンジして行く事で、また新たなやりがいを見つけられる。</p>
              <p>
                私が担当している仕事は来店されるお客様の接客と店舗運営です。やりがいは日々目の前で起きる奇跡を共に喜び、本当にたくさんの人から感謝され続けているという所です。
                <br/><br/>
                入社当初は何も分からず専門知識も全くなく、ただがむしゃらに今日1日を何とか過ごして行こうという感覚でした。
                ですが次第にお客様から毎日「ありがとう」、「来て良かったわ」、「明日も来るね」と今までの人生の中であまり人から感謝される事をして来なかった為、それがとても新鮮で嬉しく感じました。
                <br/><br/>
                壁にぶつかった時、何か困った時は信頼ある上司、先輩に気兼ねなく相談が出来る環境なので入社4年目の私でも安心して仕事が出来ていると思います。
                私はこの会社でこの仕事を一生続けて行きたいと強く思っています。
                後は自分が高みを目指してチャレンジして行く事で、また新たなやりがいを見つけられると思うので継続してチャレンジを続けて行こうと思います。
              </p>
            </div>
          </div>

          <div id="onuma" className=" mt-15 grid grid-cols-3 lg:grid-cols-3 gap-5">
            <div className="col-span-1">
              <Image src="/staff_onuma.jpg" 
                                      alt="image" 
                                      width={300}
                                      height={400}
                                      className="rounded"
                                    />
            </div>
            <div className="col-span-2 space-y-5">
              <p className="text-xl font-medium">2002年入社　営業部プラザ運営課　店長　大沼 健司 貴宏 七香</p>
              <p className="text-red-500 text-xl font-medium underline underline-offset-3 decoration-dotted"> 人や社会の役に立つことの喜びを教えてくれたのがこの仕事でした。</p>
              <p>
                店長の役割は、単純に考えるとお店の売上げをあげることですが、その前に、私たちのお店「ハピネスプラザ」が地域に必要とされる存在になることを第一に考え行動します。
                <br/><br/>
                ハピネスプラザがあってよかった」「ハピネスプラザから買ってよかった」という信頼関係を築きあげることが使命なのです。
                <br/><br/>
                自分のことしか考えられなかった私に、人や社会の役に立つことの喜びを教えてくれたのがこの仕事でした。
                <br/><br/>
                出会っていただいたすべての方の幸せを願い素晴らしい人生を歩むために何が出来るかを考えるのがやりがいであり、喜ばれているお客様の笑顔を見てまたやりがいを頂いています。
                <br/><br/>
                お店では笑いあり、涙あり、感動ありのドラマチックな毎日で、お客様と共に「ハピネスプラザ」を成長させることが私の目標です。
              </p>
            </div>
          </div>

          <div id="tanaka" className=" mt-15 grid grid-cols-3 lg:grid-cols-3 gap-5">
            <div className="col-span-1">
              <Image src="/staff_tanaka.jpg" 
                                      alt="image" 
                                      width={300}
                                      height={400}
                                      className="rounded"
                                    />
            </div>
            <div className="col-span-2 space-y-5">
              <p className="text-xl font-medium">2011年入社　マーケティング課　係長　田中 宏和 健司 貴宏 七香</p>
              <p className="text-red-500 text-xl font-medium underline underline-offset-3 decoration-dotted"> 営業の方からの『ありがとう』という言葉に、やりがいを感じます。</p>
              <p>
                マーケティング課店舗開発の主な役割は、直営店である『ハピネスプラザ』を展開する事ができる物件を探しその地域でプラザを出店するメリットがあるか市場調査をとり地域を知る事がおもな役割になります。
                <br/><br/>
                また、プラザをお任せする営業の方が運営に専念出来る様に設備環境やご相談があった際迅速に対応する事も店舗開発の大事な役割になります。
                <br/><br/>
                私が現在担当している仕事は、物件探し、市場調査、不動産との交渉・契約、プラザのオープン準備まで任されています。この任されている仕事は裏方の仕事がほとんどですがどの工程も絶対に油断は出来ない仕事です。
                <br/><br/>
                営業の方たちが安心して新しい地域でプラザを開催していただく為です。
                <br/><br/>
                この仕事のやりがいは実際にお客様と接する事はほとんどありませんが何よりもプラザオープンが順調に開催していき営業の方に会われた時『ありがとう』という言葉やプラザのお客様がその地域に出店した事を喜んでいる話を営業の方から聞ける事がこの仕事にやりがいを感じます。
                <br/><br/>
                直営店の「ハピネスプラザ」は現在関東を中心に出店しています。今はまだ関東のみの展開ですが、企業理念の一つに『社業を通じてすべての人々の健康で豊かな生活に貢献する』を掲げています。
                <br/><br/>
                どのプラザにも来られるお客様は初めお体に辛い部分などがあり来場されますが皆さん続けて来られる度に笑顔になってプラザに来られます。
                <br/><br/>
                私の目標はお体が辛くやりたい事を諦めてしまっている方や元気をなくしてしまっている方にもぜひハピネスプラザを通じてそのような方々のお力になりたいと思います。
                <br/><br/>
                そのために直営店のハピネスプラザを関東のみの展開でなく全国展開していく事が目標です。
              </p>
            </div>
          </div>

          <div id="hagiwara_jr" className=" mt-15 grid grid-cols-3 lg:grid-cols-3 gap-5">
            <div className="col-span-1">
              <Image src="/staff_hagiwara_jr.jpg" 
                                      alt="image" 
                                      width={300}
                                      height={400}
                                      className="rounded"
                                    />
            </div>
            <div className="col-span-2 space-y-5">
              <p className="text-xl font-medium">2013年入社　顧客管理課　主任　萩原 友也 健司 貴宏 七香</p>
              <p className="text-red-500 text-xl font-medium underline underline-offset-3 decoration-dotted"> お客様にとって人生を変える「希望」であり続ける。</p>
              <p>
                顧客管理課の役割は、カスタマーサポート、納品、商品の発送等になりますが、私が担当している仕事は、主に納品、アフターサービスになります。
                <br/><br/>
                お店でご注文いただいた商品の中でも、電位治療器はお客様にとって最適な使用方法を提案するため私たち専門スタッフが直接、納品・取扱説明に伺います。
                <br/><br/>
                また、アフターサービスでは、電話対応や出張訪問をはじめ定期的に各地域で懇談会を開催し健康状況や使用状況の確認、提案等を行っております。
                <br/><br/>
                私たちの商品が、お客様にとって人生を変える「希望」であり続けるよう、ご購入後も責任を持って対応していくことで営業担当者が築いたお客様への信頼残高をさらに増やせるよう心がけています。
                <br/><br/>
                どのような仕事も人の役に立ち感謝されるものだと思いますが、お客様から「人から感謝される良いお仕事をされているのね」という多くの言葉をいただくことで、人間として成長させられていることを実感しています。
                <br/><br/>
                また、「ハピネスプロジェクト」を通じて支援活動に参加することで、お客様だけでなく、万民すべての皆様に希望をお届けできることが私のやりがいになっています。
              </p>
            </div>
          </div>
        </div>

          
      </div>




      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center text-medium text-[16px]">
            <p>
              <span className="text-red-500 underline decoration-dotted underline-offset-4 mb-15">応募要項</span>
              をご確認のうえ、以下のエントリページよりご応募ください。
            </p>
            <Link
              href="/recruitform"
              className="inline-flex items-center gap-2 rounded-md bg-[#0071bc] px-8 py-4 text-white hover:bg-orange-400 transition mt-10"
            >
              <span className="text-lg">採用エントリー</span>
              <Pencil className="w-5 h-5" />
            </Link>
        </div>
      </section>

      <footer className="bg-[#0071bc] text-white text-center py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Menu */}
        <div className="flex flex-wrap justify-center space-x-6 mb-6 text-sm">
          <Link href="/" className="hover:underline">会社HP</Link>
          <Link href="/company" className="hover:underline">会社概要</Link>
          <Link href="/service" className="hover:underline">事業内容</Link>
          <Link href="/contact" className="hover:underline">お問い合わせ</Link>
          <Link href="/energy" className="hover:underline">ネットショップ</Link>
          <Link href="/privacy" className="hover:underline">プライバシーポリシー</Link>
        </div>

        {/* Company Info */}
        <div className="text-sm leading-6 mb-6">
          <p className="font-bold">(NIPPON GROUP)</p>
          <p>〒337-0051 埼玉県さいたま市見沼区</p>
          <p>東大宮6-36-16</p>
          <p>TEL：048-683-2977</p>
          <p>FAX：048-683-2978</p>
        </div>

        {/* Copyright */}
        <div className="text-xs">
          COPYRIGHT 2025 Japan Superdenshi Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
    </div>
  )
}
