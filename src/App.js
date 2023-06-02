import React, { useState } from 'react';
import './style.css';

// Define the emojis and their corresponding keywords
const emojis = {
  '😀': 'smile',
  '😂': 'laugh',
  '😊': 'blush',
  '😍': 'heart eyes',
  '🤔': 'thinking',
  '👍': 'thumbs up',
  '👎': 'thumbs down',
  '🔥': 'fire',
  '🌟': 'star',
  '💡': 'light bulb',
  '📷': 'camera',
  '🎉': 'party',
  '❤️': 'heart',
};

export default function App() {
  // State to store the input keyword and matching emojis
  const [keyword, setKeyword] = useState('');
  const [matchingEmojis, setMatchingEmojis] = useState([]);

  // Function to search for emojis based on the keyword
  const searchEmoji = (keyword) => {
    // Filter the emojis based on the keyword
    const matchingEmojis = Object.keys(emojis).filter((emoji) =>
      emojis[emoji].toLowerCase().includes(keyword.toLowerCase())
    );
    // Update the state with the matching emojis
    setMatchingEmojis(matchingEmojis);
  };

  // Event handler for input change
  const handleInputChange = (e) => {
    // Get the input value
    const value = e.target.value;
    // Update the keyword state
    setKeyword(value);
    // Search for matching emojis
    searchEmoji(value);
  };

  // Render the component
  return (
    <div className="app-container">
      <h2>Emoji Search!</h2>
      <input
        value={keyword}
        onChange={handleInputChange}
        placeholder="Search for an emoji..."
      />

      {matchingEmojis.length > 0 ? (
        // If matching emojis found, render them
        <div className="emojis">
          {matchingEmojis.map((emoji) => (
            <span key={emoji}>{emoji}</span>
          ))}
        </div>
      ) : (
        // If no matching emojis found, display a message
        <p>No matching emojis found.</p>
      )}
    </div>
  );
}
