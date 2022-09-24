import React from 'react'
import Image1 from '../../../assets/images/logo-light.svg'
import Image2 from '../../../assets/images/logo-dark.svg'
import Image, { ImageProps } from 'next/image';



const Footer = () => {
  return (
    
  <footer>

  <div className="container">

    <div className="wrapper">

      <a href="#" className="footer-logo">
      <Image
                        src={Image1}
                        alt="Logo"
                        height={150}
                        width={150}
                        layout="intrinsic"
                        className="logo-light"
                    />
                     {/* <Image
                        src={Image2}
                        alt="Logo"
                        height={150}
                        width={150}
                        layout="intrinsic"
                        className="logo-dark"
                    /> */}
       
      </a>

      <p className="footer-text">
        Learn about Web accessibility, Web performance, and Database management.
      </p>

    </div>

    <div className="wrapper">

      <p className="footer-title">Quick Links</p>

      <ul>

        <li>
          <a href="#" className="footer-link">Advertise with us</a>
        </li>

        <li>
          <a href="#" className="footer-link">About Us</a>
        </li>

        <li>
          <a href="#" className="footer-link">Contact Us</a>
        </li>

      </ul>

    </div>

    <div className="wrapper">

      <p className="footer-title">Legal Stuff</p>

      <ul>

        <li>
          <a href="#" className="footer-link">Privacy Notice</a>
        </li>

        <li>
          <a href="#" className="footer-link">Cookie Policy</a>
        </li>

        <li>
          <a href="#" className="footer-link">Terms Of Use</a>
        </li>

      </ul>

    </div>

  </div>

  <p className="copyright">
    &copy; Copyright 2022 <a href="#">DevBlog</a>
  </p>

</footer>
      )
}

export default Footer