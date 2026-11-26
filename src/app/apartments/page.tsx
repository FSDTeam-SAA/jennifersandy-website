import type { Metadata } from 'next'
import { ApartmentsPageContent } from '@/components/apartments/apartments-page-content'

export const metadata: Metadata = {
  title: 'Verfügbare Wohnungen',
  description: 'Finden Sie verfügbare, vollständig möblierte Mietwohnungen in Düsseldorf und Umgebung.',
}

interface ApartmentsPageProps {
  searchParams?: Promise<{
    availableFrom?: string
    district?: string
    rooms?: string
    searchTerm?: string
  }>
}

export default async function ApartmentsPage({ searchParams }: ApartmentsPageProps) {
  const params = await searchParams

  return (
    <div className="min-h-screen bg-[#F9FBFC] font-manrope">
      <ApartmentsPageContent
        initialFilters={{
          availableFrom: params?.availableFrom,
          district: params?.district,
          rooms: params?.rooms,
          searchTerm: params?.searchTerm,
        }}
      />
    </div>
  )
}
