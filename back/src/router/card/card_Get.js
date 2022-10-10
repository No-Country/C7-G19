const { Router } = require("express");
const {Card, Figuritas} = require("../../db");

const router = Router();

router.get("/", async function( req, res) {
    try{
        const cards = await Card.findOne({
            include: Figuritas,
        });
        res.json(cards);

    } catch (err) {
        console.log(err)
        res.send(err);
    }
});

module.exports = router;