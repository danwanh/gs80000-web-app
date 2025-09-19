"use client"

import { useState } from "react"
import Sidebar from "../components/sidebar"
import Link from "next/link";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_FORM_URL as string, {
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

  if (submitted) {
    return (
        
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
                    <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
                        <h2 className="text-white font-medium text-lg">お問い合わせ</h2>
                        <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
                    </div>
                    <div className="p-6 bg-white text-gray-800">
                        <p className="mb-4">
                        下記のお問い合わせフォームよりご連絡ください。
                        <br />
                        後ほど担当者よりご連絡を差し上げます。
                        </p>
                        <p className="mb-4">このページには直接アクセスできません。</p>
                        <p className="text-sm text-gray-600">
                        ご登録いただきました個人情報は、当社
                        <Link
                            href="/privacy"
                            className="text-blue-600 underline hover:text-green-800"
                            target="_blank"
                        >
                            「個人情報保護方針・個人情報の取り扱いについて」
                        </Link>
                        に基づきお取り扱いします。
                        </p>
                    </div>
            </div>
            <div className="lg:col-span-1">
            <Sidebar />
            </div>
        </div>
    );
  }

  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
            <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 mb-6">
              <h2 className="text-white font-medium text-lg">お問い合わせ</h2>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3"></div>
            </div>

            <p>下記のお問い合わせフォームよりご連絡ください。</p>
            <p className="mb-10">後ほど担当者よりご連絡を差し上げます。</p>
            <form
            onSubmit={handleSubmit}
            className="max-w-3xl border border-gray-200"
            >
            {/* Name */}
            <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                お名前*
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

            {/* Age */}
            <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                年齢
                </label>
                <select name="age"  className="m-3 w-20 border border-gray-300 rounded text-sm">
                <option value="10代">10代</option>
                <option value="20代">20代</option>
                <option value="30代">30代</option>
                <option value="40代">40代</option>
                <option value="50代">50代</option>
                <option value="60代">60代</option>
                <option value="70代">70代</option>
                <option value="80代以上">80代以上</option>
                </select>
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

            {/* Job*/}
            <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                ご職業
                </label>
                <select name="job"  className="m-3 w-60 border border-gray-300 rounded text-sm">
                    <option value="会社員（事務系）">
                    会社員（事務系）		</option>
                    <option value="会社員（技術系）">
                    会社員（技術系）		</option>
                    <option value="会社員（管理職）">
                    会社員（管理職）		</option>
                    <option value="会社役員">
                    会社役員		</option>
                    <option value="教職員">
                    教職員		</option>
                    <option value="専門職（医師・弁護士・会計士）">
                    専門職（医師・弁護士・会計士）		</option>
                    <option value="自営業・フリーランス">
                    自営業・フリーランス		</option>
                    <option value="派遣社員・契約社員・嘱託社員">
                    派遣社員・契約社員・嘱託社員		</option>
                    <option value="主婦">
                    主婦		</option>
                    <option value="パート・アルバイト">
                    パート・アルバイト		</option>
                    <option value="大学生・短大生・専門学生">
                    大学生・短大生・専門学生		</option>
                    <option value="高校生・中学生・小学生">
                    高校生・中学生・小学生		</option>
                    <option value="公務員">
                    公務員		</option>
                    <option value="家事手伝">
                    家事手伝		</option>
                    <option value="無職">
                    無職		</option>
                    <option value="その他">
                    その他		</option>
                </select>
            </div>

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

            {/* Message */}
            <div className="grid grid-cols-[200px_1fr] border-b border-gray-200">
                <label className="bg-gray-100 text-[#0071bc] font-bold p-3 flex items-center border-b border-gray-200">
                お問い合わせ内容*
                </label>
                <textarea
                name="message"
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
        </div>
    </div>
    <div className="lg:col-span-1">
    <Sidebar />
    </div>
    </div>
  )
}
