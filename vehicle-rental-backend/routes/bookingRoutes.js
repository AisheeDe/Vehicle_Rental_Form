const express = require('express');
const { createBooking, getBookings } = require('../controllers/bookingController');

const router = express.Router();

router.post('/bookings', createBooking); // POST request to create a booking
router.get('/bookings', getBookings);    // GET request to fetch all bookings

module.exports = router;
