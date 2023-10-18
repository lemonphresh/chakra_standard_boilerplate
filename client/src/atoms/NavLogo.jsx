import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import { Image } from '@chakra-ui/react';

const NavLogo = ({ alt, ariaHidden, height, src }) => (
  <Link to="/">
    <Image alt={alt} aria-hidden={ariaHidden} h={height} maxHeight={20} src={src} />
  </Link>
);

NavLogo.propTypes = {
  alt: PropTypes.string,
  ariaHidden: PropTypes.bool,
  height: PropTypes.number,
  src: PropTypes.string,
};

NavLogo.defaultProps = {
  alt: '',
  ariaHidden: false,
  height: 6,
  src: '',
};

export default NavLogo;
