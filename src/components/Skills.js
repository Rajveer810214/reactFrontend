import React from 'react'
import './path.css'
import Navbar from './Navbar'
export default function Skills() {
  return (
    <>
    <Navbar/>
    <div className="skil">
        <h1>Skills</h1>
      <div className="HTML">
        HTML 
        <span  >90%</span>  
      </div>
      <div className="HTMLCSS">
      CSS 
        <span >80%</span>
      </div>
      <div className="HTMLJS">
         JavaScript  <span >70%</span>
      </div>
      <div className="HTMLR">
        React  <span >60%</span>
      </div>
      <div className="HTMLAD">
       App Development  <span >55%</span>
      </div>
      <div className="HTMLNJ">
       Node js  <span >57%</span>
      </div>
      <div className="HTMLM">
        MongoDB  <span >64%</span>
      </div>
      <div className="HTMLC">
       C  <span >77%</span>
      </div>
      <div className="HTMLCPLUS">
       C++  <span >84%</span>
      </div>
      <div className="HTMLJA">
       Java  <span >61%</span>
      </div>
      <div className="HTMLP">
       Python  <span >64%</span>
      </div>  
    </div>
    </>
  )
}
