// const { Router } = require("express");
// const db = require("../../db")

// const router = Router();

// router.post("/", async (req, res) => {
//   const { id} = req.body;

//   try {
//     const user = await db.query('SELECT * FROM user WHERE id= ?', [id])

//     if (user) {
//       user.status = "removed"
//       await user.save() 
//       return res.send("Usuario eliminado")
      
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });

// module.exports = router;