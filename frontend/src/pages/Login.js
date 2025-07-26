import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(`${process.env.REACT_APP_API_URL}/api/auth/login`);
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(process.env.REACT_APP_API_URL + '/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      login(res.data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      <Navbar />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Image */}
        <div className="hidden md:block bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523438885289-0b45a346d14b?auto=format&fit=crop&w=1200&q=80')" }}>
          <div className="w-full h-full bg-black/50"></div>
        </div>

        {/* Right side - Form */}
        <div className="flex flex-col items-center justify-center p-6 sm:p-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-accent to-btn">
              Welcome Back
            </h2>
            <p className="text-center text-text/70 mb-8">Sign in to continue to your account.</p>
            
            <form onSubmit={handleSubmit}>
              {error && <div className="mb-4 p-3 rounded-lg bg-red-500/20 text-red-400 text-center">{error}</div>}
              
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                className="w-full p-4 mb-4 bg-black/20 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent" 
                required 
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                className="w-full p-4 mb-6 bg-black/20 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent" 
                required 
              />
              
              <button 
                type="submit" 
                className="w-full py-4 rounded-lg bg-btn hover:bg-btn-hover text-white font-bold text-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Login
              </button>
            </form>

            <p className="text-center mt-8 text-text/70">
              Don't have an account? <Link to="/register" className="font-semibold text-accent-hover hover:underline">Register here</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login; 