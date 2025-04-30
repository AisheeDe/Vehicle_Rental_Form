const { Booking } = require('../models');

exports.createBooking = async (req, res) => {
  const { name, email, phone, vehicleType, startDate, endDate } = req.body;
  try {
    const newBooking = await Booking.create({
      name,
      email,
      phone,
      vehicleType,
      startDate,
      endDate,
    });
    res.json(newBooking);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating booking');
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching bookings');
  }
};
