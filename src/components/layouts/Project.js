import React, { useState } from 'react';
import ProjectData from '../../assets/ProjectData';

export default function Project(){

  const [data, setData] = useState(ProjectData);

  return(
    <section className='project'>
      <div className='inner'>
        <h2>PROJECT</h2>
        <div className='project-wrapper'>
          <ul className='project-list'>
            {
              data.map((data)=>{return <ProjectItem key={ data.id } data={ data }/>})
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

function ProjectItem({data}){
  return(
    <li className='project-item'>
      <a>
        <div className="rotate-box">
          <div className="box front">
            <em className='sm-hidden'>({data.id})</em>
            <h3>
              { data.title }
            </h3>
          </div>
          <div className="box bottom sm-hidden">
            <em className=''>({data.id})</em>
            <div className="project-infor">
              <h3>{ data.detail.projectTitle }</h3>
              <ul className="detail-list">
                <li>{ data.detail.type }</li>
                <li>{ data.detail.day } DAYS</li>
                <li>{ data.detail.skill }</li>
              </ul>
            </div>
          </div>
        </div>
      </a>
    </li>
  )
}