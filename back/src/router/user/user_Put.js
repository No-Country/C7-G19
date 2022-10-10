const { Router } = require("express");
const { User } = require("../../db");

const router = Router();

router.put("/:id", async (req, res) => {
    const {id} = req.params
    const {mail, phone, location} = req.body
    
    try{  
        const user = await User.findOne({
            where: {
                id: id
            }
        })
        mail && (user.mail = mail)
        phone && (user.phone = phone)
        location && (user.location = location)

        const userActualizado = await user.save()
        res.status(200).send(userActualizado);

    }catch{
        res.status(500).send("Ecurrió un error");
    }
});

module.exports = router;