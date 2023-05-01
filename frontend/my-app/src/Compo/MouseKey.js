import React, { useState, useEffect, useCallback } from 'react';

import { logMouseCoordinates, logKeyboardEvents } from "t-mouse";



function MouseKey() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [pressedKey, setPressedKey] = useState("");
  
    useEffect(() => {
      logMouseCoordinates();
    }, []);
  
    useEffect(() => {
      logKeyboardEvents();
    }, []);
  
    const handleMouseMove = useCallback((event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }, []);
  
    const handleKeyDown = useCallback((event) => {
      setPressedKey(event.key);
    }, []);
  
    useEffect(() => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [handleMouseMove, handleKeyDown]);
  
    return (
      <div className="mouse-keyboard-logger">
        <p>Mouse position: {mousePosition.x}, {mousePosition.y}</p>
        <p>Pressed key: {pressedKey}</p>
      </div>
    );
  }


  export default MouseKey;