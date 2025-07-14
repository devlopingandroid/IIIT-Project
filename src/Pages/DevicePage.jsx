import React from 'react';
import { Heart, Droplets, Thermometer, Activity, Download, Cpu, Zap } from 'lucide-react';
import GlassCard from '../components/Layout/GlassCard';

function DevicePage() {
  const deviceFeatures = [
    {
      icon: <Heart className="h-8 w-8 text-red-400" />,
      title: 'Heart Rate',
      description: 'Continuous monitoring with high precision sensors',
      specs: 'PPG sensor with 100Hz sampling rate'
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-400" />,
      title: 'SpO₂',
      description: 'Blood oxygen saturation measurement',
      specs: 'Dual-wavelength LED technology'
    },
    {
      icon: <Thermometer className="h-8 w-8 text-orange-400" />,
      title: 'Temperature',
      description: 'Body temperature monitoring',
      specs: 'High accuracy ±0.1°C precision'
    },
    {
      icon: <Activity className="h-8 w-8 text-green-400" />,
      title: 'GSR',
      description: 'Galvanic skin response for stress detection',
      specs: 'Conductance measurement 0-100µS'
    }
  ];

  const sensors = [
    {
      name: 'MAX30102',
      function: 'Heart Rate & SpO₂',
      type: 'Optical sensor',
      specifications: 'Integrated pulse oximeter and heart-rate monitor'
    },
    {
      name: 'MAX30205',
      function: 'Temperature',
      type: 'Digital thermometer',
      specifications: 'Human body temperature sensor with ±0.1°C accuracy'
    },
    {
      name: 'MPU6050',
      function: 'Motion',
      type: '6-axis IMU',
      specifications: '3-axis gyroscope and 3-axis accelerometer'
    },
    {
      name: 'GSR Sensor',
      function: 'Stress Detection',
      type: 'Conductance sensor',
      specifications: 'Measures skin conductance variations'
    }
  ];

  const deviceSpecs = [
    { label: 'Battery Life', value: '7-10 days' },
    { label: 'Water Resistance', value: 'IP68' },
    { label: 'Connectivity', value: 'Bluetooth 5.0' },
    { label: 'Memory', value: '4MB Flash' },
    { label: 'Weight', value: '45g' },
    { label: 'Display', value: '1.4" OLED' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-50 to-peach-100 dark:from-gray-900 dark:to-gray-800">
      <div className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in text-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Device Overview
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              VitalWave is a wearable device designed to monitor key health vitals
            </p>
            
            {/* Device Image */}
            <div className="mb-8">
              <GlassCard className="p-8 max-w-2xl mx-auto">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="VitalWave smartwatch"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-4">
                  VitalWave Smartwatch
                </h2>
              </GlassCard>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Health Monitoring Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deviceFeatures.map((feature, index) => (
                <GlassCard 
                  key={feature.title} 
                  className="p-6 text-center animate-slide-up hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {feature.description}
                  </p>
                  <div className="text-xs text-gray-500 dark:text-gray-500 bg-white/20 rounded-lg p-2">
                    {feature.specs}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sensor Details */}
            <GlassCard className="p-6 animate-scale-in">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                <Cpu className="h-5 w-5 mr-2" />
                Sensor Components
              </h2>
              
              <div className="space-y-4">
                {sensors.map((sensor, index) => (
                  <div key={index} className="p-4 bg-white/20 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {sensor.name}
                      </h3>
                      <span className="text-xs bg-peach-200/20 text-peach-300 px-2 py-1 rounded">
                        {sensor.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <strong>Function:</strong> {sensor.function}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {sensor.specifications}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Technical Specifications */}
            <div className="space-y-6">
              <GlassCard className="p-6 animate-fade-in">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  Technical Specifications
                </h2>
                
                <div className="grid grid-cols-2 gap-4">
                  {deviceSpecs.map((spec, index) => (
                    <div key={index} className="text-center p-3 bg-white/20 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {spec.label}
                      </div>
                      <div className="font-semibold text-gray-800 dark:text-white">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-6 animate-fade-in">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Download Resources
                </h2>
                
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-4 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <Download className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      <div className="text-left">
                        <div className="font-medium text-gray-800 dark:text-white">
                          Device Schematic
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          PCB layout and component diagram
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-500">PDF</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-4 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <Download className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      <div className="text-left">
                        <div className="font-medium text-gray-800 dark:text-white">
                          User Manual
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Complete setup and usage guide
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-500">PDF</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-4 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <Download className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      <div className="text-left">
                        <div className="font-medium text-gray-800 dark:text-white">
                          Firmware Source
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Arduino code and libraries
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-500">ZIP</span>
                  </button>
                </div>
              </GlassCard>

              <GlassCard className="p-6 animate-fade-in">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Device Status
                </h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Connection Status</span>
                    <span className="text-green-600 font-medium flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Connected
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Battery Level</span>
                    <span className="text-gray-800 dark:text-white font-medium">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Firmware Version</span>
                    <span className="text-gray-800 dark:text-white font-medium">v2.1.4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Last Sync</span>
                    <span className="text-gray-800 dark:text-white font-medium">2 min ago</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevicePage;
