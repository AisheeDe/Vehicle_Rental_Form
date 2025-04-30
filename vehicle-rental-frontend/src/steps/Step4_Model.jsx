import React, { useEffect, useState } from 'react';
import {
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  FormControlLabel,
  Button,
  CircularProgress,
  FormHelperText,
} from '@mui/material';
import axios from 'axios';

const Step4_Model = ({ onNext, data, setData }) => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const vehicleTypeId = data?.vehicleTypeId;

  const handleNext = () => {
    if (!data || !data.vehicleModelId) {
      setError(true);
      return;
    }
    setError(false);
    onNext();
  };

  useEffect(() => {
    if (vehicleTypeId) {
      console.log('Fetching models for vehicleTypeId:', vehicleTypeId);
      const fetchModels = async () => {
        try {
          setLoading(true);
          const res = await axios.get(`http://localhost:5000/api/vehicle-models?type=${vehicleTypeId}`);
          console.log(res.data);
          setModels(res.data);
        } catch (err) {
          console.error('Error fetching models:', err);
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      fetchModels();
    } else {
      setError(true);
      setLoading(false);
    }
  }, [vehicleTypeId]);

  const handleRadioChange = (e) => {
    setData({ ...data, vehicleModelId: e.target.value });
  };

  return (
    <div className="space-y-4">
      <FormControl component="fieldset" error={error}>
        <FormLabel component="legend" className="text-xl font-semibold text-gray-700">
          Select vehicle model
        </FormLabel>

        {loading ? (
          <div className="flex justify-center py-6">
            <CircularProgress />
          </div>
        ) : models.length === 0 ? (
          <div className="text-center py-6">No models available for this vehicle type.</div>
        ) : (
          <RadioGroup value={data?.vehicleModelId || ''} onChange={handleRadioChange}>
            {models.map((model) => (
              <FormControlLabel
                key={model.id}
                value={String(model.id)}
                control={<Radio />}
                label={model.name}
              />
            ))}
          </RadioGroup>
        )}

        {error && <FormHelperText>Please select a model</FormHelperText>}
      </FormControl>

      <Button variant="contained" onClick={handleNext} disabled={loading}>
        Next
      </Button>
    </div>
  );
};

export default Step4_Model;
