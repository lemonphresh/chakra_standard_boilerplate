import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CLCKHeading = ({ children, fancyUnderlineColor, ...props }) => (
  <Heading display="inline" letterSpacing="wider" {...props}>
    <span
      style={
        fancyUnderlineColor
          ? {
              backgroundSize: '1px 2.25rem',
              boxShadow: `inset 0 0.175em transparent, inset 0 -0.5em ${fancyUnderlineColor}`,
            }
          : null
      }
    >
      {children}
    </span>
  </Heading>
);

const CLCKIntroText = ({ children, ...props }) => (
  <Text fontFamily="introText" fontSize="lg" fontWeight="semibold" letterSpacing="wide" {...props}>
    {children}
  </Text>
);

const CLCKBodyText = ({ children, ...props }) => <Text {...props}>{children}</Text>;

const CLCKCodeText = ({ children, ...props }) => (
  <Text fontFamily="mono" {...props}>
    {children}
  </Text>
);

export { CLCKBodyText, CLCKCodeText, CLCKHeading, CLCKIntroText };

CLCKBodyText.defaultProps = {
  children: null,
};
CLCKCodeText.defaultProps = {
  children: null,
};
CLCKHeading.defaultProps = {
  children: null,
  fancyUnderlineColor: null,
};
CLCKIntroText.defaultProps = {
  children: null,
};

CLCKBodyText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf([PropTypes.node])]),
};
CLCKCodeText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf([PropTypes.node])]),
};
CLCKHeading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf([PropTypes.node])]),
  fancyUnderlineColor: PropTypes.string,
};
CLCKIntroText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf([PropTypes.node])]),
};
