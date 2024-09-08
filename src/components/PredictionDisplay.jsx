import React from 'react';

const PredictionDisplay = ({ predictions }) => {
  return (
    <div className="prediction-display">
      {predictions && predictions.length > 0 && (
        <ul>
          {predictions.map((prediction, index) => (
            <li key={index}>{prediction}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PredictionDisplay;
