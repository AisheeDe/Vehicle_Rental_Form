import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Step4 = ({ nextStep, prevStep, formData, handleChange }) => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const type = formData.vehicleType;

  useEffect(() => {
    if (type) {
      axios
        .get(`http://localhost:5000/api/vehicle-models?type=${type}`)
        .then((res) => {
          setModels(res.data);
        })
        .catch((err) => {
          console.error('Error fetching vehicle models:', err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [type]);

  const handleModelChange = (e) => {
    handleChange('vehicleModel', e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select vehicle model</h2>
      {loading ? (
        <p>Loading models...</p>
      ) : models.length === 0 ? (
        <p>No models available.</p>
      ) : (
        models.map((model) => (
          <div key={model.id}>
            <label>
              <input
                type="radio"
                value={model.name}
                checked={formData.vehicleModel === model.name}
                onChange={handleModelChange}
              />
              {model.name}
            </label>
          </div>
        ))
      )}
      <div className="flex justify-between mt-4">
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

export default Step4;
