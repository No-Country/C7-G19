const { Router } = require("express");
const {User} = require("../../db");
const bcryptjs = require("bcryptjs");

const router = Router();

router.post("/", async function( req, res) {
    const {
        name,
        lastName,
        mail,
        password,
        phone,
        location } = req.body;

    let passwordHash = await bcryptjs.hash(password, 8);

    try {
        const userCreated = await User.create({
                mail: mail,
                name: name,
                lastName: lastName,
                phone: phone,
                password: passwordHash,
                location: location,
            })

        res.json(userCreated);
        console.log("user", userCreated) 

    } catch (err) {
        console.log(err)
        res.json(err);
    }
});

module.exports = router;