import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../organisms/NavBar';

const About = () => (
  <Flex justifyContent="center" flexDirection="column" alignItems="center" p={16} w="100%">
    <h1>About Page</h1>
    <br />
    <NavBar
      navList={[
        {
          href: '/about/kyle-van-bergen',
          text: 'Kyle',
        },
        {
          href: '/about/lemon-garrett',
          text: 'Lemon',
        },
        {
          href: '/about/courtney-cooper',
          text: 'Courtney',
        },
        {
          href: '/about/chris-humphrey',
          text: 'Chris',
        },
      ]}
    />
    <Outlet />
  </Flex>
);

export default About;
