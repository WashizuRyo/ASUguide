'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function TopPage() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { push } = useRouter()

  const [query, setQuery] = useState({
    className: searchParams.get('className') || '',
    faculty: searchParams.get('faculty') || '',
    year: searchParams.get('year') || '2024',
    offering: searchParams.get('offering') || '前期',
    instructor: searchParams.get('instructor') || '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setQuery((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSearch = () => {
    const params = new URLSearchParams()
    for (const [key, value] of Object.entries(query)) {
      if (value) params.set(key, value)
    }

    push(`${pathname}syllabus?${params.toString()}`)
  }

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex gap-4">
          <div>
            <label htmlFor="className">講義名で検索</label>
            <input
              id="className"
              type="text"
              value={query.className}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="faculty">学部で検索</label>
            <select id="faculty" value={query.faculty} onChange={handleChange}>
              <option value="人間情報学部">人間情報学部</option>
              <option value="心理学部">心理学部</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <label htmlFor="year">年度</label>
            <select id="year" value={query.year} onChange={handleChange}>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>
          <div>
            <label htmlFor="offering">開講</label>
            <select
              id="offering"
              value={query.offering}
              onChange={handleChange}
            >
              <option value="前期">前期</option>
              <option value="後期">後期</option>
            </select>
          </div>
          <div>
            <label htmlFor="instructor">先生で検索</label>
            <input
              id="instructor"
              type="text"
              value={query.instructor}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <button type="button" onClick={handleSearch}>
        検索
      </button>
    </>
  )
}
