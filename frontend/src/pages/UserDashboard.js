import React from 'react';
import { Link } from 'react-router-dom';

function UserDashboard() {
  return (
    <>
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-btn">
          My Dashboard
        </h1>
        <p className="text-lg text-text/70 mt-2">Welcome to your personal creative space.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link to="/profile" className="bg-black/20 p-6 rounded-2xl border border-white/20 hover:border-accent transition-colors">
          <h3 className="text-xl font-bold mb-2">My Profile</h3>
          <p className="text-text/70">View and edit your public profile.</p>
        </Link>
        <Link to="/dashboard/my-photos" className="bg-black/20 p-6 rounded-2xl border border-white/20 hover:border-accent transition-colors">
          <h3 className="text-xl font-bold mb-2">My Photos</h3>
          <p className="text-text/70">Manage your uploaded photos and galleries.</p>
        </Link>
        <div className="bg-black/20 p-6 rounded-2xl border border-white/20">
          <h3 className="text-xl font-bold mb-2">My Favorites</h3>
          <p className="text-text/70">View photos you've saved.</p>
        </div>
      </div>
    </>
  );
}

export default UserDashboard; 