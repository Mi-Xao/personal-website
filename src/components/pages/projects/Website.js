import React from 'react'

import ProjectLayout from './ProjectLayout.js'

import bakerypic from '../project-images/bunbakery-sc0.png'
import bakerygif1 from '../project-images/bakery-gif1.gif'
import bakerygif2 from '../project-images/bakery-gif2.gif'
import bakerygif3 from '../project-images/bakery-gif3.gif'

function Website() {
  return (
    <div className='page-project'>
      <ProjectLayout 
        title='Bun Bakery Website'
        img0={bakerypic}
        img1={bakerygif1}
        img2={bakerygif2}
        img3={bakerygif3}
        link='https://google.com'
      />
      <div className='proj-info layout-desc'>
      A fake company website to display the bakery’s information, such as the bakery’s menu, about page, and contact information.
      <br/> <br/>
      The website was designed with  Javascript XML, CSS, and React.js to be viewed on a desktop
      <br/> <br/>
      The website uses React.js to implement Routes in order to navigate to each page of the website
      <br/> <br/>
      Framer-Motion was used to implement animations for smooth transitions when navigating between pages
      </div>
    </div>
  )
}

export default Website