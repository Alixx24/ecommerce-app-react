import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import {
  Home, Newspaper, FolderTree, ClipboardList, Palette, Sparkles, LogOut,
} from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const navItems = [
  { to: '/admin', label: 'خانه', icon: Home },
  { to: '/admin/post', label: 'پست', icon: Newspaper },
  { to: '/admin/category', label: 'دسته‌بندی', icon: FolderTree },
  { to: '/admin/formik', label: 'فرم', icon: ClipboardList },
  { to: '/admin/ui', label: 'ظاهر', icon: Palette },
  { to: '/admin/shadcn', label: 'شادکان', icon: Sparkles },
]

export default function SidebarContent({ onNavigate }) {
  return (
    <div className="flex h-full flex-col">
      {/* برند */}
      <div className="flex h-16 items-center gap-3 border-b px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Sparkles className="h-5 w-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold leading-tight">پنل مدیریت</span>
          <span className="text-xs text-muted-foreground">روکت تودو</span>
        </div>
      </div>

      {/* ناوبری */}
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
        <span className="px-3 pb-2 text-xs font-medium text-muted-foreground">منو</span>
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/admin'}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )
            }
          >
            <Icon className="h-[18px] w-[18px]" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* کاربر */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-accent">
          <Avatar className="h-9 w-9"><AvatarFallback>ع</AvatarFallback></Avatar>
          <div className="flex flex-1 flex-col overflow-hidden">
            <span className="truncate text-sm font-medium">علی</span>
            <span className="truncate text-xs text-muted-foreground">admin@example.com</span>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}