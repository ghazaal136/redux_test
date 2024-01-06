import React from "react";
import { Box, Button, useTheme } from "@mui/material";

import { CustomButtonTypes } from "./services/interfaces";
import useCustomButtonStyles from "./styles";
import CustomSpinner from "../customSpinner";

const CustomButton = ({
  onClick,
  rightIcon,
  variant = "contained",
  disabled = false,
  color = "primary",
  size = "medium",
  leftIcon,
  text,
  isVertical = false,
  specialStyle,
  isLoading = false,
}: CustomButtonTypes) => {
  const theme = useTheme();
  const { button, leftIconStyle } = useCustomButtonStyles(
    isVertical,
    color,
    size,
    specialStyle,
    text
  );

  return (
    <Button
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      color={color}
      disableElevation
      sx={button}
    >
      {isLoading ? (
        <CustomSpinner
          size={"1.25rem"}
          color={
            color === "primary" && variant !== "outlined"
              ? theme.palette.common.white
              : theme.palette.primary.main
          }
        />
      ) : (
        <>
          {rightIcon && <Box sx={leftIconStyle}>{rightIcon}</Box>}

          {text && text}

          {leftIcon && <Box sx={leftIconStyle}>{leftIcon}</Box>}
        </>
      )}
    </Button>
  );
};

export default CustomButton;
