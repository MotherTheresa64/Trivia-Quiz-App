import React from 'react';

const decode = (str) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
};

const Results = ({ quizData, questionData, userAnswer, resetQuiz }) => {
  const correct = userAnswer === questionData.correct_answer;

  return (
    <div>
      <h2>{correct ? `Nice job, ${quizData.name}!` : `Oops, ${quizData.name}...`}</h2>
      <p>
        {correct
          ? 'You answered correctly!'
          : `The correct answer was: ${decode(questionData.correct_answer)}`}
      </p>
      <button onClick={resetQuiz}>Try Another</button>
    </div>
  );
};

export default Results;
