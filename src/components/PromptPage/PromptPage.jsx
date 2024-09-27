// src/components/PromptPage/PromptPage.jsx
import React, { useState } from 'react';
import './PromptPage.css';

const PromptPage = () => {
  const [projectTopic, setProjectTopic] = useState('');
  const [solution, setSolution] = useState('');

  // Function to handle API call (mock implementation here)
  const handleGenerateSolution = async () => {
    // Here you would make the actual API call to Google Gemini
    // For now, we're just simulating the response
    try {
      // Simulating API call with a delay
      const response = await fetch('https://api.gemini.com/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic: projectTopic }),
      });

      const data = await response.json();
      setSolution(data.solution || 'Here is a generated solution for your project.');
    } catch (error) {
      setSolution('Error generating solution. Please try again later.');
    }
  };

  return (
    <div className="prompt-page">
      <h2>Generate Project Solutions</h2>
      <div className="prompt-form">
        <label htmlFor="projectTopic">Enter Your Project Topic:</label>
        <input
          type="text"
          id="projectTopic"
          value={projectTopic}
          onChange={(e) => setProjectTopic(e.target.value)}
          placeholder="Enter project topic"
        />
        <button onClick={handleGenerateSolution}>Generate Solution</button>
      </div>
      {solution && (
        <div className="solution-result">
          <h3>Generated Solution:</h3>
          <p>{solution}</p>
        </div>
      )}
    </div>
  );
};

export default PromptPage;
