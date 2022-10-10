const { Router } = require("express");
const { Card } = require("../../db");

const router = Router();

router.put("/:id", async (req, res) => {
    const {id} = req.params
    const {status, price, description} = req.body
    
    try{  
        const card = await Card.findOne({
            where: {
                id: id
            }
        })
        status && (card.status = status)
        price && (card.price = price)
        description && (card.description = description)

        const cardActualizada = await card.save()
        res.status(200).send(cardActualizada);
        
    }catch{
        res.status(500).send("Ecurrió un error");
    }
});

module.exports = router;