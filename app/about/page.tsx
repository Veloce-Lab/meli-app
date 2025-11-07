import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

export default function About() {
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
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium">
                Home
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
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            About Mèli
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building bridges between cultures through meaningful conversations and shared learning experiences.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-2 gap-12 mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl text-white dark:text-black">🌉</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Mèli is a platform that connects language learners from around the world. We believe that 
              language learning should be about more than just vocabulary—it's about building genuine 
              connections and understanding different cultures from the inside out.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl text-white dark:text-black">🎯</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Our Vision</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We envision a world where language barriers don't limit human connection. Where anyone, 
              anywhere can share their stories, learn from others, and build friendships that transcend 
              borders and cultural differences.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 rounded-2xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl transition-all duration-300 group">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-black dark:from-gray-700 dark:to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🌍</span>
            </div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Global Community</h3>
            <p className="text-gray-600 dark:text-gray-400">Connect with native speakers from every corner of the world</p>
          </div>
          
          <div className="text-center p-8 rounded-2xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl transition-all duration-300 group">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-black dark:from-gray-700 dark:to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">💫</span>
            </div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Smart Matching</h3>
            <p className="text-gray-600 dark:text-gray-400">AI-powered matching based on interests, goals, and learning styles</p>
          </div>
          
          <div className="text-center p-8 rounded-2xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl transition-all duration-300 group">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-black dark:from-gray-700 dark:to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Rapid Progress</h3>
            <p className="text-gray-600 dark:text-gray-400">Learn 3x faster through real conversations and cultural immersion</p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-br from-black to-gray-900 dark:from-gray-800 dark:to-black rounded-3xl p-12 text-white mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-6">Why Mèli Exists</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Traditional language learning often feels isolated and artificial. We created Mèli to bring 
              the human element back into language acquisition—because the best way to learn a language 
              is by using it to build real relationships.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you're preparing for travel, advancing your career, or simply exploring new cultures, 
              Mèli provides the tools and community to make your language journey meaningful and effective.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">50K+</div>
            <div className="text-gray-600 dark:text-gray-400">Active Learners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">120+</div>
            <div className="text-gray-600 dark:text-gray-400">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">1M+</div>
            <div className="text-gray-600 dark:text-gray-400">Conversations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">95%</div>
            <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 dark:text-white">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of language learners who are already building bridges between cultures.
          </p>
          <div className="flex items-center justify-center space-x-6">
            <Link 
              href="/signup" 
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-2xl"
            >
              Get Started Free
            </Link>
            <Link 
              href="/login" 
              className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              I Have an Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
