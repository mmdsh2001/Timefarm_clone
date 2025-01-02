import React , { useState, useEffect } from 'react'



function FarmingProgressbar({ count , formatTime , remainingTime , farmingTime }) {  

  var progressPercentage =  ((farmingTime - remainingTime) / farmingTime) * 100;

  return (
    
    <div id='progressBar'>
      <div id='progressFill' style={{ width: `${progressPercentage}%` }}></div>
      
      <div id='farmingInfo'>

        <p>farming </p>
        <p>$</p>
        <p>{count}</p>

      </div>
      
      <div id='rightSideElement'>
        
        <div id='remainingTime'>
          <p>{formatTime(remainingTime)}s</p> {/* Display remaining time */}
        </div>

        <div id='acceleratorInfo'>
            <p id='accelerator'>x16</p>
        </div>

      </div>
    </div>

  )
}

export default FarmingProgressbar