import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
export default function About() {
  return (
    <div className='project'>
      <Navbar/>
      <div class="row featurette">

    
    <div class="col-md-7 ">
    <h2 class="featurette-heading"> About Me<span class="text-muted"></span></h2>
        <p class="lead about" style={{textAlign:"justify"}}>My name is Rajveer Singh and I am currently studying Computer Science in my second year at Guru Nanak Dev Engineering College in Ludhiana, Punjab, India. I am 20 years old and hail from Ahmedgarh, Punjab. My hobbies include playing cricket and watching movies. I have expertise in multiple computer languages and technologies. Apart from that My average score in my BTech for the first three semesters is 9.32 CGPA. </p>
     
       </div>
      <div class="col-md-5 order-md-1">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto order-1" src="https:source.unsplash.com/500x500?web" alt="" />
        {/* <svg  width="500" height="500" xmlns={pic} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em"></text></svg> */}

      </div>
      <div class="col-md-7 order-md-2">
      <h2 class="featurette-heading"> <span class="text-muted"></span></h2>
        <p class="lead" style={{textAlign:"justify"}}>If i talk about my Achievements , I got a consolation prize in national hackathon at ferozpur. Apart I got a Ist prize in Business Idea Presentaion at KCET Amritsar. One thing more I am the database team head in my college societies . I also organised so many events in my college like Apex and i also conduct Sports meet (2k23) in my college. I everyday explore new technologies .My Aim is to become a successful person so that i can fulfill my family needs.   </p>
    
         </div>
      <div class="col-md-5 ">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto " src="https:source.unsplash.com/500x500?coding" alt="" />
        {/* <svg  width="500" height="500" xmlns={pic} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em"></text></svg> */}

      </div>
      
    </div>
    <Footer/>
    </div>
    
  )
}
