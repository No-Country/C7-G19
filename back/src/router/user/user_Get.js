const { Router } = require("express");
const {User, Card} = require("../../db");

const router = Router();

router.get("/", async function( req, res) {
    try{
        const users = await User.findOne({
            include: Card
        });
        res.json(users);

    } catch (err) {
        console.log(err)
        res.send(err);
    }
});

module.exports = router;