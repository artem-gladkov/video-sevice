import React from 'react'
import {NavLink} from "react-router-dom";
import './Navigation.scss'

const Navigation = () =>{
  return (
    <nav className='navigation'>
      <NavLink to='/movies' className='navigation__item'>Фильмы</NavLink>
      <NavLink to='/channels'  className='navigation__item'>Телеканалы</NavLink>
    </nav>
  )
}

export default Navigation