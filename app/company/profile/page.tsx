import Image from "next/image"
import Sidebar from "~/app/components/sidebar"
import Link from "next/link"

export default function ProfilePage() {
const profile = [
  { label: "商号", value: "(NIPPON GROUP)" },
  { label: "本社所在地", value: "〒337-0051　埼玉県さいたま市見沼区東大宮6-36-16" },
  { label: "TEL", value: "048-683-2977" },
  { label: "FAX", value: "048-683-2978" },
  { label: "代表取締役", value: "髙橋 裕久" },
  { label: "資本金", value: "2,000万円" },
  { label: "創立年月日", value: "昭和62年7月28日" },
  { 
    label: "主要業務", 
    value: "・医療機器の販売\n・健康機器の企画販売\n・健康食品の企画販売" 
  },
  { label: "社員数", value: "52名" },
  { 
    label: "取引先", 
    value: "（株）A・P・Aコーポレーション\n（株）エポラ\n（株）スマイルライフ\n日本セルフメディカル（株）\n日本メディカル電子（株）\n（株）日本理工医学研究所\n（株）友泉\n※50音順" 
  }
];

  return(
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div className="max-w-3xl mx-auto mb-10">
            {profile.map((event, index) => (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-5 gap-2">
            {/* Date */}
            <div className="text-gray-700 font-bold py-4">{event.label}</div>
            {/* Event */}
            <div
                className={`col-span-4 whitespace-pre-line text-gray-800 py-4 ${
                index !== 0 ? "border-t border-dotted border-gray-300" : ""
                }`}
            >
                {event.value}
            </div>
            </div>
            ))}
        </div>
        <Image src="/company_041.jpg" 
            alt="image" 
            width={200}
            height={256}
            className="rounded mb-4"
        />
        <div className="w-full h-96 mb-6 mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.8448782176097!2d139.64518827609456!3d35.95076447250149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c6e0620bee59%3A0xa0c084a10576221!2z5pel5pys44K544O844OR44O86Zu75a2QKOagqik!5e0!3m2!1sja!2sjp!4v1758112234666!5m2!1sja!2sjp" 
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <a
            href="https://maps.app.goo.gl/mZXQBCLw9BXqqdH86"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline decoration-dotted underline-offset-4 text-[#0071bc] mt-20"
            >
            大きな地図で見る
        </a>

      </div>
        
        <div className="lg:col-span-1">
            <Sidebar />
        </div>
    </div>
  )
}
