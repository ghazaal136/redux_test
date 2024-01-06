import React from 'react';
import { CircularProgress } from '@mui/material';

interface CustomSpinnerTypes {
  size: string;
  color: string;
  bgColor?: string;
  bgSize?: number;
}

const CustomSpinner = ({
  size,
  color,
  bgColor = 'transparent',
  bgSize = 1.8,
}: CustomSpinnerTypes) => {
  return (
    <CircularProgress
      size={size}
      sx={{
        color,
        borderRadius: '50%',
        boxShadow: `inset 0 0 0 ${bgSize}px ${bgColor}`,
      }}
    />
  );
};
export default CustomSpinner;
