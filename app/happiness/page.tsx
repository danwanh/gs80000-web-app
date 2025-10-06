import Sidebar from "~/app/components/sidebar"
import Image from "next/image"
import Link from "next/link"
import { happiness } from "../data/happiness"
export default function DetailPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            {/* Header bar */}
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">ハピネスプロジェクト</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <Image src="/happiness_001.jpg" 
                        alt="image" 
                        width={900}
                        height={256}
                        className="rounded mb-10"
                        />
            <div className="space-y-5 mb-15">
                <p>NSDハピネスプロジェクトでは日本国内、及びアジア地域で起こったさまざまな災害に対する支援活動や、発展途上国で病気に苦しんでいる子供たちへの救済、
                    また地球環境を守るための支援を目的とした活動です。</p>
                <p>地球や人類が、より輝ける未来となっていく事を願い、このプロジェクトを発展させていけるよう取り組んでまいります。</p>
                <p>このプロジェクトは社員一人ひとりの発想により活動し、会社としてサポートしております。</p>
            </div>
            
            <div className="ml-3">
                {/* Sub header bar */}
                <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 ">
                    <h3 className="text-[#0071bc] font-bold text-lg">ご挨拶</h3>
                    <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                <div className="mb-15 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-3 lg:grid-cols-3 gap-8">
                    <div className="space-y-3 col-span-2">
                        <p>ハピネスプロジェクトの平川です。</p>
                        <p>ハピネスプロジェクトは国内外のボランティア活動をさせていただいていおります。</p>
                        <p>少しでも困っている方のお役に立ちたい！そんな思いで、２０１１年の３月（東日本大震災）より活動をはじめました。</p>
                        <p>活動の中で支援者のあり方、物資と心をつなぐ大切さを学んでいます。</p>
                        <p>助け合うということは社会においても表現や文言は違いますが、基本だと思います。<br></br>
                            「人類は助け合うこと」をテーマにこれからも活動を続けてまいります。
                        </p>
                    </div>
                    
                    <div className="col-span-1">
                        <Image src="/happiness_hirakawa-225x300.jpg" 
                        alt="image" 
                        width={900}
                        height={256}
                        className="rounded mb-10"
                        />
                    </div>
                </div>

                 {/* Sub header bar */}
                <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 ">
                    <h3 className="text-[#0071bc] font-bold text-lg">最近の活動</h3>
                    <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                <div className="max-w-3xl mx-auto mb-10 ml-5">
                {happiness.map((event, index) => (
                    <div key={event.id} className="grid grid-cols-5 gap-2">
                    {/* Date */}
                    <div className="text-gray-700 font-bold py-4">{event.date}</div>

                    {/* Event */}
                    <div
                        className={`col-span-4 whitespace-pre-line text-gray-800 py-4 ${
                        index !== 0 ? "border-t border-dotted border-gray-300" : ""
                        }`}
                    >
                        <Link
                        href={`/happiness/${event.id}`}
                        className="text-[#0071bc] hover:text-green-600"
                        >
                        {event.title}
                        </Link>
                    </div>
                    </div>
                ))}
                </div>

                {/* Sub header bar */}
                <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300 p-2 mb-10 ">
                    <h3 className="text-[#0071bc] font-bold text-lg">これまでの活動</h3>
                    <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                {/* Black white bar */}
                <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                  <h4 className="ml-2 text-black font-bold text-lg">東日本大震災復興支援</h4>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                <div className="space-y-5 mb-15">
                    <p>被災者への支援・物資のお届け、炊き出しなどを定期的に行っています。</p>
                    <div className="max-w-5xl mx-auto p-4">
                        <div className="grid grid-cols-3 gap-4">
                            {/* 1 */}
                            <div className="overflow-hidden shadow">
                            <img
                                src="company_055_01.jpg"
                                alt="No image"
                                className="w-full h-48 object-cover"
                            />
                            </div>
                            {/* 2 */}
                            <div className="overflow-hidden shadow">
                            <img
                                src="/company_055_02.jpg"
                                alt="2"
                                className="w-full h-48 object-cover"
                            />
                            </div>
                            {/* 3 */}
                            <div className="overflow-hidden shadow">
                            <img
                                src="/company_055_03.jpg"
                                alt="3"
                                className="w-full h-48 object-cover"
                            />
                            </div>
                            {/* 4 */}
                            <div className="overflow-hidden shadow">
                            <img
                                src="/company_055_04.jpg"
                                alt="4"
                                className="w-full h-48 object-cover"
                            />
                            </div>
                            {/* 5 */}
                            <div className="overflow-hidden shadow">
                            <img
                                src="/company_055_05.jpg"
                                alt="5"
                                className="w-full h-48 object-cover"
                            />
                            </div>
                            {/* 6 */}
                            <div className="overflow-hidden shadow">
                            <img
                                src="/company_055_06.jpg"
                                alt="6"
                                className="w-full h-48 object-cover"
                            />
                            </div>
                        </div>
                        </div>
                    <p>トータル30回になりました。</p>
                </div>
                
                {/* Black white bar */}
                <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                  <h4 className="ml-2 text-black font-bold text-lg">東日本大震災孤児応援</h4>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                <div className="space-y-5 mb-15">
                    <p> お父さんお母さんを無くした子供たちを支援するプロジェクトのサポーターとなっています。</p>
                    <p>「震災孤児遺児応援　ワンコイン・サポーターズ　20,000人プロジェクト」＜公式HP＞
                        <a
                            href={"https://www.aichiborasen.org/onecoin"}
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            aichiborasen.org/onecoin
                        </a>
                    </p>
                </div>

                {/* Black white bar */}
                <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                  <h4 className="ml-2 text-black font-bold text-lg">鎮守（ちんじゅ）の森のプロジェクト</h4>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                <div className="space-y-5 mb-15">
                    <p> 東日本大震災で被災した沿岸部に10年かけて「いのちを守る森」を作る応援団となっています。</p>
                                        <div className="max-w-5xl mx-auto p-4">
                        <div className="grid grid-cols-3 gap-4">
                            {/* 1 */}
                            <div className="overflow-hidden shadow">
                            <img
                                src="company_055_09.jpg"
                                alt="No image"
                                className="w-full h-48 object-cover"
                            />
                            </div>
                            {/* 2 */}
                            <div className="overflow-hidden shadow">
                            <img
                                src="/company_055_08.jpg"
                                alt="2"
                                className="w-full h-48 object-cover"
                            />
                            </div>
                            {/* 3 */}
                            <div className="overflow-hidden shadow">
                            <img
                                src="/company_055_07.jpg"
                                alt="3"
                                className="w-full h-48 object-cover"
                            />
                            </div>
                        </div>
                    </div>
                    <p>「鎮守（ちんじゅ）の森のプロジェクト」＜公式HP＞
                        <a
                            href={"https://morinoproject.com/"}
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            morinoproject.com
                        </a>
                    </p>
                </div>

                {/* Black white bar */}
                <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                  <h4 className="ml-2 text-black font-bold text-lg">国境なき医師団への支援</h4>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                <div className="space-y-5 mb-15">
                    <p> 西アフリカでエボラ出血熱が蔓延した際に、国境なき医師団へ支援を行いました。</p>
                    <p> 「国境なき医師団」＜公式HP＞ </p>
                    <a
                        href={"https://www.msf.or.jp/news/ebola.html"}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        www.msf.or.jp/news/ebola.html
                    </a>
                </div>


                <div className="grid grid-cols-5 gap-2">
                    {/* Date */}
                    <div className="text-gray-700 font-bold py-4">1995年3月</div>
                    {/* Event */}
                    <div className="col-span-4 whitespace-pre-line text-gray-800 py-4 border-t border-dotted border-gray-300" >
                        <p>
                            阪神大震災被災者への寄与に対し、日本赤十字社埼玉支部長 <br></br>
                            埼玉県知事：土屋義彦氏より感謝状の贈呈を受ける
                        </p>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-2 gap-8">
                            <div className="col-span-1">
                                <Image src="/company_033.jpg" 
                                alt="image" 
                                width={300}
                                height={100}
                                className="rounded"
                                />
                            </div>
                            <div className="space-y-3 col-span-1">  
                                <p>                             
                                    阪神大震災は人々に大きな衝撃を与えました。<br></br>
                                    被災者の方々の苦悩は計り知れないものであったと思います。<br></br>
                                    我々に出来ることは… <br></br>
                                    との思いで各ハピネスプラザで義援金募金を行いました。
                                </p> 
                            </div>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="text-gray-700 font-bold py-4">1996年3月</div>
                    {/* Event */}
                    <div className="col-span-4 whitespace-pre-line text-gray-800 py-4 border-t border-dotted border-gray-300" >
                        <p>
                            埼玉県生涯交流センターへの軽自動車及び大型テレビの寄贈に対し、
                            埼玉県知事：土屋義彦氏より感謝状の贈呈を受ける
                        </p>
                    </div>

                    {/* Date */}
                    <div className="text-gray-700 font-bold py-4">2004年11月</div>
                    {/* Event */}
                    <div className="col-span-4 whitespace-pre-line text-gray-800 py-4 border-t border-dotted border-gray-300" >
                        <p>
                            新潟県中越地震災害義援金を日本赤十字社埼玉支部を通して被災者へ寄与
                        </p>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-2 gap-8">
                            <div className="col-span-1">
                                <Image src="/company_034.jpg" 
                                alt="image" 
                                width={300}
                                height={100}
                                className="rounded"
                                />
                            </div>
                            <div className="space-y-3 col-span-1">  
                                <p>                             
                                    阪神大震災から9年後の2004年11月、新潟に大震災が起きました。<br></br>
                                    誰もが「今度は新潟…」大きなショックを受けられたと思います。 阪神大震災同様、ハピネスプラザをご利用の皆様のご協力を得て、義援金募金を行いました。
                                </p> 
                            </div>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="text-gray-700 font-bold py-4">2011年</div>
                    {/* Event */}
                    <div className="col-span-4 whitespace-pre-line text-gray-800 py-4 border-t border-dotted border-gray-300" >
                        <p>
                            東日本大震災被災者への支援活動
                        </p>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-2 gap-8">
                            <div className="col-span-1">
                                <Image src="/company_035.jpg" 
                                alt="image" 
                                width={300}
                                height={100}
                                className="rounded"
                                />
                            </div>
                            <div className="space-y-3 col-span-1">  
                                <p>                             
                                    日本の観測史上最大の地震となった東日本大震災 <br></br>
                                    現地での想像を絶する惨状を目の当たりにし、一人でも多くの方を助けたい想いから、四度にわたりヘルスケア支援と炊き出しを行いました。<br></br>
                                    また、ハピネスプラザをご利用の皆様にご協力を得て、義援金による支援をさせていただきました。
                                </p> 
                            </div>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="text-gray-700 font-bold py-4">2015年9月</div>
                    {/* Event */}
                    <div className="col-span-4 whitespace-pre-line text-gray-800 py-4 border-t border-dotted border-gray-300" >
                        <p>
                            茨城県常総市など大規模水害による被災者への物資支援を行いました。
                        </p>
                    </div>

                    {/* Date */}
                    <div className="text-gray-700 font-bold py-4">2016年6月</div>
                    {/* Event */}
                    <div className="col-span-4 whitespace-pre-line text-gray-800 py-4 border-t border-dotted border-gray-300" >
                        <p>
                            熊本地震による被災者への物資の支援と災害支援金を熊本県社会福祉協議会を
                            通じて被災者へ寄付を行いました。
                        </p>
                    </div>

                    {/* Date */}
                    <div className="text-gray-700 font-bold py-4"></div>
                    {/* Event */}
                    <div className="col-span-4 whitespace-pre-line text-gray-800 py-4 border-t border-dotted border-gray-300" >
                        <p>
                            その他　清掃活動
                        </p>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <Image src="/company_036.jpg" 
                                alt="image" 
                                width={300}
                                height={100}
                                className="rounded"
                                />
                            </div>
                            <div className="space-y-3 col-span-1">  
                                <p>                             
                                    山中湖の湖畔をきれいにしました。<br></br>
                                    湖も木々も喜んでくれたかな？<br></br>
                                    ついでに心もきれいになったようです！
                                </p>
                            </div>
                        </div>
                    </div>



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
