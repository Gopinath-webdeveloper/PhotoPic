import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Import all pages and layouts
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import Users from './pages/dashboard/Users';
import Roles from './pages/dashboard/Roles';
import MyPhotos from './pages/dashboard/MyPhotos';
import Profile from './pages/Profile';
import Home from './pages/Home';
import DashboardLayout from './layouts/DashboardLayout';
import PlaceholderPage from './pages/PlaceholderPage';

// A wrapper to protect routes and apply the layout
const DashboardRoutes = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

// A gatekeeper to redirect to the correct dashboard HOME
const DashboardGate = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;

  return user.role === 'Admin' 
    ? <Navigate to="/admin-dashboard" /> 
    : <Navigate to="/user-dashboard" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Placeholder Routes */}
        <Route path="/gallery" element={<PlaceholderPage title="Gallery" />} />
        <Route path="/pricing" element={<PlaceholderPage title="Pricing" />} />
        <Route path="/about" element={<PlaceholderPage title="About" />} />
        <Route path="/contact" element={<PlaceholderPage title="Contact" />} />

        {/* Main Dashboard Redirect */}
        <Route path="/dashboard" element={<DashboardGate />} />

        {/* All Protected Dashboard Routes */}
        <Route element={<DashboardRoutes />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/roles" element={<Roles />} />
          <Route path="/dashboard/my-photos" element={<MyPhotos />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
