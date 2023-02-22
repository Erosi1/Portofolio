import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/erosi.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello I'm </h5>
      <h1>Eros Mehmeti</h1>
      <h4 className="text-light">Software Engineer</h4>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="Erosi" />
      </div>
      <a href="#contact"className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header