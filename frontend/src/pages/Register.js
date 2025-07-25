import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError('');
    try {
      const res = await axios.post(process.env.REACT_APP_API_URL + '/api/auth/register', { username, email, password });
      localStorage.setItem('token', res.data.token);
      login(res.data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      <Navbar />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Image */}
        <div className="hidden md:block bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504829857779-918c1e78a637?auto=format&fit=crop&w=1200&q=80')" }}>
          <div className="w-full h-full bg-black/50"></div>
        </div>

        {/* Right side - Form */}
        <div className="flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-accent to-btn">
              Create Your Account
            </h2>
            <p className="text-center text-text/70 mb-8">Join our community and start sharing your vision.</p>
            
            <form onSubmit={handleSubmit}>
              {error && <div className="mb-4 p-3 rounded-lg bg-red-500/20 text-red-400 text-center">{error}</div>}
              
              <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                className="w-full p-4 mb-4 bg-black/20 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent" 
                required 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                className="w-full p-4 mb-4 bg-black/20 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent" 
                required 
              />
              <div className="relative mb-4">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  className="w-full p-4 bg-black/20 rounded-lg border border-white/20" 
                  required 
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-4 -translate-y-1/2 text-text/70">
                  {showPassword ? <EyeSlashIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" />}
                </button>
              </div>
              <div className="relative mb-6">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="Confirm Password" 
                  value={confirmPassword} 
                  onChange={e => setConfirmPassword(e.target.value)} 
                  className="w-full p-4 bg-black/20 rounded-lg border border-white/20" 
                  required 
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute top-1/2 right-4 -translate-y-1/2 text-text/70">
                  {showConfirmPassword ? <EyeSlashIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" />}
                </button>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-4 rounded-lg bg-btn hover:bg-btn-hover text-white font-bold text-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Register
              </button>
            </form>

            <p className="text-center mt-8 text-text/70">
              Already have an account? <Link to="/login" className="font-semibold text-accent-hover hover:underline">Login here</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register; 