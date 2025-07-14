import React, { useState, useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import GlassCard from '../components/Layout/GlassCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {
  const [activeTab, setActiveTab] = useState('daily');
  const chartRef = useRef(null);

  const tabs = [
    { id: 'daily', label: 'Daily' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' }
  ];

  const generateData = (period) => {
    const labels = period === 'daily' 
      ? ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM']
      : period === 'weekly'
      ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

    return {
      labels,
      datasets: [
        {
          label: 'Heart Rate (bpm)',
          data: labels.map(() => Math.floor(Math.random() * (85 - 65) + 65)),
          borderColor: 'rgb(248, 113, 113)',
          backgroundColor: 'rgba(248, 113, 113, 0.1)',
          tension: 0.4,
        },
        {
          label: 'SpO₂ (%)',
          data: labels.map(() => Math.floor(Math.random() * (100 - 95) + 95)),
          borderColor: 'rgb(96, 165, 250)',
          backgroundColor: 'rgba(96, 165, 250, 0.1)',
          tension: 0.4,
        },
        {
          label: 'Temperature (°F)',
          data: labels.map(() => Number((Math.random() * (98.6 - 97.0) + 97.0).toFixed(1))),
          borderColor: 'rgb(251, 146, 60)',
          backgroundColor: 'rgba(251, 146, 60, 0.1)',
          tension: 0.4,
        }
      ],
    };
  };

  const [chartData, setChartData] = useState(generateData('daily'));

  useEffect(() => {
    setChartData(generateData(activeTab));
  }, [activeTab]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          color: '#6B7280'
        }
      },
      title: {
        display: true,
        text: `Health Analytics - ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} View`,
        color: '#374151',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#6B7280'
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#6B7280'
        }
      },
    },
    interaction: {
      intersect: false,
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 8,
      },
    },
  };

  const stats = [
    {
      title: 'Average Heart Rate',
      value: '76 bpm',
      change: '+2.3%',
      trend: 'up'
    },
    {
      title: 'Average SpO₂',
      value: '97.8%',
      change: '+0.5%',
      trend: 'up'
    },
    {
      title: 'Average Temperature',
      value: '98.1°F',
      change: '-0.2%',
      trend: 'down'
    },
    {
      title: 'Stress Episodes',
      value: '3',
      change: '-15%',
      trend: 'down'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-50 to-peach-100 dark:from-gray-900 dark:to-gray-800">
      <div className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Health Analytics
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track your health trends and patterns over time
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <GlassCard 
                key={stat.title} 
                className="p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  {stat.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800 dark:text-white">
                    {stat.value}
                  </span>
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Chart Section */}
          <GlassCard className="p-6 animate-scale-in">
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-6 bg-white/20 rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-peach-300 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Chart */}
            <div className="h-96">
              <Line ref={chartRef} data={chartData} options={options} />
            </div>
          </GlassCard>

          {/* Insights Section */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassCard className="p-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Health Insights
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      Excellent Heart Rate Variability
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your heart rate shows good variability, indicating healthy cardiovascular function.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      Consistent Oxygen Levels
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your SpO₂ levels remain stable throughout the day, which is excellent.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      Stress Management Needed
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Consider relaxation techniques during peak stress hours.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Recommendations
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                    Exercise Timing
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-300">
                    Your heart rate data suggests the best exercise window is between 9-11 AM.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
                    Sleep Quality
                  </h4>
                  <p className="text-sm text-green-600 dark:text-green-300">
                    Your temperature patterns indicate good sleep quality. Maintain your current routine.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-2">
                    Hydration
                  </h4>
                  <p className="text-sm text-orange-600 dark:text-orange-300">
                    Consider increasing water intake during afternoon hours for optimal performance.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
