const {Router} = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {body, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

const router = Router()

// /api/auth/register
router.post(
  '/registration',
  [
    body('email', 'Введите корректный email').isEmail(),
    body('password', 'Минимальная длина пароля 6 символов')
      .isLength({min: 6})
  ],
  async (request, response) => {
    try {
      const errors = validationResult(request)

      if(!errors.isEmpty()) {
        return response.status(400).json({
          errors: errors.array(),
          message: 'Некоректные данные при регистрации'
        })
      }

      const {email, password, name} = request.body

      const candidate = await User.findOne({email})

      if (candidate) {
        return response.status(400).json({message: 'Пользователь с таким email уже существует'})
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({email, password: hashedPassword, name})

      await user.save()

      return response.status(201).json({message: 'Новый пользователь создан'})
    } catch (e) {
      response.status(500).json({message: 'Что то пошло не так, попробуйте снова'})
    }
  })

// /api/auth/login
router.post(
  '/login',
  [
    body('email', 'Некорректный email').normalizeEmail().isEmail(),
    body('password', 'Введите пароль').exists()
  ],
  async (request, response) => {
  try {
    const errors = validationResult(request)

    if(!errors.isEmpty()) {
      return response.status(400).json({
        errors: errors.array(),
        message: 'Некоректные данные при входе в систему'
      })
    }

    const {email, password} = request.body


    const user = await User.findOne({email})

    if(!user) {
      return response.status(400).json({message: 'Пользователь с таким email не найден'})
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
      return response.status(400).json({message: 'Неверный пароль, попробуйте снова'})
    }

    const token = jwt.sign(
      {userId: user.id},
      config.get('jwtSecret'),
      {expiresIn: '1h'}
      )

    response.json({token, userId: user.id, name: user.name})
  } catch (e) {
    response.status(500).json({message: 'Что то пошло не так, попробуйте снова'})
  }
})

module.exports = router