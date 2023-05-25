import React from 'react'
import { Link } from 'react-router-dom'; import Navbar from './Navbar'
import currecny from '../image/currency.png'
import pdf from '../image/pdf.png'
import Footer from './Footer';
export default function Project() {
  return (
    <div className='project'>
      <Navbar />
      <div className="row featurette" style={{fontFamily:"montserrat"}}>
        <div className="col-md-7 ">
          <h2 className="featurette-heading justify-content-center">1.Currency-Converter <span className="text-muted"></span></h2>
          <p className="lead">"Actually, I have created a currency converter website that allows users to effortlessly convert currencies to a specific country's currency. This website serves as a convenient tool for individuals who need to calculate currency conversions accurately and efficiently. With just a few clicks, users can quickly obtain the equivalent value of one currency in relation to another.
            The currency converter website was skillfully developed by Rajveer Singh, demonstrating his expertise in programming and his ability to deliver practical solutions. Rajveer's dedication and effort in creating this website are truly commendable. <Link to="https://currecny.vercel.app" target='_blank'>Go to currecny converter </Link></p>
        </div>
        <div className="col-md-5">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="1500" height="900" src={currecny} role="img" focusable="false"></img>

        </div>
      </div>
      <div className="row featurette my-5" style={{fontFamily:"montserrat"}}>
        <div className="col-md-7 ">
          <h2 className="featurette-heading">2.Pdf Fusion <span className="text-muted"></span></h2>
          <p className="lead">"PDF Fusion is a versatile software that empowers users to effortlessly combine, edit, and create PDF documents. With its intuitive interface and comprehensive features, PDF Fusion offers a seamless solution for managing and manipulating PDF files.
            One of the standout features of PDF Fusion is its ability to merge multiple PDF documents into a single file. Whether you need to consolidate reports, combine invoices, or merge different chapters of an e-book, PDF Fusion simplifies the process and saves valuable time.The software's user-friendly interface and customizable options make it accessible to users of all levels of expertise <Link to="https://pdf-master-gamma.vercel.app/" target='_blank'>Go to Pdf Fusion </Link></p>
        </div>
        <div className="col-md-5">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="1500" height="900" src={pdf} role="img" focusable="false"></img>

        </div>
      <Footer/>
      </div>
    </div>
  )
}
