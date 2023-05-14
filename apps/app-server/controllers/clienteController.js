const Cliente = require("../models/clienteModel");

exports.createCliente = async (req, res) => {
  try {
    const newCliente = await Cliente.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        cliente: newCliente,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json({
      status: "success",
      results: clientes.length,
      data: {
        clientes,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.updateCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      res.status(404).json({
        status: "fail",
        message: "No existe el cliente",
      });
    }
    const updatedCliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        cliente: updatedCliente,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        cliente,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      res.status(404).json({
        status: "fail",
        message: "No existe el cliente",
      });
    }
    const deleteCliente = await Cliente.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        cliente: deleteCliente,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
