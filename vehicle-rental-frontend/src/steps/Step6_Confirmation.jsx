import React from 'react';
import { Button, Typography } from '@mui/material';
import axios from 'axios';

const Step6_Confirmation = ({ data, onFinish }) => {
  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/bookings', data);
      console.log('Booking successful:', res.data);
      onFinish(); 
    } catch (err) {
      console.error('Booking failed:', err);
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <div className="space-y-4">
      <Typography variant="h5" className="font-semibold text-gray-700">
        Confirm your booking details
      </Typography>
      
      <div>
        <p><strong>Name:</strong> {data.firstName} {data.lastName}</p>
        <p><strong>Wheels:</strong> {data.wheels === 2 ? '2 Wheeled Vehicle' : '4 Wheeled Vehicle'}</p>
        <p><strong>Vehicle Type:</strong> {data.vehicleTypeId}</p>
        <p><strong>Vehicle Model:</strong> {data.vehicleModelId}</p>
        <p><strong>Booking Dates:</strong> {new Date(data.startDate).toLocaleDateString()} - {new Date(data.endDate).toLocaleDateString()}</p>
      </div>

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Booking
      </Button>
    </div>
  );
};

export default Step6_Confirmation;
