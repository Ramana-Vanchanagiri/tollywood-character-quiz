import { useState } from 'react';
import { Star } from 'lucide-react';
import { questions, heroes } from './QuizData';

const TollywoodHeroQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (allAnswers) => {
    const heroScores = {};
    
    allAnswers.forEach(answer => {
      heroScores[answer.hero] = (heroScores[answer.hero] || 0) + 1;
    });

    const resultHero = Object.keys(heroScores).reduce((a, b) => 
      heroScores[a] > heroScores[b] ? a : b
    );

    setShowResult(resultHero);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setQuizStarted(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const shareOnTwitter = (hero) => {
    const tweetText = `I got ${hero.name} - ${hero.title} in the Tollywood Hero Quiz! 🎬✨ Which Tollywood star are you?`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, '_blank');
  };

 const shareGeneral = (hero) => {
    if (navigator.share) {
      navigator.share({
        title: 'Tollywood Hero Quiz Result',
        text: `I got ${hero.name} - ${hero.title} in the Tollywood Hero Quiz!`,
        url: 'https://tollywood-quiz.netlify.app/',
      });
    } else {
      // fallback if navigator.share is not supported
      alert(`Share this link: https://tollywood-quiz.netlify.app/`);
    }
  };

  // Start Screen
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          <div className="glass rounded-3xl p-8 shadow-2xl animate-fadeIn">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Tollywood Hero
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Personality Quiz
              </h2>
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full">
                  <Star className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Discover which Tollywood superstar matches your personality! 
              Answer 6 fun questions and find out if you're more like Mahesh Babu, 
              Prabhas, Allu Arjun, or another Telugu cinema icon.
            </p>
            <button
              onClick={startQuiz}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Quiz ✨
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  if (showResult) {
    const hero = heroes[showResult];
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="glass rounded-3xl p-8 shadow-2xl text-center animate-fadeIn">
            <div className="mb-6">
              <div className={`bg-gradient-to-r ${hero.color} p-4 rounded-full inline-block mb-4`}>
                {hero.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                You are...
              </h2>
              <h1 className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${hero.color} bg-clip-text text-transparent`}>
                {hero.name}
              </h1>
              <p className="text-xl text-yellow-400 font-semibold mb-6">
                {hero.title}
              </p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6 mb-6">
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                {hero.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {hero.traits.map((trait, index) => (
                  <div key={index} className={`bg-gradient-to-r ${hero.color} bg-opacity-20 rounded-full py-2 px-4`}>
                    <span className="text-white font-medium">{trait}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Take Quiz Again
              </button>
              <button
                onClick={() => shareOnTwitter(hero)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Share on Twitter
              </button>
              <button
                onClick={() => shareGeneral(hero)}
                className={`bg-gradient-to-r ${hero.color} hover:opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105`}
              >
                Share Result
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Screen
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="glass rounded-3xl p-8 shadow-2xl animate-fadeIn">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-medium">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-yellow-400 font-medium">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center leading-relaxed">
              {questions[currentQuestion].question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-2xl p-6 text-left transition-all duration-300 transform hover:scale-102 hover:shadow-lg group"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-white text-lg font-medium group-hover:text-yellow-400 transition-colors">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TollywoodHeroQuiz;