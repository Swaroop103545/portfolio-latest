import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const LoadingContent = styled.div`
  text-align: center;
`;

const Logo = styled(motion.div)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const LoadingText = styled(motion.div)`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const LoadingSpinner = styled(motion.div)`
  width: 60px;
  height: 60px;
  border: 3px solid ${props => props.theme.colors.surface};
  border-top: 3px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border: 3px solid transparent;
    border-top: 3px solid ${props => props.theme.colors.secondary};
    border-radius: 50%;
    animation: spin 1.5s linear infinite reverse;
  }

  &::after {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    border: 3px solid transparent;
    border-top: 3px solid ${props => props.theme.colors.accent};
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled(motion.div)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
`;

const LoadingScreen = () => {
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const dotVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <LoadingContainer>
      <LoadingContent>
        <Logo
          variants={logoVariants}
          initial="initial"
          animate="animate"
        >
          Portfolio
        </Logo>
        
        <LoadingText
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Loading amazing things...
        </LoadingText>
        
        <LoadingSpinner
          variants={spinnerVariants}
          animate="animate"
        />
        
        <LoadingDots>
          {[0, 1, 2].map((index) => (
            <Dot
              key={index}
              variants={dotVariants}
              animate="animate"
              transition={{ delay: index * 0.2 }}
            />
          ))}
        </LoadingDots>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default LoadingScreen; 