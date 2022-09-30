// const { Router } = require("express");
// const frontURL = process.env.REACT_APP || "http://localhost:3000";
// const db = require("../../db")

// require("dotenv").config();

// const router = Router();

// router.post("/", async (req, res) => {

//   const {id} = req.body;

//   try {
//     const user = await db.query('SELECT * FROM user WHERE id= ?', [id])

//     if (user) {
//         const verificaciónLink = `${frontURL}/new-password/${user.id}`

//         const body =  
//         {from: '"Cambio Contraseña 👻" <@gmail.com>',
//          to: user.mail, 
//          subject: "Recuperacion contraseña", 
//          html: `<b>Ingresá al siguiente link para recuperar la contraseña</b>
//          <a href="${verificaciónLink}">${verificaciónLink}</a>`
//         }
//         await sendEmail(body)
//       }
      
//       res.json("Email enviado")
//   } catch (error) {
//     console.error(error);
//   }
// });

// module.exports = router;