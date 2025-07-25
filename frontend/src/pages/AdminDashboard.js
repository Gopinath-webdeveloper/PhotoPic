import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <>
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-btn">
          Admin Dashboard
        </h1>
        <p className="text-lg text-text/70 mt-2">Manage the platform and its users.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link to="/profile" className="bg-black/20 p-6 rounded-2xl border border-white/20 hover:border-accent transition-colors">
          <h3 className="text-xl font-bold mb-2">Profile</h3>
          <p className="text-text/70">View and edit your public profile.</p>
        </Link>
        <Link to="/dashboard/users" className="bg-black/20 p-6 rounded-2xl border border-white/20 hover:border-accent transition-colors">
          <h3 className="text-xl font-bold mb-2">Users</h3>
          <p className="text-text/70">Manage all platform users.</p>
        </Link>
        <div className="bg-black/20 p-6 rounded-2xl border border-white/20">
          <h3 className="text-xl font-bold mb-2">My Photos</h3>
          <p className="text-text/70">Manage your uploaded photos and galleries.</p>
        </div>
        <div className="bg-black/20 p-6 rounded-2xl border border-white/20">
          <h3 className="text-xl font-bold mb-2">Account Settings</h3>
          <p className="text-text/70">Update your email, password, and other settings.</p>
        </div>
        <div className="bg-black/20 p-6 rounded-2xl border border-white/20 col-span-1 md:col-span-2 lg:col-span-3">
          <h3 className="text-xl font-bold mb-2">Statistics</h3>
          <p className="text-text/70">Views, likes, and comments on your work.</p>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard; 