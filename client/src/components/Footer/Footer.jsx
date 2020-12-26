import React from "react";
import './Footer.scss'
import htcLogo from '../../assets/img/htc_logo.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__body">
          <div className='footer__htcLogo'>
            <img src={htcLogo} alt="HTC логотип"/>
          </div>
          <div className='footer__contacts'>
            <p className='footer__address'>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</p>
            <p className='footer__numbers'>+7 (3412) 93-88-61, 43-29-29</p>
            <a href="https://htc-cs.ru/" target='_blank' className='footer__htcLink'>htc-cs.ru</a>
          </div>

        </div>
      </div>
    </footer>
  )
}
export default Footer