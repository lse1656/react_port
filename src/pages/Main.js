import React, { useEffect, useRef, useState } from 'react';
import Intro from '../components/layouts/Intro';
import AboutMe from '../components/layouts/AboutMe';
import Project from '../components/layouts/Project';


export default function Main(){
  return(
    <main className='main'>
      <Intro />
      <AboutMe />
      <Project />
    </main>
  )
}