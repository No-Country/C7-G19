const { Router } = require("express");
const bcryptjs = require("bcryptjs");
const db = require("../../db")

const router = Router();

router.post("/", async function( req, res) {
    const {
        name,
        lastName,
        mail,
        password,
        phone,
        ubication  } = req.body;

    let passwordHash = await bcryptjs.hash(password, 8);

    try {
        const userCreated = {
                mail: mail,
                name: name,
                lastName: lastName,
                phone: phone,
                password: passwordHash,
                ubication: ubication
            }

        await db.query('INSERT INTO user set ?', [userCreated])

        res.send("usuario creado");

    } catch (err) {
        console.log(err)
        res.json(err);
    }
});

module.exports = router;