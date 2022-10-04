const { Router } = require("express");
const frontURL = process.env.REACT_APP || "http://localhost:3000";
const {User} = require("../../db");
const {sendEmail} = require("../../utils/sendMail")

require("dotenv").config();

const router = Router();

router.post("/", async (req, res) => {

  const {id} = req.body;

  try {
    const user = await User.findOne({
        where: {
          id: id,
        },
      });

    if (user) {
        const verificaciónLink = `${frontURL}/new-password/${user.id}`

        const body =  
        {from: '"Cambio Contraseña 👻" nocountry719<@gmail.com>',
         to: user.mail, 
         subject: "Recuperacion contraseña", 
         html: `<b>Ingresá al siguiente link para recuperar la contraseña</b>
         <a href="${verificaciónLink}">${verificaciónLink}</a>`
        }
        await sendEmail(body)
      }
      res.json("Email enviado")
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;