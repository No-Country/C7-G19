const { Router } = require("express");
const { Figuritas } = require("../../db");

const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const datos = await Figuritas.findOne({
      where: {
        id: id,
      },
    });

    const detallesDatos = {
        id: datos.id,
        name: datos.name,
        lastname: datos.lastname,
        img : datos.img ,
        team: datos.team
    };

    if (detallesDatos) {
      res.status(200).send(detallesDatos);
    } else {
      res.status(404).send("No se encontró la figurita");
    }
  } catch {
    res.status(500).send("Ecurrió un error");
  }
});

module.exports = router;