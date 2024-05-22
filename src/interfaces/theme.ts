export interface ThemeColor {
  [colorName: string]: string;
}

export interface ThemeTypography {
  [typeName: string]: string | number;
}

export interface ThemeLayout {
  background: string;
  width: string;
  borderColor?: string;
  boxShadow?: string;
  padding?: string;
  transition?: string;
}

export interface ITheme {
  color: ThemeColor;
  mainColors: ThemeColor;
  colorGray: ThemeColor;
  colorMono: ThemeColor;
  colorText: ThemeColor;
  colorIcon?: ThemeColor;
  fontFamily: ThemeTypography;
  fontSize: ThemeTypography;
  lineHeight: ThemeTypography;
  fontWeight: ThemeTypography;
  layout: ThemeLayout;
}

export interface EmotionTheme {
  theme: ITheme;
}