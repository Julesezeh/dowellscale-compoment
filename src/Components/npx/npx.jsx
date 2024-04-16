import React, { useState } from 'react';
import axios from 'axios';

const npxScale = () => {
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [responseReceived, setResponseReceived] = useState(false);

  const buttonLinks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleButtonClick = async (index) => {
    setLoadingIndex(index);
    try {
      const response = await axios.get(
        `https://100035.pythonanywhere.com/addons/create-response/?workspace_id=${workspace_id}&username=${username}&scale_id=${scale_id}&item=${index}`
      );
      console.log(response);
      setResponseReceived(true);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoadingIndex(null);
    }
  };

  return (
    <div>
      <h2 className="heading">
        On a scale of 0-10, how likely are you to recommend the product to a
        friend or a colleague?
      </h2>
      {responseReceived ? (
        <div className="response-message">Thanks for your response!</div>
      ) : (
        <div className="button-container">
          {buttonLinks.map((index) => (
            <button
              key={index}
              className="button"
              style={{ backgroundColor: buttonColor }}
              onClick={() => handleButtonClick(index)}
              disabled={loadingIndex === index}
            >
              {loadingIndex === index ? <div className="spinner"></div> : index}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default npxScale;
