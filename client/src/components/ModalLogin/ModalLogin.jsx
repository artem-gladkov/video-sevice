import React, {useEffect} from 'react'
import Input from "../common/Input/Input";
import './ModalLogin.scss'
import Checkbox from "../common/Checkbox/Checkbox";
import Button from "../common/Button/Button";

const ModalLogin = (props) => {
  const {closeModal} = props

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    return () => document.removeEventListener('keydown', keyDownHandler)
  }, [])

  const modalClickHandler = (e) => {
    if (e.target.className !== 'modalLogin') return
    closeModal('modalLogin')
  }

  const keyDownHandler = e => {
    if (e.code === 'Escape') closeModal('modalLogin')
  }

  return (
    <div className='modalLogin' onClick={e => {modalClickHandler(e)}}>
      <div className='modalLogin__body'>
        <h1 className='modalLogin__title'>Вход</h1>
        <Input placeholder='Логин' className='modalLogin__input'/>
        <Input placeholder='Пароль' className='modalLogin__input'/>
        <Checkbox label='Запомнить' className='modalLogin__rememberMe' name='rememberMe'/>
        <Button className='modalLogin__btn' >Войти</Button>
      </div>
    </div>
  )
}

export default ModalLogin