import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCloud, FiSmartphone, FiPalette, FiServer } from 'react-icons/fi';

const SkillsContainer = styled.div`
  padding: 120px 0 80px;
  background: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${props => props.theme.colors.surface};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const CategoryIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const SkillLevel = styled.div`
  width: 100px;
  height: 8px;
  background: ${props => props.theme.colors.surface};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const SkillProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;

const ToolsSection = styled(motion.div)`
  margin-top: 3rem;
`;

const ToolsTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
`;

const ToolCard = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.surface};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}05, ${props => props.theme.colors.secondary}05);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 30px rgba(102, 126, 234, 0.2);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const ToolIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ToolName = styled.div`
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
`;

const ToolDescription = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textSecondary};
`;

const Skills = () => {
  const skillCategories = [
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <FiSmartphone />,
      skills: [
        { name: 'React Native', level: 95 },
        { name: 'Expo', level: 90 },
        { name: 'Flutter', level: 85 },
        { name: 'Native iOS', level: 80 },
        { name: 'Native Android', level: 80 },
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <FiCode />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'Material UI', level: 85 },
        { name: 'Redux', level: 90 },
      ]
    },
    {
      id: 'backend',
      title: 'Backend & Database',
      icon: <FiServer />,
      skills: [
        { name: 'Firebase', level: 85 },
        { name: 'GraphQL', level: 80 },
        { name: 'SQL', level: 75 },
        { name: 'REST APIs', level: 90 },
        { name: 'AWS', level: 70 },
      ]
    },
    {
      id: 'testing',
      title: 'Testing & Debugging',
      icon: <FiDatabase />,
      skills: [
        { name: 'Jest', level: 85 },
        { name: 'Appium', level: 75 },
        { name: 'Unit Testing', level: 90 },
        { name: 'Debugging', level: 95 },
        { name: 'Performance Testing', level: 80 },
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Version Control',
      icon: <FiCloud />,
      skills: [
        { name: 'GitHub', level: 90 },
        { name: 'GitLab', level: 85 },
        { name: 'JIRA', level: 80 },
        { name: 'VS Code', level: 95 },
        { name: 'BitBucket', level: 75 },
      ]
    },
    {
      id: 'softskills',
      title: 'Soft Skills',
      // icon: <FiPalette />,
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Leadership', level: 80 },
        { name: 'Fast Learning', level: 95 },
      ]
    }
  ];

  const tools = [
    {
      name: 'React Native',
      icon: '📱',
      description: 'Mobile Framework'
    },
    {
      name: 'Expo',
      icon: '⚡',
      description: 'Development Platform'
    },
    {
      name: 'Firebase',
      icon: '🔥',
      description: 'Backend Services'
    },
    {
      name: 'TypeScript',
      icon: '📘',
      description: 'Type Safety'
    },
    {
      name: 'Redux',
      icon: '🔄',
      description: 'State Management'
    },
    {
      name: 'Jest',
      icon: '🧪',
      description: 'Testing Framework'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      description: 'Version Control'
    },
    {
      name: 'JIRA',
      icon: '📋',
      description: 'Project Management'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <SkillsContainer>
      <Container>
        <SectionTitle
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SkillsGrid>
            {skillCategories.map((category) => (
              <SkillCategory
                key={category.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CategoryHeader>
                  <CategoryIcon>{category.icon}</CategoryIcon>
                  <CategoryTitle>{category.title}</CategoryTitle>
                </CategoryHeader>
                
                <SkillList>
                  {category.skills.map((skill, index) => (
                    <SkillItem key={index}>
                      <SkillName>{skill.name}</SkillName>
                      <SkillLevel>
                        <SkillProgress
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </SkillLevel>
                    </SkillItem>
                  ))}
                </SkillList>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </motion.div>

        <ToolsSection
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <ToolsTitle>Tools & Technologies</ToolsTitle>
          
          <ToolsGrid>
            {tools.map((tool, index) => (
              <ToolCard
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ToolIcon>{tool.icon}</ToolIcon>
                <ToolName>{tool.name}</ToolName>
                <ToolDescription>{tool.description}</ToolDescription>
              </ToolCard>
            ))}
          </ToolsGrid>
        </ToolsSection>
      </Container>
    </SkillsContainer>
  );
};

export default Skills; 