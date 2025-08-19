import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-45%, -55%) scale(1.2); opacity: 0.7; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
`;

const gridAnimation = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 40px 40px; }
`;

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 100px 2rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Aurora Glow Effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 900px;
    height: 900px;
    background-image: radial-gradient(circle, ${props => props.theme.colors.primary}22, transparent 60%);
    transform: translate(-50%, -50%);
    filter: blur(120px);
    z-index: -2;
    animation: ${pulse} 20s infinite ease-in-out alternate;
  }

  /* Animated Grid Background */
  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    z-index: -1;
    animation: ${gridAnimation} 3s infinite linear;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 1;
`;

const SectionWrapper = ({ children, id }) => {
  return (
    <Wrapper id={id}>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default SectionWrapper;