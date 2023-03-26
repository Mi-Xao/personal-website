import React from 'react'
import './Home.css'

import tulip from '../tulip.png'

function Home() {
  return (
    <div className='home-page'>
      <p className ='intro'>hello, I'm</p>
      <p className ='name'>Michelle</p>
      <img className='tulip' src={tulip} width='250'
        alt='tulip'/>
    </div>
  )
}

export default Home