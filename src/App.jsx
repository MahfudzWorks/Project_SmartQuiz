import { useState } from "react";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      {!startQuiz ? (
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">🎯 SmartQuiz</h1>
          <p className="text-lg text-gray-200">
            Uji pengetahuanmu dengan menjawab pertanyaan pilihan ganda!
          </p>
          <button
            onClick={() => setStartQuiz(true)}
            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow-lg hover:bg-indigo-100 transition-all"
          >
            Mulai Kuis
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Pertanyaan akan tampil di sini
          </h2>
          <button
            onClick={() => setStartQuiz(false)}
            className="mt-4 px-4 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-all"
          >
            Kembali
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
