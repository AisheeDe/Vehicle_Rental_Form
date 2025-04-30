const db = require('../db');

exports.getVehicleTypes = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM vehicle_types');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch vehicle types' });
  }
};

exports.getVehiclesByType = async (req, res) => {
  const typeId = req.query.type;
  try {
    const [rows] = await db.query(
      'SELECT * FROM vehicles WHERE vehicle_type_id = ?',
      [typeId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch vehicles' });
  }
};

exports.createBooking = async (req, res) => {
  const { firstName, lastName, vehicleId, startDate, endDate } = req.body;

  try {
    const [conflicts] = await db.query(
      `SELECT * FROM bookings 
       WHERE vehicle_id = ? 
       AND (start_date <= ? AND end_date >= ?)`,
      [vehicleId, endDate, startDate]
    );

    if (conflicts.length > 0) {
      return res.status(400).json({ error: 'Vehicle already booked for these dates.' });
    }

    await db.query(
      `INSERT INTO bookings (first_name, last_name, vehicle_id, start_date, end_date)
       VALUES (?, ?, ?, ?, ?)`,
      [firstName, lastName, vehicleId, startDate, endDate]
    );

    res.json({ success: true, message: 'Booking created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
};
