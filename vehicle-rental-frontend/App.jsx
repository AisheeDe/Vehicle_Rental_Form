import React from 'react';
import StepForm from './components/StepForm.jsx';
import './App.css'; 

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-xl">
        <StepForm />
      </div>
    </div>
  );
}

export default App;
