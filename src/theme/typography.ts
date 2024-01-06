import { pxToRem } from "@/utils";
declare module "@mui/material/styles" {
  interface TypographyVariants {
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    title3: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    subtitle2Bold: React.CSSProperties;
    body2bold: React.CSSProperties;
    caption1: React.CSSProperties;
    caption1Bold: React.CSSProperties;
    caption2: React.CSSProperties;
    caption2Bold: React.CSSProperties;
  }

  // allow configuration using createTheme
  interface TypographyVariantsOptions {
    title1?: React.CSSProperties;
    title2?: React.CSSProperties;
    title3?: React.CSSProperties;
    subtitle1?: React.CSSProperties;
    subtitle2?: React.CSSProperties;
    subtitle2Bold?: React.CSSProperties;
    body2bold?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption1Bold?: React.CSSProperties;
    caption2?: React.CSSProperties;
    caption2Bold?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    title3: true;
    subtitle1: true;
    subtitle2: true;
    subtitle2Bold: true;
    body2bold: true;
    caption1: true;
    caption1Bold: true;
    caption2: true;
    caption2Bold: true;
  }
}



export const FONT_RTL = "var(--font-iranSans)";

const typography = {
  fontFamily: FONT_RTL,
  h1: {
    fontWeight: 700,
    lineHeight: pxToRem(96),
    fontSize: pxToRem(56),
  },
  h2: {
    fontWeight: 700,
    lineHeight: pxToRem(72),
    fontSize: pxToRem(40),
  },
  title1: {
    fontWeight: 700,
    lineHeight: pxToRem(40),
    fontSize: pxToRem(24),
  },
  title2: {
    fontWeight: 700,
    lineHeight: pxToRem(32),
    fontSize: pxToRem(20),
  },
  title3: {
    fontWeight: 700,
    lineHeight: pxToRem(24),
    fontSize: pxToRem(16),
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: pxToRem(28),
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: pxToRem(24),
    fontSize: pxToRem(14),
  },
  subtitle2Bold: {
    fontWeight: 700,
    lineHeight: pxToRem(24),
    fontSize: pxToRem(14),
  },
  body1: {
    fontWeight: 400,
    lineHeight: pxToRem(22),
    fontSize: pxToRem(16),
  },
  body2: {
    fontWeight: 400,
    lineHeight: pxToRem(28),
    fontSize: pxToRem(14),
  },
  body2bold: {
    fontWeight: 500,
    lineHeight: pxToRem(28),
    fontSize: pxToRem(14),
  },
  caption1: {
    fontWeight: 400,
    lineHeight: pxToRem(24),
    fontSize: pxToRem(12),
  },
  caption1Bold: {
    fontWeight: 700,
    lineHeight: pxToRem(24),
    fontSize: pxToRem(12),
  },
  caption2: {
    fontWeight: 400,
    lineHeight: pxToRem(20),
    fontSize: pxToRem(10),
  },
  caption2Bold: {
    fontWeight: 700,
    lineHeight: pxToRem(20),
    fontSize: pxToRem(10),
  },
};

export default typography;
