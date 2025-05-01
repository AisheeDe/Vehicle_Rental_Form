const db = require('../config/db');

exports.getVehicleModelsByType = async (req, res) => {
  const { type } = req.query;
  if (!type) return res.status(400).json({ error: 'Type is required' });

  try {
    const [models] = await db.query(
      'SELECT id, model AS name FROM vehicles WHERE type = ?',
      [type]
    );
    res.json(models);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
