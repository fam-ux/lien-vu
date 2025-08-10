import { NavLink, Outlet } from 'react-router-dom'

export default function AppLayout() {
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
        </div>
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


