import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiDownload, FiArrowUpRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const NavHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${props => (props.scrolled ? '0.75rem 1.5rem' : '1.25rem 1.5rem')};
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => (props.scrolled ? '0.45rem 0.75rem' : '0.65rem 0.75rem')};
  }
`;

const NavContainer = styled.nav`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.65rem 1.25rem;
  border-radius: 9999px;
  background: ${props =>
    props.scrolled ? 'rgba(13, 17, 26, 0.88)' : 'rgba(17, 23, 38, 0.55)'};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${props =>
    props.scrolled ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255, 255, 255, 0.08)'};
  box-shadow: ${props =>
    props.scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 15px rgba(99, 102, 241, 0.1)' : 'none'};
  transition: all 0.3s ease;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.45rem 0.75rem;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.5rem;
  }
`;

const LogoBadge = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: ${props => props.theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.05rem;
  color: #fff;
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
  flex-shrink: 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 34px;
    height: 34px;
    font-size: 0.95rem;
    border-radius: 8px;
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.breakpoints.mobileSm}) {
    display: none;
  }
`;

const BrandName = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: #fff;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.85rem;
    white-space: nowrap;
  }
`;

const BrandTitle = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  color: ${props => props.theme.colors.cyanLight};
  text-transform: uppercase;
  letter-spacing: 0.8px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
  }

  &.active {
    color: #fff;
    background: rgba(99, 102, 241, 0.15);
    border: 1px solid rgba(99, 102, 241, 0.3);
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.45rem;
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 9999px;
  color: #fff;
  background: ${props => props.theme.gradients.primary};
  border: 1px solid rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.5);
    color: #fff;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.4rem 0.75rem;
    font-size: 0.76rem;
    gap: 0.3rem;
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
  flex-shrink: 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 34px;
    height: 34px;
    font-size: 1.1rem;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(8, 9, 14, 0.98);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  padding: max(1.75rem, env(safe-area-inset-top, 1.75rem)) 1.5rem max(1.75rem, env(safe-area-inset-bottom, 1.75rem));
  overflow-y: auto;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const MobileNavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1;
`;

const MobileNavItem = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover, &.active {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navItems = [
    { name: 'About', target: 'about' },
    { name: 'Experience', target: 'experience' },
    { name: 'Skills', target: 'skills' },
    { name: 'Projects', target: 'projects' },
    { name: 'Contact', target: 'contact' },
  ];

  const resumeUrl = "/Swaroop_Prataparao_Sr_React_Native_Developer.pdf";

  return (
    <NavHeader scrolled={scrolled}>
      <NavContainer scrolled={scrolled}>
        <LogoContainer to="hero" smooth={true} duration={500}>
          <LogoBadge>SP</LogoBadge>
          <LogoText>
            <BrandName>Swaroop Prataparao</BrandName>
            <BrandTitle>Sr. React Native Dev</BrandTitle>
          </LogoText>
        </LogoContainer>

        <NavLinks>
          {navItems.map(item => (
            <NavItem
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              {item.name}
            </NavItem>
          ))}
        </NavLinks>

        <NavActions>
          <ResumeButton href={resumeUrl} download="Swaroop_Prataparao_Resume.pdf">
            <FiDownload />
            <span>Resume</span>
          </ResumeButton>

          <MobileMenuToggle onClick={() => setMenuOpen(true)} aria-label="Open navigation menu">
            <FiMenu />
          </MobileMenuToggle>
        </NavActions>
      </NavContainer>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenuOverlay
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <MobileMenuHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <LogoBadge>SP</LogoBadge>
                <BrandName>Swaroop Prataparao</BrandName>
              </div>
              <MobileMenuToggle onClick={() => setMenuOpen(false)} aria-label="Close navigation menu">
                <FiX />
              </MobileMenuToggle>
            </MobileMenuHeader>

            <MobileNavList>
              {navItems.map(item => (
                <MobileNavItem
                  key={item.target}
                  to={item.target}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  <FiArrowUpRight size={20} />
                </MobileNavItem>
              ))}
            </MobileNavList>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ResumeButton href={resumeUrl} download="Swaroop_Prataparao_Resume.pdf" style={{ justifyContent: 'center', padding: '0.9rem' }}>
                <FiDownload size={18} />
                <span>Download Full CV</span>
              </ResumeButton>
              <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.8rem' }}>
                swaroopprataparao@gmail.com • +91 8341114950
              </p>
            </div>
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
    </NavHeader>
  );
};

export default Navbar;