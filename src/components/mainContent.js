import React, { useState, useEffect } from 'react';
import StartProgressbar from './StartProgressbar';
import FarmingProgressbar from './FarmingProgressbar';
import ClaimProgress from './ClaimProgress';

/**
 * MainContent component that manages the farming process and displays progress.
 */
function MainContent(points) {
  // config const
  const farmingTime = 6*1; //in seconds
  
  // State variables
  const [isFarmingActive, setIsFarmingActive] = useState(false); // Tracks if farming is active
  const [count, setCount] = useState(0); // Counts the farming progress
  const [score, setScore] = useState(points.points); // Tracks the user's score
  const [showStartProgressbar, setShowStartProgressbar] = useState(false); // Toggles the StartProgressbar visibility
  const [remainingTime, setRemainingTime] = useState(farmingTime); // Tracks the remaining time for farming

  // Handles the start button click
  
  
  const handleStartClick = () => {
    setIsFarmingActive(true);
    setRemainingTime(farmingTime); // Reset remaining time when farming starts
  };

  // Increments the count
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const updateScoreRequest = async (newScore) => {
    try {
      const response = await fetch("http://127.0.0.1:5000//updatepoints/tr2xRPF58hrkqL04mVrb", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "points": newScore }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  };
 

  // Handles the claim button click
  const handleClaimClick = () => {
    setShowStartProgressbar(true);
    setIsFarmingActive(false);
    setCount(0); // Reset count when claiming
    setScore(prevScore => prevScore + count); // Update score with the current count
    updateScoreRequest(score + count)
  };

  // Effect to manage the farming interval and remaining time
  useEffect(() => {
    let interval;
    if (isFarmingActive) {
      interval = setInterval(() => {
        if (count < farmingTime) {
          incrementCount(); // Increment count every second until it reaches 20
          setRemainingTime(prevTime => prevTime - 1); // Decrease remaining time
        } else {
          clearInterval(interval); // Stop the interval when count reaches 20
        }
      }, 1000);
    }
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [isFarmingActive, count]);

  // Function to format remaining time in h:m:s
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className='mainContent'>
      <div id='score'>
        <p>{score}</p>
        <p>$</p>
      </div>

      <div id='clockImg'>
        <img src="clock-1.png" alt="Clock" />
      </div>

      <div id='progressInfo'>
        {isFarmingActive ? (
          <>
            
            {count >= farmingTime ? (
              <ClaimProgress onClick={handleClaimClick} /> // Show ClaimProgress if count is 5 or more
            ) : (
              <FarmingProgressbar
               count={count}
               formatTime={formatTime} 
               remainingTime={remainingTime}
               farmingTime = {farmingTime} 
               /> // Show FarmingProgressbar while farming
            )}
          </>
        ) : (
          <StartProgressbar onStart={handleStartClick} /> // Show StartProgressbar if farming is not active
        )}
      </div>
    </div>
  );
}

export default MainContent;
