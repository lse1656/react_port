import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(){

  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle)
  }

  const onClick = () => {
    setToggle(false)
  }

  return(
    <header className='header'>
      <div className='inner'>
        <div className='header-wrapper'>
          <h1 className='main-logo'><Link to="/">SEUNG EUN</Link></h1>
          <button className='menu-btn' onClick={onToggle}>MENU</button>
          {/* aside */}
          <aside className={toggle == false ? "sidebar" : "sidebar active"}>
            <nav className='snb'>
              <ul className='snb-list'>
                <li className='snb-item'>INTRO</li>
                <li className='snb-item' onClick={onClick}><Link to="/skill">SKILL</Link></li>
                <li className='snb-item'>PROJECT</li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </header>
  )
}

export default Header;