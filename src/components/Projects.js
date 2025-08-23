import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSmartphone, FiMonitor, FiCode } from 'react-icons/fi';
import { theme } from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'Inter', sans-serif;
  }
`;

const ProjectsWrapper = styled.section`
  position: relative;
  padding: 100px 0;
  background: ${props => props.theme.colors.background};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 800px;
    background-image: radial-gradient(
      circle,
      ${props => props.theme.colors.primary}33,
      transparent 60%
    );
    transform: translate(-50%, -50%);
    filter: blur(100px);
    z-index: 0;
    animation: pulse 15s infinite ease-in-out;
  }

  @keyframes pulse {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
    50% { transform: translate(-45%, -55%) scale(1.2); opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
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
  margin-bottom: 0.5rem;
  letter-spacing: -1px;
`;

const SectionSubtitle = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textSecondary};
`;

const FilterPills = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`;

const FilterPill = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border: 1px solid ${props => props.theme.colors.cardBorder};
  background: ${props => (props.active ? `${props.theme.colors.primary}30` : 'transparent')};
  color: ${props => (props.active ? '#fff' : props.theme.colors.textSecondary)};
  border-radius: 100px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  
  &:hover {
    color: #fff;
    border-color: ${props => props.theme.colors.primary}80;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  background: ${props => props.theme.colors.primary}B3; /* Semi-transparent */
  color: #fff;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 0 10px ${props => props.theme.colors.primary}70;
  z-index: 2;
`;

const CardContent = styled.div`
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  padding-right: 2.5rem;
`;

const ProjectTypeIcon = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.5rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.textSecondary};
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: scale(1.1);
  }
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All', icon: <FiCode /> },
    { id: 'mobile', label: 'Mobile', icon: <FiSmartphone /> },
    { id: 'web', label: 'Web', icon: <FiMonitor /> },
  ];

  const projects = [
    {
      id: 10,
      title: "SkillUp E-Learning App",
      description: "An e-learning app with offline support & CRUD, built with React Native, Redux, and GraphQL.",
      category: "mobile",
      technologies: ["React Native", "GraphQL", "Apollo", "Redux", "Offline-First"],
      github: "https://github.com",
      liveUrl: "",
      status: "ongoing"
    },
    {
      id: 11,
      title: "Social Media App",
      description: "Expo-based app with feed, likes, comments, profile editing, infinite scroll, and real-time chat.",
      category: "mobile",
      technologies: ["Expo", "Firebase", "WebSockets", "Infinite Scroll"],
      github: "https://github.com",
      liveUrl: "",
      status: "ongoing"
    },
    {
      id: 12,
      title: "Task & Habit Tracker",
      description: "Personal productivity app with analytics, reminders, and gamified habit tracking.",
      category: "mobile",
      technologies: ["React Native", "TypeScript", "Reanimated 2", "Push Notifications"],
      github: "https://github.com",
      liveUrl: "",
      status: "ongoing"
    },
    { id: 1, title: "PRAM Edu", description: "Comprehensive edu-tech platform for students, parents, and faculty.", category: "mobile", technologies: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "RTK Query"], liveUrl: "https://apps.apple.com/in/app/pram-edu/id6502035315", status: "completed" },
    { id: 2, title: "Movingful", description: "Business referral app with rewards, friends management, and earnings tracking.", category: "mobile", technologies: ["React Native", "GraphQL", "AWS", "Apollo", "Context API", "Storybook", "Jest"], liveUrl: "https://play.google.com/store/apps/details?id=com.movingful_provider", status: "completed" },
    { id: 3, title: "WorldSchool", description: "Online teaching app with chat, appointments, and class search functionality.", category: "mobile", technologies: ["React Native", "Redux", "Native Modules"], liveUrl: "https://play.google.com/store/apps/details?id=com.worldschool", status: "completed" },
    { id: 4, title: "Portfolio Website", description: "A sleek, modern portfolio built to showcase my skills and projects.", category: "web", technologies: ["React", "Styled-Components", "Framer Motion"], status: "completed" },
    { id: 5, title: "Thruptis Food Darbar", description: "Online food ordering platform with customer accounts and admin panel.", category: "web", technologies: ["React", "Redux", "Firebase"], github: "https://github.com", liveUrl: "https://example.com", status: "completed" },
    { id: 6, title: "Plants Management System", description: "Plant care app with online shopping, watering reminders, and admin panel.", category: "mobile", technologies: ["React Native", "Material UI", "Redux", "Firebase"], status: "completed" },
    { id: 7, title: "Cab Ordering System", description: "Mobile app for booking cabs with real-time tracking and payments, and admin panel.", category: "web", technologies: ["React JS", "Material UI", "Redux", "ExpressJs", "Firebase"], status: "completed" },
    { id: 8, title: "MediSync", description: "Health tracking app with Bluetooth integration and real-time data visualization.", category: "mobile", technologies: ["React Native", "TypeScript", "Redux", "BTE", "SVG Charts"], status: "completed" },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProjectsWrapper>
        <Container>
          <SectionHeader initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <SectionTitle>My Work</SectionTitle>
            <SectionSubtitle>A selection of projects that showcase my skills.</SectionSubtitle>
          </SectionHeader>

          <FilterPills initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            {filters.map(filter => (
              <FilterPill
                key={filter.id}
                active={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.icon}
                {filter.label}
              </FilterPill>
            ))}
          </FilterPills>

          <ProjectsGrid variants={gridVariants} initial="hidden" animate="visible">
            <AnimatePresence>
              {filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  variants={cardVariants}
                  layout
                  whileHover={{
                    borderColor: theme.colors.cardBorderHover,
                    boxShadow: `0 0 25px ${theme.colors.primary}40`,
                    y: -5
                  }}
                >
                  {project.status === 'ongoing' && <StatusBadge>Ongoing</StatusBadge>}
                  <CardContent>
                    <CardHeader>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectTypeIcon>
                        {project.category === 'mobile' ? <FiSmartphone /> : <FiMonitor />}
                      </ProjectTypeIcon>
                    </CardHeader>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectTech>
                      {project.technologies.slice(0, 8).map((tech, i) => <TechTag key={i}>{tech}</TechTag>)}
                    </ProjectTech>
                    <CardFooter>
                      {project.github && <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link"><FiGithub /></ProjectLink>}
                      {project.liveUrl && <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo Link"><FiExternalLink /></ProjectLink>}
                    </CardFooter>
                  </CardContent>
                </ProjectCard>
              ))}
            </AnimatePresence>
          </ProjectsGrid>
        </Container>
      </ProjectsWrapper>
    </ThemeProvider>
  );
};

export default Projects;