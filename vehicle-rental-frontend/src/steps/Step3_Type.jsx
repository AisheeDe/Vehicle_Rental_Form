import React from 'react';


const Step3_Type = ({ nextStep, prevStep, formData, handleChange }) => {
  if (!formData) {
    return <div>Loading...</div>;
  }

  const { wheels, vehicleType } = formData||{};

  const handleTypeChange = (e) => {
    handleChange("vehicleType", e.target.value);
  };

  const handleNextClick = () => {
    if (vehicleType) {
      nextStep();
    } else {
      alert("Please select a vehicle type.");
    }
  };

  return (
    <div>
      <h2>Type of Vehicle:</h2>
      <div>
        <label>
          <input
            type="radio"
            value="Car"
            checked={vehicleType === "Car"}
            onChange={handleTypeChange}
          />
          Car
        </label>
        <label>
          <input
            type="radio"
            value="Bike"
            checked={vehicleType === "Bike"}
            onChange={handleTypeChange}
          />
          Bike
        </label>
      </div>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={prevStep}>Previous</button>
    </div>
  );
};

export default Step3_Type;
