const { Router } = require("express");
const { Card } = require("../../db");

const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const datos = await Card.findOne({
      where: {
        id: id,
      },
    });

    const detallesDatos = {
        id: datos.id,
        price: datos.price,
        status: datos.status,
        method: datos.method,
        description: datos.description
    };

    if (detallesDatos) {
      res.status(200).send(detallesDatos);
    } else {
      res.status(404).send("No se encontró la card");
    }
  } catch {
    res.status(500).send("Ecurrió un error");
  }
});

module.exports = router;