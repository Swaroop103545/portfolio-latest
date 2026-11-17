import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FiDownload,
  FiBookOpen,
  FiAward,
  FiCpu,
  FiCheck,
  FiLayers,
  FiShield,
  FiSmartphone,
  FiExternalLink
} from 'react-icons/fi';
import { SiReact, SiTypescript, SiRedux, SiFirebase, SiApple, SiGoogleplay } from 'react-icons/si';

const AboutSection = styled.section`
  padding: 100px 1.5rem;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.colors.backgroundSecondary};

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
    filter: blur(100px);
    pointer-events: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 75px 1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 60px 0.75rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin-bottom: 2rem;
  }
`;

const SectionTag = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.primaryLight};
  background: rgba(99, 102, 241, 0.1);
  padding: 0.35rem 1rem;
  border-radius: 9999px;
  border: 1px solid rgba(99, 102, 241, 0.25);
  margin-bottom: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.74rem;
    padding: 0.3rem 0.85rem;
    letter-spacing: 1.5px;
    margin-bottom: 0.75rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 5.5vw, 3rem);
  font-weight: 800;
  letter-spacing: -1px;
  color: #fff;
  margin-bottom: 0.75rem;

  span {
    background: ${props => props.theme.gradients.cyanIndigo};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    letter-spacing: -0.5px;
    margin-bottom: 0.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.05rem;
  color: ${props => props.theme.colors.textSecondary};
  max-width: 650px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.92rem;
    line-height: 1.6;
  }
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`;

const BentoCard = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: ${props => props.theme.colors.cardBorderHover};
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.25rem 1rem;
    border-radius: 16px;
  }
`;

const SummaryCard = styled(BentoCard)`
  grid-column: span 8;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-column: span 12;
  }
`;

const StatsCard = styled(BentoCard)`
  grid-column: span 4;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-column: span 12;
  }
`;

const PillarsCard = styled(BentoCard)`
  grid-column: span 7;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-column: span 12;
  }
`;

const EducationCard = styled(BentoCard)`
  grid-column: span 5;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-column: span 12;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

const CardIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(99, 102, 241, 0.15);
  color: ${props => props.theme.colors.primaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 36px;
    height: 36px;
    font-size: 1.05rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.15rem;
  }
`;

const BioParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.92rem;
    line-height: 1.65;
    margin-bottom: 1rem;
  }
`;

const HighlightBadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.45rem;
    margin-top: 1.25rem;
  }
`;

const HighlightBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #e2e8f0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.74rem;
    padding: 0.35rem 0.65rem;
    word-break: break-word;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-top: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.75rem;
  }
`;

const StatItem = styled.div`
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.08);
    border-color: rgba(99, 102, 241, 0.25);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.9rem 0.6rem;
    border-radius: 10px;
  }
`;

const StatNumber = styled.div`
  font-size: 2.2rem;
  font-weight: 800;
  background: ${props => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
  margin-bottom: 0.35rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.85rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: ${props => props.theme.colors.textSecondary};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.7rem;
    letter-spacing: 0.5px;
  }
`;

const PillarsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }
`;

const PillarItem = styled.div`
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1rem 0.85rem;
  }
`;

const PillarTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme.colors.cyanLight};
  }
`;

const PillarDesc = styled.div`
  font-size: 0.82rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.textSecondary};
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const EducationItem = styled.div`
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-left: 3px solid ${props => props.theme.colors.primaryLight};
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    background: rgba(99, 102, 241, 0.05);
  }
`;

const DegreeTitle = styled.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.25rem;
`;

const University = styled.div`
  font-size: 0.88rem;
  color: ${props => props.theme.colors.primaryLight};
  font-weight: 500;
  margin-bottom: 0.35rem;
`;

const EduMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.textMuted};

  span.badge {
    background: rgba(16, 185, 129, 0.12);
    color: #34d399;
    padding: 0.15rem 0.5rem;
    border-radius: 4px;
    font-weight: 600;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>Professional Profile</SectionTag>
          <SectionTitle>
            Architecting Seamless <span>Mobile & Web</span> Solutions
          </SectionTitle>
          <SectionSubtitle>
            A closer look into my background, engineering philosophy, and cross-platform journey.
          </SectionSubtitle>
        </SectionHeader>

        <BentoGrid>
          <SummaryCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CardHeader>
              <CardIcon>
                <FiLayers />
              </CardIcon>
              <div>
                <CardTitle>Professional Summary</CardTitle>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Full Lifecycle Engineering & AI-Assisted Development
                </span>
              </div>
            </CardHeader>

            <BioParagraph>
              React Native and Frontend Developer with experience building cross-platform mobile applications and responsive web interfaces using <strong>React Native, React.js, TypeScript, JavaScript, and Next.js</strong>. Skilled in modular application architecture, state management, REST and GraphQL API integration, performance optimization, reusable component development, and Figma-to-code implementation.
            </BioParagraph>

            <BioParagraph>
              Experienced in delivering features across the development lifecycle, collaborating with cross-functional teams, integrating native device capabilities (Camera, SMS, Push Notifications, Deep Linking), and supporting application testing, debugging, and production releases on both the <strong>Apple App Store</strong> and <strong>Google Play Store</strong>.
            </BioParagraph>

            <BioParagraph>
              Additionally experienced at <strong>Outlier</strong> evaluating AI-generated code and providing structured technical feedback on code quality, maintainability, WCAG accessibility, and runtime performance.
            </BioParagraph>

            <HighlightBadgeRow>
              <HighlightBadge><SiReact color="#38bdf8" /> React Native CLI & Expo</HighlightBadge>
              <HighlightBadge><SiTypescript color="#60a5fa" /> TypeScript</HighlightBadge>
              <HighlightBadge><SiRedux color="#a855f7" /> Redux Toolkit & RTK Query</HighlightBadge>
              <HighlightBadge><SiFirebase color="#f59e0b" /> Firebase & AWS</HighlightBadge>
              <HighlightBadge><SiApple color="#fff" /> App Store</HighlightBadge>
              <HighlightBadge><SiGoogleplay color="#34d399" /> Google Play</HighlightBadge>
            </HighlightBadgeRow>
          </SummaryCard>

          <StatsCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <CardHeader>
                <CardIcon>
                  <FiAward />
                </CardIcon>
                <div>
                  <CardTitle>Key Metrics</CardTitle>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Measurable Impact</span>
                </div>
              </CardHeader>
            </div>

            <StatsGrid>
              <StatItem>
                <StatNumber>5+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>15+</StatNumber>
                <StatLabel>Delivered Modules</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>100k+</StatNumber>
                <StatLabel>Users Served</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>99.9%</StatNumber>
                <StatLabel>Crash-Free Target</StatLabel>
              </StatItem>
            </StatsGrid>
          </StatsCard>

          <PillarsCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <CardHeader>
              <CardIcon>
                <FiCpu />
              </CardIcon>
              <div>
                <CardTitle>Core Engineering Pillars</CardTitle>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>How I build software</span>
              </div>
            </CardHeader>

            <PillarsList>
              <PillarItem>
                <PillarTitle>
                  <FiSmartphone />
                  Modular Mobile Architecture
                </PillarTitle>
                <PillarDesc>
                  Reusable components, clean layer segregation, role-based navigation, and seamless Figma-to-code translations.
                </PillarDesc>
              </PillarItem>

              <PillarItem>
                <PillarTitle>
                  <FiLayers />
                  State & Offline First
                </PillarTitle>
                <PillarDesc>
                  Redux Toolkit, RTK Query, React Query, Zustand, with ultra-fast AsyncStorage and MMKV caching.
                </PillarDesc>
              </PillarItem>

              <PillarItem>
                <PillarTitle>
                  <FiShield />
                  Native Device Features
                </PillarTitle>
                <PillarDesc>
                  Deep Linking, Push Notifications (FCM), Razorpay payments, SMS integration, and Camera native modules.
                </PillarDesc>
              </PillarItem>

              <PillarItem>
                <PillarTitle>
                  <FiCheck />
                  AI & Quality Assurance
                </PillarTitle>
                <PillarDesc>
                  Rigorous Jest testing, Appium, WCAG accessibility compliance, and prompt-engineered workflows.
                </PillarDesc>
              </PillarItem>
            </PillarsList>
          </PillarsCard>

          <EducationCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardHeader>
              <CardIcon>
                <FiBookOpen />
              </CardIcon>
              <div>
                <CardTitle>Education</CardTitle>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Academic Foundation</span>
              </div>
            </CardHeader>

            <EducationList>
              <EducationItem>
                <DegreeTitle>Master’s in Computer Science</DegreeTitle>
                <University>Manipal University</University>
                <EduMeta>
                  <span>Graduated 2022</span>
                  <span className="badge">CGPA: 7.8</span>
                </EduMeta>
              </EducationItem>

              <EducationItem>
                <DegreeTitle>Bachelor’s in Computer Science</DegreeTitle>
                <University>Sri Gayatri Degree College</University>
                <EduMeta>
                  <span>Graduated 2019</span>
                  <span className="badge">CGPA: 7.8</span>
                </EduMeta>
              </EducationItem>
            </EducationList>
          </EducationCard>
        </BentoGrid>
      </Container>
    </AboutSection>
  );
};

export default About;