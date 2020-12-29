const {Router} = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const {body,validationResult} = require("express-validator");


const router = Router()

// /api/profile/info
router.get('/info',auth, async (req, res) => {
  try{
    const {userId} = req.user

    const userInfo = await User.find({_id: userId}, {name: true,})

    res.status(200).json(...userInfo)
  } catch (e) {
    res.status(500).json({message: 'Что то пошло не так попробуйте снова'})
  }
})

router.post(
  '/updateName',
  [body('name', 'Введите корректное имя').isLength({min:1})],
  auth,
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if(!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некоректные данные при регистрации'
        })
      }

      const {name} = req.body
      const {userId} = req.user

      const user = await User.findOne({_id: userId})

      if (!user) {
        return res.status(400).json({message: 'Ошибка при обновлении. Пользователь не найден.'})
      }

      await User.updateOne({_id: userId}, {$set: {name : name}})

      return res.status(200).json({message: 'Данные обновлены', name: name})
    } catch (e) {

      res.status(500).json({message: 'Что то пошло не так, попробуйте снова'})
    }
  })

module.exports = router