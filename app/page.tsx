import Link from 'next/link';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-full"></div>
              <span className="text-2xl font-bold dark:text-white">Mèli</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium">
                About
              </Link>
              <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium">
                Log in
              </Link>
              <ThemeToggle />
              <Link 
                href="/signup" 
                className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 pt-20 pb-32">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 tracking-tight dark:text-white">
            Where <span className="text-gray-700 dark:text-gray-300">languages</span> meet
            <br />
            and <span className="text-gray-700 dark:text-gray-300">cultures</span> connect
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Build meaningful connections with language partners worldwide through our intelligent matching system. 
            Learn naturally, grow together.
          </p>
          
          <div className="flex items-center justify-center space-x-6">
            <Link 
              href="/signup" 
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-2xl"
            >
              Start Your Journey
            </Link>
            <Link 
              href="/login" 
              className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              I Have an Account
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-8 mt-32">
          <div className="text-center p-8 rounded-2xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">��</span>
            </div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Global Community</h3>
            <p className="text-gray-600 dark:text-gray-400">Connect with native speakers from around the world</p>
          </div>
          
          <div className="text-center p-8 rounded-2xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Smart Matching</h3>
            <p className="text-gray-600 dark:text-gray-400">Find partners who share your interests and goals</p>
          </div>
          
          <div className="text-center p-8 rounded-2xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Rapid Progress</h3>
            <p className="text-gray-600 dark:text-gray-400">Learn faster through real conversations and cultural exchange</p>
          </div>
        </div>
      </main>
    </div>
  );
}
