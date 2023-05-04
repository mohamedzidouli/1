import React, { useState, useEffect, useCallback } from 'react';

import { logMouseCoordinates, logKeyboardEvents, logClickCount } from "t-mouse";

function MouseKey() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pressedKey, setPressedKey] = useState("");
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    logMouseCoordinates();
  }, []);

  useEffect(() => {
    logKeyboardEvents();
  }, []);

  useEffect(() => {
    logClickCount();
  }, []);

  const handleMouseMove = useCallback((event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  const handleKeyDown = useCallback((event) => {
    setPressedKey(event.key);
  }, []);

  const handleButtonClick = useCallback((event) => {
    setClickCount(event.detail);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("keydown", handleKeyDown);
    const button = document.querySelector("button");
    button.addEventListener("click", handleButtonClick);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("keydown", handleKeyDown);
      button.removeEventListener("click", handleButtonClick);
    };
  }, [handleMouseMove, handleKeyDown, handleButtonClick]);

  return (
    <div className="mouse-keyboard-logger">
      <p>Mouse position: {mousePosition.x}, {mousePosition.y}</p>
      <p>Pressed key: {pressedKey}</p>
      <p>Click count: {clickCount}</p>
      <button>Click me</button>
    </div>
  );
}

export default MouseKey;
