import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { FiBriefcase, FiChevronRight } from 'react-icons/fi';

const theme = {
  colors: {
    background: '#0a0a0a',
    text: '#E0E0E0',
    textSecondary: '#a0a0a0',
    primary: '#8A2BE2',
    cardBg: 'rgba(22, 22, 22, 0.6)',
    cardBorder: 'rgba(255, 255, 255, 0.1)',
    cardBorderHover: 'rgba(138, 43, 226, 0.8)',
  },
  breakpoints: {
    tablet: '768px',
  },
};

const ExperienceWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 100px 2rem;
  background: ${props => props.theme.colors.background};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 800px;
    background-image: radial-gradient(
      circle,
      ${props => props.theme.colors.primary}22,
      transparent 60%
    );
    transform: translate(-50%, -50%);
    filter: blur(100px);
    z-index: 0;
    animation: pulse 15s infinite ease-in-out alternate;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.5rem;
  letter-spacing: -1px;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textSecondary};
`;

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    width: 3px;
    background: ${props => props.theme.colors.cardBorder};
    box-shadow: 0 0 15px ${props => props.theme.colors.primary}50;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1.5px;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      left: 15px;
    }
  }
`;

const TimelineItemWrapper = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  
  &:nth-child(odd) {
    left: 0;
  }
  &:nth-child(even) {
    left: 50%;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    padding-left: 50px;
    padding-right: 0px;
    left: 0 !important;
  }
`;

const TimelineDot = styled.div`
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  background: ${props => props.theme.colors.background};
  border: 3px solid ${props => props.theme.colors.primary};
  top: 24px;
  right: -8px;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 10px ${props => props.theme.colors.primary};

  ${TimelineItemWrapper}:nth-child(even) & {
    left: -8px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    left: 7px;
  }
`;

const ExperienceCard = styled.div`
  padding: 1.5rem;
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 12px;
  position: relative;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  
  &:hover {
    border-color: ${props => props.theme.colors.cardBorderHover};
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  }
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.25rem;
    gap: 1rem;
`;

const Role = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`;

const Duration = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.textSecondary};
  font-weight: 500;
  flex-shrink: 0;
  text-align: right;
`;

const Company = styled.h4`
  font-size: 1rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  margin-bottom: 1rem;
`;

const DescriptionList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const DescriptionListItem = styled.li`
    display: flex;
    align-items: flex-start;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textSecondary};
    line-height: 1.6;
    margin-bottom: 0.5rem;
    
    svg {
        margin-right: 0.5rem;
        color: ${props => props.theme.colors.primary};
        flex-shrink: 0;
        margin-top: 4px;
    }
`;
const Experience = () => {
  const experienceData = [
    {
      role: 'Software Engineer',
      company: 'Systek Pro',
      duration: 'Mar 2025 – Present',
      description: [
        "Worked closely with designers to deliver a smooth, intuitive, and visually engaging user experience.",
        "Implemented essential APIs and enhanced overall app performance through significant optimizations."
      ],
    },
    {
      role: 'Senior React Native Developer',
      company: 'Mahasos Info Pvt Ltd',
      duration: 'Oct 2024 – Feb 2025',
      description: [
        "Delivered Parent and Student Modules while leading a small development team.",
        "Collaborated with designers to ensure a seamless and visually appealing user experience.",
        "Integrated critical APIs and significantly optimized application performance.",
        "Actively participated in agile ceremonies and client-facing meetings.",
      ],
    },
    {
      role: 'React Native Developer',
      company: 'Astria Digital Pvt Ltd',
      duration: 'Aug 2023 – May 2024',
      description: [
        "Developed a mobile application with a modern, user-friendly interface from the ground up.",
        "Integrated native modules such as SMS and Camera for enhanced functionality.",
        "Utilized Jest for efficient unit testing to ensure code quality and application stability.",
        "Collaborated with backend developers to integrate APIs and ensure smooth data flow.",
      ],
    },
    {
      role: 'Software Developer',
      company: 'Mayora Infotech',
      duration: 'Aug 2022 – Nov 2022',
      description: [
        "Designed and implemented core features for a new mobile application.",
        "Participated in daily stand-ups and sprint planning sessions.",
        "Focused on debugging, testing, and improving application stability.",
      ]
    },
    {
      role: 'Mobile App Developer',
      company: 'Freelance',
      duration: 'Sep 2019 – Present',
      description: [
        "Designed and developed mobile applications and web front-ends for various clients.",
        "Converted mock-ups into usable, responsive web presences with ReactJS.",
        "Developed cross-platform mobile apps for Android and iOS using React Native.",
        "Maintained direct communication with clients to gather requirements and deliver results."
      ]
    }
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <ThemeProvider theme={theme}>
      <ExperienceWrapper>
        <SectionHeader initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <SectionTitle>Career Journey</SectionTitle>
          <SectionSubtitle>My professional experience and growth over the years.</SectionSubtitle>
        </SectionHeader>

        <TimelineContainer>
          {experienceData.map((exp, index) => (
            <TimelineItemWrapper key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={variants}>
              <TimelineDot />
              <ExperienceCard>
                <CardHeader>
                  <Role>{exp.role}</Role>
                  <Duration>{exp.duration}</Duration>
                </CardHeader>
                <Company>{exp.company}</Company>
                <DescriptionList>
                  {exp.description.map((item, i) => (
                    <DescriptionListItem key={i}>
                      <FiChevronRight size={14} />
                      <span>{item}</span>
                    </DescriptionListItem>
                  ))}
                </DescriptionList>
              </ExperienceCard>
            </TimelineItemWrapper>
          ))}
        </TimelineContainer>
      </ExperienceWrapper>
    </ThemeProvider>
  );
};

export default Experience;