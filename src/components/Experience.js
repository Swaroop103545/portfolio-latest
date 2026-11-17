import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
  FiChevronRight,
  FiLayers,
  FiTerminal,
  FiTrendingUp
} from 'react-icons/fi';

const ExperienceSection = styled.section`
  padding: 100px 1.5rem;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.colors.background};

  &::before {
    content: '';
    position: absolute;
    top: 30%;
    left: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%);
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
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin-bottom: 2.25rem;
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
    background: ${props => props.theme.gradients.primary};
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
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.92rem;
    line-height: 1.6;
  }
`;

const TimelineWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;

  &::after {
    content: '';
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 28px;
    width: 2px;
    background: linear-gradient(
      180deg,
      rgba(99, 102, 241, 0.6) 0%,
      rgba(168, 85, 247, 0.4) 50%,
      rgba(6, 182, 212, 0.2) 100%
    );

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      left: 19px;
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      left: 16px;
      top: 10px;
      bottom: 10px;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 1.5rem;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 1.25rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.75rem;
  }
`;

const TimelineNode = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 16px;
  background: #0f1422;
  border: 2px solid ${props => (props.active ? props.theme.colors.primary : 'rgba(255, 255, 255, 0.12)')};
  color: ${props => (props.active ? props.theme.colors.cyanLight : props.theme.colors.textSecondary)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  flex-shrink: 0;
  z-index: 2;
  box-shadow: ${props => (props.active ? '0 0 20px rgba(99, 102, 241, 0.4)' : '0 4px 15px rgba(0,0,0,0.4)')};
  transition: all 0.3s ease;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    border-radius: 10px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 34px;
    height: 34px;
    font-size: 0.88rem;
    border-radius: 8px;
  }
`;

const ExperienceCard = styled.div`
  flex: 1;
  min-width: 0;
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 18px;
  padding: 1.85rem;
  backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  &:hover {
    border-color: ${props => props.theme.colors.cardBorderHover};
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45), 0 0 20px rgba(99, 102, 241, 0.15);
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 1.35rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.15rem 0.9rem;
    border-radius: 14px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

const RoleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoleTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.3px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

const CompanyName = styled.h4`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primaryLight};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    flex-wrap: wrap;
    gap: 0.35rem;
  }
`;

const MetaBadges = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
`;

const DurationBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.25);
  color: #a5b4fc;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.72rem;
    padding: 0.25rem 0.6rem;
  }
`;

const TypeBadge = styled.span`
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => (props.active ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)')};
  border: 1px solid ${props => (props.active ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 255, 255, 0.1)')};
  color: ${props => (props.active ? '#34d399' : '#94a3b8')};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.68rem;
    padding: 0.25rem 0.55rem;
  }
`;

const DutiesList = styled.ul`
  margin: 1.25rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin: 0.9rem 0;
    gap: 0.55rem;
  }
`;

const DutyItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.92rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.textSecondary};

  svg {
    color: ${props => props.theme.colors.cyanLight};
    flex-shrink: 0;
    margin-top: 4px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.85rem;
    line-height: 1.5;
    gap: 0.55rem;
  }
`;

const TechStackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.35rem;
    margin-top: 0.9rem;
    padding-top: 0.75rem;
  }
`;

const TechPill = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(99, 102, 241, 0.4);
    color: #fff;
    background: rgba(99, 102, 241, 0.1);
  }
`;

const Experience = () => {
  const experiences = [
    {
      role: 'Frontend Engineer (Part-Time)',
      company: 'Outlier',
      duration: 'March 2025 – Present',
      type: 'Active',
      location: 'Remote',
      isCurrent: true,
      icon: <FiTerminal />,
      responsibilities: [
        'Evaluate AI-generated code across React, React Native, TypeScript, JavaScript, and CSS for correctness, readability, maintainability, and runtime performance.',
        'Identify subtle implementation flaws, race conditions, memory leaks, and provide structured technical feedback to elevate frontend development best practices.',
        'Assess component architecture, WCAG accessibility fundamentals, robust error boundary handling, and clean code consistency.',
        'Develop, test, and refine prompts to improve the precision, correctness, and enterprise-grade usability of AI-assisted coding outputs.'
      ],
      technologies: ['AI Code Review', 'Prompt Engineering', 'React', 'React Native', 'TypeScript', 'WCAG Accessibility', 'Performance Optimization']
    },
    {
      role: 'Senior React Native Developer (Contract)',
      company: 'Mahasos Info Pvt. Ltd.',
      duration: 'October 2024 – February 2025',
      type: 'Contract',
      location: 'India',
      isCurrent: false,
      icon: <FiLayers />,
      responsibilities: [
        'Owned end-to-end implementation of Parent and Student application modules for PRAM Edu, covering UI development, API integration, feature validation, and release support.',
        'Translated complex product requirements and design specifications into modular, reusable, and maintainable React Native components and workflows.',
        'Integrated REST APIs and coordinated directly with backend and UI/UX teams to resolve integration bottlenecks and deliver key features.',
        'Improved screen responsiveness and application behavior through rendering optimization, memoization, debugging, and defect resolution.',
        'Integrated secure payment-related workflows using Razorpay for seamless tuition and fee processing.'
      ],
      technologies: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'REST APIs', 'Razorpay', 'Agile']
    },
    {
      role: 'React Native Developer',
      company: 'Astria Digital Pvt. Ltd.',
      duration: 'September 2023 – May 2024',
      type: 'Full-time',
      location: 'India',
      isCurrent: false,
      icon: <FiBriefcase />,
      responsibilities: [
        'Developed and maintained cross-platform mobile application features using React Native, TypeScript, and clean reusable component design patterns.',
        'Integrated native device capabilities, including Camera and SMS functionality, to support critical mobile workflows.',
        'Integrated backend services and coordinated API contracts, data schemas, and error handling with backend developers.',
        'Wrote comprehensive Jest unit tests and supported regression testing, debugging, and ongoing application maintenance.',
        'Contributed to overall code quality, application stability, and feature improvements across mobile user journeys.'
      ],
      technologies: ['React Native CLI', 'TypeScript', 'Camera Integration', 'SMS Integration', 'Jest', 'API Contracts', 'Git']
    },
    {
      role: 'React Native Developer',
      company: 'Mayora Infotech',
      duration: 'August 2022 – November 2022',
      type: 'Full-time',
      location: 'India',
      isCurrent: false,
      icon: <FiTrendingUp />,
      responsibilities: [
        'Contributed to React Native application development, reusable UI implementation, and API-integrated feature delivery.',
        'Implemented application screens and supported debugging, defect resolution, and ongoing maintenance.',
        'Coordinated with team members on component state and screen rendering improvements.'
      ],
      technologies: ['React Native', 'JavaScript (ES6+)', 'REST APIs', 'Component Design', 'Debugging']
    },
    {
      role: 'Freelance Frontend & Mobile Application Developer',
      company: 'Independent / Freelance',
      duration: 'September 2019 – Present',
      type: 'Freelance',
      location: 'Global / Remote',
      isCurrent: true,
      icon: <FiLayers />,
      responsibilities: [
        'Developed production-grade web and mobile application features using React.js, React Native, TypeScript, and Next.js across diverse independent projects.',
        'Implemented reusable components, responsive interfaces, navigation flows, and API-driven functionality based on product requirements and design references.',
        'Integrated centralized state management, authentication flows, data persistence (AsyncStorage/MMKV), and error-handling patterns.',
        'Managed full lifecycle project activities across requirement analysis, UI implementation, API integration, testing, debugging, and deployment support.'
      ],
      technologies: ['React Native', 'React.js', 'Next.js', 'TypeScript', 'GraphQL', 'Firebase', 'MMKV', 'App Store / Play Store']
    }
  ];

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>Career Journey</SectionTag>
          <SectionTitle>
            Proven Track Record of <span>Impact</span>
          </SectionTitle>
          <SectionSubtitle>
            A chronological timeline of my professional roles, contract deliveries, and engineering accomplishments.
          </SectionSubtitle>
        </SectionHeader>

        <TimelineWrapper>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TimelineNode active={exp.isCurrent}>
                {exp.icon}
              </TimelineNode>

              <ExperienceCard>
                <CardHeader>
                  <RoleInfo>
                    <RoleTitle>{exp.role}</RoleTitle>
                    <CompanyName>
                      <span>{exp.company}</span>
                      <span style={{ color: '#64748b', fontSize: '0.85rem' }}>• {exp.location}</span>
                    </CompanyName>
                  </RoleInfo>

                  <MetaBadges>
                    <DurationBadge>
                      <FiCalendar size={13} />
                      <span>{exp.duration}</span>
                    </DurationBadge>
                    <TypeBadge active={exp.isCurrent}>{exp.type}</TypeBadge>
                  </MetaBadges>
                </CardHeader>

                <DutiesList>
                  {exp.responsibilities.map((duty, dIdx) => (
                    <DutyItem key={dIdx}>
                      <FiCheckCircle size={16} />
                      <span>{duty}</span>
                    </DutyItem>
                  ))}
                </DutiesList>

                <TechStackRow>
                  {exp.technologies.map((tech, tIdx) => (
                    <TechPill key={tIdx}>{tech}</TechPill>
                  ))}
                </TechStackRow>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;