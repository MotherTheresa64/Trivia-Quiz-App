import React, { useEffect, useState } from 'react';

const decode = (str) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
};

const QuestionForm = ({ quizData, setQuestionData, setUserAnswer, setShowResults }) => {
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const url = `https://opentdb.com/api.php?amount=1&category=${quizData.category}&difficulty=${quizData.difficulty}&type=multiple`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.response_code === 1) {
          throw new Error('No questions found. Try different settings.');
        }

        const q = data.results[0];
        const answers = [...q.incorrect_answers];
        const rand = Math.floor(Math.random() * 4);
        answers.splice(rand, 0, q.correct_answer);

        setQuestion({ ...q, answers });
        setQuestionData({ ...q, answers });
      } catch (err) {
        setApiError(err.message);
      }
    };

    fetchQuestion();
  }, [quizData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selected) {
      setError('Please select an answer.');
      return;
    }

    setUserAnswer(selected);
    setShowResults(true);
  };

  if (apiError) {
    return (
      <div>
        <p className="error">Error: {apiError}</p>
        <button onClick={() => window.location.reload()}>Back to Start</button>
      </div>
    );
  }

  if (!question) return <p>Loading question...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>{decode(question.question)}</h2>
      {question.answers.map((ans, idx) => (
        <label key={idx}>
          <input
            type="radio"
            name="answer"
            value={ans}
            onChange={() => setSelected(ans)}
          />
          {decode(ans)}
        </label>
      ))}
      <br />
      <button type="submit">Submit Answer</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default QuestionForm;
