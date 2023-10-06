import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import img3 from '../Assets/img3.png'
import com from '../Assets/com.jpg'


function Services() {
  return (
    <div className='Services'>
      <Carousel infiniteLoop 
      autoPlay 
      showStatus={false}
      showArrows={false}
      showThumbs={false}
      interval={1000}
      >
         <div>
          <img src={img3} alt='Item1'/>
          <p className='legend'>Full Stack</p>
         </div>
         <div>
          <img src={com} alt='com'/>
          <p className='legend'> peer-to-peer  support</p>
         </div>

      </Carousel>
    </div>
  )
}

export default Services