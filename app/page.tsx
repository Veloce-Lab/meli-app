import Link from 'next/link';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black dark:bg-white rounded-full"></div>
              <span className="text-xl sm:text-2xl font-bold dark:text-white">Mèli</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium text-sm sm:text-base">
                About
              </Link>
              <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium text-sm sm:text-base">
                Log in
              </Link>
              <ThemeToggle />
              <Link 
                href="/signup" 
                className="bg-black dark:bg-white text-white dark:text-black px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-20 sm:pb-32">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight dark:text-white">
            Where <span className="text-gray-700 dark:text-gray-300">languages</span> meet
            <br className="hidden sm:block" />
            and <span className="text-gray-700 dark:text-gray-300">cultures</span> connect
          </h1>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Build meaningful connections with language partners worldwide through our intelligent matching system. 
            Learn naturally, grow together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/signup" 
              className="bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-xl sm:shadow-2xl hover:shadow-2xl w-full sm:w-auto text-center"
            >
              Start Your Journey
            </Link>
            <Link 
              href="/login" 
              className="border-2 border-black dark:border-white text-black dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
            >
              I Have an Account
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-20 sm:mt-32 px-4 sm:px-0">
          <div className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black dark:bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl">🌍</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 dark:text-white">Global Community</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Connect with native speakers from around the world</p>
          </div>
          
          <div className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black dark:bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl">🎯</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 dark:text-white">Smart Matching</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Find partners who share your interests and goals</p>
          </div>
          
          <div className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black dark:bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl">🚀</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 dark:text-white">Rapid Progress</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Learn faster through real conversations and cultural exchange</p>
          </div>
        </div>
      </main>
    </div>
  );
}
