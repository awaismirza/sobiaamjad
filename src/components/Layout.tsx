import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { CV_URL, navItems } from '../data/portfolio'

export function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/[0.92] shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <nav aria-label="Primary" className="section-shell flex h-[4.5rem] items-center justify-between">
        <a className="focus-ring flex items-center gap-3 rounded-md" href="#home">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-navy text-sm font-semibold text-white shadow-soft">
            SA
          </span>
          <span className="font-display text-base font-semibold text-navy">
            Dr Sobia Amjad
          </span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a
              className="focus-ring rounded-sm text-sm font-medium text-slate-600 transition hover:text-teal-700"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="button button-primary" href={CV_URL}>
            Download CV
          </a>
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-navy lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="section-shell grid gap-1 py-4">
            {navItems.map((item) => (
              <a
                className="rounded-md px-2 py-3 text-sm font-semibold text-slate-700"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a className="button button-primary mt-3 w-full justify-center" href={CV_URL}>
              Download CV
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-navy py-9 text-white">
      <div className="section-shell flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Dr Sobia Amjad. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 text-white/70">
          <a className="transition hover:text-white" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-white" href="#publications">
            Publications
          </a>
          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
