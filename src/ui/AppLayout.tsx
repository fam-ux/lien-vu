import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function AppLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-full bg-white">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <NavLink to="/" className="text-lg sm:text-xl font-semibold tracking-tight link-underline">
            Dr. Lien Vu
          </NavLink>
          <nav className="hidden md:flex gap-6 text-sm">
            <NavLink to="/research" className={({isActive})=> `hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`}>Research</NavLink>
            <NavLink to="/publications" className={({isActive})=> `hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`}>Publications</NavLink>
            <NavLink to="/presentations" className={({isActive})=> `hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`}>Presentations</NavLink>
            <NavLink to="/experience" className={({isActive})=> `hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`}>Experience</NavLink>
            <NavLink to="/service" className={({isActive})=> `hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`}>Service</NavLink>
            <NavLink to="/consulting" className={({isActive})=> `hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`}>Consulting</NavLink>
            <NavLink to="/contact" className={({isActive})=> `hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`}>Contact</NavLink>
            <NavLink to="/cv" className={({isActive})=> `hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`}>CV</NavLink>
          </nav>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            className="md:hidden p-2 rounded-lg ring-1 ring-brand-100 hover:bg-brand-50 text-ink-700"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav id="mobile-nav" className="md:hidden border-t bg-white/90">
            <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col text-sm">
              <NavLink to="/research" className={({isActive})=> `py-2 hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`} onClick={()=> setIsMobileMenuOpen(false)}>Research</NavLink>
              <NavLink to="/publications" className={({isActive})=> `py-2 hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`} onClick={()=> setIsMobileMenuOpen(false)}>Publications</NavLink>
              <NavLink to="/presentations" className={({isActive})=> `py-2 hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`} onClick={()=> setIsMobileMenuOpen(false)}>Presentations</NavLink>
              <NavLink to="/experience" className={({isActive})=> `py-2 hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`} onClick={()=> setIsMobileMenuOpen(false)}>Experience</NavLink>
              <NavLink to="/service" className={({isActive})=> `py-2 hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`} onClick={()=> setIsMobileMenuOpen(false)}>Service</NavLink>
              <NavLink to="/consulting" className={({isActive})=> `py-2 hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`} onClick={()=> setIsMobileMenuOpen(false)}>Consulting</NavLink>
              <NavLink to="/contact" className={({isActive})=> `py-2 hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`} onClick={()=> setIsMobileMenuOpen(false)}>Contact</NavLink>
              <NavLink to="/cv" className={({isActive})=> `py-2 hover:text-brand-700 transition-colors ${isActive? 'text-brand-700 font-medium':'text-ink-600'}`} onClick={()=> setIsMobileMenuOpen(false)}>CV</NavLink>
            </div>
          </nav>
        )}
      </header>
      <main className="mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </main>
      <footer className="border-t bg-gradient-to-b from-transparent to-brand-50/60">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-ink-500">
          © {new Date().getFullYear()} Lien Vu. All rights reserved.
        </div>
      </footer>
    </div>
  )
}


