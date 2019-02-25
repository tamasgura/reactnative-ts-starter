export const fonts = {
  primary: 'Raleway-Regular',
  primaryMedium: 'Raleway-Medium',
  primaryBold: 'Raleway-Bold',
};

export const fontSizes = {
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 24,
  xxl: 26,
};
const baseColors = {
  black: '#000',
  white: '#fff',
  lightGrey: '#cecece',
  grey: '#99948e',
  red: '#dc6666',
};
const themeColors = {
  green: '#7dc855',
  darkBlue: '#456',
};
export const colors = {
  ...baseColors,
  danger: baseColors.red,
  textPrimary: themeColors.darkBlue,
  textLight: baseColors.white,
  textSecondary: baseColors.grey,
  bgExtraLight: baseColors.lightGrey,
  buttonPrimary: themeColors.green,
  borderPrimary: baseColors.grey,
};

export const spacing = {
  s: 6,
  m: 12,
  l: 18,
};

/*
export const shadowBottom = {
  shadowColor: colors.primaryGreen,
  shadowOffset: {
    width: 10,
    height: 10,
  },
  shadowRadius: 11,
  shadowOpacity: 1,
}*/
