import React, { useState } from 'react';
import './WordofTheDay.css';

const WordOfTheDay = () => {
  const [word, setWord] = useState('');
  const [pastTense, setPastTense] = useState('');
  const [presentTense, setPresentTense] = useState('');
  const [futureTense, setFutureTense] = useState('');
  const [description, setDescription] = useState('');
  const [synonyms, setSynonyms] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [translations, setTranslations] = useState([]);

  const words = [
    {
      word: "Example",
      pastTense: "Exampled",
      presentTense: "Examples",
      futureTense: "Will example",
      description: "A thing characteristic of its kind or illustrating a general rule",
      synonyms: ["Illustration", "Instance", "Sample"],
      translations: {
        spanish: "Ejemplo",
        french: "Exemple",
        german: "Beispiel"
      }
    },
    // Add more word objects here as needed
  ];

  const handleWordOfDay = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const wordObj = words[randomIndex];

    setWord(wordObj.word);
    setPastTense(wordObj.pastTense);
    setPresentTense(wordObj.presentTense);
    setFutureTense(wordObj.futureTense);
    setDescription(wordObj.description);
    setSynonyms(wordObj.synonyms);
    setTranslations(Object.keys(wordObj.translations));
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleTranslation = () => {
    if (selectedLanguage) {
      alert(`Translation in ${selectedLanguage}: ${words[0].translations[selectedLanguage]}`);
    }
  };

  return (
    <div className="word-container">
      <h2 className="word-title">Word of the Day: {word}</h2>
      <div className="tenses">
        <h3>Past Tense: {pastTense}</h3>
        <h3>Present Tense: {presentTense}</h3>
        <h3>Future Tense: {futureTense}</h3>
      </div>
      <p className="description">Description: {description}</p>
      <p className="synonyms">Synonyms: {synonyms.join(", ")}</p>
      <p className="translation">
        Translate to:
        <select className="language-select" value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="">Select Language</option>
          {translations.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
        <button className="translate-button" onClick={handleTranslation}>Translate</button>
      </p>
      <button className="next-button" onClick={handleWordOfDay}>Next Word</button>
    </div>
  );
};

export default WordOfTheDay;
