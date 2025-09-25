"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Allura } from "next/font/google"
import Link from "next/link"
import { CheckCircle } from "lucide-react";
import { Pencil } from "lucide-react";

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
                <Link href="/recruit">
                  <Image 
                    src="/logo.jpg" 
                    alt="会社案内" 
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

      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#0071bc] text-xl tracking-wider uppercase mb-2">HOW TO KNOW ABOUT NSD.</p>
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
            <button onClick={() => window.location.href = "/recruit/history"} className="mt-5 border border-gray-200 text-gray-500 hover:bg-[#0071bc] hover:text-white px-6 py-4 text-sm rounded transition-colors">
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

      <section id="member" className="py-20 bg-white">
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
      <section>
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
              <button onClick={() => window.location.href = "recruit/member/#itto"} className="mt-5 border border-gray-200 text-gray-500 hover:bg-[#0071bc] hover:text-white px-4 py-4 text-sm rounded transition-colors">
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
              <button onClick={() => window.location.href = "recruit/member/#onuma"} className="mt-5 border border-gray-200 text-gray-500 hover:bg-[#0071bc] hover:text-white px-4 py-4 text-sm rounded transition-colors">
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
              <button onClick={() => window.location.href = "recruit/member/#onuma"} className="mt-5 border border-gray-200 text-gray-500 hover:bg-[#0071bc] hover:text-white px-4 py-4 text-sm rounded transition-colors">
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
              <button onClick={() => window.location.href = "recruit/member/#tanaka"} className="mt-5 border border-gray-200 text-gray-500 hover:bg-[#0071bc] hover:text-white px-4 py-4 text-sm rounded transition-colors">
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
              <button onClick={() => window.location.href = "recruit/member/#hagiwara_jr"} className="mt-5 border border-gray-200 text-gray-500 hover:bg-[#0071bc] hover:text-white px-4 py-4 text-sm rounded transition-colors">
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
       <section id="work" className="max-w-3xl mx-auto px-4 py-20 bg-white">
          <div className="text-[16px] font-medium">
            {/* Training */}
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

              <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
                <div className="col-span-1">
                  <p>基礎研修</p>
                  <Image src="/work_001.jpg" 
                            alt="会社案内" 
                            width={400}
                            height={400}
                            className="rounded mb-5"
                          />
                </div>
                <div className="col-span-1">
                  <p className="mb-10">
                    <br/>
                    入社式終了後、まず受けていただくのが基礎研修です。
                    <br/><br/>
                    本社で集中的に受講する本研修の目的は日本スーパー電子、の考え方を深く理解することと、接客スキルや商品の魅力を習得することです。
                    <br/><br/>
                    約２週間、座学を中心に分かりやすく学ぶことができます。
                  </p>
                </div>
              </div>


              <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
                <div className="col-span-1">
                  <p>実習</p>
                  <Image src="/work_002.jpg" 
                            alt="会社案内" 
                            width={400}
                            height={400}
                            className="rounded mb-5"
                          />
                </div>
                <div className="col-span-1">
                  <p className="mb-10">
                    <br/>
                    ２週間の基礎研修後は、店舗へ行き、店舗で日々行われている業務を学びます。
                    店舗では実際に行われている業務に携わる事で接客の楽しさ喜び、苦労や難しさを実感していただきます。                
                    <br/><br/>
                    本社で集中的に受講する本研修の目的は日本スーパー電子、の考え方を深く理解することと、接客スキルや商品の魅力を習得することです。
                    <br/><br/>
                    約２週間、座学をまた、店舗では、商品の体験に来て頂いたお客様の感動的な体験談を聞くことができますので商品への自信を深め、仕事に活かすことができる大切な研修です。
                    中心に分かりやすく学ぶことができます。
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
                <div className="col-span-1">
                  <p>店舗配属</p>
                  <Image src="/work_003.jpg" 
                            alt="会社案内" 
                            width={400}
                            height={400}
                            className="rounded mb-5"
                          />
                </div>
                <div className="col-span-1">
                  <p className="mb-10">
                  <br/>
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
          
            {/* 2 */}
            <h1 className="text-[#0071bc] text-xl font-bold mb-5">２、営業力ステップアップ研修</h1>
            <p>月に１度、個々のレベルに応じたスキルアップ研修を行っています。
              この研修は全営業スタッフが集まり成功体験例など情報交換の場でもあり能力アップと同時に社員間のコミュニケーションを深める機会にもなっています。
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
              <div className="col-span-1">
                <Image src="/work_004.jpg" 
                          alt="会社案内" 
                          width={400}
                          height={400}
                          className="rounded mb-5"
                        />
              </div>
              <div className="col-span-1">
                <Image src="/work_005.jpg" 
                          alt="会社案内" 
                          width={400}
                          height={400}
                          className="rounded mb-5"
                        />
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 mt-5">
              <div className="col-span-1">
                <p>
                  能力開発の機会を提供
                  <br/><br/>
                  社内研修だけでなく、スキルアップや、リーダーシップ力を身につけるために積極的に外部研修を活用しています。
                </p>

              </div>
              <div className="col-span-1">
                <Image src="/work_009.jpg" 
                          alt="会社案内" 
                          width={400}
                          height={400}
                          className="rounded mb-5"
                        />
              </div>
            </div>

            <div>
              <h1 className="text-[#0071bc] text-xl font-bold mb-5">貢献力の育成</h1>
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 mt-5">
                <div className="col-span-1">
                  <p className="mb-10">
                    日本スーパー電子は、従業員の「誰かの役に立ちたい、そして自分も成長したい」という　
                    ”貢献マインド”を大切に育てる企業でありたいと考えています。
                    <br/>
                    そのために社内にボランティアチーム「ハピネスプロジェクト」を作り社会貢献活動を従業員の人材育成の場としても積極的に活用しています。
                  </p>
                  <Link
                        href="/happiness"
                        className="text-[#0071bc] hover:underline text-base"
                      >
                        » ハピネスプロジェクトとは？
                      </Link>
                </div>
                <div className="col-span-1">
                  <Image src="/work_013.jpg" 
                            alt="会社案内" 
                            width={400}
                            height={400}
                            className="rounded mb-5"
                          />
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 mt-5">
                <div className="col-span-1">
                  <p className="mb-10">
                    東日本大震災支援活動
                    <br/>
                    日本の観測史上最大の地震となった東日本大震災。
                    <br/><br/>
                    現地での想像を絶する惨状を目の当たりにし、一人でも多くの方を助けたい想いから、
                    ３０回にわたりヘルスケア支援や炊き出し等による支援をさせていただきました。
                  </p>
                </div>
                <div className="col-span-1">
                  <Image src="/company_055_05.jpg" 
                            alt="会社案内" 
                            width={400}
                            height={400}
                            className="rounded mb-5"
                          />
                </div>
              </div>
            </div>    
          </div>

          {/* Promoting Work-Life Balance */}
          <div className="text-[16px] font-medium mt-30">
            <div className="mb-8 text-center">
              <div className="flex-1 border-t-2 border-[#0071bc] mb-3"></div>
              <span className="px-4 text-[#0071bc] text-xl text-bold font-medium">ワークライフバランスの推進</span>
              <div className="flex-1 border-t-2 border-[#0071bc] mt-3 mb-20"></div>
            </div>

            <div className="mt-15">
              <h1 className="text-[#0071bc] text-xl font-bold mb-5">ワークライフバランスの考え方</h1>
              <div className="grid grid-cols-3 lg:grid-cols-3 gap-8 mb-10">
                <div className="col-span-2">
                  <p className="mb-10">
                    <span className="text-red-500 underline underline-offset-4 decoration-dotted">「全従業員が豊かな人生を送ること」</span> そのために、従業員一人ひとりがライフスタイルに合わせて多様な働き方ができる職場環境作りを進めています。
                      それが、個人のやりがいや、生きがいにつながり、その結果企業の体質強化になると考えています。
                      <br/><br/>
                      育児休業制度や時短勤務制度の導入等などが評価され、埼玉県多様な働き方実践企業のゴールド認定を受けました。
                  </p>
                </div>

                <div className="col-span-1">
                  <Image src="/tayou.jpg" 
                            alt="会社案内" 
                            width={200}
                            height={200}
                            className="rounded mb-5"
                          />
                </div>
              </div>

              <h1 className="text-[#0071bc] text-xl font-bold mb-5">仕事と育児・介護の両立支援</h1>
              <h2>企業として少子化問題に取り組む</h2>
              <p>
                <br/>
                少子化問題に企業として取り組み、子供を安心して産み、育てることのできる職場環境を作るための施策の一環として、出産祝い金を支給しています。
              </p>
              <table className="border-collapse border border-gray-300 w-full text-center text-sm mt-10 mb-10">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">出産休暇</th>
                    <th className="border border-gray-300 px-4 py-2">１年未満</th>
                    <th className="border border-gray-300 px-4 py-2" colSpan={3}>１年以上</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">子供の数</td>
                    <td className="border border-gray-300 px-4 py-2">一律</td>
                    <td className="border border-gray-300 px-4 py-2">第１子</td>
                    <td className="border border-gray-300 px-4 py-2">第２子</td>
                    <td className="border border-gray-300 px-4 py-2">第３子以降</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">支給額</td>
                    <td className="border border-gray-300 px-4 py-2">１万円</td>
                    <td className="border border-gray-300 px-4 py-2">６万円</td>
                    <td className="border border-gray-300 px-4 py-2">８万円</td>
                    <td className="border border-gray-300 px-4 py-2">１０万円</td>
                  </tr>
                </tbody>
              </table>

              <h1 className="text-[#0071bc] text-xl font-bold mb-5">介護のための制度、働き方</h1>
              <table className="border-collapse border border-gray-300 w-full text-sm mt-10 mb-10">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold w-1/4 bg-gray-100">介護休業制度</td>
                    <td className="border border-gray-300 px-4 py-2">
                      家族の介護を目的に、年間通算９３日間までの範囲内で休業できる制度です。
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold bg-gray-100">介護休暇</td>
                    <td className="border border-gray-300 px-4 py-2">
                      家族の介護をする従業員は、要介護者が一人の場合年次有給休暇とは別に一年間につき５日を限度として休暇を取得できます。
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold bg-gray-100">介護短時間勤務制度	</td>
                    <td className="border border-gray-300 px-4 py-2">
                      家族の介護を目的に、１日の就業時間を６時間に短縮できる制度です。
                    </td>
                  </tr>
                </tbody>
              </table>

              <h1 className="text-[#0071bc] text-xl font-bold mb-5">出産・育児のための制度、働き方</h1>
              <table className="border-collapse border border-gray-300 w-full text-sm mt-10 mb-10">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold w-1/4 bg-gray-100">出産休暇</td>
                    <td className="border border-gray-300 px-4 py-2">
                      女性従業員が出産するとき、産前６週間（多胎出産１４週）産後８週間。
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold bg-gray-100">育児休業制度</td>
                    <td className="border border-gray-300 px-4 py-2">
                      子供が１歳２ヶ月になるまで休業できる制度です。保育所に入所を希望しているが、入所できないなどの理由がある場合、最長で２歳まで延長できます。
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold bg-gray-100">育児短時間勤務制度</td>
                    <td className="border border-gray-300 px-4 py-2">
                      小学校就学前の子を養育する従業員は１日の就業時間を６時間に短縮できる制度です。
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="grid grid-cols-2 lg:grid-cols-2 gap-16 mb-10">
                <div className="col-span-1">
                  <p className="font-bold">出産後仕事に復帰している社員の声</p> <br/>
                  <Image src="/work_007.jpg" 
                            alt="会社案内" 
                            width={400}
                            height={400}
                            className="rounded mb-5"
                          />
                  <p className="text-center">高屋千尋（顧客管理課）</p>
                </div>
                <div className="col-span-1">
                  <p className="mb-10">
                    <br/>
                    仕事もプライベートも今が一番充実しています。産休に入る前も育休中も、復帰後の仕事や育児との両立に対して不安でいっぱいでした。
                    ですが、お休みをして改めて会社環境や周囲の人のサポートにどれだけ助けられているかが分かり仕事に対する姿勢を見つめ直すきっかけとなりました。
                    <br/><br/>
                    今は忙しい毎日ですが仕事も楽しく以前よりやりがいを感じています。職場の先輩方にアドバイスを頂きながら、母としても人としても成長させてもらえる環境に感謝しています。
                  </p>
                </div>
              </div>
                  

            <div className="grid grid-cols-2 lg:grid-cols-2 gap-16 mb-10">
                <div className="col-span-1">
                  <p className="font-bold">育休を取得した男性社員の声</p> <br/>
                  <Image src="/work_014.jpg" 
                            alt="会社案内" 
                            width={400}
                            height={400}
                            className="rounded mb-5"
                          />
                  <p className="text-center">粕加屋崇（営業部店長）</p>
                </div>
                <div className="col-span-1">
                  <p className="mb-10">
                    <br/>
                    今回、コロナ禍ということもあり妻が出産後里帰りせず育児をすることになりました。そんな妻をサポートしたいと思い育児休暇を取得したいと思い会社に相談しました。
                    <br/><br/>
                    育児休暇は約2ヶ月取得させていただきました。復帰後も、妻や子供の健診などで休暇を取得さていただくこともありました。その際も二つ返事で承諾して下さいました。
                    <br/><br/>
                    約2ヶ月という期間、育児と向き合ったことで、少しずつ父親の自覚が芽生えていくと共に相手のことを『想う・考える』という仕事にも活かせる経験ができ、自分自身も成長することができました。
                    <br/><br/>
                    今後は自分に続いて他の男性社員にも育児休暇から仕事に活かせるような経験をしてほしいと願っています
                  </p>
                </div>
              </div>   
            </div>
          </div>

          {/* Create healthy work environment */}
          <div className="text-[16px] font-medium mt-30">
            <div className="mb-8 text-center">
              <div className="flex-1 border-t-2 border-[#0071bc] mb-3"></div>
              <span className="px-4 text-[#0071bc] text-xl text-bold font-medium">健康的に働ける職場環境づくり</span>
              <div className="flex-1 border-t-2 border-[#0071bc] mt-3 mb-20"></div>
            </div>

            <div className="mt-15">
              <p>日本スーパー電子では、社員の健康維持、向上を目指して「心身の健康づくり」に取り組んでいます。</p>
              <div className="grid grid-cols-3 lg:grid-cols-3 gap-8 mb-10 mt-10">
                <div className="col-span-2">
                    <div className="flex items-center space-x-2 mb-10">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-red-500 underline decoration-dotted underline-offset-4">
                        年１回の健康診断（生活習慣病検診）
                      </span>
                  </div>
                  <p className="ml-5 mb-10">
                    生活習慣病によって引き起こされる様々な疾病の早期発見早期治療のための検査を行います。
                  </p>
                </div>

                <div className="col-span-1">
                  <Image src="/work_010.jpg" 
                            alt="会社案内" 
                            width={400}
                            height={400}
                            className="rounded mb-5"
                          />
                </div>
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-3 gap-8 mb-10 mt-10">
                <div className="col-span-2">
                    <div className="flex items-center space-x-2 mb-10">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <p>
                        <span className="text-red-500 underline decoration-dotted underline-offset-4">
                          「体組成測定」機器
                        </span> を導入しています。 
                      </p> 
                  </div>
                  <p className="ml-5 mb-10">
                    体内の筋肉や脂肪などの組織構成を調べ、生活習慣病や体調の乱れを知る事ができます。
                  </p>
                </div>

                <div className="col-span-1">
                  <Image src="/work_011.jpg" 
                            alt="会社案内" 
                            width={400}
                            height={400}
                            className="rounded mb-5"
                          />
                </div>
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-3 gap-8 mb-10 mt-5">
                <div className="col-span-2">
                    <div className="flex items-center space-x-2 mb-10">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <p>
                        <span className="text-red-500 underline decoration-dotted underline-offset-4">
                          インフルエンザの予防接種を全額支援
                        </span>  
                      </p> 
                  </div>
                  <p className="ml-5 mb-10">
                    本人の希望により予防接種を受ける場合に全額会社が支援します。
                  </p>
                </div>

                <div className="col-span-1">
                  <Image src="/work_012.jpg" 
                            alt="会社案内" 
                            width={400}
                            height={400}
                            className="rounded mb-5"
                          />
                </div>
              </div>
              <p className="mb-15">上記項目を実施しております。</p>

              <h1 className="text-[#0071bc] text-xl font-bold mb-5">ハラスメントの防止と対策</h1>
              <p>
                ハラスメントのない職場づくりのために、<span className="text-red-500 underline decoration-dotted underline-offset-4">「ハラスメント防止対策」</span> を作成し、社内ビジネスアプリを活用して従業員に対する啓蒙活動を行なっています。
                万が一、ハラスメントに関する問題が発生した際に速やかに適切な対応が取れるよう<span className="text-red-500 underline decoration-dotted underline-offset-4">「安心相談窓口</span>を設置し、安心して相談できる環境を整えています。
              </p>
            </div>
          </div>
       </section>

       <section className="max-w-3xl mx-auto px-4 py-20 bg-white">
          <div className="text-[16px] font-medium">
            <div className="mb-8 text-center">
            <p className="text-[#0071bc] text-xl tracking-wider uppercase mb-2">Message</p>
            <h3 className="text-[#0071bc] text-lg">創業者からのメッセージ</h3>
          </div>

          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-3">
              <p className="text-xl text-red-500 underline decoration-dotted underline-offset-4 mb-15">「理想の会社を実現したい」その思いで生きています。</p>
              <p>
                この会社は、若い頃の私の体験から始まりました。
                <br/><br/>
                私はかつて、２４時間仕事漬けの営業社員としてなりふり構わず仕事をし続け、若くして人並み以上の地位や収入を手に入れましたが、ある時ふと疑問を感じて会社を辞め、アメリカへの長期旅行に出ました。
                <br/><br/>
                そこで私が目のあたりにしたのは、アメリカの一流ビジネスマンたちの豊かな生活でした。
                彼らは働く時にはとことん仕事に集中し、帰宅後や休日には同じくらいの熱意で家族を大切にし、また、趣味や遊びに没頭します。一度きりの人生をとことん楽しもう。そのために仕事をしよう。
                <br/><br/>
                帰国した私は、生き方をガラリと変え、さらに、素晴らしい医療器具に出会ったこともあって、自ら会社を興し実践を始めました。
                「従業員全員が、人生を心底楽しみながら働ける企業環境を創りたい」
                それが私の目指している「理想の会社」です。
                <br/><br/>
                私の理想は今、かなりの割合で実現しつつあります。
                私たちと共に「理想の会社創りに挑戦したい」と思っているやる気のある人に加わってもらえれば、さらに素晴らしい「理想の会社」が完成するのではないかと楽しみにしています。
              </p>
            </div>
          <div className="col-span-1">
              <Image src="/work_008.jpg" 
                          alt="会社案内" 
                          width={400}
                          height={400}
                          className="rounded mb-5"
                        />
              <p className="text-center">
                取締役会長
              </p>
              <p className="text-center text-bold">
                髙橋常久
              </p>
          </div>

          </div>
        </div>
       </section>

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
