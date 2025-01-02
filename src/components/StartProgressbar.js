import React from 'react'

function StartProgressbar({onStart}) {
  return (

      <button id='start_progressBar' onClick={onStart}>
          Start
      </button>
  )
}

export default StartProgressbar