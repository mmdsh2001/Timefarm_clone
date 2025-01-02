import React from 'react'

function Menu() {
  return (
    <div className='footermenu'>
        <div id='home'>
            <button>
                <span class="material-icons">home</span> 
            </button>
            <p>home</p>
        </div>
        <div id='tasks'>
            <button>
                <span class="material-icons">task</span> 
            </button>
            <p>tasks</p>
        </div>
        <div id='friends'>
        <button>
            <span class="material-icons">groups</span> 
        </button>
        <p>friends</p>
        </div>
        <div id='leader-board'>
            <button>
                <span class="material-icons">emoji_events</span>
            </button>
            <p>leader board</p>
        </div>
        <div id='wallet'>
            <button>
                <span class="material-icons">wallet</span>
            </button>
            <p>wallet</p>
        </div>
    </div>
  )
}

export default Menu