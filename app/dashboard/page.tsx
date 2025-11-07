"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';
import CompatibilityQuiz from '../components/CompatibilityQuiz';

// Define TypeScript interfaces
interface Match {
  id: number;
  name: string;
  language: string;
  compatibility: number;
}

interface Group {
  id: number;
  name: string;
  members: number;
  language: string;
  dailyCompleted: boolean;
}

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('friend-invite');
  const [showQuiz, setShowQuiz] = useState(false);
  const [matches, setMatches] = useState<Match[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [compatibilityScore, setCompatibilityScore] = useState(0);

  // Mock data
  useEffect(() => {
    setMatches([
      { id: 1, name: 'Maria', language: 'Spanish', compatibility: 85 },
      { id: 2, name: 'Jean', language: 'French', compatibility: 92 }
    ]);
    setGroups([
      { id: 1, name: 'Spanish Beginners', members: 4, language: 'Spanish', dailyCompleted: true },
      { id: 2, name: 'French Exchange', members: 6, language: 'French', dailyCompleted: false }
    ]);
    
    // Check if user already completed quiz
    const savedScore = localStorage.getItem('meli-compatibility-score');
    if (savedScore) {
      setQuizCompleted(true);
      setCompatibilityScore(parseInt(savedScore));
    }
  }, []);

  const generateInviteLink = () => {
    const link = `https://meli.netlify.app/invite/${Math.random().toString(36).substr(2, 9)}`;
    navigator.clipboard.writeText(link);
    alert('Invite link copied to clipboard! Share it with friends to earn rewards!');
  };

  const handleQuizComplete = (answers: string[], score: number) => {
    setShowQuiz(false);
    setQuizCompleted(true);
    setCompatibilityScore(score);
    
    // Save to localStorage
    localStorage.setItem('meli-compatibility-score', score.toString());
    localStorage.setItem('meli-quiz-answers', JSON.stringify(answers));
    
    // Generate new matches based on score
    const newMatches: Match[] = [
      { id: 1, name: 'Maria', language: 'Spanish', compatibility: Math.min(95, score + 10) },
      { id: 2, name: 'Jean', language: 'French', compatibility: Math.min(92, score + 7) },
      { id: 3, name: 'Luca', language: 'Italian', compatibility: Math.min(88, score + 5) },
      { id: 4, name: 'Sofia', language: 'Portuguese', compatibility: Math.min(85, score + 3) }
    ];
    setMatches(newMatches);
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      alert('You matched! Start learning together and earn rewards!');
    }
    // In a real app, you would remove the current match and show the next one
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black dark:bg-white rounded-full"></div>
              <span className="text-xl sm:text-2xl font-bold dark:text-white">Mèli</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium text-sm sm:text-base">
                Dashboard
              </Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium text-sm sm:text-base">
                About
              </Link>
              <ThemeToggle />
              <Link 
                href="/login" 
                className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Log out
              </Link>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Link 
                href="/login" 
                className="bg-black dark:bg-white text-white dark:text-black px-3 py-2 rounded-xl font-medium text-sm"
              >
                Logout
              </Link>
            </div>
          </div>

          <div className="md:hidden flex justify-center space-x-4 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <Link href="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium text-sm">
              Dashboard
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium text-sm">
              About
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-20 sm:pb-32">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 tracking-tight dark:text-white">
            Your Language <span className="text-gray-700 dark:text-gray-300">Journey</span>
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
            Learn languages, connect with people, and <span className="text-green-500 font-semibold">earn money while learning!</span>
          </p>

          {/* Rewards Banner */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white max-w-2xl mx-auto mb-6 sm:mb-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold mb-1">🎉 Earn While You Learn!</h3>
                <p className="text-green-100 text-sm sm:text-base">
                  Get 10% cashback for active friends!
                </p>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-xl sm:text-2xl font-bold">$25.50</div>
                <div className="text-green-200 text-xs sm:text-sm">Earned so far</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Completion Banner */}
        {quizCompleted && (
          <div className="bg-blue-500 text-white rounded-xl sm:rounded-2xl p-4 mb-6 text-center max-w-2xl mx-auto">
            <p className="font-medium">
              �� Your compatibility score: <span className="font-bold">{compatibilityScore}%</span> - Great matches found!
            </p>
          </div>
        )}

        {/* Main Navigation Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-6 sm:mb-8 hide-scrollbar">
          <div className="flex space-x-2 sm:space-x-4 mx-auto min-w-max px-2">
            <button
              onClick={() => setActiveSection('friend-invite')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                activeSection === 'friend-invite' 
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg' 
                  : 'bg-white/80 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-gray-200 dark:border-gray-700'
              }`}
            >
              👥 Invite Friends
            </button>
            <button
              onClick={() => setActiveSection('learning-groups')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                activeSection === 'learning-groups' 
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg' 
                  : 'bg-white/80 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-gray-200 dark:border-gray-700'
              }`}
            >
              🎯 Learning Groups
            </button>
            <button
              onClick={() => setActiveSection('find-matches')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                activeSection === 'find-matches' 
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg' 
                  : 'bg-white/80 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-gray-200 dark:border-gray-700'
              }`}
            >
              💞 Find Matches
            </button>
          </div>
        </div>

        {/* Dynamic Content Sections */}
        <div className="max-w-4xl mx-auto">
          
          {/* Section 1: Friend Invite */}
          {activeSection === 'friend-invite' && (
            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-xl sm:shadow-2xl">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4 dark:text-white">�� Learn with Friends</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base px-2">
                  Invite friends for daily 10-question language games. Both of you earn rewards for consistent learning!
                </p>
                
                <button 
                  onClick={generateInviteLink}
                  className="bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-xl sm:shadow-2xl hover:shadow-2xl mb-6 w-full sm:w-auto"
                >
                  Generate Invite Link
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                  <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl sm:rounded-2xl">
                    <div className="text-xl sm:text-2xl mb-2">🎯</div>
                    <h3 className="font-bold dark:text-white mb-2 text-sm sm:text-base">Daily Games</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">10 questions per day with friends</p>
                  </div>
                  <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl sm:rounded-2xl">
                    <div className="text-xl sm:text-2xl mb-2">💰</div>
                    <h3 className="font-bold dark:text-white mb-2 text-sm sm:text-base">Earn Together</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Both get 10% cashback after 30 days</p>
                  </div>
                  <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl sm:rounded-2xl">
                    <div className="text-xl sm:text-2xl mb-2">📈</div>
                    <h3 className="font-bold dark:text-white mb-2 text-sm sm:text-base">Track Progress</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">See your learning journey together</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Learning Groups */}
          {activeSection === 'learning-groups' && (
            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-xl sm:shadow-2xl">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
                <h2 className="text-xl sm:text-3xl font-bold dark:text-white">🎯 Learning Groups</h2>
                <button className="bg-black dark:bg-white text-white dark:text-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
                  Create Group
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
                Join or create groups of 2-10 people learning the same language. Daily 10-question games and group chat included!
              </p>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {groups.map(group => (
                  <div key={group.id} className="bg-gray-50 dark:bg-gray-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-4 space-y-2 sm:space-y-0">
                      <div>
                        <h3 className="font-bold text-lg dark:text-white">{group.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{group.language} • {group.members} members</p>
                      </div>
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${group.dailyCompleted ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {group.dailyCompleted ? 'Completed' : 'Pending'}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mb-4">
                      <button className="flex-1 bg-black dark:bg-white text-white dark:text-black py-2 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base">
                        Today's Game
                      </button>
                      <button className="flex-1 border border-black dark:border-white text-black dark:text-white py-2 rounded-xl font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 text-sm sm:text-base">
                        Group Chat
                      </button>
                    </div>

                    <div className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      Complete daily games to earn group rewards!
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Find Matches */}
          {activeSection === 'find-matches' && (
            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-xl sm:shadow-2xl">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4 dark:text-white">💞 Find Your Language Match</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base px-2">
                  {quizCompleted 
                    ? 'Swipe right to match with compatible language partners!'
                    : 'Take our compatibility quiz to find your perfect language matches!'
                  }
                </p>

                {!quizCompleted ? (
                  <div className="space-y-6">
                    <button 
                      onClick={() => setShowQuiz(true)}
                      className="bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-xl sm:shadow-2xl hover:shadow-2xl w-full sm:w-auto"
                    >
                      Start Compatibility Quiz
                    </button>

                    {/* Mock Dating App Interface */}
                    <div className="max-w-sm mx-auto bg-gray-50 dark:bg-gray-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
                      <div className="w-16 h-16 sm:w-24 sm:h-24 bg-black dark:bg-white rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center text-white dark:text-black text-xl sm:text-2xl">
                        👤
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-center dark:text-white mb-2">Potential Match</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-center mb-4 text-sm sm:text-base">Complete the quiz to see your matches!</p>
                      
                      <div className="flex justify-center space-x-4 sm:space-x-6">
                        <button 
                          onClick={() => handleSwipe('left')}
                          className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl hover:bg-red-600 transition-colors"
                        >
                          ✕
                        </button>
                        <button 
                          onClick={() => handleSwipe('right')}
                          className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl hover:bg-green-600 transition-colors"
                        >
                          ♥
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-4 text-center">
                      <p className="text-green-800 dark:text-green-200 font-medium">
                        ✅ Quiz Completed! Your compatibility: <span className="font-bold">{compatibilityScore}%</span>
                      </p>
                    </div>

                    {/* Swiping Interface */}
                    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl sm:text-2xl">
                        👩‍💼
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-center dark:text-white mb-2">Maria</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-center mb-2">Spanish Speaker</p>
                      <p className="text-green-500 text-center font-medium mb-4">{compatibilityScore + 10}% Match</p>
                      
                      <div className="flex justify-center space-x-6 mb-4">
                        <button 
                          onClick={() => handleSwipe('left')}
                          className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl hover:bg-red-600 transition-colors shadow-lg"
                        >
                          ✕
                        </button>
                        <button 
                          onClick={() => handleSwipe('right')}
                          className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl hover:bg-green-600 transition-colors shadow-lg"
                        >
                          ♥
                        </button>
                      </div>
                      
                      <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                        Swipe right to match and start learning together!
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Existing Matches */}
              {quizCompleted && matches.length > 0 && (
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 dark:text-white">Your Matches</h3>
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {matches.map(match => (
                      <div key={match.id} className="bg-gray-50 dark:bg-gray-900/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black font-bold text-sm sm:text-base">
                            {match.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold dark:text-white text-sm sm:text-base">{match.name}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{match.language} Speaker</p>
                            <p className="text-green-500 text-xs sm:text-sm">{match.compatibility}% Match</p>
                          </div>
                          <button className="bg-black dark:bg-white text-white dark:text-black px-3 sm:px-4 py-1 sm:py-2 rounded-xl text-xs sm:text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                            Message
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Quiz Modal */}
      {showQuiz && (
        <CompatibilityQuiz 
          onComplete={handleQuizComplete}
          onClose={() => setShowQuiz(false)}
        />
      )}
    </div>
  );
}
