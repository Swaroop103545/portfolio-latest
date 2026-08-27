import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  background: ${props => props.scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.textSecondary};
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover, &.active {
    color: #fff;
    &::after {
      transform: scaleX(1);
    }
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 2000;
  padding: 2rem;
  box-sizing: border-box;
`;

const MobileNavLink = styled(NavLink)`
  font-size: 1.8rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 200px;
  
  &:hover {
    background-color: rgba(138, 43, 226, 0.2);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const CloseButton = styled(MobileMenuIcon)`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = ['about', 'experience', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <Nav scrolled={scrolled}>
        <Logo to="hero" smooth={true} duration={500}>SP.</Logo>
        <NavLinks>
          {navItems.map(item => (
            <NavLink key={item} to={item} spy={true} smooth={true} duration={500} offset={-70}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </NavLinks>
        <MobileMenuIcon onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </MobileMenuIcon>
      </Nav>
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <CloseButton onClick={closeMenu}>
              <FiX />
            </CloseButton>
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <MobileNavLink
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={closeMenu}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </MobileNavLink>
              </motion.div>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;