"use client"

import { useState } from "react"
import Image from "next/image"
import Sidebar from "~/app/components/sidebar"
import Link from "next/link"

export default function RecruitFormPage() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const res = await fetch("https://formspree.io/f/xandrwpg", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })

    if (res.ok) {
      setSubmitted(true)
      form.reset()
    } else {
      setSubmitted(false)
    }

    if (email !== confirmEmail) {
      setError("メールアドレスが一致しません。") 
      return
    }

    setError("")
    setSubmitted(true)
  }

  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">プライバシーポリシー</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-black inline-block"></span>
                <h2 className="text-lg font-medium">
                募集部門・募集要項
                </h2>
            </div>
            <hr className="border-t-2 border-gray-800 mb-5" />


            <div className="mb-10">
                <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300 p-2 mb-6">
                  <h4 className="ml-2 text-black font-bold text-lg">フォームでのお問い合わせ</h4>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                <div className="mb-5 max-w-3xl border border-gray-200">
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        雇用形態
                        </label>
                        <p className="p-2 w-100 text-sm m-3">正社員</p>
                    </div>
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        募集部門
                        </label>
                        <p className="p-2 w-100 text-sm m-3">プラザ運営課</p>
                    </div>
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        仕事内容	
                        </label>
                        <p className="p-2 w-100 text-sm m-3">治療器・サプリメントを取り扱うヘルスケアショップでの接客、販売 <br></br>
                            ショップにお越しになったお客様に、実際に商品を体験していただき、感想や体調の変化などを伺います。<br></br>
                            体験を通じてお客様自身に体調の変化に気づいていただき、お客様のお身体に最も適した商品、健康法を提案します。
                        </p>
                    </div>
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        募集対象	
                        </label>
                        <p className="p-2 w-100 text-sm m-3">未経験者大歓迎　　経験者優遇</p>
                    </div>
                </div>

                <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                  <h4 className="ml-2 text-black font-bold text-lg"> 待遇・選考過程</h4>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                <div className="mb-15 max-w-3xl border border-gray-200">
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        給与
                        </label>
                        <div className="p-2 w-100 ">
                        <p className="text-sm font-bold">【店長】</p>
                        <p className="text-sm m-3">
                            A　固定給　25万円　＋月間インセンティブ＋特別インセンティブ（年２回）<br></br>
                            B　固定給　21万円　＋月間インセンティブ＋特別インセンティブ（年２回）
                        </p>
                        <p className="p-2 w-100 text-sm font-bold">【店舗スタッフ】</p>
                        <p className="text-sm m-3">
                            A　固定給　22万円　＋特別インセンティブ（年２回）<br></br>
                            B　固定給　19万円　＋特別インセンティブ（年２回）
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        勤務時間
                        </label>
                        <p className="p-2 w-100 text-sm m-3">A　10：00～19：00／9：00～18：00（８時間勤務）<br></br>
                                                        B　10：00～18：00／9：00～17：00（７時間勤務）</p>
                    </div>
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        勤務地	
                        </label>
                        <p className="p-2 w-100 text-sm m-3">1都5県（埼玉、東京、神奈川、千葉、栃木、茨城）<br></br>
                                                        自宅より通勤時間1時間以内の店舗
                        </p>
                    </div>
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        休日休暇	
                        </label>
                        <p className="p-2 w-100 text-sm m-3">週休2日制（土日）　祝日、年末年始、夏季休暇、慶弔休暇 <br></br>
                                                        産前産後休暇、育児休暇、年次有給休暇、　年間休日127日前後</p>
                    </div>
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        休日休暇	
                        </label>
                        <p className="p-2 w-100 text-sm m-3"> 
                            社会保険等完備 <br></br>
                            社内親睦会 <br></br>
                            （国内社員旅行） <br></br>
                            （勤続3年以上正社員海外研修社員旅行）<br></br>
                            ＊社員旅行費用は、国内、海外ともに全額会社負担 (株) ラーニングエージェンシーが運営するセミナー「ビズキャンパス」の会員です。 <br></br>
                            充実したセミナーを社員は無料で参加できます。<br></br>
                            自由参加による会社でのボランティア支援あり
                        </p>
                    </div>
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        選考過程		
                        </label>
                        <p className="p-2 w-100 text-sm m-3">書類選考→面接→内定</p>
                    </div>
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        届出書類	
                        </label>
                        <p className="p-2 w-100 text-sm m-3">履歴書、職務経歴書</p>
                    </div>
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        応募方法	
                        </label>
                        <p className="p-2 w-100 text-sm m-3">応募方法のボタンよりエントリーをお願いします。</p>
                    </div>
                </div>
                
                <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300 p-2 mb-10">
                    <h2 className="text-[#0071bc] font-bold text-lg">応募方法</h2>
                    <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                <div className="mb-5">
                {submitted ? (
                    <div>下記のメールフォームよりご応募いただくか、本社採用担当：048-683-2977　までご連絡ください。
                            このページには直接アクセスできません。</div>
                    ) : (
                    <form
                    onSubmit={handleSubmit}
                    className="max-w-3xl border border-gray-200"
                    >
                    {/* Name */}
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        会社名*
                        </label>
                        <input
                        type="text"
                        name="name"
                        className="m-3 p-2 w-100 border border-gray-300 rounded text-sm"
                        required
                        />
                    </div>
                    
                    
                    {/* Email */}
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                    <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center">
                        メールアドレス*
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="m-3 border border-gray-300 rounded text-sm w-full"
                        required
                    />
                    </div>

                    {/* Confirm Email */}
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                    <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center">
                        確認用メールアドレス*
                    </label>
                    <div>
                        <input
                        type="email"
                        name="confirmEmail"
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        className="m-3 border border-gray-300 rounded text-sm w-full"
                        required
                        />
                        <p className="mb-5 text-sm text-gray-500">
                        （上記で記入したアドレスを今一度ご記入ください）
                        </p>
                    </div>
                    </div>

                    {error && (
                    <div className="text-red-600 text-sm px-3 py-2 border-b border-gray-200">
                        {error}
                    </div>
                    )}

                    {/* Tel */}
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        電話番号*
                        </label>
                        <input
                        type="text"
                        name="tel"
                        className="m-3 p-2 w-100 border border-gray-300 rounded text-sm"
                        />
                    </div>

                    {/* Age */}
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        年齢
                        </label>
                        <div className="flex gap-2 p-3">
                        満
                        <input
                            type="text"
                            name="age"
                            className="border rounded border-gray-300 p-1 w-16"
                            required
                        />
                        歳
                        </div>
                    </div>

                    {/* Gender */}
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        性別*
                        </label>
                        <div className="flex items-center gap-4 p-3">
                        <label className="flex items-center gap-1">
                            <input type="radio" name="gender" value="male" required /> 男性
                        </label>
                        <label className="flex items-center gap-1">
                            <input type="radio" name="gender" value="female" /> 女性
                        </label>
                        </div>
                    </div>

                    {/* Station */}
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        最寄駅
                        </label>
                        <div>
                            <input
                            type="text"
                            name="nearestStation"
                            className="m-3 w-30 border border-gray-300 rounded text-sm"
                            />
                            駅
                        </div>
                    </div>

                    {/* Motivation */}
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        お問い合わせ内容*
                        </label>
                        <textarea
                        name="motivation"
                        required
                        className="m-3 w-90 border border-gray-300 rounded text-sm"
                        />
                    </div>

                    {/* Submit */}
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        *は必須項目です。
                        </label>
                        <div className="text-center p-6">
                            <button
                            type="submit"
                            className="flex bg-[#0071bc] text-white px-3 py-1 rounded hover:bg-blue-700"
                            >
                            送信する
                            </button>
                            {submitted && <p className="mt-4">{submitted}</p>}
                        </div>
                    </div>
                </form> 
                ) } 
                </div>                       
                <p className="text-sm">
                ご登録いただきました個人情報は、当社 「
                <Link
                    href="/privacy"
                    className="text-blue-600 underline hover:text-green-800"
                    target="_blank"
                >
                    個人情報保護方針
                </Link>
                」、「
                <Link
                    href="/privacy"
                    className="text-blue-600 underline hover:text-green-800"
                    target="_blank"
                >
                    個人情報の取り扱いについて
                </Link>
                」に基づきお取り扱いします。
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
