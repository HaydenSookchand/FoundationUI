import colors from './colors';

const buttons = {
  contained: {
    backgroundColor: colors.primary,
    color: colors.black,
    '&:hover': {
      backgroundColor: colors.primaryDark,
    },
  },
  accent: {
    backgroundColor: colors.accent,
    color: colors.accentText,
    '&:hover': {
      backgroundColor: colors.accentHover,
      color: colors.black,
    },
  },
  outlined: {
    border: `2px solid ${colors.outlinedBorder}`,
    color: colors.outlinedBorder,
    '&:hover': {
      borderColor: colors.outlinedHoverBorder,
    },
  },
  secondary: {
    backgroundColor: colors.secondary,
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.secondaryDark,
    },
  },
  error: {
    backgroundColor: colors.error,
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.errorDark,
    },
  },
  warning: {
    backgroundColor: colors.warning,
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.warningDark,
    },
  },
  info: {
    backgroundColor: colors.info,
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.infoDark,
    },
  },
  success: {
    backgroundColor: colors.success,
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.successDark,
    },
  },
};

export default buttons;
