const { Router } = require("express");
const { User, Admin } = require("../db");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const router = Router();

router.post("/", async (req, res) => {
  const { mail, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        mail: mail,
      },
    });

    const admin = await Admin.findOne({
      where: {
        mail: mail,
      },
    });

    let isValid;
    if (user && user.status === "active") {
      var userData = {
        id: user.id,
        email: user.mail,
      };
      isValid = await bcryptjs.compare(password, user.password);
    } else if (admin) {
      var userData = {
        id: admin.id,
        email: admin.mail,
      };
      isValid = await bcryptjs.compare(password, admin.password);
    }
    if (isValid) {
      const token = jwt.sign(userData, SECRET, { expiresIn: 120 * 120 });

      return res.status(200).send({
        validate: true,
        id: userData.id,
        email: userData.email,
        token,
      });
    } else {
      return res.status(200).json({
        validate: false,
      });
    }
  } catch {
    res.status(500).send("Ocurrió un error");
  }
});

module.exports = router;