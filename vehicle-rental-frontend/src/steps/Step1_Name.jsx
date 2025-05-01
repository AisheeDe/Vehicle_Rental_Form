import React from 'react';

const Step1 = ({ nextStep, formData, handleChange }) => {
  const handleInputChange = (field) => (e) => {
    handleChange(field, e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">First, what's your name?</h2>

      <input
        type="text"
        placeholder="First Name"
        className="border p-2 rounded w-full mb-4"
        value={formData.firstName || ''}
        onChange={handleInputChange('firstName')}
      />

      <input
        type="text"
        placeholder="Last Name"
        className="border p-2 rounded w-full mb-4"
        value={formData.lastName || ''}
        onChange={handleInputChange('lastName')}
      />

      <button
        onClick={nextStep}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
