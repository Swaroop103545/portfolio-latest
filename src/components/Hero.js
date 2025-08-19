import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 800px;
    background-image: radial-gradient(circle, ${props => props.theme.colors.primary}33, transparent 60%);
    transform: translate(-50%, -50%);
    filter: blur(100px);
    z-index: -1;
    animation: pulse 15s infinite ease-in-out;
  }
`;

const Content = styled(motion.div)``;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: -2px;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 2rem;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px ${props => props.theme.colors.primary}40;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper id="hero">
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Subtitle>Swaroop Prataparao</Subtitle>
        <Title>Senior React Native Developer</Title>
        <Description>I build high-quality, cross-platform mobile applications with a focus on performance and user experience.</Description>
        <CTAButton to="projects" smooth={true} duration={500} offset={-70}>
          View My Work
        </CTAButton>
      </Content>
    </HeroWrapper>
  );
};

export default Hero;