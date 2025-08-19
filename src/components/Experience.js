import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const ExperienceContainer = styled.div`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
  position: relative;
  text-align: center;

  &::after {
    content: '';
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.colors.accent};
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
  max-width: 700px;
  width: 100%;

  @media (max-width: 600px) {
    padding-left: 1.5rem;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 0.6rem;
    width: 14px;
    height: 14px;
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    z-index: 1;
  }
`;

const Icon = styled.div`
  position: absolute;
  left: -45px;
  top: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Role = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Company = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

const Duration = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: block;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
`;

const Experience = () => {
  const experienceData = [
    {
      role: 'Frontend Engineer',
      company: 'Outlier',
      duration: 'Mar 2025 – Present | Part-time',
      description:
        [
          "Reviewed AI-generated code in React Native, React, CSS, TS and JS for quality, performance, and maintainability",
          "Provided feedback on WCAG accessibility, responsive design, and UI/UX standard",
          "Authored technical prompts and explanations to enhance AI contextual understanding"
        ]
    },
    {
      role: 'Senior React Native Developer',
      company: 'Mahasos Info Pvt Ltd',
      duration: 'Oct 2024 – Feb 2025 | Remote',
      description:
        [
          "Responsible for the delivery of Parent and Student Modules and led a team",
          "Collaborated with designers to ensure a seamless and visually appealing user experience.",
          "Integrated APIs and optimized app performance.",
          "Actively participated in team and client meetings."

        ]
    },
    {
      role: 'React Native Developer',
      company: 'Astria Digital Pvt Ltd',
      duration: 'Aug 2023 – May 2024 | Remote',
      description:
        [
          "Developed a mobile application with a user-friendly interface",
          "Worked closely with designers to ensure a seamless and visually appealing user experience",
          "Integrated native modules such as SMS and Camera for enhanced functionality.",
          "Collaborated with backend developers to integrate APIs and ensure smooth data flow",
          "Utilized JEST for efficient unit testing of the application.",
          "Actively engaged in team meetings and client meetings for effective collaboration"

        ]
    },
    {
      role: 'Software Developer',
      company: 'Mayora Infotech',
      duration: 'Aug 2022 – Nov 2022 | Remote',
      description:
        [
          "Designed Mobile application",
          "Participated in team meetings",
          "Debugging and Tested application"
        ]
    },
    {
      role: 'Mobile App Developer',
      company: 'Freelance',
      duration: 'Sep 2019 – Present | Various Clients',
      description:
        [
          "Designing Mobile applications and websites front-end for different clients located in various states.",
          "Planned website development, converting mock-ups into usable web presence with ReactJS and Developing mobile applications for both android and iOS using React Native.",
          "Participated with clients in discussion meetings."
        ]
    }
  ];

  return (
    <ExperienceContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Experience
      </Title>
      <Timeline>
        {experienceData.map((exp, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Icon>
              <FiBriefcase />
            </Icon>
            <Role>{exp.role}</Role>
            <Company>{exp.company}</Company>
            <Duration>{exp.duration}</Duration>
            <Description>{exp.description.map((item, index) => <p key={index}>{index + 1}. {item}</p>)}</Description>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience;