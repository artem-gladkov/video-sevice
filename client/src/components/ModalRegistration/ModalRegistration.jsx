import React, {useEffect, useState, useCallback} from 'react'
import Input from "../common/Input/Input";
import './ModalRegistration.scss'
import Button from "../common/Button/Button";
import {authApi} from "../../api/api";

const ModalRegistration = (props) => {
  const {closeModal, openModal} = props

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: ''
  })

  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  const keyDownHandler = useCallback((e) => {
    if (e.code === 'Escape') closeModal('modalRegistration')
  }, [closeModal])

  const changeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const modalClickHandler = (e) => {
    if (e.target.className !== 'modalRegistration') return
    closeModal('modalRegistration')
  }

  const submitHandler = async e => {
    e.preventDefault()
    setLoading(true)
    await authApi.registration(form.email, form.password, form.name)
      .then(() => {
        closeModal('modalRegistration')
        openModal('modalLogin')
      })
      .catch((error) => setError(error.response.data.message))
      .finally(() => {setLoading(false)})
  }


  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    return () => document.removeEventListener('keydown', keyDownHandler)
  }, [keyDownHandler])

  return (
    <div className='modalRegistration' onMouseDown={e => {
      modalClickHandler(e)
    }}>
      <div className='modalRegistration__body'>
        <form onSubmit={submitHandler} className='modalRegistration__form'>
          <h1 className='modalRegistration__title'>Регистрация</h1>
          <Input placeholder='Логин'
                 className='modalRegistration__input'
                 onChange={changeHandler}
                 name='email'/>
          <Input placeholder='Пароль'
                 className='modalRegistration__input'
                 onChange={changeHandler}
                 name='password'
                 type='password'/>
          <Input placeholder='Имя'
                 className='modalRegistration__input'
                 onChange={changeHandler}
                 name='name'
                 type='text'/>
          <div className='modalRegistration__errors'>
            {error && <div className='modalRegistration__error'>{error}</div>}
          </div>
          <Button className='modalRegistration__btn'
                  type='submit'
                  disabled={loading}>
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ModalRegistration