import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import theme from '../theme';

const Background = ({ children }) => {
  const { colors } = theme;
  const { colorMode } = useColorMode();

  return (
    <Box
      backgroundColor={colors[colorMode].background}
      color={colors[colorMode].textColor}
      minHeight="100vh"
      width="100%"
    >
      {children}
    </Box>
  );
};

export default Background;

Background.defaultProps = {
  children: null,
};

Background.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf([PropTypes.node])]),
};
