'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { ApartmentsPageContent } from '@/components/apartments/apartments-page-content'
import { fetchBlogs } from '@/lib/blog-api'
import { stripHtml } from '@/lib/utils'

export function HomeContentSections() {
  const { data: blogData } = useQuery({
    queryKey: ['home-latest-blog'],
    queryFn: () => fetchBlogs({ page: 1, limit: 1 }),
    staleTime: 300_000,
  })
  const article = blogData?.data?.[0]
  const excerpt = article ? stripHtml(article.excerpt || article.content || '').slice(0, 220) : ''

  return (
    <>
      <section aria-labelledby="portfolio-heading">
        <div className="container px-4 pt-10 sm:px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7470]">Aktuelle Immobilien</p>
          <h2 id="portfolio-heading" className="section-title mt-2">Möblierte Apartments auf einen Blick</h2>
          <p className="mt-3 max-w-2xl leading-7 text-[#6f7470]">Alle angezeigten Immobilien stammen direkt aus den freigegebenen onOffice-Datensätzen. Liste und Karte zeigen immer dieselbe Auswahl.</p>
        </div>
        <ApartmentsPageContent homeMapOnly />
      </section>

      {article && (
        <section className="container px-4 pb-16 sm:px-6 lg:px-10" aria-labelledby="magazin-heading">
          <div className="grid overflow-hidden rounded-2xl border border-stone-200 bg-white lg:grid-cols-2">
            <div className="relative min-h-64 bg-stone-100 lg:min-h-96">
              <Image src={article.thumbnail || '/images/property-placeholder.svg'} alt={article.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f7470]">0211wohnen Magazin</p>
              <h2 id="magazin-heading" className="section-title mt-3">{article.title}</h2>
              {excerpt && <p className="mt-5 leading-7 text-[#6f7470]">{excerpt}{excerpt.length === 220 ? '…' : ''}</p>}
              <Link href={`/blogs/${article.slug}`} className="brand-button mt-7 w-fit">Artikel lesen</Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
