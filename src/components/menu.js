import React from 'react'

function Menu() {
  return (
    <div className='footermenu'>
        <div id='home'>
            <button>
                <span class="material-icons">home</span> 
            </button>
            <p>Home</p>
        </div>
        <div id='tasks'>
            <button>
                <span class="material-icons">task</span> 
            </button>
            <p>Tasks</p>
        </div>
        <div id='friends'>
        <button>
            <span class="material-icons">groups</span> 
        </button>
        <p>Friends</p>
        </div>
        <div id='leader-board'>
            <button>
                <span class="material-icons">emoji_events</span>
            </button>
            <p>Activity</p>
        </div>
        <div id='wallet'>
            <button>
                <span class="material-icons">wallet</span>
            </button>
            <p>Wallet</p>
        </div>
    </div>
  )
}

export default Menu