const { Router } = require("express");
const {Card} = require("../../db");

const router = Router();

router.post("/", async function( req, res) {
    const {
        figurita,
        price,
        status,
        method,
        description
        } = req.body;

    try {
        const cardCreated = await Card.create({
            price: price,
            status: status,
            method: method,
            description: description
            })
            
        await cardCreated.addFigurita(figurita)
        res.json(cardCreated).send("Card creada");

    } catch (err) {
        console.log(err)
        res.json(err);
    }
});

module.exports = router;