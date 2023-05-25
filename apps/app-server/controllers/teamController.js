const Team = require("../models/TeamModel");

exports.createTeam = async (req, res) => {
  try {
    const newTeam = await Team.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        team: newTeam,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json({
      status: "success",
      results: teams.length,
      data: {
        teams,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.updateTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      res.status(404).json({
        status: "fail",
        message: "No existe el Team",
      });
    }
    const updatedTeam = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        team: updatedTeam,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        team,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      res.status(404).json({
        status: "fail",
        message: "No existe el Team",
      });
    }
    const deleteTeam = await Team.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        team: deleteTeam,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
