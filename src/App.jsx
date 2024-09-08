import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import VideoPlayer from './components/VideoPlayer';
import PredictionDisplay from './components/PredictionDisplay';
import './App.css';

const App = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const handleUpload = (url) => {
    setVideoUrl(url);

    // For demonstration purposes, assuming predictions are available.
    // Fetch predictions from backend if needed.
    fetch('/predictions') // Endpoint for getting predictions
      .then(response => response.json())
      .then(data => setPredictions(data.predictions || []))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="app">
      <h1>Video Processor</h1>
      <FileUpload onUpload={handleUpload} />
      <VideoPlayer src={videoUrl} />
      <PredictionDisplay predictions={predictions} />
    </div>
  );
};

export default App;
