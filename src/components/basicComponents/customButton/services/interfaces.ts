export interface CustomButtonTypes {
  onClick: () => void;
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
  color?: "primary" | "secondary";
  size?: "medium" | "small";
  rightIcon?: JSX.Element | undefined;
  leftIcon?: JSX.Element | undefined;
  text?: string;
  isVertical?: boolean;
  specialStyle?: any;
  isLoading? : boolean;
}
