import React, { useState } from 'react';
import Step1 from '../steps/Step1_Name';
import Step2 from '../steps/Step2_Wheels';
import Step3 from '../steps/Step3_Type';
import Step4 from '../steps/Step4_Model';
import Step5 from '../steps/Step5_DateRange';

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} formData={formData} handleChange={handleChange} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} />;
    case 4:
      return <Step4 nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} />;
    case 5:
      return <Step5 prevStep={prevStep} formData={formData} handleChange={handleChange}/>;
    default:
      return null;
  }
};

export default StepForm;
