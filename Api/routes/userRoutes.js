const {Router} = require('express')
const {login,register} = require('../controller/userController');
const userRouter = new Router()

// userRouter.post('/signUp',signUp)
userRouter.post('/login',login)
userRouter.post('/register',register)
// userRouter.post('/logout',logout)



module.exports = userRouter