const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookingController');

router.get('/types', controller.getVehicleTypes);
router.get('/vehicles', controller.getVehiclesByType);
router.post('/bookings', controller.createBooking);

module.exports = router;
