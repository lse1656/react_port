import React, { useEffect, useState } from 'react';

export default function Skill () {

  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    setVisible(true);
  },[visible])

  return(
    <section className="skill">
      <div className='inner'>
        <div className={visible === false ? "title" : "title active"}>
          <h2 className='visually-hidden'>SKILL</h2>
          <div className='title-wrapper' aria-label='hidden'>
            <div className='line'>
              <span>S</span>
              <span>K</span>
              <span>I</span>
              <span>L</span>
              <span>L</span>
            </div>
          </div>
        </div>
        <h3 className='section-title'>
          <span className='tit active'>SKILL</span>
          <span className='underline active'></span>
        </h3>
        <ul className='skill-list'>
          <li className='skill-item'>HTML</li>
          <li className='skill-item'>CSS</li>
          <li className='skill-item'>JAVASCRIPT</li>
          <li className='skill-item'>SASS</li>
          <li className='skill-item'>REACT</li>
          <li className='skill-item'>GIT</li>
        </ul>
      </div>
    </section>
  )
}