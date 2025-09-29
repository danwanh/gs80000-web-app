import Image from "next/image"
import Sidebar from "~/app/components/sidebar"
import Link from "next/link";
export default function MedicalPage() {
    const staff = [
        { name: "おゆみ野店", img: "/service_plaza_15.jpg" },
        { name: "昭島店", img: "/service_plaza_16.jpg" },
        { name: "鶴間店", img: "/service_plaza_08.jpg" },
        { name: "東小岩店", img: "/service_plaza_07.jpg" },
        { name: "千間台店", img: "/service_plaza_13.jpg" },
        { name: "立川店", img: "/service_plaza_14.jpg" },
    ];

    const areas = [
        { name: "東京", href: "/service/health_salon/#tokyo" },
        { name: "神奈川", href: "/service/health_salon/#kanagawa" },
        { name: "埼玉", href: "/service/health_salon/#saitama" },
        { name: "千葉", href: "/service/health_salon/#chiba" },
    ];

    const branches = {
        tokyo: [
            {
            name: "板橋大山",
            address: "東京都板橋区大山金井町53-6",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/tFK67V8rEqB2"   
            },
            {
            name: "東大和",
            address: "東京都東大和市南街4-10-8",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/nwKjkhUCtWE2"
            },
            {
            name: "昭島昭和町",
            address: "東京都昭島市昭和町5丁目12-14",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://maps.app.goo.gl/5Amp58SF9Xzzqhgh8"
            },
            {
            name: "梅屋敷",
            address: "東京都大田区大森中2-21-2",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/oJYBxD16kYS2"
            },
            {
            name: "日野",
            address: "東京都日野市南平7-6-53",
            businessHours: "9:00～18:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://maps.app.goo.gl/rfTNGuFHgnn1VaSj7"
            },
            {
            name: "立川高松町",
            address: "東京都立川市高松町2-9-21 ヴィラーシュ立川1階",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://maps.app.goo.gl/rfTNGuFHgnn1VaSj7"
            },
            {
            name: "吉祥寺",
            address: "東京都武蔵野市吉祥寺本町3-9-14",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/PEWZm88sowS2"
            },
            {
            name: "青戸１丁目",
            address: "東京都葛飾区青戸1丁目9-2",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/JKEMeQBdwzF2"
            },
            {
            name: "世田谷弦巻",
            address: "東京都世田谷区弦巻5-16-18",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/Dsx7qNvQQTigRkwh9"
            },
            {
            name: "国立大学通り",
            address: "東京都国立市東1-16-17 ポポロショッピングセンター北館地下1F",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/7zBTEQ9u1Epa8zRW7"
            },
            {
            name: "河辺北",
            address: "東京都青梅市野上町3丁目7-34 ビューハイツ1Ｆ",
            businessHours: "9:00～18:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/dU4TL67Sq1JuFUT29"
            },
            {
            name: "東小岩5丁目",
            address: "東京都江戸川区東小岩5丁目5-9 パルロイヤル小岩102",
            businessHours: "10:00～18:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/VmgbYqauQ2KUt8Ew8"
            },
            {
            name: "八王子横山町",
            address: "東京都八王子市横山町9-16 サンクレイドル八王子横山町101",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/jMSsfLSDdPmkqqua7"
            },
            {
            name: "大泉学園通り",
            address: "東京都練馬区大泉学園町7-2-22",
            businessHours: "9:00～19:00",
            breakTime: "13:00～15:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://maps.app.goo.gl/5UWLV4qb95UpyhVSA"
            },
            {
            name: "東久留米滝山",
            address: "東京都東久留米市滝山4-2-21",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://maps.app.goo.gl/MorVdjCYaq9gjPV3A"
            },
            {
            name: "亀有4丁目",
            address: "東京都葛飾区亀有4-17-2",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://maps.app.goo.gl/bGQ1iwZn7JdcyWSi8"
            },
            {
            name: "練馬春日町",
            address: "東京都練馬区春日町6丁目6-39-103",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://maps.app.goo.gl/qNeGEY7BygSFHLQNA"
            },
            {
            name: "雪が谷大塚",
            address: "東京都大田区南雪谷4丁目7-13 ホークパレス南雪谷",
            businessHours: "9:00～18:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://maps.app.goo.gl/krw7vfsJmYbN71Vb8"
            },
            {
            name: "新小岩",
            address: "東京都葛飾区東新小岩5-18-9 カーレッジ1階",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://g.co/kgs/fbrVpzN"
            }
        ],
        kanagawa: [
            {
            name: "相模大野",
            address: "神奈川県相模原市南区相模大野3-3-2 ボーノ相模大野サウスモール2F",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/HvaE4iKHLvx"
            },
            {
            name: "横浜本郷町",
            address: "神奈川県横浜市中区本郷町2-56",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/7StYSbip8AK2"
            },
            {
            name: "鶴間",
            address: "神奈川県大和市鶴間1-2-2 仙楽園ビル1F",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/wUfHGfVQbBBb83c18"
            },
            {
            name: "相模原星が丘",
            address: "神奈川県相模原市星が丘3-6-21 マルセイハイツ105号室",
            businessHours: "9:00～18:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/11gR6po8SpTgk5T46"
            },
            {
            name: "希望ヶ丘",
            address: "神奈川県横浜市旭区中希望ヶ丘94-33-103",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://maps.app.goo.gl/HPNBWtyyA49xN83F8"
            }
        ],
        saitama: [
            {
            name: "八潮",
            address: "埼玉県八潮市2-31-17-5号室",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/bi7stNRAr1K2"
            },
            {
            name: "岩槻",
            address: "埼玉県さいたま市岩槻区本町3-3-2",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/5QSNYPEfRLH2"
            },
            {
            name: "越ケ谷",
            address: "埼玉県越谷市越ケ谷1-11-28",
            businessHours: "9:30～18:30",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/5b8313KxfZEgSFiL6"
            },
            {
            name: "鶴瀬西口",
            address: "埼玉県富士見市鶴馬3539",
            businessHours: "9:00～18:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/UwoDC4EXHY5zHtas6"
            },
            {
            name: "南浦和2丁目",
            address: "埼玉県さいたま市南区南浦和2-41-15 コープ南村南浦和61",
            businessHours: "10:00～18:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/46PM4E4iiiEHtdy78"
            },
            {
            name: "せんげん台くすの木通り",
            address: "埼玉県越谷市千間台西3丁目1-30 エース千間台ビル1階",
            businessHours: "9:30～18:30",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/ndhTcrQjULzPzPdP7"
            },
            {
            name: "久喜青葉",
            address: "埼玉県久喜市青葉2-6-2",
            businessHours: "9:00～16:00（月・水曜日）／9:00～18:00（火・木・金曜日）",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://maps.app.goo.gl/BMinZiWhwxR68pnSA"
            }
        ],
        chiba: [
            {
            name: "白井大橋",
            address: "千葉県白井市根143-3",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/qcgZGaMh61k"
            },
            {
            name: "千葉おゆみ野",
            address: "千葉県千葉市緑区おゆみ野3-17-7 沖ビル１Ｆ",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://goo.gl/maps/1ftY6w4XL5q"
            },
            {
            name: "新松戸",
            address: "千葉県松戸市新松戸4-58-1",
            businessHours: "10:00～19:00",
            breakTime: "13:00～14:00",
            closed: "土曜日・日曜日・祝日",
            mapUrl: "https://maps.app.goo.gl/kTuvNp1K6CzrW6KHA"
            }
        ]
        };

    return(
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
                <div>
                    <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-15">
                        <h2 className="text-white font-medium text-lg">医療機器の開発</h2>
                        <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                    </div>
        
                    <div className="ml-5">
                        <Image src="/service_plaza_02.jpg" 
                                alt="健康サロン" 
                                width={900}
                                height={256}
                                className="rounded mb-4"
                                />
                        <p className="mb-5">人生100年を見据え、健康で楽しい生き方を提案する健康サロン「ハピプラ」</p>
                        <p className="mb-2">ハピプラでは、治療器などヘルスケア製品の効果を心ゆくまで体感できます。</p>
                        <p className="mb-2">足を運ぶことで楽しく健康になり、 通えば通うほどに元気になる。</p>
                        <p className="mb-15">お越しいただいた皆様の健康増進に貢献できる体感型健康サロンを目指しています。</p>
                        <div>
                            <div className="mb-10">
                                <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 mb-6">
                                    <h2 className="text-[#0071bc] font-bold text-lg">ハピネスプラザ　コンセプト</h2>
                                    <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                                </div>
                                <p>ハピネスプラザが大切にする価値は、３つあります。</p>
                            </div>
                            <div className="space-y-3 mb-15">
                                <div className="flex items-center space-x-2">
                                    <span className="w-3 h-3 bg-black inline-block"></span>
                                    <h2 className="text-lg font-medium">
                                    パーソナライズされたサービス
                                    </h2>
                                </div>
                                <hr className="border-t-2 border-gray-800" />
                                <p className="text-gray-900 leading-relaxed">
                                    プラザは、治療効果の体験の場だけではなく、人生の寂しさや虚しさから開放され、
                                    生きがいを発見できる場所でありたいと考えています。お客様一人ひとりから信頼され、
                                    どんなことでも相談していただけるように「お客様の心に応える」対応を心がけております。
                                </p>
                            </div>

                            <div className="space-y-3 mb-15">
                                <div className="flex items-center space-x-2">
                                    <span className="w-3 h-3 bg-black inline-block"></span>
                                    <h2 className="text-lg font-medium">
                                    結果の現れる商品
                                    </h2>
                                </div>
                                <hr className="border-t-2 border-gray-800" />
                                <p className="text-gray-900 leading-relaxed">
                                    毎日の生活が、肩こりや、頭痛など不快な症状で悩まされることはとてもつらいことです。
                                    一日でも早く健康を取り戻し、苦痛から開放された楽しい毎日を送ってもらいたい。
                                    そのために、お客様の期待と安心を獲得できる品質の商品にこだわりました。
                                </p>
                            </div>

                            <div className="space-y-3 mb-15">
                                <div className="flex items-center space-x-2">
                                    <span className="w-3 h-3 bg-black inline-block"></span>
                                    <h2 className="text-lg font-medium">
                                    感動を創造していく店舗
                                    </h2>
                                </div>
                                <hr className="border-t-2 border-gray-800" />
                                <p className="text-gray-900 leading-relaxed">
                                    人生は一度きりです「あのときの偶然に思えた出会いが、今の幸せな自分を築いている」
                                    プラザに出会っていただいたあなたが主人公になり、世界に一つだけの感動に溢れた人生を創り出してください。
                                    私たちは、そのお手伝いをさせていただきます。
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                            {staff.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-64 object-cover shadow-md"
                                />
                                <p className="mt-3 text-lg font-medium">{item.name}</p>
                                </div>
                            ))}
                            </div>
                            <Image src="/service_plaza_01.jpg" 
                                    alt="会社案内" 
                                    width={800}
                                    height={50}
                                    className="rounded mb-4"
                            />
                        </div>

                        <div>
                            <div className="mb-15">
                                <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300 p-2 mb-10">
                                    <h2 className="text-[#0071bc] font-bold text-lg">ハピネスプラザ　店舗一覧</h2>
                                    <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                                </div>
                                <p>お電話でのお問い合わせ</p>
                                <p className="font-bold mb-5">＜本部＞日本スーパー電子株式会社</p>
                                <p className="text-xl font-bold text-blue-600 mb-5">０４８－６８３－２９７７</p>
                                <p className="font-medium">営業時間　9：00～18：00</p>
                                <p className="font-medium">休日　土曜日・日曜日・祝日</p>
                            </div>
                        </div>
                        
                        {/* Navigation bar */}
                        {/* <div className="space-y-2 mb-10">
                            <h1 className="text-xl">エリアで探す</h1>
                            <hr className="border-t-2 border-gray-800" />
                            <div className="flex space-x-4 text-[#0071bc] text-lg">
                                {areas.map((area, idx) => (
                                    <div key={idx} className="flex">
                                    <Link
                                        href={area.href}
                                        className="underline decoration-dotted underline-offset-5 hover:text-blue-800"
                                    >
                                        {area.name}
                                    </Link>
                                    {idx !== areas.length - 1 && (
                                        <span className="mx-3 text-gray-400">|</span>
                                    )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div id="tokyo" className="mb-20">
                            <h1 className="text-xl">東京</h1>
                            <hr className="border-t-2 border-gray-800 mb-10" />
                            <div className="space-y-6">
                            {branches.tokyo.map((branch, index) => (
                                <div key={index} className="grid grid-cols-4 gap-4">
                                <div className="col-span-1 font-bold">{branch.name}</div>

                                <div className="col-span-3 space-y-2">
                                    <p>{branch.address}</p>
                                    <p>営業時間 {branch.businessHours}</p>
                                    <p>休憩時間 {branch.breakTime}</p>
                                    <p>休日 {branch.closed}</p>
                                    <a
                                    href={branch.mapUrl}
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    » 地図を見る
                                    </a>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>

                        <div id="kanagawa" className="mb-20">
                            <h1 className="text-xl">神奈川</h1>
                            <hr className="border-t-2 border-gray-800 mb-10" />
                            <div className="space-y-6">
                            {branches.kanagawa.map((branch, index) => (
                                <div key={index} className="grid grid-cols-4 gap-4">
                                <div className="col-span-1 font-bold">{branch.name}</div>

                                <div className="col-span-3 space-y-2">
                                    <p>{branch.address}</p>
                                    <p>営業時間 {branch.businessHours}</p>
                                    <p>休憩時間 {branch.breakTime}</p>
                                    <p>休日 {branch.closed}</p>
                                    <a
                                    href={branch.mapUrl}
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    » 地図を見る
                                    </a>
                                    <hr className="mt-5 border-t border-dotted border-gray-300"></hr>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>

                        <div id="saitama" className="mb-20">
                            <h1 className="text-xl">埼玉</h1>
                            <hr className="border-t-2 border-gray-800 mb-10" />
                            <div className="space-y-6">
                            {branches.saitama.map((branch, index) => (
                                <div key={index} className="grid grid-cols-4 gap-4">
                                <div className="col-span-1 font-bold">{branch.name}</div>

                                <div className="col-span-3 space-y-2">
                                    <p>{branch.address}</p>
                                    <p>営業時間 {branch.businessHours}</p>
                                    <p>休憩時間 {branch.breakTime}</p>
                                    <p>休日 {branch.closed}</p>
                                    <a
                                    href={branch.mapUrl}
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    » 地図を見る
                                    </a>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        
                        <div id="chiba" className="mb-20">
                            <h1 className="text-xl">千葉</h1>
                            <hr className="border-t-2 border-gray-800 mb-10" />
                            <div className="space-y-6">
                            {branches.chiba.map((branch, index) => (
                                <div key={index} className="grid grid-cols-4 gap-4">
                                <div className="col-span-1 font-bold">{branch.name}</div>

                                <div className="col-span-3 space-y-2">
                                    <p>{branch.address}</p>
                                    <p>営業時間 {branch.businessHours}</p>
                                    <p>休憩時間 {branch.breakTime}</p>
                                    <p>休日 {branch.closed}</p>
                                    <a
                                    href={branch.mapUrl}
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    » 地図を見る
                                    </a>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>

                                                
                        <div className="space-y-2 mb-10">
                            <h1 className="text-xl">エリアで探す</h1>
                            <hr className="border-t-2 border-gray-800" />
                            <div className="flex space-x-4 text-[#0071bc] text-lg">
                                {areas.map((area, idx) => (
                                    <div key={idx} className="flex">
                                    <Link
                                        href={area.href}
                                        className="underline decoration-dotted underline-offset-5 hover:text-blue-800"
                                    >
                                        {area.name}
                                    </Link>
                                    {idx !== areas.length - 1 && (
                                        <span className="mx-3 text-gray-400">|</span>
                                    )}
                                    </div>
                                ))}
                            </div>
                        </div> */}

                    </div>
                </div>  
            </div>
            <div className="lg:col-span-1">
                <Sidebar />
            </div>
        </div>
  )
}
