"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

export default function Dashboard() {
  const [progress, setProgress] = useState(0);
  const [partners, setPartners] = useState([
    { id: 1, name: 'Maria', language: 'Spanish', online: true },
    { id: 2, name: 'Jean', language: 'French', online: true },
    { id: 3, name: 'Luca', language: 'Italian', online: false }
  ]);
  const [activeTab, setActiveTab] = useState('progress');

  // Simulate progress loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(65);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleConnect = (partnerId: number) => {
    setPartners(partners.map(partner => 
      partner.id === partnerId ? { ...partner, online: !partner.online } : partner
    ));
    alert(`Connecting with ${partners.find(p => p.id === partnerId)?.name}`);
  };

  const startPracticeSession = () => {
    alert('Starting a new practice session! Find a language partner to chat with.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-full"></div>
              <span className="text-2xl font-bold dark:text-white">Mèli</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium">
                Dashboard
              </Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium">
                About
              </Link>
              <ThemeToggle />
              <Link 
                href="/login" 
                className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Log out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 pt-20 pb-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 tracking-tight dark:text-white">
            Welcome to your <span className="text-gray-700 dark:text-gray-300">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            This is your personal language learning hub. Connect with partners, track your progress, and continue your journey.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex justify-center space-x-6 mb-12">
          <button 
            onClick={startPracticeSession}
            className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-2xl"
          >
            Start Practice Session
          </button>
          <button 
            onClick={() => setActiveTab('partners')}
            className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Find Partners
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('progress')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'progress' 
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              Your Progress
            </button>
            <button
              onClick={() => setActiveTab('partners')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'partners' 
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              Language Partners
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'achievements' 
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              Achievements
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'progress' && (
            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 dark:text-white text-center">Your Learning Progress</h3>
              
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Overall Progress</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <div 
                    className="bg-black dark:bg-white h-4 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Progress Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                  <div className="text-2xl font-bold text-black dark:text-white mb-2">12</div>
                  <div className="text-gray-600 dark:text-gray-400">Lessons Completed</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                  <div className="text-2xl font-bold text-black dark:text-white mb-2">8</div>
                  <div className="text-gray-600 dark:text-gray-400">Practice Sessions</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                  <div className="text-2xl font-bold text-black dark:text-white mb-2">5</div>
                  <div className="text-gray-600 dark:text-gray-400">New Words Today</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h4 className="text-xl font-bold mb-4 dark:text-white">Recent Activity</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                    <span className="text-gray-700 dark:text-gray-300">Completed Spanish Lesson 5</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                    <span className="text-gray-700 dark:text-gray-300">Practiced with Maria</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'partners' && (
            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 dark:text-white text-center">Language Partners</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {partners.map(partner => (
                  <div key={partner.id} className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center">
                          <span className="text-white dark:text-black font-bold">
                            {partner.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black dark:text-white">{partner.name}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{partner.language} Speaker</p>
                        </div>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${partner.online ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => handleConnect(partner.id)}
                        className="flex-1 bg-black dark:bg-white text-white dark:text-black py-2 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300"
                      >
                        {partner.online ? 'Message' : 'Connect'}
                      </button>
                      <button className="flex-1 border border-black dark:border-white text-black dark:text-white py-2 rounded-xl font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                        Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 dark:text-white text-center">Your Achievements</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 text-center border-2 border-yellow-400">
                  <div className="text-4xl mb-4">🏆</div>
                  <h4 className="font-bold text-black dark:text-white mb-2">First Conversation</h4>
                  <p className="text-gray-600 dark:text-gray-400">Completed your first language exchange</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700">
                  <div className="text-4xl mb-4">📚</div>
                  <h4 className="font-bold text-black dark:text-white mb-2">Lesson Master</h4>
                  <p className="text-gray-600 dark:text-gray-400">Complete 10 more lessons to unlock</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700">
                  <div className="text-4xl mb-4">🌎</div>
                  <h4 className="font-bold text-black dark:text-white mb-2">Global Citizen</h4>
                  <p className="text-gray-600 dark:text-gray-400">Connect with 5 more partners to unlock</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700">
                  <div className="text-4xl mb-4">💬</div>
                  <h4 className="font-bold text-black dark:text-white mb-2">Chat Champion</h4>
                  <p className="text-gray-600 dark:text-gray-400">Have 10 conversations to unlock</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
