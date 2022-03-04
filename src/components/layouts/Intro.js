import React, { useEffect, useState } from 'react';
import IntroVideo from '../../assets/images/intro_video.mp4';

export default function Intro (){
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    setVisible(true);
  },[visible])

  return(
    <section className='intro'>
      <div className='inner'>
        <div className={visible === false ? "title" : "title active"}>
          <h2 className='visually-hidden'>WEB PUBLISHER PORTFOLIO 2022</h2>
          <div className='title-wrapper' aria-label='hidden'>
              <div className='line'>
                <span>W</span>
                <span>E</span>
                <span>B</span>
                <span>P</span>
                <span>U</span>
                <span>B</span>
                <span>L</span>
                <span>I</span>
                <span>S</span>
                <span>H</span>
                <span>E</span>
                <span>R</span>
              </div>
              <div className='line'>
                <span>P</span>
                <span>O</span>
                <span>R</span>
                <span>T</span>
                <span>F</span>
                <span>0</span>
                <span>L</span>
                <span>I</span>
                <span>0</span>
              </div>
              <div className='line'>
                <span>2</span>
                <span>0</span>
                <span>2</span>
                <span>2</span>
              </div>
          </div>
        </div>
        <p id={visible === false ? "" : "fadeIn"}>
            Welcome to my portfolio site. This site is a responsive site made of React. Please enjoy my site.
        </p>
        <video autoPlay muted loop width="100%" type="video/mp4">
          <source src={ IntroVideo }></source>
        </video>
      </div>
    </section>
  )
}