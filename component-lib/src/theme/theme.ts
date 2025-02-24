import colors from "./colors";
import breakpoints from "./breakpoints";
import spacing from "./spacing";
import typography from "./typography";

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
  typography,
  breakpoints,
  spacing,
};

export default theme;
