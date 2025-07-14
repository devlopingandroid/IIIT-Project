import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, TrendingUp, Shield } from 'lucide-react';
import GlassCard from '../components/Layout/GlassCard';

function LandingPage() {
  const features = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Heart Rate Monitoring',
      description: 'Track your heart rate in real-time with advanced sensors'
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Health Analytics',
      description: 'Get detailed insights into your health patterns and trends'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Progress Tracking',
      description: 'Monitor your health improvements over time'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Data',
      description: 'Your health data is encrypted and secure'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-50 to-peach-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Heart className="h-16 w-16 text-peach-200 mx-auto mb-8 animate-glow" />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            VitalWave
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Your Wearable Health Insight Companion
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Monitor your vital signs in real-time with our advanced wearable technology. 
            Track heart rate, oxygen levels, temperature, and stress indicators all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/dashboard"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-peach-200 to-peach-300 text-white font-medium hover:from-peach-300 hover:to-peach-400 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View Dashboard
            </Link>
            <Link
              to="/device"
              className="px-8 py-4 rounded-xl border-2 border-peach-200 text-peach-300 font-medium hover:bg-peach-200 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Why Choose VitalWave?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <GlassCard key={index} className="p-6 text-center animate-slide-up" hover>
                <div className="text-peach-200 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="p-12 animate-scale-in">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Start Your Health Journey?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Join thousands of users who trust VitalWave for their health monitoring needs.
            </p>
            <Link
              to="/login"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-peach-200 to-peach-300 text-white font-medium hover:from-peach-300 hover:to-peach-400 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get Started Today
            </Link>
          </GlassCard>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-glass-light backdrop-blur-lg border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Heart className="h-6 w-6 text-peach-200" />
              <span className="text-lg font-bold text-gray-800 dark:text-white">VitalWave</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 VitalWave. All rights reserved.
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              AI vibe coded development by{' '}
              <a 
                href="https://biela.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-peach-300 hover:text-peach-400 transition-colors"
              >
                Biela.dev
              </a>
              , powered by{' '}
              <a 
                href="https://teachmecode.ae/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-peach-300 hover:text-peach-400 transition-colors"
              >
                TeachMeCode® Institute
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
