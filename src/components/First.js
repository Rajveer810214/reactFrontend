import React from 'react'
import './components.css'
import { Link } from 'react-router-dom';
import pic from '../image/rajveer.png'
export default function First() {
  return (
    <div className='body'>
    <div className="box">
  <div className="content"><img src={pic}/>
    <h2 >Rajveer Singh <br/> <br/> Full Stack Developer</h2><Link to="/Home">About Me</Link>
  </div>
</div>
</div>
  )
}
