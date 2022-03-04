import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AboutMe (){
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState(0);
  const [isActive, setActive] = useState([false,false,false]);
  const scrollRef = useRef([]);

  function onScroll(){
    scrollRef.current.map((a,i)=>{
      if(!scrollRef.current) return
      let scroll = a.getBoundingClientRect(null).top;

      if(scroll < window.innerHeight * 0.9){
        const newArray = [...isActive];
        newArray[0] = true;
        newArray[1] = true;
        newArray[2] = true;
        setActive(newArray);
        }
    })
  }

  useEffect(()=>{
    setVisible(true);
    window.addEventListener('scroll', onScroll)

    return ()=>{window.removeEventListener('scroll', onScroll)}
  },[visible, position, scrollRef])

  return(
    <section className='about-me'>
      <div className='inner'>
        <h2 className='section-title'>
          <span 
            className={isActive[0] == false ? "tit" : "tit active"} 
            ref={ (a)=>{scrollRef.current[0] = a} }>
              WHO I AM
          </span>
          <span 
            className={isActive[1] == false ? "underline" : "underline active"} 
            ref={ (a)=>{scrollRef.current[1] = a} } 
            aria-label='false'>
          </span>
        </h2>
        <p className={isActive[2] == false ? "info" : "info active"} ref={ (a)=>{scrollRef.current[2] = a} }>
          안녕하세요 신입 웹퍼블리셔 이승은입니다.<br/>
          자신감 있게
          스스로 적극적으로 나서며
          하고 싶은 일을 하여 성장하고 있습니다.
          이런 능동적인 태도를 바탕으로 
          전문성 있는 웹퍼블리셔가 되겠습니다.
        </p>
        <Link to="/skill" id={isActive[3] == false ? "" : "fadeIn"} className='skill-btn' ref={ (a)=>{scrollRef.current[3] = a}}>SKILL</Link>
      </div>
    </section>
  )
}