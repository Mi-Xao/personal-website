import React from 'react'
import './Projects.css'
import {Link} from 'react-router-dom'
import bakerypic from './project-images/bunbakery-sc0.png'
import pickerpic from './project-images/picker-sc1.png'
import slackpic from './project-images/slack-pic1.png'

function Projects() {
  return (
    <div className='page-projects'>
      <p className='page-header projects-title'>projects</p>
      <div className='project'>
        <img className='project-img' src={bakerypic} alt='bakery'/>
        <Link to='/projects/website' className='project-name'>
          Bun Bakery Website
        </Link>
      </div>
      <div className='project'>
        <img className='project-img' src={pickerpic} alt='picker'/>
        <Link to='/projects/picker' className='project-name'>
          Date Picker
        </Link>
      </div>
      <div className='project'>
        <img className='project-img' src={slackpic} alt='slack'/>
        <Link to='/projects/slack' className='project-name'>
          Slack Clone
        </Link>
      </div>
    </div>
  )
}

export default Projects