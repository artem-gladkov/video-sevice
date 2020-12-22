import React from "react";
import './Header.scss'
import Logo from "../common/Logo/Logo";
import Button from "../common/Button/Button";
import Search from "../common/Search/Search";

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__body">
          <Logo className='header__logo'/>
          <Search className='header__search'/>
          <Button className='header__login'>Войти</Button>
        </div>
      </div>
    </header>
  )
}
export default Header