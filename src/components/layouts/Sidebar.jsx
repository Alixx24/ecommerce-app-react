import SidebarContent from './SidebarContent'

export default function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-svh w-64 shrink-0 border-l bg-card lg:block">
      <SidebarContent />
    </aside>
  )
}