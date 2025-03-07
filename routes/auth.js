
import express from 'express';
import * as authServices from '../services/authServices.js'
import { Prisma } from '@prisma/client';

var router = express.Router();


router.post('/sign-up', async function (req, res, next) {
    try {
        const userData = req.body
        console.log(userData)
        const existingUserWithEmail = await authServices.getOneUser({email: userData.email})
        const message = [];
        if(existingUserWithEmail){
            message.push(`Email with ${userData.email} is already registered!` )
        }
        if(message.length > 0){
            return  res.status(400).json({error: {messages: message }})

        }
        res.status(201).json({message: 'User is registered Successfully'}); 

    } catch (error) {
        res.status(500).json({error: {messages: ['Something went wrong. Please try after a while!']}})

    }
    

})


export default router