const express = require('express');
const router = express.Router();
const animalRouter = require('./animalList')
const userRouter = require('./user')
const authRouter = require('./auth')

router.use("/animal", animalRouter)
router.use("/user", userRouter)
router.use("/auth", authRouter)

module.exports = router;
