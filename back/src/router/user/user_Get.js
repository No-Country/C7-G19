const { Router } = require("express");
const User = require("../../models/User")

const router = Router();

router.get("/", async function( req, res) {

    try{
        const users = await User.findOne({});
        res.json(users);

    } catch (err) {
        console.log(err)
        res.send(err);
    }
});

module.exports = router;