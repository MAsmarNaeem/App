import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WordOfTheDay from './WordofTheDay';
import SentenceExamples from './sentenseExamples';

// Import other components as needed

const App = () => {
  return (
    <Router>
      <div>
        <h1>One Word a Day</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Word of the Day</Link>
            </li>
            <li>
              <Link to="/sentence-examples">Sentence Examples</Link>
            </li>
            {/* Add other navigation links here */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<WordOfTheDay />} />
          <Route path="/sentence-examples" element={<SentenceExamples />} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;

