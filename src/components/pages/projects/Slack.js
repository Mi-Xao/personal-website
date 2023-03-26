import React from 'react'

import ProjectLayout from './ProjectLayout.js'

import slackpic from '../project-images/slack-pic1.png'
import slackgif1 from '../project-images/slack-gif1.gif'
import slackgif2 from '../project-images/slack-gif2.gif'
import slackgif3 from '../project-images/slack-gif3.gif'

function Slack() {
  return (
    <div className='page-project'>
      <ProjectLayout 
        title='Slack Clone'
        img0={slackpic}
        img1={slackgif1}
        img2={slackgif2}
        img3={slackgif3}
        link='https://google.com'
      />
      <div className='proj-info layout-desc'>
      A Slack style messaging system, as a Single Page Full Stack Web App using the NERP Stack: Node.js, Express, React, and PostgreSQL, plus Material-UI.
      <br/> <br/>
      Requires user login to view the user’s chat channels and direct messages
      <br/> <br/>
      Implemented responsive web design for mobile and desktop screens, and designed the application’s interface using React.js and Material-UI
      <br/> <br/>
      Built API with Node.js and Express.js to fetch user information from PostgreSQL database
      </div>
    </div>
  )
}

export default Slack