const express = require("express");
const teamRouter = express.Router();
const teamController = require("../controllers/teamController");

teamRouter.post("/", teamController.createTeam);
teamRouter.get("/", teamController.getTeams);
teamRouter.put("/:id", teamController.updateTeam);
teamRouter.delete("/:id", teamController.deleteTeam);
teamRouter.get("/:id", teamController.getTeam);

module.exports = teamRouter;
