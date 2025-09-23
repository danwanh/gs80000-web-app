"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Allura } from "next/font/google"

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
              <a href="#message" className="text-sm text-gray-700 hover:text-blue-600">
                メッセージ
              </a>
              <a href="#about" className="text-sm text-gray-700 hover:text-blue-600">
                会社情報
              </a>
              <a href="#member" className="text-sm text-gray-700 hover:text-blue-600">
                人材情報
              </a>
              <a href="#work" className="text-sm text-gray-700 hover:text-blue-600">
                働く環境
              </a>
              <button onClick={() => window.location.href = "/recruitform"} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm rounded transition-colors">
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
    </div>
  )
}
