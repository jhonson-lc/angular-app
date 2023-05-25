const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({
        status: "fail",
        message: "No existe el User",
      });
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({
        status: "fail",
        message: "No existe el User",
      });
    }
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user: deleteUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.obtenerUsuario = async (req, res) => {
  try {
    const username = req.query.username;
    const password = req.query.password;

    let usuario = await User.findOne({username, password});
    const token = jwt.sign({_id: usuario._id}, "secretkey");

    if (!usuario) {
      return res.status(404).json({msg: "No existe el usuario"});
    }

    res.json({token});
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo problemas al cargar");
  }
};
