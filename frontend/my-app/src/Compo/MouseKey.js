import React, { useState, useEffect } from 'react';
import { logKeyboardEvents, logMouseCoordinates, removeEventListeners} from 't-mouse';
import { handleSaveData } from 'postmk';

function MouseKey() {
  const [data, setData] = useState([]);
  const [isRecording, setIsRecording] = useState(true);


  
  useEffect(() => {
    if (isRecording) {
      const mouseCoordinates = logMouseCoordinates();
      const keyboardCoordinates = logKeyboardEvents();

      setData(prevData => [...prevData, { mouseCoordinates, keyboardCoordinates }]);
    }
  }, [isRecording]);


  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsRecording(false);
      removeEventListeners();
      handleSaveData(data);
    }, 10000);

    return () => {
      clearTimeout(timerId);
    };
    
  }, [data]);





  return (
    <div className="mouse-keyboard-logger">
      <p>10 sec</p>
    </div>
  );
}

export default MouseKey;
