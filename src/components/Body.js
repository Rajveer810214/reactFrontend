import React from 'react'
import './components.css'
import Typewriter from "typewriter-effect";
import pic from '../image/rajveer.png';
export default function Body() {
  return (
    <div className="bodyPort">
        <div className='pic'>
      <img src={pic} alt="" />
      </div >
      <div className="type">
    <div className="name">
      <h1 style={{textAlign:"center",width:"100%"}}>Rajveer Singh Sidhu</h1>
    </div>
      <Typewriter
  
  onInit={(typewriter)=> {
    setInterval(() => {
      typewriter
      .typeString("Full Stack Developer")
      .pauseFor(500)
      .deleteAll()
      .typeString("Master in React")
      .pauseFor(500)
      .deleteAll()
      .typeString("Veteran in Nodejs")
      .pauseFor(500)
      .deleteAll()
      .typeString("Elegant in Coding")
      .deleteAll()
      .start();
}, 1000);
  }}
  />
  </div>
    </div>
  )
}
