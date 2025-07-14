import React, { useState } from 'react';
import { User, Edit, Save, X, Camera } from 'lucide-react';
import GlassCard from '../components/Layout/GlassCard';

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    age: 28,
    height: '1.75 m',
    weight: '70 kg',
    gender: 'Male',
    emergencyContact: '+1 (555) 123-4567',
    medicalConditions: 'None',
    allergies: 'None'
  });

  const [editedInfo, setEditedInfo] = useState({ ...userInfo });

  const handleInputChange = (field, value) => {
    setEditedInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setUserInfo({ ...editedInfo });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedInfo({ ...userInfo });
    setIsEditing(false);
  };

  const healthStats = [
    { label: 'BMI', value: '22.9', status: 'Normal', color: 'text-green-600' },
    { label: 'Resting HR', value: '68 bpm', status: 'Good', color: 'text-blue-600' },
    { label: 'Avg SpO₂', value: '98%', status: 'Excellent', color: 'text-green-600' },
    { label: 'Sleep Score', value: '85/100', status: 'Good', color: 'text-blue-600' }
  ];

  const achievements = [
    { title: '7-Day Streak', description: 'Consistent daily monitoring', icon: '🔥' },
    { title: 'Heart Health Hero', description: 'Maintained healthy heart rate', icon: '❤️' },
    { title: 'Data Master', description: 'Complete weekly data collection', icon: '��' },
    { title: 'Early Bird', description: 'Morning exercise routine', icon: '🌅' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-50 to-peach-100 dark:from-gray-900 dark:to-gray-800">
      <div className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              User Profile
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your personal information and health profile
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-2">
              <GlassCard className="p-6 animate-slide-up">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Personal Information
                  </h2>
                  <button
                    onClick={() => isEditing ? handleCancel() : setIsEditing(true)}
                    className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    {isEditing ? <X className="h-5 w-5" /> : <Edit className="h-5 w-5" />}
                  </button>
                </div>

                {/* Avatar Section */}
                <div className="flex flex-col items-center mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-peach-200 to-peach-300 flex items-center justify-center text-white text-2xl font-bold">
                      {userInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {isEditing && (
                      <button className="absolute bottom-0 right-0 p-1 bg-white rounded-full shadow-lg">
                        <Camera className="h-4 w-4 text-gray-600" />
                      </button>
                    )}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-gray-800 dark:text-white">
                    {userInfo.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{userInfo.email}</p>
                </div>

                {/* Information Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(userInfo).map(([key, value]) => {
                    if (key === 'name' || key === 'email') return null;
                    
                    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                    
                    return (
                      <div key={key}>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {label}
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editedInfo[key]}
                            onChange={(e) => handleInputChange(key, e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-white/20 focus:border-peach-200 focus:ring-2 focus:ring-peach-200/50 outline-none transition-all"
                          />
                        ) : (
                          <div className="px-3 py-2 bg-white/20 rounded-lg text-gray-800 dark:text-white">
                            {value}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {isEditing && (
                  <div className="mt-6 flex space-x-3">
                    <button
                      onClick={handleSave}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-peach-200 to-peach-300 text-white rounded-lg hover:from-peach-300 hover:to-peach-400 transition-all"
                    >
                      <Save className="h-4 w-4" />
                      <span>Save Changes</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-white/20 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </GlassCard>
            </div>

            {/* Health Stats & Achievements */}
            <div className="space-y-6">
              {/* Health Stats */}
              <GlassCard className="p-6 animate-scale-in">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Health Stats
                </h3>
                <div className="space-y-4">
                  {healthStats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white">
                          {stat.label}
                        </div>
                        <div className={`text-sm ${stat.color}`}>
                          {stat.status}
                        </div>
                      </div>
                      <div className="text-lg font-bold text-gray-800 dark:text-white">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Achievements */}
              <GlassCard className="p-6 animate-fade-in">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Achievements
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/20 rounded-lg">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white">
                          {achievement.title}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Settings */}
              <GlassCard className="p-6 animate-fade-in">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Settings
                </h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                    <div className="font-medium text-gray-800 dark:text-white">
                      Privacy Settings
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Manage your data privacy
                    </div>
                  </button>
                  <button className="w-full text-left p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                    <div className="font-medium text-gray-800 dark:text-white">
                      Notifications
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Configure alerts and reminders
                    </div>
                  </button>
                  <button className="w-full text-left p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                    <div className="font-medium text-gray-800 dark:text-white">
                      Data Export
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Download your health data
                    </div>
                  </button>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
