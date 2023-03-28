import React from 'react'
import './Links.css'

function Contact() {
  return (
    <div className='page-links'>
      <p className='page-header links-title'>links</p>
        <div className='links'>
        <div className='link resume'>
          <a className='resume-link' 
            target='_blank' rel='noreferrer'
            href='https://drive.google.com/file/d/1ZWDAYn99H8nlejlkiMCwjet421a35Fbv/view?usp=sharing'>
            resume pdf</a>
        </div>
        <div className='link git'>
          <a className='git-link' 
            target='_blank' rel='noreferrer'
            href='https://github.com/Mi-Xao'>
            github</a>
        </div>
        <div className='link email'>email: phmichelle8@gmail.com</div>
      </div>
    </div>
  )
}

export default Contact