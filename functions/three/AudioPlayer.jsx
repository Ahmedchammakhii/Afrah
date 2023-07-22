// components/AudioPlayer.js
import React, { useEffect, useState } from 'react';

const AudioPlayer = ({ src }) => {
  const [audioStarted, setAudioStarted] = useState(false);

  useEffect(() => {
    const audioElement = new Audio(src);

    const handleStartAudio = () => {
      setAudioStarted(true);
      audioElement.play();
    };

    // Check if the user has already interacted with the page
    const hasUserInteracted = () => {
      return (
        'ontouchstart' in window ||
        (window.PointerEvent && 'maxTouchPoints' in navigator) ||
        (window.DocumentTouch && document instanceof DocumentTouch)
      );
    };

    // Start audio only if the user has interacted with the page
    if (hasUserInteracted()) {
      handleStartAudio();
    } else {
      document.addEventListener('click', handleStartAudioOnce);
    }

    return () => {
      audioElement.pause();
      document.removeEventListener('click', handleStartAudioOnce);
    };
  }, [src]);

  return null;
};

export default AudioPlayer;
