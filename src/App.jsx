import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import ScrollToTop from './components/Layout/ScrollToTop';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import CalendarPage from './pages/CalendarPage';
import ReportsPage from './pages/ReportsPage';
import ProfilePage from './pages/ProfilePage';
import DevicePage from './pages/DevicePage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/dashboard" 
            element={
              <>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Dashboard />
                <ScrollToTop />
              </>
            } 
          />
          <Route 
            path="/analytics" 
            element={
              <>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Analytics />
                <ScrollToTop />
              </>
            } 
          />
          <Route 
            path="/calendar" 
            element={
              <>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <CalendarPage />
                <ScrollToTop />
              </>
            } 
          />
          <Route 
            path="/reports" 
            element={
              <>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <ReportsPage />
                <ScrollToTop />
              </>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <ProfilePage />
                <ScrollToTop />
              </>
            } 
          />
          <Route 
            path="/device" 
            element={
              <>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <DevicePage />
                <ScrollToTop />
              </>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
