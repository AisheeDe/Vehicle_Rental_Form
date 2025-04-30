import React from 'react';

const Step2_Wheels = ({ nextStep, prevStep, formData, handleChange }) => {
  const { wheels } = formData;

  const handleWheelsChange = (e) => {
    handleChange('wheels', e.target.value);
  };

  const handleNextClick = () => {
    if (wheels) {
      nextStep();
    } else {
      alert("Please select number of wheels.");
    }
  };

  return (
    <div>
      <h2>Number of wheels:</h2>
      <div>
        <label>
          <input
            type="radio"
            value="2"
            checked={wheels === '2'}
            onChange={handleWheelsChange}
          />
          2
        </label>
        <label>
          <input
            type="radio"
            value="4"
            checked={wheels === '4'}
            onChange={handleWheelsChange}
          />
          4
        </label>
      </div>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={prevStep}>Previous</button>
    </div>
  );
};

export default Step2_Wheels;
