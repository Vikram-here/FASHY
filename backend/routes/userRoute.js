import express from 'express'
import { loginUser,registerUSer,adminLogin } from '../controllers/userController.js'

const userRouter=express.Router()
userRouter.post('/register',registerUSer)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)

export default userRouter;