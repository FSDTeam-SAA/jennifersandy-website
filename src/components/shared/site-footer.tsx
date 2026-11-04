import Image from 'next/image'
import Link from 'next/link'

const groups = [
  { title: 'Für Mieter', links: [
    { label: 'Startseite', href: '/' }, { label: 'Apartments finden', href: '/apartments' },
    { label: 'Magazin', href: '/blogs' }, { label: 'Häufige Fragen', href: '/faqs' }, { label: 'Kontakt', href: '/contact' },
  ]},
  { title: 'Für Vermieter', links: [
    { label: 'Vermieterservice', href: '/landlords' }, { label: 'Apartment anbieten', href: '/landlords' }, { label: 'Über uns', href: '/about' },
  ]},
  { title: 'Rechtliches', links: [
    { label: 'Datenschutz', href: '/privacy' }, { label: 'AGB', href: '/terms' },
    { label: 'Impressum', href: 'https://www.0211wohnen.de/impressum.xhtml' }, { label: 'Mein Konto', href: '/account' },
  ]},
]

export function SiteFooter() {
  return <footer className="border-t border-stone-200 bg-[#f0ede8]">
    <div className="container px-6 py-12 lg:px-10">
      <div className="grid gap-10 md:grid-cols-4">
        <div><Link href="/" aria-label="0211wohnen Startseite" className="relative block h-16 w-44"><Image src="/images/0211-weiß.png" alt="0211wohnen" fill sizes="176px" className="object-contain [filter:brightness(0)_saturate(100%)_invert(50%)]" /></Link><p className="mt-4 max-w-xs text-sm leading-6 text-[#6f7470]">Ihr persönlicher Ansprechpartner für möbliertes Wohnen auf Zeit in Düsseldorf und Umgebung.</p></div>
        {groups.map(group => <div key={group.title}><h2 className="text-sm font-semibold text-[#262626]">{group.title}</h2><ul className="mt-4 space-y-2 text-sm text-[#6f7470]">{group.links.map(link => <li key={link.label}><Link href={link.href} className="hover:text-[#262626] hover:underline hover:underline-offset-4">{link.label}</Link></li>)}</ul></div>)}
      </div>
      <div className="mt-10 border-t border-[#c9c1b6] pt-4 text-xs text-[#6f7470]">© 2026 0211wohnen. Alle Rechte vorbehalten.</div>
    </div>
  </footer>
}
