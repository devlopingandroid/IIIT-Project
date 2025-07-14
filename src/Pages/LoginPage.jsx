import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, EyeOff } from 'lucide-react';
import GlassCard from '../components/Layout/GlassCard';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-peach-50 to-peach-100 dark:from-gray-900 dark:to-gray-800">
        <div className="w-full max-w-md animate-fade-in">
          <GlassCard className="p-8">
            {/* Logo */}
            <div className="text-center mb-8">
              <Heart className="h-12 w-12 text-peach-200 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Sign in to VitalWave
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Welcome back to your health companion
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email or Username
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-white/20 focus:border-peach-200 focus:ring-2 focus:ring-peach-200/50 outline-none transition-all"
                  placeholder="Enter your email or username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-12 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-white/20 focus:border-peach-200 focus:ring-2 focus:ring-peach-200/50 outline-none transition-all"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Link
                to="/dashboard"
                className="w-full block text-center py-3 px-6 rounded-xl bg-gradient-to-r from-peach-200 to-peach-300 text-white font-medium hover:from-peach-300 hover:to-peach-400 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Sign In
              </Link>

              <div className="text-center">
                <Link
                  to="/forgot-password"
                  className="text-sm text-peach-300 hover:text-peach-400 transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
            </form>
          </GlassCard>
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div className="hidden lg:flex flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-peach-50/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="Health and wellness"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default LoginPage;
