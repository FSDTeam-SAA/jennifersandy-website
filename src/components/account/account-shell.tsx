'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MessageSquare, Settings, Home } from 'lucide-react'
import { LogoutModal } from '@/components/shared/logout-modal'
import { cn } from '@/lib/utils'
import { TranslatedText } from '@/components/shared/translated-text'
import { LanguageSwitcher } from '@/components/shared/language-switcher'

const navItems = [
  {
    href: '/',
    label: 'Go Home',
    icon: Home,
  },
  {
    href: '/account/inquiries',
    label: 'My Inquiries',
    icon: MessageSquare,
  },
  {
    href: '/account/settings/profile',
    label: 'Settings',
    icon: Settings,
  },
]

export function AccountShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return false
    if (href === '/account/inquiries') {
      return pathname.startsWith('/account/inquiries')
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 md:flex-row">
      {/* Sidebar */}
      <aside className="flex w-full flex-col border-b border-gray-200 bg-white md:min-h-screen md:w-[220px] md:min-w-[220px] md:border-b-0 md:border-r">
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-6 md:block md:pb-10 md:pt-8">
          <Link href="/">
            <span className="text-2xl font-bold text-primary">0211wohnen</span>
          </Link>
          <div className="md:mt-5"><LanguageSwitcher /></div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 gap-1 overflow-x-auto px-4 pb-3 md:block md:space-y-1 md:pb-0">
          {navItems.map(item => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all',
                  active
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                )}
              >
                <item.icon className="h-5 w-5" />
                <TranslatedText
                  text={item.label}
                  cacheKey={`account-shell:${item.label}`}
                />
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="hidden px-4 pb-8 pt-4 md:block">
          <LogoutModal />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
    </div>
  )
}
