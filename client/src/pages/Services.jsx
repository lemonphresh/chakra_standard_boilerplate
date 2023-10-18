import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../organisms/NavBar';

const Services = () => (
  <Flex justifyContent="center" p={16} w="100%" flexDirection="column" alignItems="center">
    <h1>Services Page</h1>
    <br />
    <NavBar
      navList={[
        {
          href: '/services/seo',
          text: 'SEO',
        },
        {
          href: '/services/web-development-design',
          text: 'Web Design and Development',
        },
        {
          href: '/services/social-media',
          text: 'Social Media',
        },
        {
          href: '/services/cro-ux',
          text: 'CRO & UX',
        },
        {
          href: '/services/digital-analytics',
          text: 'Analytics',
        },
      ]}
    />
    <Outlet />
  </Flex>
);
export default Services;
