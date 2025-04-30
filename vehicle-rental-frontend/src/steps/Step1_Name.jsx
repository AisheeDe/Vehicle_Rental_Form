import React from 'react';

const Step1_Name = ({ nextStep, formData, handleChange }) => {
  const { firstName, lastName } = formData;

  const handleFirstNameChange = (e) => {
    handleChange('firstName', e.target.value);
  };

  const handleLastNameChange = (e) => {
    handleChange('lastName', e.target.value);
  };

  const handleNextClick = () => {
    if (firstName && lastName) {
      nextStep();
    } else {
      // Add a validation message
      alert("Please provide both first and last names.");
    }
  };

  return (
    <div>
      <h2>What is your name?</h2>
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Step1_Name;
