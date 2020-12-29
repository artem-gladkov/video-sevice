import React from "react";
import {connect} from 'react-redux'
import './Header.scss'
import Logo from "../common/Logo/Logo";
import Button from "../common/Button/Button";
import Search from "../common/Search/Search";
import Account from "./Account/Account";
import {openModal} from "../../redux/modalsReducer";
import {getIsAuth} from "../../redux/selectors";

const Header = (props) => {
  const {isAuth, openModal} = props

  const btnHandler = (e) => {
    switch (e.target.id) {
      case 'btnRegistration':
        openModal('modalRegistration')
        break
      case 'btnLogin':
        openModal('modalLogin')
        break
      default:
        break
    }
  }

  return (
    <header className='header'>
      <div className="container">
        <div className="header__body">
          <Logo className='header__logo'/>
          <Search className='header__search'/>
          {
            isAuth
              ? <Account />
              : <div className='header__buttons'>
                  <Button className='header__btnRegistration'
                          id='btnRegistration'
                          onClick={btnHandler}>
                    Зарегистрироваться
                  </Button>
                  <Button className='header__btnLogin'
                          id='btnLogin'
                          onClick={btnHandler}>
                    Войти
                  </Button>
                </div>
          }
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
})

export default connect(mapStateToProps, {openModal})(Header)