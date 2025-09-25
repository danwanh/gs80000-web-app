"use client"

import Image from "next/image"
import { Allura } from "next/font/google"
import Link from "next/link"
import { Pencil } from "lucide-react";

const allura = Allura({
  subsets: ["latin"],
  weight: "400", 
})

export default function History() {
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

      <div className="mt-20">
        <h1 className={`${allura.className} text-[40px] text-center`}>History</h1>
        <div className="max-w-7xl mx-auto sm:px-12 lg:px-16 py-16 text-[16px] space-y-20">
          <h1 className="font-medium text-xl">日本スーパー電子の歩み</h1>
          <p>
            NSDは1985年に４名で創業し、その後に健康治療器販売会社として「日本スーパー電子(株)」を設立。
            約３０年の歴史の中では代理店主体から直販主体へ転換し、メーカーとして東京を中心に関東圏に体感型ショールーム「ハピネスプラザ」を３０店舗以上運営しております。
            『人生は楽しみながら学ぶ修行の場である』をモットーに、これまでに社員研修として香港、グアム、台湾、バリ島、ロス・ラスベガス、韓国、オーストラリア、パリ、ニューヨーク・
            カナダ、ドバイ、中国、アラスカ（オーロラ観賞）など２０ヵ国以上の海外研修を積極的に行ってきました。
            </p>
            
            {/* Table */}
            <div className="max-w-3xl mx-auto py-8">
                <div className="space-y-6">
                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">1985年</div>
                        <div className="col-span-4">
                            <span className="text-red-500 font-bold">創業</span>　4名
                        </div>
                        </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">1987年</div>
                        <div className="col-span-4">
                            <span className="text-red-500 font-bold">設立</span>　日本スーパー電子(株)<br />
                            健康治療器販売会社として設立
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">1990年</div>
                        <div className="col-span-4">
                            <span className="text-red-500 font-bold">転換</span><br />
                            代理店主体から直販主体へ転換
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">1991年</div>
                        <div className="col-span-4">社員旅行　香港</div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">1992年</div>
                        <div className="col-span-4">社員旅行　グアム</div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">1993年</div>
                        <div className="col-span-4">社員旅行　台湾</div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">1994年</div>
                        <div className="col-span-4">
                            <span className="text-red-500 font-bold">快進</span><br />
                            催事営業型から体感型ショールームへ移行<br />
                            社員旅行　バリ島
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">1995年</div>
                        <div className="col-span-4">
                            自社ビル完成<br />
                            社員旅行　北海道　海外研修旅行　ロス・ラスベガス
                            <Image src="/history_1995_01.jpg" 
                                alt="会社案内" 
                                width={200}
                                height={200}
                                />
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">1996年</div>
                        <div className="col-span-4">
                            社員旅行　韓国　海外研修旅行　オーストラリア
                            <Image src="/history_1996_01.jpg" 
                                alt="会社案内" 
                                width={200}
                                height={200}
                                />
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">1997年</div>
                        <div className="col-span-4">
                            <span className="text-red-500 font-bold">転機</span><br />
                            自社ブランド商品発売　メーカーへ<br />
                            海外研修旅行　パリ
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">1998年</div>
                        <div className="col-span-4">
                            <span className="text-red-500 font-bold">快調</span><br />
                            ショールーム「ハピネスプラザ」関東圏に拡大<br />
                            長野オリンピックへ社員旅行
                            <Image src="/history_1998_01.jpg" 
                                alt="会社案内" 
                                width={200}
                                height={200}
                                />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">1999年</div>
                        <div className="col-span-4">
                            海外研修旅行　ニューヨーク・カナダ
                            <Image src="/history_1999_01.jpg" 
                                alt="会社案内" 
                                width={200}
                                height={200}
                                />
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">2000年</div>
                        <div className="col-span-4">
                            海外研修旅行　ドバイ
                            <div>
                            <Image src="/history_2000_01.jpg" 
                                alt="会社案内" 
                                width={200}
                                height={200}
                                />
                            <Image src="/history_2000_02.jpg" 
                                alt="会社案内" 
                                width={200}
                                height={200}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">2001年</div>
                        <div className="col-span-4">
                            社員旅行　北海道　海外研修旅行　アラスカオーロラ観賞
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">2002年</div>
                        <div className="col-span-4">
                            海外研修旅行　中国<br />
                            創立15周年
                            <Image src="/history_2002_01.jpg" 
                                alt="会社案内" 
                                width={200}
                                height={200}
                                />
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">2003年</div>
                        <div className="col-span-4">
                            <span className="text-red-500 font-bold">開花</span><br />
                            大宮税務署より優良申告法人の表敬を受ける<br />
                            海外研修旅行　サイパン
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">2004年</div>
                        <div className="col-span-4">
                            海外研修旅行　ロス・ラスベガス
                            <Image src="/history_1995_02.jpg" 
                                alt="会社案内" 
                                width={200}
                                height={200}
                                />
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">2005年</div>
                        <div className="col-span-4">
                            海外研修旅行　韓国
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">2006年</div>
                        <div className="col-span-4">
                            自社ブランド新製品発売<br />
                            海外研修旅行　オーストラリア
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">2008年</div>
                        <div className="col-span-4">
                            <span className="text-red-500 font-bold">変革</span><br />
                            総合ウェルネス企業に向けサプリメント事業開始<br />
                            海外研修旅行　香港・マカオ
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">2009年</div>
                        <div className="col-span-4">
                            <span className="text-red-500 font-bold">試練</span><br />
                            オリジナルブランドサプリ発売
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">2010年</div>
                        <div className="col-span-4">
                            通販開始
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">2012年</div>
                        <div className="col-span-4">
                            <span className="text-red-500 font-bold">挑戦</span><br />
                            整骨院事業開始<br />
                            ボランティアチーム　ハピネスプロジェクト始動
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">2013年</div>
                        <div className="col-span-4">
                            海外研修旅行　イタリア
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">2016年</div>
                        <div className="col-span-4">
                           世界初のデジタル高電位治療器発売<br />
                            海外研修旅行　カナダロッキー
                            <Image src="/history_2016_01.jpg" 
                                alt="会社案内" 
                                width={200}
                                height={200}
                                />
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">2017年</div>
                        <div className="col-span-4">
                            <span className="text-red-500 font-bold">創立30周年</span><br />
                            <Image src="/history_2017_01.jpg" 
                                alt="会社案内" 
                                width={200}
                                height={200}
                                />
                            海外研修旅行　台湾
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <div className="font-bold text-gray-700">2018年</div>
                        <div className="col-span-4">
                            海外研修旅行　ロシア
                            <Image src="/history_2018_01.jpg" 
                                alt="会社案内" 
                                width={200}
                                height={200}
                                />
                        </div>
                    </div>

                    
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
