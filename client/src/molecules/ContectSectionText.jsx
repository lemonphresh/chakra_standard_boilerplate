import { Button, Flex, useColorMode } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import { CLCKBodyText, CLCKHeading, CLCKIntroText } from '../atoms/Typography';
import theme from '../theme';

const ContentSectionText = ({
  bodyText,
  ctaText,
  headingColor,
  headingText,
  headingUnderlineColor,
  introText,
  introTextColor,
}) => {
  const { colors } = theme;
  const { colorMode } = useColorMode();

  return (
    <Flex flexDirection="column" maxWidth={['500px', '500px', '450px']} mx={[4, 10]}>
      <CLCKHeading color={headingColor} fancyUnderlineColor={headingUnderlineColor}>
        {headingText}
      </CLCKHeading>
      <CLCKIntroText color={introTextColor} py={3}>
        {introText}
      </CLCKIntroText>
      <CLCKBodyText>{bodyText}</CLCKBodyText>
      {ctaText && (
        <Button
          backgroundColor={colors[colorMode].CTA}
          boxShadow="md"
          color={colors.white}
          m={['2rem auto', '2rem auto', '2rem 0']}
          w={['100%', 44]}
        >
          {ctaText}
        </Button>
      )}
    </Flex>
  );
};

ContentSectionText.defaultProps = {
  bodyText: null,
  ctaText: null,
  headingColor: null,
  headingText: null,
  headingUnderlineColor: null,
  introText: null,
  introTextColor: null,
};

ContentSectionText.propTypes = {
  bodyText: PropTypes.string,
  ctaText: PropTypes.string,
  headingColor: PropTypes.string,
  headingText: PropTypes.string,
  headingUnderlineColor: PropTypes.string,
  introText: PropTypes.string,
  introTextColor: PropTypes.string,
};

export default ContentSectionText;
