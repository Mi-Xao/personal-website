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
            href='https://google.com'>
            resume pdf</a>
        </div>
        <div className='link git'>
          <a className='git-link' 
            target='_blank' rel='noreferrer'
            href='https://google.com'>
            github</a>
        </div>
        <div className='link email'>email: phmichelle8@gmail.com</div>
      </div>
    </div>
  )
}

export default Contact