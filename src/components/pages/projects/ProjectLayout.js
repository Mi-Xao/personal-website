import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './ProjectLayout.css'

function ProjectLayout(props) {

  const [slide, setSlide] = useState(0);

  const handleLeft = () => {
    if (slide === 0) setSlide(3);
    else setSlide(slide-1);
  }
  const handleRight = () => {
    if (slide === 3) setSlide(0);
    else setSlide(slide+1);
  }
  const setToSlide0 = () => {
    setSlide(0);
  }
  const setToSlide1 = () => {
    setSlide(1);
  }
  const setToSlide2 = () => {
    setSlide(2);
  }
  const setToSlide3 = () => {
    setSlide(3);
  }

  return (
    <div className='project-layout'>
      <Link to='/projects' className='back'>
          back to projects
      </Link>
      <div className='layout-title'>{props.title}</div>
      <div class='slideshow-container'>
        {slide === 0 && <img className='layout-img' src={props.img0} alt='img0'/>}
        {slide === 1 && <img className='layout-img' src={props.img1} alt='img1'/>}
        {slide === 2 && <img className='layout-img' src={props.img2} alt='img2'/>}
        {slide === 3 && <img className='layout-img' src={props.img3} alt='img3'/>}
        <div className='slide-buttons'>
          <div className='prev' onClick={handleLeft}>&#10094;</div>
          <div className='dots'>
            {slide === 0 ? 
                <div className='active-dot'>&#9679;</div> : 
                <div className='dot' onClick={setToSlide0}>&#9679;</div>}
              {slide === 1 ? 
                <div className='active-dot'>&#9679;</div> : 
                <div className='dot' onClick={setToSlide1}>&#9679;</div>}
              {slide === 2 ? 
                <div className='active-dot'>&#9679;</div> : 
                <div className='dot' onClick={setToSlide2}>&#9679;</div>}
              {slide === 3 ? 
                <div className='active-dot'>&#9679;</div> : 
                <div className='dot' onClick={setToSlide3}>&#9679;</div>}
          </div>
          <div className='next' onClick={handleRight}>&#10095;</div>
        </div>
      </div>
      <div className='proj-info layout-link'>
        <a target='_blank' rel='noreferrer' href={props.link}>github link</a>
      </div>
    </div>
  );
}

export default ProjectLayout