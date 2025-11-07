'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface CompatibilityQuizProps {
  onComplete: (answers: string[]) => void;
  onClose: () => void;
}

const questions = [
  "What's your primary goal for language learning?",
  "How do you prefer to practice?",
  "What's your ideal learning pace?",
  "Do you prefer structured or casual conversations?",
  "What motivates you most in language learning?"
];

const options = [
  ["Travel", "Career", "Friendship", "Cultural interest"],
  ["One-on-one", "Group settings", "Written practice", "Mixed"],
  ["Slow and steady", "Moderate", "Fast-paced", "Intensive"],
  ["Structured with goals", "Casual and free-flowing", "A mix of both"],
  ["Making friends", "Professional growth", "Cultural understanding", "Personal achievement"]
];

export default function CompatibilityQuiz({ onComplete, onClose }: CompatibilityQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswers(newAnswers);
    } else {
      onComplete([...newAnswers, answer]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#0E0E0E] mb-2">
            Compatibility Quiz
          </h2>
          <p className="text-[#C08457]">
            Question {currentQuestion + 1} of {questions.length}
          </p>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-[#E3B04B] h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#0E0E0E] mb-4">
            {questions[currentQuestion]}
          </h3>
          
          <div className="space-y-3">
            {options[currentQuestion].map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-4 border border-[#E3B04B]/30 rounded-xl hover:bg-[#F6E9D7] hover:border-[#E3B04B] transition-colors text-[#0E0E0E]"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          This helps us match you with compatible language partners
        </div>
      </div>
    </div>
  );
}
