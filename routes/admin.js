import express from "express"
import authRouter from './auth.js'

var router = express.Router();

router.use("/auth", authRouter);
