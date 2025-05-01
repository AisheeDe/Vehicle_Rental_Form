import React from 'react';

const Step3 = ({ nextStep, prevStep, formData, handleChange }) => {
  const handleTypeChange = (e) => {
    handleChange('vehicleType', e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select vehicle type</h2>
      <div className="space-y-2 mb-4">
        <label>
          <input type="radio" value="Car" checked={formData.vehicleType === 'Car'} onChange={handleTypeChange} />
          Car
        </label>
        <br />
        <label>
          <input type="radio" value="Bike" checked={formData.vehicleType === 'Bike'} onChange={handleTypeChange} />
          Bike
        </label>
      </div>
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded">
          Previous
        </button>
        <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;
