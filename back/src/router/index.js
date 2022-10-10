const { Router } = require('express');

            // User
const userGet = require("./user/user_Get")
const userDetail = require("./user/userDetails_Get")
const userPost = require("./user/user_Post")
const userPut = require("./user/user_Put")

            // Figus
const figusGet = require("./figuritas/figuritas_Get")
const figusDetail = require("./figuritas/figuritasDetail_Get")

            // Card 
const cardGet = require("./card/card_Get")
const cardDetail = require("./card/detailsCard_Get")
const cardPost = require("./card/card_Post")
const cardPut = require("./card/card_Put")

            // Otros 
const login = require("./login")            

const router = Router();

            // User
router.use('/users', userGet);
router.use('/:id/detail', userDetail);
router.use('/createUser', userPost);
router.use('/:id/actualizar', userPut);

            // Figus
router.use('/figuritas', figusGet);
router.use('/:id/detail', figusDetail);

            // Card 
router.use('/cards', cardGet);
router.use('/:id/detail', cardDetail);
router.use('/createCard', cardPost);
router.use('/:id/actualizar', cardPut);

            // Otros 
router.use('/login', login);

module.exports = router;