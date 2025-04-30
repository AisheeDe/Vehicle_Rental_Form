const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
const bookingController = require('../controllers/bookingController');

router.get('/vehicles', vehicleController.getAllVehicles);
router.get('/vehicles/:type', vehicleController.getVehiclesByType);
router.post('/vehicles', vehicleController.createVehicle);

router.get('/bookings', bookingController.getAllBookings);
router.post('/bookings', bookingController.createBooking);

module.exports = router;
