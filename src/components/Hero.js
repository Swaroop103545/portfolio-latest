import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  FiArrowRight,
  FiDownload,
  FiMail,
  FiMapPin,
  FiPhone,
  FiCheckCircle,
  FiLayers,
  FiCpu,
  FiSmartphone,
  FiCode
} from 'react-icons/fi';
import { SiGithub, SiLinkedin, SiReact, SiTypescript } from 'react-icons/si';

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 1.5rem 60px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 500px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 70%);
    filter: blur(120px);
    z-index: 0;
    pointer-events: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 95px 1rem 40px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 82px 0.75rem 30px;
  }
`;

const HeroContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3.5rem;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
`;

const HeroLeft = styled(motion.div)`
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    align-items: center;
  }
`;

const StatusPill = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #34d399;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  margin-bottom: 1.5rem;
  width: fit-content;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.15);

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.74rem;
    padding: 0.35rem 0.8rem;
    text-align: left;
    line-height: 1.35;
    max-width: 100%;
    white-space: normal;
    margin-bottom: 1.25rem;
  }
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
  display: inline-block;
  flex-shrink: 0;
  animation: pulse 2s infinite ease-in-out;

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.85); }
  }
`;

const IntroGreeting = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.cyanLight};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    letter-spacing: 1.5px;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(1.9rem, 6.5vw, 4.2rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -1.2px;
  color: #fff;
  margin-bottom: 1.25rem;

  .gradient-text {
    background: ${props => props.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    letter-spacing: -0.75px;
    margin-bottom: 1rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 2rem;
  max-width: 640px;

  strong {
    color: #f1f5f9;
    font-weight: 600;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const MetaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-bottom: 2.25rem;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    justify-content: center;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.85rem;
  color: ${props => props.theme.colors.textSecondary};
  background: rgba(255, 255, 255, 0.03);
  padding: 0.35rem 0.8rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.06);

  svg {
    color: ${props => props.theme.colors.primaryLight};
    flex-shrink: 0;
  }

  a {
    color: inherit;
    &:hover {
      color: #fff;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.78rem;
    padding: 0.3rem 0.65rem;
  }
`;

const CTAButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    justify-content: center;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.65rem;
    margin-bottom: 1.75rem;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.85rem 1.85rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.95rem;
  color: #fff;
  background: ${props => props.theme.gradients.primary};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.6);
    color: #fff;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    padding: 0.8rem 1.25rem;
    font-size: 0.92rem;
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.85rem 1.85rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.95rem;
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${props => props.theme.colors.primaryLight};
    transform: translateY(-2px);
    color: #fff;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    padding: 0.8rem 1.25rem;
    font-size: 0.92rem;
  }
`;

const SocialStrip = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    justify-content: center;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.85rem;
    margin-top: 0.25rem;
  }
`;

const SocialIconLink = styled.a`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.15rem;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    background: ${props => props.theme.colors.primaryDark};
    border-color: ${props => props.theme.colors.primaryLight};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 44px;
    height: 44px;
  }
`;

const HeroRight = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TerminalCard = styled.div`
  width: 100%;
  background: #0d111a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(99, 102, 241, 0.15);
  backdrop-filter: blur(12px);
`;

const TerminalHeader = styled.div`
  padding: 0.75rem 1rem;
  background: rgba(17, 23, 38, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.65rem 0.75rem;
    gap: 0.5rem;
  }
`;

const WindowButtons = styled.div`
  display: flex;
  gap: 6px;
  flex-shrink: 0;

  span {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    display: inline-block;

    &:nth-child(1) { background: #ef4444; }
    &:nth-child(2) { background: #f59e0b; }
    &:nth-child(3) { background: #10b981; }
  }
`;

const TabList = styled.div`
  display: flex;
  gap: 0.35rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    overflow-x: auto;
    max-width: 100%;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TabButton = styled.button`
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-family: ${props => props.theme.fonts.mono};
  color: ${props => (props.active ? '#fff' : '#64748b')};
  background: ${props => (props.active ? 'rgba(99, 102, 241, 0.2)' : 'transparent')};
  border: 1px solid ${props => (props.active ? 'rgba(99, 102, 241, 0.4)' : 'transparent')};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #e2e8f0;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  }
`;

const CodeBody = styled.pre`
  padding: 1.25rem 1.5rem;
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.8rem;
  line-height: 1.6;
  color: #cbd5e1;
  overflow-x: auto;
  text-align: left;
  margin: 0;

  .keyword { color: #c084fc; font-weight: 600; }
  .type { color: #38bdf8; }
  .func { color: #f472b6; }
  .string { color: #34d399; }
  .comment { color: #64748b; font-style: italic; }
  .prop { color: #fbbf24; }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1rem 0.85rem;
    font-size: 0.72rem;
  }
`;

const FloatingBadgeGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  margin-top: 1.25rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const FloatingBadge = styled(motion.div)`
  background: rgba(17, 23, 38, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  text-align: left;

  &:hover {
    border-color: rgba(99, 102, 241, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.85rem 1rem;
  }
`;

const BadgeIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: ${props => props.bg || 'rgba(99, 102, 241, 0.15)'};
  color: ${props => props.color || props.theme.colors.primaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const BadgeText = styled.div`
  display: flex;
  flex-direction: column;
`;

const BadgeTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
`;

const BadgeSub = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.textSecondary};
`;

const Hero = () => {
  const [activeTab, setActiveTab] = useState('app');
  const resumeUrl = "/Swaroop_Prataparao_Sr_React_Native_Developer.pdf";

  const codeSnippets = {
    app: `// MobileArchitecture.tsx
import { AppLifecycle, MMKVStorage } from '@native/core';
import { useRTKQuery } from '@state/rtk';

export const useMobileWorkflow = () => {
  const { data, isCaching } = useRTKQuery();
  
  // High-performance offline persistence
  const cachedSession = MMKVStorage.get('USER_SESSION');
  
  return {
    isOfflineReady: true,
    renderOptimized: true,
    platform: 'Cross-Platform (iOS & Android)'
  };
};`,
    state: `// StateMachine.ts
import { configureStore, createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'enterpriseMobile',
  initialState: {
    roleBasedAccess: ['Parent', 'Student', 'Admin'],
    realtimeSync: true,
    gateway: 'Razorpay'
  },
  reducers: {
    optimizeRendering: (state) => {
      // 0-delay memoized state update
    }
  }
});`,
    ai: `// AICodeAudit.ts
export const evaluateFrontendCode = (submission: Code) => {
  return {
    readability: 'Exemplary',
    accessibilityWCAG: 'AA Compliant',
    performance: 'Optimized (60 FPS)',
    verdict: 'Approved for Production'
  };
};`
  };

  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroLeft
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <StatusPill
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <StatusDot />
            <span>Available for Frontend Roles & High-Impact Contracts</span>
          </StatusPill>

          <IntroGreeting>Hi, I am</IntroGreeting>

          <HeroTitle>
            Swaroop Prataparao <br />
            <span className="gradient-text">Senior React Native</span> & Frontend Engineer
          </HeroTitle>

          <HeroSubtitle>
            Specialized in architecting <strong>high-performance cross-platform mobile apps</strong> and responsive web systems using <strong>React Native, TypeScript, Next.js, and Redux Toolkit/GraphQL</strong>. Experienced in native module bridging, <strong>offline-first architectures</strong>.
          </HeroSubtitle>

          <MetaList>
            <MetaItem>
              <FiMapPin />
              <span>India</span>
            </MetaItem>
            <MetaItem>
              <FiPhone />
              <a href="tel:+918341114950">+91 8341114950</a>
            </MetaItem>
            <MetaItem>
              <FiMail />
              <a href="mailto:swaroopprataparao@gmail.com">swaroopprataparao@gmail.com</a>
            </MetaItem>
          </MetaList>

          <CTAButtonGroup>
            <PrimaryButton to="projects" smooth={true} duration={500} offset={-80}>
              <span>Explore My Work</span>
              <FiArrowRight />
            </PrimaryButton>

            <SecondaryButton href={resumeUrl} download="Swaroop_Prataparao_Resume.pdf">
              <FiDownload />
              <span>Download CV</span>
            </SecondaryButton>

            <SecondaryButton as={Link} to="contact" smooth={true} duration={500} offset={-80}>
              <span>Get In Touch</span>
            </SecondaryButton>
          </CTAButtonGroup>

          <SocialStrip>
            <SocialIconLink href="https://github.com/Swaroop103545" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <SiGithub />
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/in/swaroop-prataparao-9a4066153/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <SiLinkedin />
            </SocialIconLink>
            <SocialIconLink href="mailto:swaroopprataparao@gmail.com" aria-label="Email Swaroop">
              <FiMail />
            </SocialIconLink>
          </SocialStrip>
        </HeroLeft>

        <HeroRight
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <TerminalCard>
            <TerminalHeader>
              <WindowButtons>
                <span />
                <span />
                <span />
              </WindowButtons>

              <TabList>
                <TabButton active={activeTab === 'app'} onClick={() => setActiveTab('app')}>
                  <SiReact size={12} color="#38bdf8" />
                  <span>Architecture.tsx</span>
                </TabButton>
                <TabButton active={activeTab === 'state'} onClick={() => setActiveTab('state')}>
                  <SiTypescript size={12} color="#38bdf8" />
                  <span>Store.ts</span>
                </TabButton>
                <TabButton active={activeTab === 'ai'} onClick={() => setActiveTab('ai')}>
                  <FiCpu size={12} color="#a855f7" />
                  <span>AIAudit.ts</span>
                </TabButton>
              </TabList>
            </TerminalHeader>

            <CodeBody>
              <code>{codeSnippets[activeTab]}</code>
            </CodeBody>
          </TerminalCard>

          <FloatingBadgeGroup>
            <FloatingBadge whileHover={{ y: -3 }}>
              <BadgeIcon bg="rgba(99, 102, 241, 0.15)" color="#818cf8">
                <FiSmartphone />
              </BadgeIcon>
              <BadgeText>
                <BadgeTitle>5+ Years</BadgeTitle>
                <BadgeSub>Mobile & Frontend Exp</BadgeSub>
              </BadgeText>
            </FloatingBadge>

            <FloatingBadge whileHover={{ y: -3 }}>
              <BadgeIcon bg="rgba(6, 182, 212, 0.15)" color="#22d3ee">
                <FiCheckCircle />
              </BadgeIcon>
              <BadgeText>
                <BadgeTitle>App Store</BadgeTitle>
                <BadgeSub>& Google Play Live Apps</BadgeSub>
              </BadgeText>
            </FloatingBadge>

            <FloatingBadge whileHover={{ y: -3 }}>
              <BadgeIcon bg="rgba(168, 85, 247, 0.15)" color="#c084fc">
                <FiCpu />
              </BadgeIcon>
              <BadgeText>
                <BadgeTitle>AI Reviewer</BadgeTitle>
                <BadgeSub>Code Evaluator @ Outlier</BadgeSub>
              </BadgeText>
            </FloatingBadge>

            <FloatingBadge whileHover={{ y: -3 }}>
              <BadgeIcon bg="rgba(16, 185, 129, 0.15)" color="#34d399">
                <FiLayers />
              </BadgeIcon>
              <BadgeText>
                <BadgeTitle>Full Lifecycle</BadgeTitle>
                <BadgeSub>Figma to App Deployment</BadgeSub>
              </BadgeText>
            </FloatingBadge>
          </FloatingBadgeGroup>
        </HeroRight>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;