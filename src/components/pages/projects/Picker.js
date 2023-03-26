import React from 'react'

import ProjectLayout from './ProjectLayout.js'

import pickerpic from '../project-images/picker-sc1.png'
import pickergif1 from '../project-images/picker-gif1.gif'
import pickergif2 from '../project-images/picker-gif2.gif'
import pickergif3 from '../project-images/picker-gif3.gif'

function Picker() {
  return (
    <div className='page-project'>
      <ProjectLayout 
        title='Date Picker'
        img0={pickerpic}
        img1={pickergif1}
        img2={pickergif2}
        img3={pickergif3}
        link='https://google.com'
      />
      <div className='proj-info layout-desc'>
      A date picker that shows the user the current date on a calendar, while also allowing the user to select a different date as the current date.
      <br/> <br/>
      Upon opening the application, the calendar displays the current date
      <br/> <br/>
      A picker function is implemented, which lets the user select a new date to be displayed as the new currently selected date (pink dot)
      <br/> <br/>
      The user can see previous months, and the following months, by clicking on the previous and next arrows.
      <br/> <br/>
      Clicking the displayed month and year at the top takes the user back to the current date
      </div>
    </div>
  )
}

export default Picker