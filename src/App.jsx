import { NavLink, Outlet } from 'react-router-dom';
import Sidebar from './components/layouts/Sidebar'
import Topbar from './components/layouts/Topbar'

function App() {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded transition ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`;

  return (
    <div className="flex min-h-svh bg-muted/30" dir="rtl">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
