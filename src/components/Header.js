// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useLocation } from 'react-router-dom';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
// import { toggleDarkMode, toggleMenu } from '../store/uiSlice';

// const HeaderContainer = styled(motion.header)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 2000;
//   background: ${props => props.theme.colors.background}dd;
//   backdrop-filter: blur(10px);
//   border-bottom: 1px solid ${props => props.theme.colors.surface};
//   position: relative;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(90deg, transparent, ${props => props.theme.colors.primary}10, transparent);
//     opacity: 0;
//     transition: opacity 0.3s ease;
//   }

//   &:hover::before {
//     opacity: 1;
//   }
// `;

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const Logo = styled(motion.div)`
//   font-size: 1.5rem;
//   font-weight: 700;
//   background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 2rem;

//   @media (max-width: ${props => props.theme.breakpoints.mobile}) {
//     display: none;
//   }
// `;

// const NavLink = styled(motion(Link))`
//   position: relative;
//   font-weight: 500;
//   transition: color 0.3s ease;

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -5px;
//     left: 0;
//     width: 0;
//     height: 2px;
//     background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
//     transition: width 0.3s ease;
//   }

//   &:hover::after,
//   &.active::after {
//     width: 100%;
//   }
// `;

// const Controls = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// `;

// const ThemeToggle = styled(motion.button)`
//   background: none;
//   border: none;
//   font-size: 1.2rem;
//   color: ${props => props.theme.colors.text};
//   cursor: pointer;
//   padding: 0.5rem;
//   border-radius: 50%;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: ${props => props.theme.colors.surface};
//   }
// `;

// const MobileMenuButton = styled(motion.button)`
//   display: none;
//   background: none;
//   border: none;
//   font-size: 1.5rem;
//   color: ${props => props.theme.colors.text};
//   cursor: pointer;

//   @media (max-width: ${props => props.theme.breakpoints.mobile}) {
//     display: block;
//   }
// `;

// const MobileMenu = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: ${props => props.theme.colors.background};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 2rem;
//   z-index: 999;
// `;

// const MobileNavLink = styled(motion(Link))`
//   font-size: 1.5rem;
//   font-weight: 600;
//   color: ${props => props.theme.colors.text};
//   transition: color 0.3s ease;

//   &:hover {
//     color: ${props => props.theme.colors.primary};
//   }
// `;

// const Header = () => {
//   const dispatch = useDispatch();
//   const { isDarkMode, isMenuOpen } = useSelector((state) => state.ui);
//   const location = useLocation();

//   const navItems = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About' },
//     { path: '/experience', label: 'Experience' },
//     { path: '/projects', label: 'Projects' },
//     { path: '/skills', label: 'Skills' },
//     { path: '/contact', label: 'Contact' },
//   ];

//   return (
//     <>
//       <HeaderContainer
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Nav>
//           <Logo
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Portfolio
//           </Logo>

//           <NavLinks>
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 className={location.pathname === item.path ? 'active' : ''}
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {item.label}
//               </NavLink>
//             ))}
//           </NavLinks>

//           <Controls>
//             <ThemeToggle
//               onClick={() => dispatch(toggleDarkMode())}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {isDarkMode ? <FiSun /> : <FiMoon />}
//             </ThemeToggle>

//             <MobileMenuButton
//               onClick={() => dispatch(toggleMenu())}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {isMenuOpen ? <FiX /> : <FiMenu />}
//             </MobileMenuButton>
//           </Controls>
//         </Nav>
//       </HeaderContainer>

//       {isMenuOpen && (
//         <MobileMenu
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           {navItems.map((item, index) => (
//             <MobileNavLink
//               key={item.path}
//               to={item.path}
//               onClick={() => dispatch(toggleMenu())}
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {item.label}
//             </MobileNavLink>
//           ))}
//         </MobileMenu>
//       )}
//     </>
//   );
// };

// export default Header; 

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { toggleDarkMode, toggleMenu } from '../store/uiSlice';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  background: ${({ theme }) => theme.colors.background}dd;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.surface};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLink = styled(motion(Link))`
  position: relative;
  font-weight: 500;
  transition: color 0.3s ease;
  color: ${({ theme }) => theme.colors.text};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 3000; /* Make sure it's on top of everything */
`;

const MobileNavLink = styled(motion(Link))`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const { isDarkMode, isMenuOpen } = useSelector((state) => state.ui);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <HeaderContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Nav>
          <Logo whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Portfolio
          </Logo>

          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>

          <Controls>
            <ThemeToggle
              onClick={() => dispatch(toggleDarkMode())}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <FiSun /> : <FiMoon />}
            </ThemeToggle>

            <MobileMenuButton
              onClick={() => dispatch(toggleMenu())}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </MobileMenuButton>
          </Controls>
        </Nav>
      </HeaderContainer>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navItems.map((item, index) => (
              <MobileNavLink
                key={item.path}
                to={item.path}
                onClick={() => dispatch(toggleMenu())}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
