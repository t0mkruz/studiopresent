import {Dimensions, ImageStyle, StyleProp, Text, TextInput, TextStyle, ViewStyle} from "react-native";
import Config from "react-native-config";
import {isTablet} from "react-native-device-info";

export const SCROLL_INDICATOR_LENGTH = 6;
export const getDevice = () => {
  const screenWidth = Dimensions.get("screen").width;
  if (!isTablet()) {
    return 1;
  }
  if (screenWidth >= 1200) {
    /*
     * 4= big tablet
     * 3= tablet
     * 2= small tablet
     * 1= mobile
     */
    return 4;
  }
  if (screenWidth >= 900) {
    return 3;
  }
  if (screenWidth >= 640) {
    return 2;
  }
  return 1;
};

export const tabColors = {
  activeTintColor: Config.PRIMARY,
  inactiveTintColor: "#999999",
  activeBackgroundColor: "#000000",
  inactiveBackgroundColor: "#000000",
  style: {borderTopColor: "#000000"},
};

export const colors = {
  primary: Config.PRIMARY,
  primaryVariant: "#7ed6df",
  secondary: "#aaaaaa",
  secondaryLow: "#666666", // for placeholder
  bgPrimary: "#111111",
  bgSecondary: "#1c1c1c",
  bgTertiary: "#2c2c2c",
  white: "#ffffff",
  black: "#000000",
  low: "#6ab04c",
  mid: "#f9ca24",
  high: "#eb4d4b",
  blue: "#c7ecee",
  textColor: "#ffffff",
  border: "#2c2c2c",
  alarm: "#6ab04c",
  unlock: "#6ab04c",
  lock: "#eb4d4b",
};

const unit = getDevice() === 1 ? 8 : 8 * 1.3;

export const borderRadius = 8;
export const borderRadiusSecondary = 6;

export const basicBorderRadius = {
  borderRadius,
};

export const letterSpacing = 1;

export const borderWidth = 1;

export const opacity = 1;

export const spacing = {
  half: unit * 0.5,
  single: unit,
  singleAndAHalf: unit * 1.5,
  double: unit * 2,
  doubleAndHalf: unit * 2.5,
  triple: unit * 3,
};

export const fontWeight = {
  xs: "300",
  normal: "400",
  l: "600",
  bold: "700",
};

const typographyConfig = {
  xs: 9,
  sm: 10,
  md: 13,
  xmd: 16,
  xxmd: 20,
  lg: 24,
  xlg: 36,
};

export const typography = {
  xs: getDevice() === 1 ? typographyConfig.xs : typographyConfig.xs * 1.3,
  sm: getDevice() === 1 ? typographyConfig.sm : typographyConfig.sm * 1.3,
  md: getDevice() === 1 ? typographyConfig.md : typographyConfig.md * 1.3,
  xmd: getDevice() === 1 ? typographyConfig.xmd : typographyConfig.xmd * 1.3,
  xxmd: getDevice() === 1 ? typographyConfig.xxmd : typographyConfig.xxmd * 1.3,
  lg: getDevice() === 1 ? typographyConfig.lg : typographyConfig.lg * 1.3,
  xlg: getDevice() === 1 ? typographyConfig.xlg : typographyConfig.xlg * 1.3,
};

const iconConfig = {
  xxxs: 10,
  xxs: 12,
  xs: 13,
  sm: 16,
  md: 24,
  lg: 36,
};

export const iconSizes = {
  xxxs: getDevice() === 1 ? iconConfig.xxxs : iconConfig.xxxs * 1.3,
  xxs: getDevice() === 1 ? iconConfig.xxs : iconConfig.xxs * 1.3,
  xs: getDevice() === 1 ? iconConfig.xs : iconConfig.xs * 1.3,
  sm: getDevice() === 1 ? iconConfig.sm : iconConfig.sm * 1.3,
  md: getDevice() === 1 ? iconConfig.md : iconConfig.md * 1.3,
  lg: getDevice() === 1 ? iconConfig.lg : iconConfig.lg * 1.3,
  xlg: getDevice() === 1 ? iconConfig.lg * 1.3 : iconConfig.lg * 1.3 * 1.3,
};

export const fontFamily = {
  regular: "Quicksand-Bold",
  bold: "Quicksand-Bold",
  thin: "Quicksand-Bold",
};

export type alignmentsStyle = {
  centerBasic: {};
  alignCenter: {};
  justifyStart: {};
  justifyCenter: {};
  flexEnd: {};
  flexCol: {};
  flexRow: {};
  spaceBetween: {};
  alignFlexEnd: {};
  alignFlexStart: {};
  alignSelfCenter: {};
  alignSelfFlexEnd: {};
  alignSelfFlexStart: {};
  flexWrap: {};
  flex: {};
  flexGrow: {};
  noFlex: {};
  textCenter: {};
  centerFlexEnd: {};
  leftZero: {};
  rigthZero: {};
  absolute: {};
  overflowHidden: {};
};

export const disabledOpacity = {opacity: 0.6};

export type BasicStyleProp = StyleProp<ViewStyle | TextStyle | ImageStyle>;

export const fullWidth = () => Dimensions.get("window").width;

export const fullHeight = () => Dimensions.get("window").height;

const tabBarHeight = 49; // TODO: this could change
export const headerHeight = spacing.double * 3; // in %
export const fullGridSize = () => {
  // portrait
  if (fullWidth() <= fullHeight()) {
    return fullHeight() - headerHeight - tabBarHeight;
  }
  // landscape
  return fullHeight() * 0.9;
};

export const getSmallerDimension = () => {
  if (fullWidth() < fullHeight()) {
    return fullWidth();
  }
  return fullHeight();
};

export const calculateNumOfColumns = () => {
  if (fullWidth() >= 1200) {
    return 5;
  }
  if (fullWidth() >= 900) {
    return 4;
  }
  if (fullWidth() >= 640) {
    return 3;
  }
  return 2;
};

export const cardColumns = 2;

export const calculateColumnWidth = (value = 2) =>
  (fullWidth() - spacing.double * 2 - spacing.single * (value - 1)) / value;

export const calculateImageWidth = (value = 2) =>
  (fullWidth() - spacing.double * 2 - spacing.single * (value - 1) - spacing.single * 2 * value) / value;

export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export const scaleColor = (percentage: number, color?: string) => {
  if (color && color[0] === "#") {
    const result = hexToRgb(color);
    color = `${result?.r},${result?.g},${result?.b}`;
  }
  return `rgba( ${color || "255, 255, 255"}, ${percentage / 100})`;
};

export function darkenColor(percent: number, color: string) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  // @ts-ignore
  R = parseInt((R * (100 + percent)) / 100, 10);
  // @ts-ignore
  G = parseInt((G * (100 + percent)) / 100, 10);
  // @ts-ignore
  B = parseInt((B * (100 + percent)) / 100, 10);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR = R.toString(16).length === 1 ? `0${R.toString(16)}` : R.toString(16);
  const GG = G.toString(16).length === 1 ? `0${G.toString(16)}` : G.toString(16);
  const BB = B.toString(16).length === 1 ? `0${B.toString(16)}` : B.toString(16);

  return `#${RR}${GG}${BB}`;
}

export const boldFont: BasicStyleProp = {
  fontFamily: fontFamily.bold,
  color: colors.textColor,
  fontSize: typography.sm,
  includeFontPadding: false,
  textAlignVertical: "center",
  fontWeight: "normal",
};

export const setDefaultTextProps = () => {
  // @ts-ignore
  Text.defaultProps = {...(TextInput.defaultProps || {}), style: boldFont, allowFontScaling: false};
  // @ts-ignore
  TextInput.defaultProps = {...(TextInput.defaultProps || {}), allowFontScaling: false};
};

export const debugBorder = {
  borderColor: "red",
  borderWidth: 1,
};

export const xsmallText: BasicStyleProp = {
  ...(boldFont as {}),
  fontSize: typography.xs,
};
export const smallText: BasicStyleProp = {
  ...(boldFont as {}),
  fontSize: typography.sm,
};
export const mediumText: BasicStyleProp = {
  ...(boldFont as {}),
  fontSize: typography.md,
};
export const mediumTextPrimary: BasicStyleProp = {
  ...(mediumText as {}),
  color: colors.primary,
};

export const smallTextSecondary: BasicStyleProp = {
  ...smallText,
  color: colors.secondary,
};

// @ts-ignore
export const boldTextPrimary: BasicStyleProp = {
  fontWeight: fontWeight.bold,
  fontSize: typography.md,
  color: colors.primary,
};

export const largeText: BasicStyleProp = {
  ...(boldFont as {}),
  fontSize: typography.lg,
};
export const xlargeText: BasicStyleProp = {
  ...(boldFont as {}),
  fontSize: typography.xlg,
};
export const uppercaseText: BasicStyleProp = {
  textTransform: "uppercase",
};
export const letterSpacingText: BasicStyleProp = {
  letterSpacing,
};
export const uppercaseBoldText: BasicStyleProp = {
  ...smallText,
  ...uppercaseText,
  ...letterSpacingText,
};

export const secondaryText: BasicStyleProp = {
  ...mediumText,
  color: colors.secondary,
};
export const darkenMediumText: BasicStyleProp = {
  ...mediumText,
  color: colors.secondary,
};

export const basicBorder = {
  borderWidth,
  borderColor: colors.border,
};

export const fillView: BasicStyleProp = {
  width: "100%",
  height: "100%",
};

export const fillHeight: BasicStyleProp = {
  height: "100%",
};
export const fillWidth: BasicStyleProp = {
  width: "100%",
};

export const alignments: alignmentsStyle = {
  centerBasic: {
    alignItems: "center",
    justifyContent: "center",
  },
  alignCenter: {
    alignItems: "center",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  flexEnd: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  flexCol: {
    flexDirection: "column",
  },
  flexRow: {
    flexDirection: "row",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  alignFlexEnd: {
    alignItems: "flex-end",
  },
  alignFlexStart: {
    alignItems: "flex-start",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  alignSelfFlexEnd: {
    alignSelf: "flex-end",
  },
  alignSelfFlexStart: {
    alignSelf: "flex-start",
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  noFlex: {flex: 0},
  textCenter: {
    textAlign: "center",
  },
  centerFlexEnd: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  leftZero: {left: 0},
  rigthZero: {right: 0},
  absolute: {position: "absolute"},
  overflowHidden: {overflow: "hidden"},
};

export const basicPadding = {
  padding: spacing.double,
};

export const basicCardPadding = {
  paddingVertical: spacing.double,
  paddingHorizontal: spacing.triple,
};

export const NUM_OF_TABS = getDevice() > 1 ? 7 : 5;

export const tabIcon = {
  height: 18,
  width: 18,
  itemWidth: 100,
};

export const tabText = {
  ...smallText,
  fontSize: typography.md,
};

export const tabNavigatorContainer = {
  backgroundColor: tabColors.activeBackgroundColor,
  elevation: 8,
  flexDirection: "row",
  height: 49,
  width: "100%",
  ...(alignments.centerBasic as {}),
};
