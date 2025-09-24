"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Allura } from "next/font/google"
import Link from "next/link"

const allura = Allura({
  subsets: ["latin"],
  weight: "400", 
})

export default function Recruit() {
  const slides = [
    {
      bg: "/slide_1.jpg",
      title: "/slide_1_catchcopy.png",
      position: "top-1/4 left-1/3 -translate-x-1/2", // vị trí title
    },
    {
      bg: "/slide_2.jpg",
      title: "/slide_2_catchcopy.png",
      position: "bottom-1/4 left-1/2 -translate-x-1/2",
    },
    {
      bg: "/slide_3.jpg",
      title: "/slide_3_catchcopy.png",
      position: "top-1/4 left-1/4 -translate-y-1/2",
    },
    {
      bg: "/slide_4.jpg",
      title: "/slide_4_catchcopy.png",
      position: "top-1/3 right-1/2 -translate-y-1/2",
    },
  ]
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 4

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

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
                <Image src="/logo.jpg" 
                        alt="会社案内" 
                        width={300}
                        height={200}
                        className="rounded"
                      />
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#message" className="text-sm text-gray-700 hover:text-[#0071bx]">
                メッセージ
              </a>
              <a href="#about" className="text-sm text-gray-700 hover:text-[#0071bx]">
                会社情報
              </a>
              <a href="#member" className="text-sm text-gray-700 hover:text-[#0071bx]">
                人材情報
              </a>
              <a href="#work" className="text-sm text-gray-700 hover:text-[#0071bx]">
                働く環境
              </a>
              <button onClick={() => window.location.href = "/recruitform"} className="bg-[#0071bx] hover:bg-blue-700 text-white px-6 py-2 text-sm rounded transition-colors">
                採用エントリー
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* SLider */}
       <section className="relative h-screen overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.bg}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 "></div>
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute ${slide.position} transition-all duration-1000 ${
              index === currentSlide
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Image
              src={slide.title}
              alt={`Title ${index + 1}`}
              width={500}
              height={150}
              className="mx-auto"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>

      <section id="message" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <p className="text-[#0071bc] 500 text-xl tracking-wider uppercase mb-2">RECRUITING MESSAGE</p>
            <h3 className="text-[#0071bc] text-lg">採用メッセージ</h3>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed font-medium">
            <p className="text-xl">日本スーパー電子で働くことは人生の本質を追求すること</p>

            <div className="space-y-6 text-base">
              <p>
                人は、何のために生まれてくるのでしょうか？
                <br />
                幸せになるため、自己実現の達成、それとも・・・・
              </p>

              <p>
                私たちのプラザには、長年健康を害し、生活が思い通りにならず苦労されている方々が大勢来られます。
               </p>

              <p>
                日々の人生をどのような思いで生きているのだろうか？
                <br />
                いったい何のために生まれてきたのだろうか？
                <br />
                そのようなことを、つい考えてしまいます。
              </p>

              <p>
                では、私たちにできることはなにか？
                <br />
                プラザに来られた方々を健康にすること？
              </p>

              <p>
                それだけでは不十分です。一人一人の人生に希望を灯し、
                <br />
                生きがいのある毎日が送れるように貢献することです。
              </p>

              <p>
                私たちの社内にはボランティアチーム「ハピネスプロジェクト」があります。
                <br />
                プラザに来られるお客様も参加され、そこに新たな生きがいを見出せた方々も沢山いらっしゃいます。
              </p>

              <p>
                私たちは、採用人財に貢献意識を求めます。<br></br>
                お客様に対し、地域社会に対し、仲間に対し・・・・ <br></br>
                どう貢献するかを自分で考え行動します。<br></br>
                そこから新たな変化が生まれ組織が常に進化発展していくものと考えています。
              </p>

              <p>
                私たちは、今、人生に変化を起こすため立ち上がろうとしているチャレンジャーを探しています。<br></br>
                個人の強みを活かし、日本スーパー電子の未来に革新を起こせる人を待っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="h-96 relative bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/space_banner_01.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-200/20"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#0071bc] text-xl tracking-wider uppercase mb-2">HOW TO KNOW ABOUT NSD</p>
            <h3 className="text-[#0071bc] text-lg">日本システム開発を知る</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Philosophy */}
            <div className="text-center">
              <h4 className={`${allura.className} text-[40px] text-center`}>Philosophy</h4>
              <p className="text-lg mb-4">企業理念</p>
              <p className="text-gray-700 text-left font-medium text-[16px]">
                社業を通じて万民に心から奉仕し、社会に貢献できる人間性を重視した集団による、優良で且つゆとりある理想的企業を目指します。
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <h4 className={`${allura.className} text-[40px] text-center`}>Vision</h4>
              <p className="text-lg mb-4">ビジョン</p>
              <p className="text-gray-700 text-left font-medium text-[16px]">
                感動生活創造企業として、人々の幸福を実現し、すべてのステークホルダーにとって高い存在価値のある企業であり続ける
              </p>
            </div>
          </div>

          {/* History */}
          <div className="mt-20 text-center">
            <h4 className={`${allura.className} text-[40px] text-center`}>History</h4>
            <p className="text-lg mb-8">ヒストリー</p>
            <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-sm">
              <p className="text-gray-700 text-left font-medium text-[16px]">
                NSDは1985年に４名で創業し、その後に健康治療器販売会社として「日本スーパー電子(株)」を設立。約３０年の歴史の中では代理店主体から直販主体へ転換し、
                自社ビルが完成いたしました。これまでに社員研修として香港、グアム、台湾、バリ島、ロス・ラスベガス、韓国、オーストラリア、パリ、ニューヨーク・カナダ、ドバイ、
                中国、アラスカ（オーロラ観賞）など２０ヵ国以上を訪問し、
                東京を中心に体感型ショールーム「ハピネスプラザ」を３０店舗以上運営しております。
              </p>
            </div>
            <button onClick={() => window.location.href = "/recruitform"} className="mt-5 border border-gray-200 text-gray-500 hover:bg-[#0071bc] hover:text-white px-6 py-4 text-sm rounded transition-colors">
                詳細はこちら
            </button>
          </div>
        </div>
      </section>

      <section
        className="h-96 relative bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/space_banner_02.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <p className="text-[#0071bc] text-xl tracking-wider uppercase mb-2">WORKING WITH SMILE.</p>
            <h3 className="text-[#0071bc] text-lg">人と仕事を知る</h3>
          </div>

          <p className="mt-10 text-xl text-gray-700 leading-relaxed">
            所属する部署の役割と現在取り組んでいる仕事を聞いてみました。
          </p>
        </div>
      </section>

      {/* Member */}
      <section id="member">
        {/* Staff Ito */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto sm:px-12 lg:px-16 py-16 grid grid-cols-3 lg:grid-cols-3 gap-5">
            <div className="col-span-1">
              <Image src="/staff_ito.jpg" 
                        alt="会社案内" 
                        width={300}
                        height={400}
                        className="rounded"
                      />
            </div>
            <div className="font-medium text-[16px] space-y-10 col-span-2">
              <p className="">2015年入社　営業部プラザ運営課　店長　伊東 七香</p>
              <p className="text-red-500 underline underline-offset-3 decoration-dotted">難しい仕事を乗り越えたられた時、更に人間としても成長出来る。</p>
              <p className="text-gray-700">
                私たちのお店に来られるお客様の多くはどこか体に悩みを抱えた人たちです。
                実際に商品の効果を体感していただきながら、悩みなどを傾聴することで、お客様をよく知り、
                その方に最も適した健康法や商品を提案していきます。
              </p>
              <p className="text-gray-700">
                一人でも多くのお客様に商品を購入していただくのが営業の仕事ですが、商品が素晴らしいので〝売る″ということよりも、お客様との信頼関係を築き、
                それを積み上げていくことを日々行っています。
              </p>
              <button onClick={() => window.location.href = "/member/#itto"} className="mt-5 border border-gray-200 text-gray-500 hover:bg-[#0071bc] hover:text-white px-4 py-4 text-sm rounded transition-colors">
                  続きを読む
              </button>
            </div>
          </div>
        </div>
        {/* Staff Kojima */}
        <div className="bg-white-50">
          <div className="max-w-7xl mx-auto sm:px-12 lg:px-16 py-16 grid grid-cols-3 lg:grid-cols-3 gap-10">
            <div className="font-medium text-[16px] space-y-10 col-span-2">
              <p className="">2012年入社　営業部プラザ運営課　店長　小島 貴宏 健司 七香</p>
              <p className="text-red-500 underline underline-offset-3 decoration-dotted">高みを目指してチャレンジして行く事で、また新たなやりがいを見つけられる。</p>
              <p className="text-gray-700">
                  店長の役割は、単純に考えるとお店の売部署の役割は、直営店「ハピネスプラザ」で自社ブランド商品をはじめ取扱商品全般を地域に広く普及することです。私が担当している仕事は来店されるお客様の接客と店舗運営です。
                  上げをあげることですが、
              </p>
              <p className="text-gray-700">
                やりがいは日々目の前で起きる奇跡を共に喜び、本当にたくさんの人から感謝され続けているという所です。入社当初は何も分からず専門知識も全くなく、
                ただがむしゃらに今日1日を何とか過ごして行こうという感覚でした。
              </p>
              <button onClick={() => window.location.href = "/member/#onuma"} className="mt-5 border border-gray-200 text-gray-500 hover:bg-[#0071bc] hover:text-white px-4 py-4 text-sm rounded transition-colors">
                  続きを読む
              </button>
            </div>
            <div className="col-span-1 mb-20">
              <Image src="/staff_kojima.jpg" 
                        alt="会社案内" 
                        width={300}
                        height={400}
                        className="rounded"
                      />
            </div>
          </div>
        </div>
        {/* Staf Onuma*/}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto sm:px-12 lg:px-16 py-16 grid grid-cols-3 lg:grid-cols-3 gap-5">
            <div className="col-span-1 mb-20">
              <Image src="/staff_onuma.jpg" 
                        alt="会社案内" 
                        width={300}
                        height={400}
                        className="rounded"
                      />
            </div>
            <div className="font-medium text-[16px] space-y-10 col-span-2">
              <p className="">2002年入社　営業部プラザ運営課　店長　大沼 健司 七香</p>
              <p className="text-red-500 underline underline-offset-3 decoration-dotted">人や社会の役に立つことの喜びを教えてくれたのがこの仕事でした。</p>
              <p className="text-gray-700">
                  店長の役割は、単純に考えるとお店の売上げをあげることですが、
                  その前に、私たちのお店「ハピネスプラザ」が地域に必要とされる存在になることを第一に考え行動します。
              </p>
              <p className="text-gray-700">
                「ハピネスプラザがあってよかった」「ハピネスプラザから買ってよかった」という信頼関係を築きあげることが使命なのです。
                自分のことしか考えられなかった私に、人や社会の役に立つことの喜びを教えてくれたのがこの仕事でした。
              </p>
              <button onClick={() => window.location.href = "/member/#onuma"} className="mt-5 border border-gray-200 text-gray-500 hover:bg-[#0071bc] hover:text-white px-4 py-4 text-sm rounded transition-colors">
                  続きを読む
              </button>
            </div>
          </div>
        </div>

        {/* Staff Tanaka */}
        <div className="bg-white-50">
          <div className="max-w-7xl mx-auto sm:px-12 lg:px-16 py-16 grid grid-cols-3 lg:grid-cols-3 gap-10">
            <div className="font-medium text-[16px] space-y-10 col-span-2">
              <p className="">2011年入社　マーケティング課　係長　田中 宏和 友也 貴宏 健司 七香</p>
              <p className="text-red-500 underline underline-offset-3 decoration-dotted">営業の方からの『ありがとう』という言葉に、やりがいを感じます。</p>
              <p className="text-gray-700">
                マーケティング課店舗開発の主な役割は、直営店である『ハピネスプラザ』
                を展開する事ができる物件を探しその地域でプラザを出店するメリットがあるか市場調査をとり地域を知る事がおもな役割になります。
              </p>
              <p className="text-gray-700">
                また、プラザをお任せする営業の方が運営に専念出来る様に設備環境やご相談があった際迅速に対応する事も店舗開発の大事な役割になります。
              </p>
              <button onClick={() => window.location.href = "/member/#onuma"} className="mt-5 border border-gray-200 text-gray-500 hover:bg-[#0071bc] hover:text-white px-4 py-4 text-sm rounded transition-colors">
                  続きを読む
              </button>
            </div>
            <div className="col-span-1 mb-20">
              <Image src="/staff_tanaka.jpg" 
                        alt="会社案内" 
                        width={300}
                        height={400}
                        className="rounded"
                      />
            </div>
          </div>
        </div>

        {/* Staff Hagiwara */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto sm:px-12 lg:px-16 py-16 grid grid-cols-3 lg:grid-cols-3 gap-5">
            <div className="col-span-1 mb-20">
              <Image src="/staff_hagiwara_jr.jpg" 
                        alt="会社案内" 
                        width={300}
                        height={400}
                        className="rounded"
                      />
            </div>
            <div className="font-medium text-[16px] space-y-10 col-span-2">
              <p className="">2013年入社　顧客管理課　主任　萩原 友也 貴宏 健司 七香</p>
              <p className="text-red-500 underline underline-offset-3 decoration-dotted">お客様にとって人生を変える「希望」であり続ける。</p>
              <p className="text-gray-700">
                どのような仕事も人の役に立ち感謝されるものだと思いますが、お客様から「人から感謝される良いお仕事をされているのね」
                という多くの言葉をいただくことで、人間として成長させられていることを実感しています。
                また、「ハピネスプロジェクト」を通じて支援活動に参加することで、お客様だけでなく、
                万民すべての皆様に希望をお届けできることが私のやりがいになっています。
              </p>
              <button onClick={() => window.location.href = "/member/#onuma"} className="mt-5 border border-gray-200 text-gray-500 hover:bg-[#0071bc] hover:text-white px-4 py-4 text-sm rounded transition-colors">
                  続きを読む
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="h-96 relative bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/space_banner_03.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
      </section>

        {/* Work environment */}
       <section className="max-w-3xl mx-auto px-4 py-20 bg-white">
          <div className="text-[16px] font-medium">
            <div className="mb-8 text-center">
              <p className="text-[#0071bc] text-xl tracking-wider uppercase mb-2">WORK ENVIRONMENT.</p>
              <h3 className="text-[#0071bc] text-lg mb-10">働く環境を知る</h3>
              <div className="flex-1 border-t-2 border-[#0071bc] mb-3"></div>
              <span className="px-4 text-[#0071bc] text-xl text-bold font-medium">教育制度</span>
              <div className="flex-1 border-t-2 border-[#0071bc] mt-3 mb-20"></div>
            </div>
            <p className="">企業理念の実現と従業員一人ひとりの夢の実現ができる職場でありたいと思い、新入時から幹部層まで様々な研修を行っています。</p>
            {/* 1 */}
            <div className="mt-20">
              <h1 className="text-[#0071bc] text-xl font-bold mb-5">１、新入社員研修</h1>
              <p>＜ 新入社員スケジュール ＞</p>
              <Image src="/work_006.png" 
                        alt="会社案内" 
                        width={800}
                        height={800}
                        className="rounded mb-5"
                      />

              <p>基礎研修</p>
              <Image src="/work_001.jpg" 
                        alt="会社案内" 
                        width={400}
                        height={400}
                        className="rounded mb-5"
                      />
              <p className="mb-10">
                入社式終了後、まず受けていただくのが基礎研修です。
                <br/><br/>
                本社で集中的に受講する本研修の目的は日本スーパー電子、の考え方を深く理解することと、接客スキルや商品の魅力を習得することです。
                <br/><br/>
                約２週間、座学を中心に分かりやすく学ぶことができます。
              </p>

              <p>実習</p>
              <Image src="/work_002.jpg" 
                        alt="会社案内" 
                        width={400}
                        height={400}
                        className="rounded mb-5"
                      />
              <p className="mb-10">
                ２週間の基礎研修後は、店舗へ行き、店舗で日々行われている業務を学びます。
                店舗では実際に行われている業務に携わる事で接客の楽しさ喜び、苦労や難しさを実感していただきます。                
                <br/><br/>
                本社で集中的に受講する本研修の目的は日本スーパー電子、の考え方を深く理解することと、接客スキルや商品の魅力を習得することです。
                <br/><br/>
                約２週間、座学をまた、店舗では、商品の体験に来て頂いたお客様の感動的な体験談を聞くことができますので商品への自信を深め、仕事に活かすことができる大切な研修です。
                中心に分かりやすく学ぶことができます。
              </p>

              <p>店舗配属</p>
                <div>
                  <Image src="/work_003.jpg" 
                            alt="会社案内" 
                            width={400}
                            height={400}
                            className="rounded mb-5"
                          />
                </div>
                <div>
                  <p className="mb-10">
                  新人研修は店舗実習をもってひとまず終了です。
                  このあとは実習店舗か他の店舗もしくは新規店舗のオープニングスタッフとして配属が決まります。
                  <br/><br/>
                  新人研修が終了したあとも「フォローアップ研修」や毎月行われる「営業研修会」などがあります。
                  また、外部セミナーのＢizキャンパスを活用し、キャリアに応じた各種研修もご用意。
                  主体性と創造性を発揮できる人材を目指していただきます。
                  </p>
                </div>
            </div>
          </div>

       </section>



    


      <footer className="bg-[#0071bc] text-white text-center py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Menu */}
        <div className="flex flex-wrap justify-center space-x-6 mb-6 text-sm">
          <Link href="/" className="hover:underline">会社HP</Link>
          <Link href="/about" className="hover:underline">会社概要</Link>
          <Link href="/services" className="hover:underline">事業内容</Link>
          <Link href="/contact" className="hover:underline">お問い合わせ</Link>
          <Link href="/shop" className="hover:underline">ネットショップ</Link>
          <Link href="/privacy" className="hover:underline">プライバシーポリシー</Link>
        </div>

        {/* Company Info */}
        <div className="text-sm leading-6 mb-6">
          <p className="font-bold">日本スーパー電子株式会社</p>
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
