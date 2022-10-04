const { Router } = require("express");
const {User} = require("../../db");

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
      user.status = "removed"
      await user.save() 
      return res.send("Usuario eliminado")
      
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;