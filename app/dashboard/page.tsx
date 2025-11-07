'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Users, MessageCircle, Award, MapPin, Settings, Bell, Search, Plus, Star, Clock, Zap, LogOut } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import type { User } from '@supabase/supabase-js';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<string | null>('matches');
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState('');

  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
      
      if (!user) {
        router.push('/login');
      }
    };

    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // TESTABLE FUNCTIONALITY: Connect with language partners
  const handleConnect = (partnerName: string) => {
    setNotification(`Connection request sent to ${partnerName}! They'll be notified of your interest.`);
    
    // Clear notification after 5 seconds
    setTimeout(() => {
      setNotification('');
    }, 5000);
  };

  // TESTABLE FUNCTIONALITY: Send message
  const handleMessage = (partnerName: string) => {
    setNotification(`Message conversation started with ${partnerName}! Check your conversations.`);
    
    // Clear notification after 5 seconds
    setTimeout(() => {
      setNotification('');
    }, 5000);
  };

  // TESTABLE FUNCTIONALITY: Enable location
  const handleEnableLocation = () => {
    setNotification('Travel mode activated! Discovering local language partners near you...');
    
    // Clear notification after 5 seconds
    setTimeout(() => {
      setNotification('');
    }, 5000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const sections = [
    {
      id: 'matches',
      title: 'Language Matches',
      icon: Users,
      description: 'Find your perfect language partners',
      badge: '3 new',
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-medium text-sm">MJ</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black">Maria J.</h4>
                  <p className="text-gray-600">Spanish → English</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-500">4.9 • 92% match</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button 
                  onClick={() => handleConnect('Maria J.')}
                  className="bg-black text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  Connect
                </button>
                <p className="text-xs text-gray-500 mt-2">Online now</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-medium text-sm">TK</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black">Thomas K.</h4>
                  <p className="text-gray-600">French → Italian</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-500">4.7 • 87% match</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button 
                  onClick={() => handleMessage('Thomas K.')}
                  className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  Message
                </button>
                <p className="text-xs text-gray-500 mt-2">2h ago</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'conversations',
      title: 'Recent Conversations',
      icon: MessageCircle,
      description: 'Continue your language practice',
      badge: '1 unread',
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-medium text-sm">MJ</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-lg text-black">Maria J.</h4>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Spanish</span>
                  </div>
                  <p className="text-gray-600 truncate">Hola! How was your day? I wanted to practice some conversation about...</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">2 min ago</p>
                <div className="w-3 h-3 bg-blue-500 rounded-full ml-auto mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'rewards',
      title: 'Learning Rewards',
      icon: Award,
      description: 'Track your progress and achievements',
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-gradient-to-br from-white to-yellow-50 border border-yellow-200 rounded-2xl text-center hover:shadow-lg transition-all duration-300 group">
            <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <p className="text-2xl font-bold text-yellow-800">7</p>
            <p className="text-sm font-medium text-yellow-700">day streak</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-2xl text-center hover:shadow-lg transition-all duration-300 group">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <p className="text-2xl font-bold text-blue-800">42</p>
            <p className="text-sm font-medium text-blue-700">conversations</p>
          </div>
        </div>
      )
    },
    {
      id: 'travel',
      title: 'Travel Mode',
      icon: MapPin,
      description: 'Connect with locals when traveling',
      content: (
        <div className="p-6 bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-2xl">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-black">Discover Local Partners</h4>
              <p className="text-gray-600">Find language partners in your current location</p>
            </div>
          </div>
          <button 
            onClick={handleEnableLocation}
            className="w-full bg-black text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Enable Location & Explore
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Notification Banner */}
      {notification && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <p>{notification}</p>
            <button 
              onClick={() => setNotification('')}
              className="text-green-700 hover:text-green-900"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Header */}
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black">Mèli</h1>
                <p className="text-sm text-gray-600">Building bridges between cultures</p>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search for partners, languages, interests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 hover:bg-white text-black placeholder-gray-500"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="p-3 hover:bg-gray-100 rounded-2xl transition-all duration-200 relative text-gray-600 hover:text-black">
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
              </button>
              <button className="p-3 hover:bg-gray-100 rounded-2xl transition-all duration-200 text-gray-600 hover:text-black">
                <Settings className="w-5 h-5" />
              </button>
              <button 
                onClick={handleLogout}
                className="p-3 hover:bg-gray-100 rounded-2xl transition-all duration-200 text-gray-600 hover:text-black"
                title="Log out"
              >
                <LogOut className="w-5 h-5" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {user.email ? user.email[0].toUpperCase() : 'U'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-5xl font-light mb-4 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            Welcome back, {user.email ? user.email.split('@')[0] : 'Friend'}!
          </h2>
          <p className="text-xl text-gray-600">Ready to continue your language journey?</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-black">12</p>
                <p className="text-sm text-gray-600">Matches</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-black">7</p>
                <p className="text-sm text-gray-600">Day Streak</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-black">42</p>
                <p className="text-sm text-gray-600">Conversations</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-black">3</p>
                <p className="text-sm text-gray-600">Languages</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Dashboard Sections */}
        <div className="space-y-6">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <div key={section.id} className="bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-black">{section.title}</h3>
                        {section.badge && (
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                            {section.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-lg">{section.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {isActive ? (
                      <ChevronDown className="w-6 h-6 text-gray-400 transition-transform duration-300" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400 transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                {isActive && (
                  <div className="px-8 pb-8">
                    <div className="pt-6 border-t border-gray-200">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Enhanced Quick Actions */}
        <div className="mt-12 p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-black">Quick Actions</h3>
            <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-2xl font-medium hover:bg-gray-800 transition-all duration-300">
              <Plus className="w-5 h-5" />
              <span>New Match</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <button className="p-6 bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl text-left hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg text-black mb-2">Find New Partners</h4>
              <p className="text-gray-600 text-sm">Discover language partners based on your interests</p>
            </button>
            <button className="p-6 bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-2xl text-left hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-lg text-black mb-2">Practice Exercises</h4>
              <p className="text-gray-600 text-sm">Improve your skills with interactive lessons</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
