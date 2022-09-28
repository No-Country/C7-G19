const { Router } = require('express');

            // User
// const userGet = require("./User/user_Get")
const userPost = require("./User/user_Post")

            // Figus


const router = Router();

            // User
// router.use('/users', userGet);
router.use('/createUser', userPost);

            // Figus

module.exports = router;