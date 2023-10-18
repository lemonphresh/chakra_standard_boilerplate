import { Flex, useColorMode } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import theme from '../theme';

const ContentSection = ({ children, left, right, sectionColor, ...props }) => {
  const { colors } = theme;
  const { colorMode } = useColorMode();

  let backgroundImage = null;
  let mobileBackgroundImage = null;

  if (right) {
    backgroundImage = `-webkit-linear-gradient(45deg, ${colors[colorMode].background} 67%, ${sectionColor} 33%)`;
    mobileBackgroundImage = `-webkit-linear-gradient(45deg, ${colors[colorMode].background} 75%, ${sectionColor} 25%)`;
  }

  if (left) {
    backgroundImage = `-webkit-linear-gradient(135deg, ${colors[colorMode].background} 67%, ${sectionColor} 33%)`;
    mobileBackgroundImage = `-webkit-linear-gradient(135deg, ${colors[colorMode].background} 75%, ${sectionColor} 25%)`;
  }

  return (
    <Flex
      alignItems="center"
      backgroundColor={colors[colorMode].background}
      backgroundImage={[
        mobileBackgroundImage,
        mobileBackgroundImage,
        backgroundImage,
        backgroundImage,
      ]}
      flexDirection="column"
      justifyContent="center"
      w="100%"
      {...props}
    >
      <Flex
        alignItems="center"
        flexDirection={[
          right ? 'column-reverse' : 'column',
          right ? 'column-reverse' : 'column',
          'row',
        ]}
        justifyContent="space-evenly"
        minHeight={['400px', '460px']}
        p={['6rem 1em', '6rem 3rem', '6rem 3rem', '6rem 6rem']}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default ContentSection;

ContentSection.defaultProps = {
  children: null,
  left: false,
  right: false,
  sectionColor: null,
};

ContentSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf([PropTypes.node])]),
  left: PropTypes.bool,
  right: PropTypes.bool,
  sectionColor: PropTypes.string,
};
