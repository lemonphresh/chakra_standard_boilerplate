import React from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';
import theme from '../theme';
import { CLCKBodyText } from '../atoms/Typography';

const Footer = (props) => {
  const { colors } = theme;
  const { colorMode } = useColorMode();

  return (
    <Flex
      alignItems="center"
      backgroundColor={colors[colorMode].navAndFooter}
      flexDirection="column"
      justifyContent={['center', 'center', 'space-between', 'space-between']}
      p="6rem 0"
      {...props}
    >
      <CLCKBodyText>© Copyright 2022 CLCK Digital</CLCKBodyText>
    </Flex>
  );
};

export default Footer;
