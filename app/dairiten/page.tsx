"use client"

import { useState } from "react"
import Image from "next/image"
import Sidebar from "~/app/components/sidebar"
import Link from "next/link"

export default function DairitenPage() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const res = await fetch("https://formspree.io/f/xgvlgwnk", {
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
            <p>弊社商品を取り扱っていただける企業様、個人事業主様を募集しております。</p>
            <p className="mb-15">ご興味のある方は、お気軽にお問い合わせください。</p>
            
            <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 mb-5">
                <h3 className="text-[#0071bc] font-bold text-lg">ハピネスプラザ</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <p className="mb-5">電位治療器を主体とした店舗を運営いただける方。</p>
            
            <Image src="/dairiten_003.jpg" 
                            alt="会社案内" 
                            width={600}
                            height={256}
                            className="rounded mb-4"
                          />
            <p className="ml-10 mb-5">治療効果を最大限に発揮するための機能、安心して使える品質と保証制度を十分に兼ね備えた商品を揃えています。</p>
            
            <Image src="/dairiten_004.jpg" 
                            alt="会社案内" 
                            width={600}
                            height={256}
                            className="rounded mb-4"
                          />
            <p className="ml-10 mb-5">ショッピングモール、路面店等でのあらゆる店舗形態に適応したノウハウで確実に業績UPが可能です。</p>
            
            <Image src="/dairiten_005.jpg" 
                            alt="会社案内" 
                            width={600}
                            height={256}
                            className="rounded mb-4"
                          />
            <p className="ml-10 mb-2">製品カタログをはじめ、チラシ、ポップ等の営業ツールをご用意いたします。</p>
            <p className="ml-10 mb-10">また、当社ビジネスモデルの活用により安心してスタートが可能です。</p>
            
            <div className="bg-gray-100 border-l-4 border-l-[#0071bc] border-b-4 border-b-gray-300  p-2 mb-5">
                <h3 className="text-[#0071bc] font-bold text-lg">サプリメント</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>
            <p className="mb-10">弊社のオリジナルブランド商品、ケイ素の恵み、水晶の恵み、等を販売していただける方。</p>
            
            <div className="mb-10">
                <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                  <h4 className="ml-2 text-black font-bold text-lg">お電話でのお問い合わせ</h4>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>
                <Image src="/dairiten_tel.jpg" 
                                            alt="会社案内" 
                                            width={400}
                                            height={256}
                                            className="rounded mb-4 ml-15"
                                        />           
            </div>

            <div className="mb-10">
                <div className="bg-white border-l-2 border-l-black border-b-1 border-b-gray-300  p-2 mb-6">
                  <h4 className="ml-2 text-black font-bold text-lg">フォームでのお問い合わせ</h4>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                </div>

                <div>
                {submitted ? (
                    <div>送信完了しました！</div>
                    ) : (
                    <form
                    onSubmit={handleSubmit}
                    className="max-w-3xl border border-gray-200"
                    >
                    {/* Company name */}
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        会社名*
                        </label>
                        <input
                        type="text"
                        name="companyName"
                        className="m-3 p-2 w-100 border border-gray-300 rounded text-sm"
                        required
                        />
                    </div>

                    {/* Person name */}
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        ご担当者名*
                        </label>
                        <input
                        type="text"
                        name="personName"
                        className="m-3 p-2 w-100 border border-gray-300 rounded text-sm"
                        required
                        />
                    </div>

                    {/* Post */}
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        役職
                        </label>
                        <input
                        type="text"
                        name="post"
                        className="m-3 p-2 w-100 border border-gray-300 rounded text-sm"
                        />
                    </div>
                    
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

                    {/* Zip */}
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        郵便番号*
                        </label>
                        <div className="flex gap-2 p-3">
                        〒
                        <input
                            type="text"
                            name="zip1"
                            className="border p-1 w-16"
                            required
                        />
                        -
                        <input
                            type="text"
                            name="zip2"
                            className="border p-1 w-20"
                            required
                        />
                        </div>
                    </div>

                    {/* Address */}
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        ご住所
                        </label>
                        <input
                        type="text"
                        name="address"
                        className="m-3 w-90 border border-gray-300 rounded text-sm"
                        />
                    </div>

                    {/* Inquiries */}
                    <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                        <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                        お問い合わせ内容*
                        </label>
                        <textarea
                        name="inquiries"
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
