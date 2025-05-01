import React from 'react';

const Step2 = ({ nextStep, prevStep, formData, handleChange }) => {
  const handleWheelsChange = (e) => {
    handleChange('wheels', e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">How many wheels?</h2>
      <div className="space-y-2 mb-4">
        <label>
          <input type="radio" value="2" checked={formData.wheels === '2'} onChange={handleWheelsChange} />
          2 Wheels
        </label>
        <br />
        <label>
          <input type="radio" value="4" checked={formData.wheels === '4'} onChange={handleWheelsChange} />
          4 Wheels
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

export default Step2;
