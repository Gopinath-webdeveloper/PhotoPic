import React from 'react';
import { NavLink } from 'react-router-dom';
import { UsersIcon, ShieldCheckIcon, PhotoIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const isAdmin = user && user.role === 'Admin';

  return (
    <aside className="w-72 bg-bg p-6 flex flex-col border-r border-white/10">
      {/* Logo */}
      <div className="text-3xl font-extrabold mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-btn">
          Dashboard
        </span>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <MagnifyingGlassIcon className="w-5 h-5 text-text/60 absolute top-1/2 left-4 -translate-y-1/2" />
        <input 
          type="text" 
          placeholder="Search..."
          className="w-full bg-black/30 pl-12 pr-4 py-2 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4 flex-1">
        <NavLink to="/dashboard/my-photos"
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-lg ${
                  isActive ? 'bg-btn text-white' : 'text-text/80 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <PhotoIcon className="w-6 h-6" />
              <span>My Photos</span>
            </NavLink>
        {isAdmin && (
          <>
            <NavLink 
              to="/dashboard/users"
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-lg ${
                  isActive ? 'bg-btn text-white' : 'text-text/80 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <UsersIcon className="w-6 h-6" />
              <span>Users</span>
            </NavLink>
            <NavLink 
              to="/dashboard/roles"
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-lg ${
                  isActive ? 'bg-btn text-white' : 'text-text/80 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <ShieldCheckIcon className="w-6 h-6" />
              <span>Roles</span>
            </NavLink>
          </>
        )}
      </nav>

      {/* User Profile Section */}
      <div className="mt-auto flex items-center gap-4 p-4 bg-black/20 rounded-lg">
        <img 
          src="https://randomuser.me/api/portraits/men/32.jpg" 
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <p className="font-bold text-lg">{user ? user.username : 'Demo User'}</p>
          <p className="text-sm text-text/60">{user ? user.role : 'Member'}</p>
        </div>
        <button 
          onClick={logout}
          className="px-4 py-2 rounded-lg bg-btn hover:bg-btn-hover text-white font-semibold transition-colors"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg text-text flex">
      <Sidebar />
      <main className="flex-1 p-10 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout; 