import Image from "next/image"
import Sidebar from "~/app/components/sidebar"
import Link from "next/link"

export default function GreetingPage() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">ご挨拶</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <div className="ml-2 font-medium space-y-4 text-gray-800 leading-relaxed">
                <p>1987年7月。</p>

                <p>総合ウェルネス１００年企業へ向けて<br/>
                人々を元気にしたい、世の中を明るく幸せにしたい。</p>

                <p>そんな思いを胸に、日本スーパー電子の歴史は始まりました。</p>

                <p>そこからはや38年。<br/>
                リーマンショックや東日本大震災、コロナによるパンデミックなど<br/>
                様々な困難をみんなで乗り越え、周りの方々に支えられながらここまでやってまいりました。</p>

                <p>これからも<br/>
                創業者である父が大切にしてきた「ワークライフバランス」を軸に<br/>
                人生100年時代、皆様が少しでも健康でそして「人生をenjoy」できるように<br/>
                私たちに何ができるか、日々考え精進してまいります。</p>

                <p>これからも皆様のご支援賜りますよう<br/>
                哀心よりお願い申し上げます。</p>

                <p>日本スーパー電子株式会社<br/>
                代表取締役社長　髙橋 裕久</p>
            </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
    
  )
}
