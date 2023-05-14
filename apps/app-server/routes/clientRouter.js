const express = require("express");
const clientRouter = express.Router();
const clientController = require("../controllers/clienteController");

clientRouter.post("/", clientController.createCliente);
clientRouter.get("/", clientController.getClientes);
clientRouter.put("/:id", clientController.updateCliente);
clientRouter.delete("/:id", clientController.deleteCliente);
clientRouter.get("/:id", clientController.getCliente);

module.exports = clientRouter;
