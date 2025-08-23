import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import {
  FiCpu, FiSmartphone, FiCode, FiServer, FiCheckCircle, FiGitMerge, FiDatabase
} from 'react-icons/fi';
import {
  SiReact, SiTypescript, SiJavascript, SiFlutter, SiFirebase, SiGraphql, SiJest, SiAmazonaws, SiRedux, SiGit, SiJira, SiFigma
} from 'react-icons/si';
import { theme } from '../styles/theme';

const SkillsWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 100px 2rem;
  background: ${props => props.theme.colors.background};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 900px;
    height: 900px;
    background-image: radial-gradient(
      circle,
      ${props => props.theme.colors.primary}22,
      transparent 60%
    );
    transform: translate(-50%, -50%);
    filter: blur(100px);
    z-index: 0;
    animation: pulse 18s infinite ease-in-out alternate;
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
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -1px;
  margin-bottom: 0.5rem;
`;

const SectionSubtitle = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textSecondary};
`;

const TechStackCard = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 16px;
  padding: 2rem 2.5rem;
  backdrop-filter: blur(10px);
  margin-bottom: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 1.5rem;
  }
`;

const CategoryGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

const CategoryTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  
  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const SkillsGrid = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillPill = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.textSecondary};
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.1rem;
  }
  
  &:hover {
    color: #fff;
    background: ${props => props.theme.colors.primary}40;
    border-color: ${props => props.theme.colors.primary}80;
    transform: translateY(-2px);
  }
`;

const ToolsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
`;

const ToolCard = styled(motion.div)`
    background: ${props => props.theme.colors.cardBg};
    border: 1px solid ${props => props.theme.colors.cardBorder};
    border-radius: 12px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        border-color: ${props => props.theme.colors.cardBorderHover};
        box-shadow: 0 0 20px ${props => props.theme.colors.primary}30;
    }

    svg {
        font-size: 2.5rem;
        color: ${props => props.theme.colors.primary};
    }
`;

const ToolName = styled.span`
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.colors.text};
`;

const Skills = () => {
  const techStack = [
    {
      category: 'Mobile Development',
      icon: <FiSmartphone />,
      skills: [
        { name: 'React Native', icon: <SiReact /> },
        { name: 'Expo', icon: <SiReact /> },
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Native iOS/Android', icon: <FiCpu /> },
      ]
    },
    {
      category: 'Frontend & State Management',
      icon: <FiCode />,
      skills: [
        { name: 'React.js', icon: <SiReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
        { name: 'Redux & Toolkit', icon: <SiRedux /> },
        { name: 'RTK Query', icon: <SiRedux /> },
      ]
    },
    {
      category: 'Backend & Database',
      icon: <FiServer />,
      skills: [
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'GraphQL', icon: <SiGraphql /> },
        { name: 'REST APIs', icon: <FiDatabase /> },
        { name: 'SQL', icon: <FiDatabase /> },
        { name: 'AWS', icon: <SiAmazonaws /> },
      ]
    },
    {
      category: 'Testing & Quality',
      icon: <FiCheckCircle />,
      skills: [
        { name: 'Jest', icon: <SiJest /> },
        { name: 'Appium', icon: <FiCpu /> },
        { name: 'Unit & E2E Testing', icon: <FiCheckCircle /> },
      ]
    },
  ];

  const tools = [
    { name: 'Git', icon: <SiGit /> },
    { name: 'GitHub', icon: <FiGitMerge /> },
    { name: 'JIRA', icon: <SiJira /> },
    { name: 'VS Code', icon: <FiCode /> },
    { name: 'Figma', icon: <SiFigma /> },
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const pillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <ThemeProvider theme={theme}>
      <SkillsWrapper>
        <Container>
          <SectionHeader initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <SectionTitle>Skills & Expertise</SectionTitle>
            <SectionSubtitle>The technologies and tools I use to build modern applications.</SectionSubtitle>
          </SectionHeader>

          <TechStackCard initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            {techStack.map(category => (
              <CategoryGroup key={category.category}>
                <CategoryTitle>{category.icon} {category.category}</CategoryTitle>
                <SkillsGrid variants={gridVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                  {category.skills.map(skill => (
                    <SkillPill key={skill.name} variants={pillVariants}>
                      {skill.icon}
                      <span>{skill.name}</span>
                    </SkillPill>
                  ))}
                </SkillsGrid>
              </CategoryGroup>
            ))}
          </TechStackCard>

          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
            <SectionHeader style={{ marginBottom: '3rem' }}>
              <SectionTitle style={{ fontSize: '2.5rem' }}>Tools & Platforms</SectionTitle>
            </SectionHeader>
            <ToolsGrid>
              {tools.map((tool, index) => (
                <ToolCard key={tool.name} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                  {tool.icon}
                  <ToolName>{tool.name}</ToolName>
                </ToolCard>
              ))}
            </ToolsGrid>
          </motion.div>
        </Container>
      </SkillsWrapper>
    </ThemeProvider>
  );
};

export default Skills;