import React from "react";
import { Typography, Box, styled } from "@mui/material";
import theme from '../../theme/theme';
import colors from '../../theme/colors';

const StyledContainer = styled(Box)(() => ({
  padding: theme.spacing.xl,
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing.lg,
  border: `2px solid ${colors.outlinedBorder}`,
}));

const HelloMUIComponent = () => {
  return (
    <StyledContainer>
      <Typography variant="h4" sx={{ color:theme.palette.text.primary }}>
        Hello World MUI JSX
      </Typography>
    </StyledContainer>
  );
};

export default HelloMUIComponent;