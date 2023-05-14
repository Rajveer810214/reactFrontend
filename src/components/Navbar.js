import {useRef,useEffect}from 'react';
import { Link } from 'react-router-dom';
// import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    // Check if the current location matches the Contact page route
    if (location.pathname === "/contact") {
      // Set the overflow property of the body element to visible
      document.body.style.overflow = "visible";
    } else {
      // Reset the overflow property to hidden for all other routes
      document.body.style.overflow = "visible";
    }
  }, [location]);

  const bodyRef = useRef();
 
  function handleClick() {
    // bodyRef.current.style.overflow = 'visible';
  }
 

  return (
    <nav className=" navbar navbar-dark bg-dark fixed-top  ">
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/" style={{fontFamily:"Frutiger",fontSize:"31px"}}>RajveerSinghSidhu</Link>
        <button  className="navbar-toggler" type="button"data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Hi</h5>
            <button type="button" className="btn-close btn-close-white overflow-visible" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body ">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link" onClick={handleClick} to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={handleClick}  to=  "/about">about</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={handleClick}  to="/skills">Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={handleClick} to="/contact">Contact us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={handleClick} to="/projects">Projects</Link>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
