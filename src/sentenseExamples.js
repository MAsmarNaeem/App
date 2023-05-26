import React, { useState } from 'react';
import './sentenseExamples.css';

const SentenceExamples = () => {
  const [word, setWord] = useState('');
  const [exampleSentences, setExampleSentences] = useState([]);

  const handleWordSubmit = (event) => {
    event.preventDefault();
    // You can replace the comment with your actual code to fetch example sentences for the entered word
    // Example API call: fetchExampleSentences(word).then((sentences) => setExampleSentences(sentences));

    // For now, let's use a sample list of example sentences
    const sampleSentences = [
      'This is an example sentence.',
      'Here is another example for the entered word.',
      'You can customize this code to fetch real example sentences.',
    ];

    setExampleSentences(sampleSentences);
  };

  return (
    <div className="sentence-examples">
      <h2>Sentence Examples</h2>
      <form onSubmit={handleWordSubmit}>
        <input type="text" value={word} onChange={(event) => setWord(event.target.value)} placeholder="Enter a word" />
        <button type="submit">Get Examples</button>
      </form>
      <ul>
        {exampleSentences.map((sentence, index) => (
          <li key={index}>{sentence}</li>
        ))}
      </ul>
    </div>
  );
};

export default SentenceExamples;
