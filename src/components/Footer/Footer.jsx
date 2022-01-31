import React from 'react'
import Icons from '../../images/icons/footer.svg'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top"></div>
        <div className="footer-btm">
          <div className="fbtm-left">
            <p>© Afen, Inc. All rights reserved.</p>
            <p>Terms and Conditions</p>
            <p>Privacy</p>
          </div>
          <div className="fbtm-right">
            <img src={Icons} alt="icons" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
