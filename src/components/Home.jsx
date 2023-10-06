import React from 'react'
import web from '../Assets/web.png'

import { AiFillAmazonCircle,AiFillGoogleCircle,AiFillYoutube, AiFillInstagram} from "react-icons/ai";

function Home() {

  return (
    <>
      <div className='home'id='home' >
        <main>
          <h1>MunLight</h1>
          <p>solution to all you</p>
        </main>
      </div>

      <div className='home2'>
        <img src={web} alt='Graphiics' />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
 </div>
 <div className='home3'id='about' >
  <div>

  <h1>Who We are ?</h1>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nobis corporis, soluta debitis similique odio magni deserunt vel odit non? Nobis voluptates laborum enim tenetur quibusdam odio veniam ad dolorum.</p>
  </div>

 </div>
 <div className='home4' id='brands' >
  <div>
    <h1>Brands</h1>
    <article>
      <div style={{
        animationDelay:"0.1s"
      }}>
      < AiFillGoogleCircle/>
      <p>Google</p>
      
      </div>
      <div style={{
        animationDelay:"0.3s"
      }}>
     
      <AiFillAmazonCircle/>
      <p>Amazon</p>
      </div>
      <div style={{
        animationDelay:"0.5s"
      }}>
      < AiFillInstagram/>
      <p>Instagram</p>
      
      </div>
      <div style={{
        animationDelay:"0.7s"
      }}>
      <AiFillYoutube/>
      <p>Youtube</p>
      </div>
    </article>
  </div>

 </div>
    </>
  )
}

export default Home