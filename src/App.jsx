import React, { useState } from 'react';
import QuizStart from './components/QuizStart';
import QuestionForm from './components/QuestionForm';
import Results from './components/Results';

function App() {
  const [quizData, setQuizData] = useState(null);
  const [questionData, setQuestionData] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const resetQuiz = () => {
    setQuizData(null);
    setQuestionData(null);
    setUserAnswer(null);
    setShowResults(false);
  };

  return (
    <div className="App">
      {!quizData && <QuizStart setQuizData={setQuizData} />}
      {quizData && !showResults && (
        <QuestionForm
          quizData={quizData}
          setQuestionData={setQuestionData}
          setUserAnswer={setUserAnswer}
          setShowResults={setShowResults}
        />
      )}
      {showResults && (
        <Results
          quizData={quizData}
          questionData={questionData}
          userAnswer={userAnswer}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
