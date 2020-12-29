import React, {useEffect, useState, useCallback} from 'react'
import Input from "../common/Input/Input";
import './ModalLogin.scss'
import Checkbox from "../common/Checkbox/Checkbox";
import Button from "../common/Button/Button";
import {connect} from "react-redux";
import {closeModal} from "../../redux/modalsReducer";
import {login} from "../../redux/authReducer";
import {getIsLoadingModalLogin, getModalLoginErrors} from "../../redux/selectors";

const ModalLogin = (props) => {
  const {closeModal, login, errors} = props

  const [form, setForm] = useState({email: '', password: '', rememberMe: false})
  const [isLoading, setIsLoading] = useState(false)

  const changeHandler = event => {
    if (event.target.id === 'rememberMe') {
      setForm({
        ...form,
        rememberMe: !form.rememberMe
      })
      return
    }

    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const modalClickHandler = event => {
    if (event.target.className !== 'modalLogin') return
    closeModal('modalLogin')
  }

  const submitHandler = event => { // Обрабатывает форму
    event.preventDefault()
    setIsLoading(true)

    login(form.email, form.password).finally(() => {
      setIsLoading(false)
    })
  }

  const keyDownHandler = useCallback((e) => {
    if (e.code === 'Escape') closeModal('modalLogin')
  }, [closeModal])

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    return () => document.removeEventListener('keydown', keyDownHandler)
  }, [keyDownHandler, closeModal])

  return (
    <div className='modalLogin'
         onMouseDown={e => {modalClickHandler(e)}} >
      <div className='modalLogin__body'>
        <form onSubmit={submitHandler} className='modalLogin__form' >
          <h1 className='modalLogin__title'>Вход</h1>
          <Input placeholder='Логин'
                 className='modalLogin__input'
                 onChange={changeHandler}
                 name='email'/>
          <Input placeholder='Пароль'
                 className='modalLogin__input'
                 onChange={changeHandler}
                 name='password'
                 type='password'/>
          <Checkbox label='Запомнить'
                    className='modalLogin__rememberMe'
                    name='rememberMe'
                    onChange={changeHandler}/>
          <div className='modalLogin__errors'>
            {errors && <div className='modalLogin__error'>{errors}</div>}
          </div>
          <Button className='modalLogin__btn'
                  onClick={submitHandler}
                  disabled={isLoading}>
            Войти
          </Button>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  errors: getModalLoginErrors(state),
  isLoading: getIsLoadingModalLogin(state)
})

export default connect(mapStateToProps, {closeModal, login})(ModalLogin)