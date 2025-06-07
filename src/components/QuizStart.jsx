import React, { useState } from 'react';

const QuizStart = ({ setQuizData }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    difficulty: '',
  });
  const [error, setError] = useState('');

  const categories = [
    { id: 23, name: 'History' },
    { id: 17, name: 'Science & Nature' },
    { id: 11, name: 'Film' },
    { id: 21, name: 'Sports' }
  ];

  const difficulties = ['easy', 'medium', 'hard'];

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, category, difficulty } = formData;
    if (!name || !category || !difficulty) {
      setError('All fields are required.');
      return;
    }
    setQuizData(formData);
  };

  return (
    <div>
      <h1>Welcome to the Trivia Quiz!</h1>
      <p>Please enter your name and choose a category and difficulty to begin.</p>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} />

        <label>Category:</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="">-- Select Category --</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>

        <label>Difficulty:</label>
        <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
          <option value="">-- Select Difficulty --</option>
          {difficulties.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <button type="submit">Start Quiz</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default QuizStart;
