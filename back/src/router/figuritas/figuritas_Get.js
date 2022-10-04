const { Router } = require("express");
const {Figuritas} = require("../../db");

const router = Router();

router.get("/", async function( req, res) {
    try{
        const figus = await Figuritas.findOne({});
        res.json(figus);

    } catch (err) {
        console.log(err)
        res.send(err);
    }
});

module.exports = router;