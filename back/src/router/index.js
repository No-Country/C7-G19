const { Router } = require('express');

            // User
const userGet = require("./user/user_Get")
const userPost = require("./user/user_Post")

            // Figus


const router = Router();

            // User
router.use('/users', userGet);
router.use('/createUser', userPost);

            // Figus

module.exports = router;