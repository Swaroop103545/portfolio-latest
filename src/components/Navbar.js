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
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const MobileNavLink = styled(NavLink)`
  font-size: 1.5rem;
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
          <MobileMenu initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MobileMenuIcon style={{ position: 'absolute', top: '1.5rem', right: '2rem' }} onClick={toggleMenu}><FiX /></MobileMenuIcon>
            {navItems.map(item => (
              <MobileNavLink key={item} to={item} spy={true} smooth={true} duration={500} offset={-70} onClick={closeMenu}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;