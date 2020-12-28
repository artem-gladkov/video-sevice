import React, {useEffect, useState, useCallback} from 'react'
import Input from "../common/Input/Input";
import './ModalLogin.scss'
import Checkbox from "../common/Checkbox/Checkbox";
import Button from "../common/Button/Button";
import {authApi} from "../../api/api";

const ModalLogin = (props) => {
  const {closeModal, login} = props

  const [form, setForm] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const keyDownHandler = useCallback((e) => {
    if (e.code === 'Escape') closeModal('modalLogin')
  }, [closeModal])

  const changeHandler = e => {
    if (e.target.id === 'rememberMe') {
      setForm({
        ...form,
        rememberMe: !form.rememberMe
      })
      return
    }

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const modalClickHandler = (e) => {
    if (e.target.className !== 'modalLogin') return
    closeModal('modalLogin')
  }

  const submitHandler = e => {
    e.preventDefault()
    setLoading(true)
    authApi.login(form.email, form.password)
      .then((resp) => {
        login(resp.data.token, resp.data.userId, resp.data.name)

        closeModal('modalLogin')
      })
      .catch((error) => {
        setError(error.response.data.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    return () => document.removeEventListener('keydown', keyDownHandler)
  }, [keyDownHandler, closeModal])

  return (
    <div className='modalLogin'
         onMouseDown={e => {
           modalClickHandler(e)
         }}>
      <div className='modalLogin__body'>
        <form onSubmit={submitHandler} className='modalLogin__form'>
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
            {error && <div className='modalLogin__error'>{error}</div>}
          </div>
          <Button className='modalLogin__btn'
                  onClick={submitHandler}
                  disabled={loading}>
            Войти
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ModalLogin