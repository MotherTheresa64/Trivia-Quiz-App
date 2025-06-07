# 🎓 Open Trivia Quiz App

This is a mini React quiz application built using the [Open Trivia Database API](https://opentdb.com/). It was created as part of the Coding Temple Software Engineering program to demonstrate component architecture, form handling, conditional rendering, and API interaction in React.

---

## 📚 Features

- ✅ Dynamic question fetching using Open Trivia API
- ✅ Clean 3-page component flow: Home → Question → Result
- ✅ State and props management with `useState` and `useEffect`
- ✅ Form validation for user input and answer selection
- ✅ Conditional error rendering for fetch or input issues
- ✅ Reset functionality to replay the quiz

---

## 🏗️ Component Structure

src/
│
├── components/
│ ├── HomeForm.jsx # Initial form with name, category, and difficulty
│ ├── QuestionForm.jsx # Multiple choice quiz with randomized answers
│ └── Result.jsx # Shows final result and correct answer
│
├── App.jsx # Central routing and state controller
├── App.css # Basic styling (dark mode)
└── index.jsx # Entry point


---

## 🧠 How It Works

1. **Home Page**  
   - User enters their name, selects a category & difficulty.
   - All inputs are validated (must be filled in).
   - On submit, the app fetches one multiple-choice question from the API.

2. **Question Page**  
   - The question and randomized answers are shown via radio buttons.
   - Submitting without selecting an answer displays an error.
   - Based on the answer, a result is generated.

3. **Result Page**  
   - User sees if they got it right or wrong, including the correct answer.
   - A “Back to Start” button lets them try again with new settings.

---

## 🛠️ Technologies Used

- **React 18** (with Vite)
- **JavaScript (ES6+)**
- **Open Trivia DB API**
- **HTML5 + CSS3**

---

## 🧪 API Usage

API Endpoint Example:
https://opentdb.com/api.php?amount=1&category=23&difficulty=easy&type=multiple


Parameters passed:
- `amount=1`: One question per quiz
- `category`: Set by user input (e.g., 23 for History)
- `difficulty`: `easy`, `medium`, or `hard`
- `type=multiple`: Always multiple choice

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/trivia-quiz-app.git

# Navigate to the project
cd trivia-quiz-app

# Install dependencies
npm install

# Start the development server
npm run dev

📄 License
This project is for educational purposes only and follows the Open Trivia Database's Creative Commons licensing.

✍️ Author
Noah Ragan – Coding Temple | January 2025 Cohort
MotherTheresa646