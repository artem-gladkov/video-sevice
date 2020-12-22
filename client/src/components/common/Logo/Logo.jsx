import {NavLink} from "react-router-dom";
import logoSrc from '../../../assets/img/sign.svg'
import './Logo.scss'

const Logo = (props) => {
  const {className} = props
  return (
    <NavLink to='/movies' className={`logo ${className}`}>
      <div>
        <img src={logoSrc} alt="Logo" className='logo__img'/>
      </div>
      <p className='logo__text'>Видеосервис</p>
    </NavLink>
  )
}

export default Logo