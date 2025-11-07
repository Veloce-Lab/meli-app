"use client";

import { useState, useEffect } from 'react';

interface CompatibilityQuizProps {
  onComplete: (answers: string[], score: number) => void;
  onClose: () => void;
}

const questions = [
  {
    id: 1,
    text: "What's your primary goal for language learning?",
    options: ["Travel", "Career", "Friendship", "Cultural interest"],
    weights: [1, 2, 3, 2]
  },
  {
    id: 2,
    text: "How do you prefer to practice?",
    options: ["One-on-one", "Group settings", "Written practice", "Mixed"],
    weights: [3, 2, 1, 2]
  },
  {
    id: 3, 
    text: "What's your ideal learning pace?",
    options: ["Slow and steady", "Moderate", "Fast-paced", "Intensive"],
    weights: [1, 2, 3, 3]
  },
  {
    id: 4,
    text: "Do you prefer structured or casual conversations?",
    options: ["Structured with goals", "Casual and free-flowing", "A mix of both"],
    weights: [2, 1, 3]
  },
  {
    id: 5,
    text: "What motivates you most in language learning?",
    options: ["Making friends", "Professional growth", "Cultural understanding", "Personal achievement"],
    weights: [3, 2, 2, 1]
  }
];

export default function CompatibilityQuiz({ onComplete, onClose }: CompatibilityQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [compatibilityScore, setCompatibilityScore] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const calculateScore = (userAnswers: string[]) => {
    let totalScore = 0;
    let maxPossibleScore = 0;

    userAnswers.forEach((answer, index) => {
      const question = questions[index];
      const answerIndex = question.options.indexOf(answer);
      if (answerIndex !== -1) {
        totalScore += question.weights[answerIndex];
        maxPossibleScore += Math.max(...question.weights);
      }
    });

    // Convert to percentage
    return Math.round((totalScore / maxPossibleScore) * 100);
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed - calculate score and show results
      const score = calculateScore(newAnswers);
      setCompatibilityScore(score);
      setShowResults(true);
      
      // Call onComplete after a brief delay to show results
      setTimeout(() => {
        onComplete(newAnswers, score);
      }, 3000);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
    }
  };

  const getScoreMessage = (score: number) => {
    if (score >= 90) return "Excellent match! You'll find amazing language partners!";
    if (score >= 75) return "Great compatibility! You're ready to connect!";
    if (score >= 60) return "Good match potential! Let's find your partners!";
    return "Let's find some compatible matches for you!";
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 75) return "text-blue-500";
    if (score >= 60) return "text-yellow-500";
    return "text-orange-500";
  };

  if (showResults) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm">
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl max-w-full sm:max-w-md w-full p-6 sm:p-8 relative border border-gray-200 dark:border-gray-700 shadow-2xl text-center">
          <div className="mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl sm:text-3xl">🎉</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Quiz Complete!
            </h2>
            <div className={`text-3xl sm:text-4xl font-bold ${getScoreColor(compatibilityScore)} mb-2`}>
              {compatibilityScore}%
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              {getScoreMessage(compatibilityScore)}
            </p>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-6">
            <div 
              className="bg-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${compatibilityScore}%` }}
            ></div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <span>Finding your matches...</span>
              <span>{compatibilityScore}% compatible</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl max-w-full sm:max-w-md w-full p-4 sm:p-6 relative border border-gray-200 dark:border-gray-700 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 z-10"
        >
          <span className="text-2xl">×</span>
        </button>

        <div className="mb-4 sm:mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Compatibility Quiz
            </h2>
            <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              {currentQuestion + 1}/{questions.length}
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-black dark:bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
            {currentQ.text}
          </h3>
          
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`w-full text-left p-4 border rounded-xl transition-all duration-200 text-sm sm:text-base ${
                  selectedAnswer === option
                    ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black shadow-lg'
                    : 'border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors ${
              currentQuestion === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
            }`}
          >
            <span>←</span>
            <span className="hidden sm:inline">Previous</span>
          </button>

          <div className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex-1 mx-4">
            {currentQuestion + 1} of {questions.length}
          </div>

          <button
            onClick={handleNext}
            disabled={!selectedAnswer}
            className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all ${
              selectedAnswer
                ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg hover:shadow-xl'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span>{currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
