const { Router } = require("express");
const { User } = require("../../db");

const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const datos = await User.findOne({
      where: {
        id: id,
      },
    });

    const detallesDatos = {
        id: datos.id,
        name: datos.name,
        lastName: datos.lastName,
        mail: datos.mail,
        phone: datos.phone,
        location: datos.location,
        status: datos.status
    };

    if (detallesDatos) {
      res.status(200).send(detallesDatos);
    } else {
      res.status(404).send("No se encontró al usuario");
    }
  } catch {
    res.status(500).send("Ecurrió un error");
  }
});

module.exports = router;