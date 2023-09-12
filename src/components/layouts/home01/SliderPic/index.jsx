import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './index.scss';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.png';


export const SliderData = [
    {
      image:
        img1,
      link:'https://github.com/Ernani12/Biblioteca'  
    },
    {
      image:
        img2,
        link:'https://github.com/Ernani12/Biblioteca'   
    },
    {
      image:
        img3,
        link:'https://github.com/Ernani12/Biblioteca'   
    },
    {
      image:
      img4,
        link:'https://github.com/Ernani12/flow_free_game-in-C-Run_codes-Minimize-Chars'  
      },
    {
      image:
        'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
        link:'3'  
    }
  ];


const SliderPic = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <span style={{ position:'relative'}}>
              <img src={slide.image} alt='' className='image' />
              </span>
            )}
            <br></br>
            <br></br>
            {index === current && (
              
              
             <center><b>

              <a href={slide.link}>{slide.link}
              </a>
              </b>
              </center> 
             
            )}
          
            

          </div>
           
            
          
          
        );
      })}
    </section>
  );
};

export default SliderPic;