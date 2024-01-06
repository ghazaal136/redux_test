import { alpha } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import typography from "./typography";

// ----------------------------------------------------------------------
interface PaletteColorTokensOptions {
  /* =================== Error & Status ========================= */
  share_red_background: string;
  share_red_foreground: string;
  share_red_stroke: string;
  share_red_live: string;
  share_green_background: string;
  share_green_foreground: string;
  share_green_stroke: string;
  share_yellow_background: string;
  share_yellow_foreground: string;
  share_yellow_stroke: string;
  /* ========================= Brand background ===================== */
  bg_brand_1_rest: string;
  bg_brand_1_hover: string;
  bg_brand_1_pressed: string;
  bg_brand_1_selected: string;
  bg_brand_2_rest: string;
  bg_brand_2_hover: string;
  bg_brand_2_pressed: string;
  bg_brand_disable: string;
  /* ============================ Brand foreground ======================= */
  fgfg_brand_rest: string;
  fgfg_brand_hover: string;
  fgfg_brand_pressed: string;
  fgfg_brand_selected: string;
  /* ======================= Background ========================== */
  bgbg_1_rest: string;
  bgbg_1_hover: string;
  bgbg_1_pressed: string;
  bgbg_1_selected: string;
  bgbg_2_rest: string;
  bgbg_2_hover: string;
  bgbg_2_pressed: string;
  bgbg_2_selected: string;
  bgbg_3_rest: string;
  bgbg_3_hover: string;
  bgbg_3_pressed: string;
  bgbg_3_selected: string;
  bg_static_rest: string;
  bg_static_hover: string;
  bg_static_pressed: string;
  bg_static_selected: string;
  bg_disable_disable: string;
  /* ====================  Foreground ======================= */
  fgfg_1_rest: string;
  fgfg_1_hover: string;
  fgfg_1_pressed: string;
  fgfg_1_selected: string;
  fgfg_2_rest: string;
  fgfg_2_hover: string;
  fgfg_2_pressed: string;
  fgfg_2_selected: string;
  fgfg_2_brand_hover: string;
  fgfg_2_brand_pressed: string;
  fgfg_2_brand_selected: string;
  fgfg_3_rest: string;
  fgfg_3_hover: string;
  fgfg_3_pressed: string;
  fgfg_3_selected: string;
  fgfg_3_brand_hover: string;
  fgfg_3_brand_pressed: string;
  fgfg_3_brand_selected: string;
  fg_disable_disable: string;
  /* ========================== Stroke =========================== */
  stroke_stroke_1_rest: string;
  stroke_stroke_1_hover: string;
  stroke_stroke_1_hover_brand: string;
  stroke_stroke_1_pressed_brand: string;
  stroke_stroke_1_selected_brand: string;
  stroke_stroke_1_pressed: string;
  stroke_stroke_1_selected: string;
  stroke_stroke_2_rest: string;
  stroke_disable_disable: string;
  /* ================= Transparent ==========================  */
  bg_transparent_1_rest: string;
  bg_transparent_1_hover: string;
  bg_transparent_1_pressed: string;
  bg_transparent_1_selected: string;
  bg_transparent_2_rest: string;
  bg_transparent_2_hover: string;
  bg_transparent_2_pressed: string;
  bg_transparent_2_selected: string;
}
declare module "@mui/material/styles" {
  interface Palette {
    subtle: Palette["primary"];
    colorTokens: PaletteColorTokensOptions;
  }
  interface PaletteOptions {
    colorTokens: PaletteColorTokensOptions;
  }
  interface PaletteColor {
    pressed?: string;
    selected?: string;
    disabled?: string;
    hover?: string;
    disabledTextColor?: string;
    hoverTextColor?: string;
    pressedTextColor?: string;
    selectedTextColor?: string;
  }

  interface SimplePaletteColorOptions {
    pressed?: string;
    selected?: string;
    disabled?: string;
    hover?: string;
    contrastText?: string;
    disabledTextColor?: string;
    hoverTextColor?: string;
    pressedTextColor?: string;
    selectedTextColor?: string;
  }
  interface PaletteColorOptions {
    pressed?: string;
    selected?: string;
    disabled?: string;
    hover?: string;
    contrastText?: string;
    disabledTextColor?: string;
    hoverTextColor?: string;
    pressedTextColor?: string;
    selectedTextColor?: string;
  }
  interface PaletteGradientOptions {
    bg_gradient_dntoup?: string;
    vbg_gradient_dntoup?: string;
  }
}
// SETUP COLORS
const PRIMARY = {
  lighter: "rgba(19, 97, 166 , 0.8)",
  light: "rgba(19, 97, 166 , 0.8)",
  main: "rgba(19, 97, 166)",
  dark: "#105694",
  darker: "#105694",
};
const SECONDARY = {
  lighter: "#CC6AFF",
  light: "#CC6AFF",
  main: "#C253FD",
  dark: "#BB3DFD",
  darker: "#BB3DFD",
};
const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#00599D",
  dark: "#0C53B7",
  darker: "#04297A",
  darkest: "#252D55",
};
const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#11CABE",
  main: "#2EBC96",
  dark: "#27af8a",
  darker: "#08660D",
};
const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
};
const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#EB445A",
  dark: "#B72136",
  darker: "#FA2256",
};
const GREY = {
  0: "#FFFFFF",
  100: "#E5E6ED",
  200: "#E5E6ED",
  250: "#C4C4C4",
  300: "#A5ADCF",
  400: "#5D6588",
  500: "#5D6588",
  550: "#747ca7",
  600: "#34384C",
  700: "rgba(47, 50, 65, 0.5)",
  800: "#1E1F25",
  900: "#1E1F25",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
  600_5: alpha("#34384C", 0.5),
};
const BLACK = {
  0: "#000",
  100: "#262834",
  200: "#2b2d39",
  300: "#363843",
  400: "#141518",
  300_8: alpha("#363843", 0.8),
  400_6: alpha("#141518", 0.6),
};
const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  info: { ...INFO, contrastText: "#fff" },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: "#fff" },
  grey: GREY,
  black: BLACK,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: PRIMARY.lighter,
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
  purple: { dark: "#4b32c7", darker: "#4b32c7", lighter: "#d5ccff" },
  positive: { main: "#11CABE" },
  negative: { main: "#FA2256" },
  warningButton: "#F27F16",
};
const MAIN_COLORS = {
  orange97: "#F73F0C",
  orange90: "#E5500B",
  orange90_2: "#E53B0B",
  orange80: "#CC480A",
  orange85: "#D92F00",
  orange85_2: "#D9380B",
  orange70: "#B22E09",
  orange63: "#A12A08",
  orange58: "#942707",
  orange100: "#FF734D",
  orange100_2: "#FF734C",
  orange92: "#EB6A46",
  orange82: "#D15E3E",
  orange86: "#DB6341",
  orange75: "#BF460A",
  orange87: "#DE390B",
  orange33: "#B2583E",
  red85: "#D93639",
  red85_2: "#D96C6E",
  red87: "#DD0800",
  green75: "#289E28",
  green24: "#9BCC9B",
  yellow97: "#F7DF07",
  yellow60: "#F7E963",
  yellow50: "#FAED7D",
  gray4: "#0A0909",
  gray15: "#262525",
  gray10: "#1A1919",
  gray13: "#1F1E1E",
  gray8: "#141414",
  gray22: "#383736",
  gray16: "#292828",
  gray19: "#302F2F",
  gray17: "#2B2B2A",
  gray27: "#454443",
  gray21_2: "#363534",
  gray24: "#3D3C3C",
  gray28: "#454447",
  gray21: "#323136",
  gray26: "#3E3D42",
  gray88: "#E0E0E0",
  gray72: "#B8B8B8",
  gray36: "#5C5B5B",
  gray40: "#666666",
  gray46: "#757575",
  gray20: "#333333",
  gray16_2: "#292929",
  black60: "rgba(0, 0, 0, 0.60)",
  black50: "rgba(0, 0, 0, 0.50)",
  black58: "rgba(0, 0, 0, 0.58)",
  black54: "rgba(0, 0, 0, 0.54)",
  black20: "rgba(0, 0, 0, 0.20)",
  black30: "rgba(0, 0, 0, 0.30)",
  black27: "rgba(0, 0, 0, 0.27)",
  black24: "rgba(0, 0, 0, 0.24)",
  white: "#fff",
  black: "#000",
  black0: "rgba(0,0,0,0)",
};
const COLOR_TOKENS: PaletteColorTokensOptions = {
  /* =================== Error & Status ========================= */
  share_red_background: MAIN_COLORS.red85,
  share_red_foreground: MAIN_COLORS.red85_2,
  share_red_stroke: MAIN_COLORS.red85_2,
  share_red_live: MAIN_COLORS.red87,
  share_green_background: MAIN_COLORS.green75,
  share_green_foreground: MAIN_COLORS.green24,
  share_green_stroke: MAIN_COLORS.green24,
  share_yellow_background: MAIN_COLORS.yellow97,
  share_yellow_foreground: MAIN_COLORS.yellow60,
  share_yellow_stroke: MAIN_COLORS.yellow50,
  /* ========================= Brand background ===================== */
  bg_brand_1_rest: MAIN_COLORS.orange97,
  bg_brand_1_hover: MAIN_COLORS.orange90,
  bg_brand_1_pressed: MAIN_COLORS.orange80,
  bg_brand_1_selected: MAIN_COLORS.orange87,
  bg_brand_2_rest: MAIN_COLORS.orange70,
  bg_brand_2_hover: MAIN_COLORS.orange63,
  bg_brand_2_pressed: MAIN_COLORS.orange58,
  bg_brand_disable: MAIN_COLORS.orange33,
  /* ============================ Brand foreground ======================= */
  fgfg_brand_rest: MAIN_COLORS.orange100_2,
  fgfg_brand_hover: MAIN_COLORS.orange92,
  fgfg_brand_pressed: MAIN_COLORS.orange82,
  fgfg_brand_selected: MAIN_COLORS.orange86,
  /* ======================= Background ========================== */
  bgbg_1_rest: MAIN_COLORS.gray4,
  bgbg_1_hover: MAIN_COLORS.gray21,
  bgbg_1_pressed: MAIN_COLORS.gray8,
  bgbg_1_selected: MAIN_COLORS.gray10,
  bgbg_2_rest: MAIN_COLORS.gray8,
  bgbg_2_hover: MAIN_COLORS.gray22,
  bgbg_2_pressed: MAIN_COLORS.gray16,
  bgbg_2_selected: MAIN_COLORS.gray19,
  bgbg_3_rest: MAIN_COLORS.gray17,
  bgbg_3_hover: MAIN_COLORS.gray27,
  bgbg_3_pressed: MAIN_COLORS.gray21_2,
  bgbg_3_selected: MAIN_COLORS.gray24,
  bg_static_rest: MAIN_COLORS.gray24,
  bg_static_hover: MAIN_COLORS.gray28,
  bg_static_pressed: MAIN_COLORS.gray21,
  bg_static_selected: MAIN_COLORS.gray26,
  bg_disable_disable: MAIN_COLORS.gray8,
  /* ====================  Foreground ======================= */
  fgfg_1_rest: MAIN_COLORS.white,
  fgfg_1_hover: MAIN_COLORS.white,
  fgfg_1_pressed: MAIN_COLORS.white,
  fgfg_1_selected: MAIN_COLORS.white,
  fgfg_2_rest: MAIN_COLORS.gray88,
  fgfg_2_hover: MAIN_COLORS.white,
  fgfg_2_pressed: MAIN_COLORS.white,
  fgfg_2_selected: MAIN_COLORS.white,
  fgfg_2_brand_hover: MAIN_COLORS.orange100_2,
  fgfg_2_brand_pressed: MAIN_COLORS.orange92,
  fgfg_2_brand_selected: MAIN_COLORS.orange82,
  fgfg_3_rest: MAIN_COLORS.gray72,
  fgfg_3_hover: MAIN_COLORS.gray88,
  fgfg_3_pressed: MAIN_COLORS.gray88,
  fgfg_3_selected: MAIN_COLORS.gray88,
  fgfg_3_brand_hover: MAIN_COLORS.orange100_2,
  fgfg_3_brand_pressed: MAIN_COLORS.orange92,
  fgfg_3_brand_selected: MAIN_COLORS.orange82,
  fg_disable_disable: MAIN_COLORS.gray36,
  /* ========================== Stroke =========================== */
  stroke_stroke_1_rest: MAIN_COLORS.gray40,
  stroke_stroke_1_hover: MAIN_COLORS.gray46,
  stroke_stroke_1_hover_brand: MAIN_COLORS.orange90_2,
  stroke_stroke_1_pressed_brand: MAIN_COLORS.orange75,
  stroke_stroke_1_selected_brand: MAIN_COLORS.orange85_2,
  stroke_stroke_1_pressed: MAIN_COLORS.orange75,
  stroke_stroke_1_selected: MAIN_COLORS.orange85_2,
  stroke_stroke_2_rest: MAIN_COLORS.gray20,
  stroke_disable_disable: MAIN_COLORS.gray16_2,
  /* ================= Transparent ==========================  */
  bg_transparent_1_rest: MAIN_COLORS.black60,
  bg_transparent_1_hover: MAIN_COLORS.black50,
  bg_transparent_1_pressed: MAIN_COLORS.black58,
  bg_transparent_1_selected: MAIN_COLORS.black54,
  bg_transparent_2_rest: MAIN_COLORS.black20,
  bg_transparent_2_hover: MAIN_COLORS.black30,
  bg_transparent_2_pressed: MAIN_COLORS.black27,
  bg_transparent_2_selected: MAIN_COLORS.black24,
};

export const theme = createTheme({
  palette: {
    ...COMMON,
    colorTokens: COLOR_TOKENS,
  },
  typography: typography,
});
