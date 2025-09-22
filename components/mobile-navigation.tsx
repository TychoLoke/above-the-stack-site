'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([type="hidden"]):not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

export type NavigationItem = {
  href: string
  label: string
}

type MobileNavigationProps = {
  items: NavigationItem[]
  portalUrl: string
}

export function MobileNavigation({ items, portalUrl }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)
  const reactId = useId().replace(/:/g, '')
  const menuId = `mobile-navigation-${reactId}`

  useEffect(() => {
    if (!isOpen) {
      return
    }

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null

    const drawer = drawerRef.current

    const focusableElements = () => {
      if (!drawer) {
        return [] as HTMLElement[]
      }

      return Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)).filter(
        (element) => !element.hasAttribute('disabled') && element.getAttribute('aria-hidden') !== 'true',
      )
    }

    const focusFirstElement = () => {
      const [firstFocusable] = focusableElements()
      firstFocusable?.focus()
    }

    focusFirstElement()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsOpen(false)
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const focusable = focusableElements()
      if (focusable.length === 0) {
        event.preventDefault()
        return
      }

      const firstElement = focusable[0]
      const lastElement = focusable[focusable.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (event.shiftKey) {
        if (active === firstElement || !drawer?.contains(active)) {
          event.preventDefault()
          lastElement.focus()
        }
        return
      }

      if (active === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!drawer) {
        return
      }

      if (!drawer.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      return
    }

    const previouslyFocused = previouslyFocusedRef.current ?? toggleRef.current
    previouslyFocused?.focus()
    previouslyFocusedRef.current = null
  }, [isOpen])

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-atsMidnight shadow-sm transition hover:border-atsOcean/30 hover:text-atsOcean focus:outline-none focus:ring-2 focus:ring-atsOcean/50"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((previous) => !previous)}
      >
        <Menu aria-hidden="true" className="h-4 w-4" />
        <span>Menu</span>
      </button>

      {isOpen ? (
        <>
          <div
            className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
          <div
            ref={drawerRef}
            id={menuId}
            role="dialog"
            aria-modal="true"
            className="fixed inset-x-4 top-[var(--space-nav-drawer-offset)] z-50 max-h-[80vh] overflow-y-auto rounded-3xl border border-white/60 bg-white/95 p-6 shadow-2xl focus:outline-none"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-atsOcean/60">
                <span>Navigation</span>
              </div>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-atsOcean/30 hover:text-atsOcean focus:outline-none focus:ring-2 focus:ring-atsOcean/50"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-2 text-base font-medium text-slate-700">
              {items.map((item) => (
                <Link
                  key={item.href}
                  className="rounded-full px-4 py-2 transition hover:bg-atsOcean/5 hover:text-atsOcean"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <Link className="btn-secondary w-full justify-center" href={portalUrl} onClick={() => setIsOpen(false)}>
                Log in
              </Link>
              <Link
                className="btn-primary w-full justify-center"
                href={`${portalUrl}/signup`}
                onClick={() => setIsOpen(false)}
              >
                Join
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}
