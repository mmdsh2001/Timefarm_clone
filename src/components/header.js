import React from 'react'

function Header(fname) {
  return (
    <div class = 'header' >
        
        <div id='userInfo'>

            <div id='profilePic'>
            <span class="material-icons">
                account_circle
            </span>
            </div>

            <div id='username'>
                {fname.fname}
            </div>

        </div>

        <div id='headerBottons'>

            <div id='upgradeBotton'>
                <button>
                    upgrade
                </button>
            </div>
            
            <div id='moreBotton'>
                <button>
                    <span class='material-icons'>more_vert</span>
                </button>
            </div>
            
        </div>

    </div>
  )
}

export default Header