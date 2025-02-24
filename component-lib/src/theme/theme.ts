import colors from './colors';
import breakpoints from './breakpoints';
import spacing from './spacing';
import borders from './borders';
import typography from './typography';
import buttons from './buttons';

const theme = {
  palette: {
    text: {
      primary: colors.primaryDark,
    },
    background: {
      default: colors.white,
      paper: colors.black,
    },
  },
  borders,
  typography,
  breakpoints,
  spacing,
  buttons,
};

export default theme;
