import React, { useState, useEffect } from 'react';
import { init } from 'tra-key';
import logMouseCoordinates from 't-mouse';

function MouseKey() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const mouseCoordinates = logMouseCoordinates();
    const keyData = init();

    setData(prevData => [...prevData, { mouseCoordinates, keyData }]);
  }, []);

  const handleSaveData = async () => {
    try {
      const formattedData = data.map(({ mouseCoordinates, keyData }) => ({ mouseCoordinates, keyData }));
      const response = await fetch('http://localhost:3000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });
      const responseData = await response.json();
      console.log('Saved data:', responseData);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="mouse-keyboard-logger">
      <button onClick={handleSaveData}>Collecter les données</button>
    </div>
  );
}

export default MouseKey;