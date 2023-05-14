import React from 'react'
import { Link } from 'react-router-dom';import Navbar from './Navbar'
import currecny from '../image/currency.png'
export default function Project() {
  return (
    <div className='project'>
      <Navbar />
      <div className="row featurette">
        <div className="col-md-7 ">
          <h2 className="featurette-heading">1.Currency-Converter <span className="text-muted"></span></h2>
          <p className="lead">"Actually, I have created a currency converter website that allows users to effortlessly convert currencies to a specific country's currency. This website serves as a convenient tool for individuals who need to calculate currency conversions accurately and efficiently. With just a few clicks, users can quickly obtain the equivalent value of one currency in relation to another.
            The currency converter website was skillfully developed by Rajveer Singh, demonstrating his expertise in programming and his ability to deliver practical solutions. Rajveer's dedication and effort in creating this website are truly commendable. <Link to="https://currecny.vercel.app" target='_blank'>Go to currecny converter </Link></p>
        </div>
        <div className="col-md-5">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="1500" height="900" src={currecny} role="img"  focusable="false"></img>

        </div>
      </div>
    </div>
  )
}
