
import React from 'react';
import { NavLink, Outlet, useNavigate, useLocation, Link } from 'react-router-dom';

interface AdminLayoutProps {
  onLogout: () => void;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: 'dashboard', label: 'Dashboard', path: '/admin/dashboard' },
    { icon: 'group', label: 'User Management', path: '/admin/users' },
    { icon: 'category', label: 'Category Management', path: '/admin/categories' },
    { icon: 'report', label: 'Reported Content', path: '/admin/reports' },
    { icon: 'analytics', label: 'Analytics', path: '/admin/analytics' },
  ];

  const systemItems = [
    { icon: 'settings', label: 'Settings', path: '/admin/settings' },
  ];

  const getBreadcrumb = () => {
    if (location.pathname.includes('/users')) return 'Users';
    if (location.pathname.includes('/reports')) return 'Reports';
    if (location.pathname.includes('/categories')) return 'Categories';
    if (location.pathname.includes('/analytics')) return 'Analytics';
    if (location.pathname.includes('/settings')) return 'Settings';
    return 'Dashboard';
  };

  return (
    <div className="flex h-screen bg-[#f8fafd] font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col bg-white border-r border-gray-100 shrink-0">
        <Link to="/" className="p-6 flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="size-8 bg-[#e11d48] rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined font-bold text-xl">construction</span>
          </div>
          <div>
            <h2 className="text-sm font-black tracking-tight text-[#120e1b]">FixIt Hawassa</h2>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Admin Portal</p>
          </div>
        </Link>

        <nav className="flex-1 px-4 py-6 space-y-8">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    isActive 
                      ? 'bg-[#fef2f2] text-[#e11d48]' 
                      : 'text-gray-500 hover:bg-gray-50'
                  }`
                }
              >
                <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">System</h3>
            <div className="space-y-1">
              {systemItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                      isActive 
                        ? 'bg-[#fef2f2] text-[#e11d48]' 
                        : 'text-gray-500 hover:bg-gray-50'
                    }`
                  }
                >
                  <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-50">
          <button 
            onClick={() => { onLogout(); navigate('/'); }}
            className="flex items-center gap-3 px-4 py-3 w-full text-gray-500 hover:text-red-500 font-bold text-sm transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Page Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-red-500">{getBreadcrumb()}</span>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative size-10 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="size-9 rounded-full overflow-hidden border border-gray-100 shadow-sm cursor-pointer">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" />
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto bg-[#f8fafd]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
