import React from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { styled } from "@mui/system";
import { FieldProps } from ".";
import {
  PositiveNumber,
  TimeUnit,
  toPositiveNumber,
} from "@caphub-group/caphub-types";

const StyledFormControlLabel = styled(FormControlLabel)`
  color: #fff;
  .MuiRadio-root {
    color: #fff;
  }
`;

interface GracePeriodRadioGroupProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const GracePeriodRadioGroup: React.FC<GracePeriodRadioGroupProps> = ({
  value,
  onChange,
}) => {
  return (
    <RadioGroup
      row
      aria-label="Grace Period"
      name="gracePeriod"
      value={value}
      onChange={(event) => onChange(event)}
    >
      <StyledFormControlLabel value={0} control={<Radio />} label="0 Months" />
      <StyledFormControlLabel value={3} control={<Radio />} label="3 Months" />
      <StyledFormControlLabel value={6} control={<Radio />} label="6 Months" />
    </RadioGroup>
  );
};

const GMField = ({ formData, setFormData }: FieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      gracePeriod: {
        amount:
          toPositiveNumber(parseInt(event.target.value)) ||
          (0 as PositiveNumber),
        unit: TimeUnit.Months,
      },
    });
  };

  return (
    <GracePeriodRadioGroup
      value={formData?.gracePeriod?.amount}
      onChange={handleChange}
    />
  );
};

export default GMField;
