import React, { useState } from 'react';

function Profile() {
  const [username, setUsername] = useState('DemoUser');
  const [bio, setBio] = useState('Lover of landscape photography and capturing moments in time.');
  const [avatar, setAvatar] = useState('https://randomuser.me/api/portraits/men/32.jpg');

  const handleAvatarChange = (e) => {
    // In a real app, this would handle file upload
    if (e.target.files && e.target.files[0]) {
      setAvatar(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="w-full">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-btn">
          Edit Your Profile
        </h1>
        <p className="text-lg text-text/70 mt-2">Keep your public profile fresh and up to date.</p>
      </header>

      <div className="bg-black/20 p-8 rounded-2xl border border-white/20 max-w-4xl mx-auto">
        <form>
            <div className="flex items-center gap-8 mb-8">
              <img src={avatar} alt="User Avatar" className="w-24 h-24 rounded-full object-cover border-4 border-accent" />
              <div>
                <label htmlFor="avatar-upload" className="cursor-pointer px-5 py-3 rounded-lg bg-btn hover:bg-btn-hover text-white font-semibold transition-colors">
                  Change Photo
                </label>
                <input id="avatar-upload" type="file" className="hidden" onChange={handleAvatarChange} accept="image/*" />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="username" className="block text-lg font-semibold mb-2">Username</label>
              <input 
                type="text" 
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-4 bg-black/30 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="bio" className="block text-lg font-semibold mb-2">Your Bio</label>
              <textarea 
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows="4"
                className="w-full p-4 bg-black/30 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Tell the community a little about yourself..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 rounded-lg bg-btn hover:bg-btn-hover text-white font-bold text-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Save Changes
            </button>
          </form>
        </div>
    </div>
  );
}

export default Profile; 