import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const NavItem = ({ href = '/', text }) => (
  <Flex px={4}>
    <Link to={href}>{text}</Link>
  </Flex>
);

NavItem.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

NavItem.defaultProps = {
  href: '/',
  text: 'Home',
};

export default NavItem;
