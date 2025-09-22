import Sidebar from "~/app/components/sidebar"
import Image from "next/image"
export default function FAQPage() {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
           {/* Header bar */}
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">革新的なデジタル技術</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            <p className="mb-10">
                エナジートロンについて、よく問い合わせいただくご質問の回答をまとめました。<br></br>
                その他、ご質問ございましたら、お手数ですがお電話でお問い合わせ下さい。
            </p>

            {/* Black white bar */}
            <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">Q. 電位って何？</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <div className="mb-10 space-y-5">
                <p>
                    Ａ．<br></br>
                    学的な回答では、一般的に使っている｢電気｣という総称の中の一つです。電気と聞くと電流を想像される方が多いのではないでしょうか。
                </p>
                <p>
                    電流は電気が動いた(流れる)時のことを言います。電気は位置のことを言います。<br></br>
                    また、動かすときの力が電圧です。電位の単位は電圧と同じボルト(V) です。<br></br>
                    電位と電位に力の差(電位差)が出来ることで電界が生まれます。 
                </p>
            </div>

            {/* Black white bar */}
            <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">Q. マッサージ器や低周波治療器との違いは何ですか？</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <div className="mb-10 space-y-5">
                <p>
                    Ａ．<br></br>
                    マッサージ器や低周波治療器は体の一部をもむ等の刺激で血行促進や、筋肉をほぐすことが目的ですが、｢エナジートロン TT-MAX8｣は全身に高電圧の電気的エネルギーを与え、患部の治療をおこなうのではなく、生体機能の恒常性を保ち、
                    不快な頭痛･肩こり･不眠･慢性便秘を同時に緩解します。
                </p>
                <p>
                    また、温熱を使用することで神経痛、
                    筋肉痛の痛みの緩解･胃腸の働きを活性にする･疲労の回復･血行を良くする･筋肉をほぐす･筋肉の疲れをとることが出来ます。
                </p>
            </div>

            {/* Black white bar */}
            <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">Q. 副作用はありますか？</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <div className="mb-10 space-y-5">
                <p>
                    Ａ．<br></br>
                    副作用はありませんのでご安心ください。
                </p>
                <p>
                    一時的に、眠気やだるさの症状が現れる場合があります。<br></br>
                    これは通電反応で、個人差はありますが平均2～3日で消えます。<br></br>
                    その後の体調を楽しみにしてください。
                </p>
            </div>

            {/* Black white bar */}
            <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                <h4 className="ml-2 text-black font-bold text-lg">Q. どのくらいの期間で効果が出ますか？</h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <div className="mb-10 space-y-5">
                <p>
                    Ａ．<br></br>
                    即、効果を得られる方もいれば、時間がかかる方もいます。<br></br>
                    個人差がありますが平均5日間くらいで変化を感じる方が多いです。
                </p>
            </div>

        </div>
      </div>
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
    
  )
}
