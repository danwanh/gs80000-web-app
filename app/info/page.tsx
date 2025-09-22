import Link from "next/link"
import Sidebar from "~/app/components/sidebar"
import { news } from "../data/news"

const ITEMS_PER_PAGE = 10

export default async function InfoPage({
  searchParams,
}: {
  searchParams?: { page?: string }
}) {
  const page = parseInt(searchParams?.page || "1", 10)
  const sortedNews = [...news].sort((a, b) => b.id - a.id) 
  const totalPages = Math.ceil(sortedNews.length / ITEMS_PER_PAGE)

  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const currentNews = sortedNews.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div>
          <div className="bg-[#0071bc] border-b-4 border-gray-300 p-2 m-2">
            <h2 className="text-white font-medium text-lg">Information</h2>
          </div>

          <div className="ml-5 mt-5">
            <div className="max-w-3xl">
              <ul className="space-y-4">
                {currentNews.map((item) => (
                  <li key={item.id} className="pb-2">
                    <div className="flex gap-2 items-center">
                      <p className="text-gray-500 text-sm">{item.date}</p>
                      <Link
                        href={`/info/${item.id}`}
                        className="text-[#0071bc] hover:underline font-medium"
                      >
                        {item.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-6">
                {page > 1 ? (
                  <Link
                    href={`?page=${page - 1}`}
                    className="text-[#0071bc] hover:text-green-300"
                  >
                    « 前のページ
                  </Link>
                ) : (
                  <span />
                )}

                {page < totalPages && (
                  <Link
                    href={`?page=${page + 1}`}
                    className="text-[#0071bc] hover:text-green-300"
                  >
                    次のページ »
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
  )
}
