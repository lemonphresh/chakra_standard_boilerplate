import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import SEO from './pages/Services/Seo';
import WebDev from './pages/Services/WebDev';
import Social from './pages/Services/Social';
import CroUx from './pages/Services/CroUx';
import Analytics from './pages/Services/Analytics';
import Kyle from './pages/About/Kyle';
import Lemon from './pages/About/Lemon';
import Courtney from './pages/About/Courtney';
import Chris from './pages/About/Chris';
import NavBar from './organisms/NavBar';
import theme from './theme';
import Background from './atoms/Background';
import Footer from './organisms/Footer';

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => (
  <React.StrictMode>
    <ChakraProvider theme={theme} initialColorMode={theme.config.initialColorMode}>
      <Background>
        <Router>
          <NavBar
            alignment="center"
            justifyContent="space-between"
            navList={[
              {
                href: '/',
                text: 'Home',
              },
              {
                href: '/services',
                text: 'Services',
                sub: [
                  { href: '/services/cro-ux', text: 'CRO & UX' },
                  { href: '/services/', text: '' },
                ],
              },
              {
                href: '/blog',
                text: 'Blog',
              },
              {
                href: '/contact',
                text: 'Contact',
              },
              {
                href: '/about',
                text: 'About',
              },
            ]}
          />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />}>
              <Route path="/about/kyle-van-bergen" element={<Kyle />} />
              <Route path="/about/lemon-garrett" element={<Lemon />} />
              <Route path="/about/courtney-cooper" element={<Courtney />} />
              <Route path="/about/chris-humphrey" element={<Chris />} />
            </Route>

            <Route path="/services" element={<Services />}>
              <Route path="/services/seo" element={<SEO />} />
              <Route path="/services/web-development-design" element={<WebDev />} />
              <Route path="/services/social-media" element={<Social />} />
              <Route path="/services/cro-ux" element={<CroUx />} />
              <Route path="/services/digital-analytics" element={<Analytics />} />
            </Route>
            <Route path="/blog" element={<Blog />} />
          </Routes>

          <Footer />
        </Router>
      </Background>
    </ChakraProvider>
  </React.StrictMode>
);

root.render(<App />);
