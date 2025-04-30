import React, { useState } from "react";
import Step1 from "../steps/Step1_Name";
import Step2 from "../steps/Step2_Wheels";
import Step3 from "../steps/Step3_Type";
import Step4 from "../steps/Step4_Model";
import Step5 from "../steps/Step5_DateRange";

const StepForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    wheels: "",
    vehicleType: "",
    vehicleTypeId: null,
    model: "",
    dateRange: [null, null]
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const steps = {
    1: <Step1 nextStep={nextStep} formData={formData} handleChange={handleChange} />,
    2: <Step2 nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} />,
    3: <Step3 nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} />,
    4: <Step4 nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} />,
    5: <Step5 prevStep={prevStep} formData={formData} />
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      {steps[step]}
    </div>
  );
};

export default StepForm;
