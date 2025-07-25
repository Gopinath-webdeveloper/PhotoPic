import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';

// This would be a separate component in a real app
const UserModal = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    user 
      ? { ...user, password: '' } 
      : { username: '', email: '', password: '', role: 'Member' }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSave = { ...formData };
    if (!dataToSave.password) {
      delete dataToSave.password; // Don't send empty password
    }
    onSave(dataToSave);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-bg p-8 rounded-2xl border border-white/20 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">{user ? 'Edit User' : 'Add New User'}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" className="w-full p-3 mb-4 bg-black/30 rounded-lg border border-white/20" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-3 mb-4 bg-black/30 rounded-lg border border-white/20" required />
          
          <label htmlFor="role" className="block text-sm font-medium text-text/80 mb-2">Role</label>
          <select name="role" id="role" value={formData.role} onChange={handleChange} className="w-full p-3 mb-4 bg-black/30 rounded-lg border border-white/20">
            <option>Member</option>
            <option>Moderator</option>
            <option>Admin</option>
          </select>
          
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder={user ? "New Password (optional)" : "Password"} className="w-full p-3 mb-6 bg-black/30 rounded-lg border border-white/20" required={!user} />
          
          <div className="flex gap-4">
            <button type="button" onClick={onClose} className="flex-1 py-3 rounded-lg bg-gray-600 hover:bg-gray-500 font-semibold">Cancel</button>
            <button type="submit" className="flex-1 py-3 rounded-lg bg-btn hover:bg-btn-hover font-semibold">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(process.env.REACT_APP_API_URL + '/api/users', { // Assuming a new /api/users endpoint
        headers: { 'x-auth-token': token },
      });
      setUsers(res.data);
    } catch (err) {
      setError('Could not fetch users. Please ensure you have admin rights.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSave = async (userData) => {
    const token = localStorage.getItem('token');
    const headers = { 'x-auth-token': token };
    try {
      if (currentUser) { // Update
        await axios.put(`${process.env.REACT_APP_API_URL}/api/users/${currentUser._id}`, userData, { headers });
      } else { // Create
        await axios.post(`${process.env.REACT_APP_API_URL}/api/users`, userData, { headers });
      }
      fetchUsers(); // Refresh table
    } catch (err) {
      setError(`Failed to save user: ${err.response?.data?.msg || err.message}`);
    }
  };

  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`${process.env.REACT_APP_API_URL}/api/users/${userId}`, { headers: { 'x-auth-token': token } });
        setUsers(users.filter(u => u._id !== userId)); // Optimistic update
      } catch (err) {
        setError(`Failed to delete user: ${err.response?.data?.msg || err.message}`);
      }
    }
  };

  return (
    <div>
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-btn">
            User Management
          </h1>
          <p className="text-lg text-text/70 mt-2">View and manage all users on the platform.</p>
        </div>
        <button onClick={() => { setCurrentUser(null); setIsModalOpen(true); }} className="flex items-center gap-2 px-5 py-3 rounded-lg bg-btn hover:bg-btn-hover text-white font-semibold transition-colors">
          <PlusIcon className="w-6 h-6" />
          Add User
        </button>
      </header>
      
      {error && <div className="mb-4 p-4 bg-red-500/20 text-red-400 rounded-lg">{error}</div>}
      
      <div className="bg-black/20 p-6 rounded-2xl border border-white/20">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/20">
              <th className="p-4">Username</th>
              <th className="p-4">Email</th>
              <th className="p-4">Joined</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="border-b border-white/10">
                <td className="p-4">{user.username}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{new Date(user.createdAt).toLocaleDateString()}</td>
                <td className="p-4 text-right">
                  <button onClick={() => { setCurrentUser(user); setIsModalOpen(true); }} className="p-2 text-blue-400 hover:text-blue-300"><PencilIcon className="w-5 h-5" /></button>
                  <button onClick={() => handleDelete(user._id)} className="p-2 text-red-500 hover:text-red-400"><TrashIcon className="w-5 h-5" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && <UserModal user={currentUser} onClose={() => setIsModalOpen(false)} onSave={handleSave} />}
    </div>
  );
}

export default Users; 