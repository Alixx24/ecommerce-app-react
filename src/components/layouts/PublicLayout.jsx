import { Outlet, NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'

const links = [
  { to: '/', label: 'خانه' },
  // مسیرهای عمومی دیگه بعداً: درباره، تماس ...
]

export default function PublicLayout() {
  return (
    <div className="min-h-svh bg-background" dir="rtl">
      {/* هدر عمومی ساده */}
      <header className="border-b">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4">
          <span className="font-bold">سایت من</span>
          <nav className="flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* لینک به پنل ادمین */}
          <NavLink
            to="/admin"
            className="mr-auto text-sm font-medium text-primary hover:underline"
          >
            ورود به پنل ←
          </NavLink>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  )
}