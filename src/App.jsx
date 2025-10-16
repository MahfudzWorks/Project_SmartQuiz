import { useState } from "react";
import { questions } from "./data/question";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const shuffleQuestions = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  const handleStart = () => {
    const randomized = shuffleQuestions(questions);
    setShuffledQuestions(randomized);
    setStartQuiz(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const handleAnswer = (selectedOption) => {
    const correct = shuffledQuestions[currentQuestion].answer;
    if (selectedOption === correct) setScore(score + 1);

    const next = currentQuestion + 1;
    if (next < shuffledQuestions.length) setCurrentQuestion(next);
    else setShowResult(true);
  };

  const handleRestart = () => {
    setStartQuiz(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 p-4 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white"
          : "bg-gradient-to-br from-indigo-200 via-purple-200 to-blue-200 text-gray-900"
      }`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 px-4 py-2 text-sm rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md transition"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {!startQuiz ? (
        <div className="text-center space-y-6 p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold">🎯 SmartQuiz</h1>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Uji pengetahuanmu dengan menjawab pertanyaan pilihan ganda!
          </p>
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow-lg hover:bg-indigo-100 transition-all"
          >
            Mulai Kuis
          </button>
        </div>
      ) : showResult ? (
        <div className="text-center space-y-4 p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold">🎉 Kuis Selesai!</h2>
          <p className="text-lg">
            Skor kamu:{" "}
            <span className="font-bold text-yellow-300">{score}</span> dari{" "}
            {shuffledQuestions.length}
          </p>
          <button
            onClick={handleRestart}
            className="mt-4 px-5 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-all"
          >
            Ulangi Kuis
          </button>
        </div>
      ) : (
        <div className="max-w-md w-full bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center space-y-5">
          <h2 className="text-2xl font-semibold mb-4">
            {shuffledQuestions[currentQuestion].question}
          </h2>
          <div className="flex flex-col space-y-3">
            {shuffledQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  darkMode
                    ? "bg-white/20 text-white hover:bg-indigo-500"
                    : "bg-white text-indigo-700 hover:bg-indigo-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <p
            className={`mt-6 text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Pertanyaan {currentQuestion + 1} dari {shuffledQuestions.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
