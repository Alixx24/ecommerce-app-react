import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Avatar,
  AvatarFallback,
} from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const links = [
  { to: '/', label: 'خانه' },
  { to: '/post', label: 'پست' },
  { to: '/category', label: 'دسته‌بندی' },
  { to: '/formik', label: 'فرم' },
  { to: '/ui', label: 'ظاهر' },
  { to: '/shadcn', label: 'شادکان' },
]

export default function Header({ children }) {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          {/* لوگو / عنوان */}
          <span className="text-lg font-bold">پنل من</span>

          <Separator orientation="vertical" className="h-6" />

          {/* لینک‌های ناوبری */}
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

          {/* بخش سمت چپ: پروفایل کاربر */}
          <div className="mr-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-9 w-9 rounded-full p-0">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>ع</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuLabel>حساب من</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>پروفایل</DropdownMenuItem>
                <DropdownMenuItem>تنظیمات</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  خروج
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </>
  )
}