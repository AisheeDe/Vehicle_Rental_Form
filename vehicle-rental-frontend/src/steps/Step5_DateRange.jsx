import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Button, FormControl, FormLabel, FormHelperText } from '@mui/material';
import "react-datepicker/dist/react-datepicker.css";

const Step5_DateRange = ({ onNext, data, setData }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!startDate || !endDate) {
      setError(true);
      return;
    }
    setError(false);
    setData({ ...data, startDate, endDate });
    onNext();
  };

  return (
    <div className="space-y-4">
      <FormControl component="fieldset" error={error}>
        <FormLabel component="legend" className="text-xl font-semibold text-gray-700">
          Select booking date range
        </FormLabel>

        <div className="flex gap-4">
          <div>
            <FormLabel className="text-gray-700">Start Date</FormLabel>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              className="border p-2 rounded"
            />
          </div>
          <div>
            <FormLabel className="text-gray-700">End Date</FormLabel>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate || new Date()}
              className="border p-2 rounded"
            />
          </div>
        </div>

        {error && <FormHelperText>Please select both start and end date</FormHelperText>}
      </FormControl>

      <Button variant="contained" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export default Step5_DateRange;
