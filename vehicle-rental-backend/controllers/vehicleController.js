const { Vehicle } = require('../models');

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.json(vehicles);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching vehicles');
  }
};

exports.getVehiclesByType = async (req, res) => {
  const { type } = req.params;
  try {
    const vehicles = await Vehicle.findAll({
      where: { type },
    });
    res.json(vehicles);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching vehicles by type');
  }
};

exports.createVehicle = async (req, res) => {
  const { type, model, year, price, price_per_day } = req.body;
  try {
    const newVehicle = await Vehicle.create({
      type,
      model,
      year,
      price,
      price_per_day,
    });
    res.json(newVehicle);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating vehicle');
  }
};
