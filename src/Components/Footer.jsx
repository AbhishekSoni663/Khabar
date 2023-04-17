import React from 'react'

const Footer = () => {
  return (
  
    <div className='footer-section'>
      <div className="foot-title">
      <h4 className='foot-kh'>Khabr Purani <strong>खबर पुराणी</strong></h4>
      <span className='foot-icon'>
        <a href=""><i className="bi bi-instagram"></i></a>
        <a href=""><i className="bi bi-facebook"></i></a>
        <a href=''><i className="bi bi-github"></i></a>
        <a href=''><i className="bi bi-linkedin"></i></a>
        </span>
      </div>
      
      <div className="foot-head">
     
        <form className='foot-form'>
          <span>
            <input type='email' placeholder='Enter your Email'/>
            <button className='sub'>Subscribe</button>
          </span>
        </form>
      </div>
      <div className="foot-ul">
        <ul className='ul-foot'>
          <li className='foot-a'><a href="">About Us</a><a href="">Contact Us</a><a href="">Code of Ethics</a></li>
          <li className='foot-a'><a href="">Terms Of Use</a><a href="">Privacy Policy</a><a href="">Subscription</a></li>
          <li className='foot-a'><a href="">Print Ad Rates</a><a href="">Disclaimer</a><a href="">NewsLetter</a></li>
          <li className='foot-a'><a href="">Site Map</a><a href="">Rss Feeds</a><a href=""><i className="bi bi-whatsapp"></i>
Whatsapp</a></li>
        </ul>
      </div>
      <hr className='hr-fo'/>
      <p className='copy-foot'>
        <a href=""><i className="bi bi-c-circle"></i>Khabr Purani<strong>खबर पुराणी</strong></a>
      </p>
    </div>
  )
}

export default Footer
