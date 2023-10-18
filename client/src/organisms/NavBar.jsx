import React from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';
import { v4 as uuid4 } from 'uuid';
import PropTypes from 'prop-types';
import NavItem from '../atoms/NavItem';
import Logo from '../atoms/Logo';
import theme from '../theme';

const NavBar = ({ navList, alignment, justifyContent }) => {
  const { colors } = theme;
  const { colorMode } = useColorMode();

  const navItems = navList.map((item) => (
    <NavItem href={item.href} key={uuid4()} text={item.text} />
  ));

  return (
    <Flex
      className="hello"
      alignItems={alignment}
      backgroundColor={colors[colorMode].navAndFooter}
      boxShadow="md"
      color={colors[colorMode].textColor}
      h={20}
      px={12}
      justifyContent={justifyContent}
      w="100%"
    >
      <Flex>
        <Logo />
      </Flex>
      <Flex>{navItems}</Flex>
    </Flex>
  );
};

NavBar.propTypes = {
  justifyContent: PropTypes.string,
  alignment: PropTypes.string,
  navList: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

NavBar.defaultProps = {
  alignment: 'center',
  justifyContent: 'center',
  navList: [],
};

export default NavBar;
