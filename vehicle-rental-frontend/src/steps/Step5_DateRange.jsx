import React from 'react';

const Step5 = ({ prevStep, formData, handleChange }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select rental dates</h2>
      <div className="space-y-2 mb-4">
        <label>
          Start Date:
          <input
            type="date"
            value={formData.startDate || ''}
            onChange={(e) => handleChange('startDate', e.target.value)}
            className="ml-2 border rounded p-1"
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            value={formData.endDate || ''}
            onChange={(e) => handleChange('endDate', e.target.value)}
            className="ml-2 border rounded p-1"
          />
        </label>
      </div>
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded">
          Previous
        </button>
        <button
          onClick={() => alert('Form submitted successfully!')}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step5;
