const officeAddress = 'Neckarstraße 27, 40219 Düsseldorf, Germany'

export function GoogleMapEmbed() {
  return (
    <iframe
      title={`Google Maps – ${officeAddress}`}
      src={`https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&z=15&hl=de&output=embed`}
      className="h-64 w-full rounded-xl border border-stone-200 md:h-80"
      loading="lazy"
      allowFullScreen
    />
  )
}
