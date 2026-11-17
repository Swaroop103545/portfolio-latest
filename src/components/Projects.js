import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSmartphone,
  FiGlobe,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiCheckCircle,
  FiArrowUpRight,
  FiShoppingBag,
  FiActivity,
  FiUsers,
  FiShield
} from 'react-icons/fi';
import { SiApple, SiGoogleplay, SiReact, SiNextdotjs } from 'react-icons/si';

const ProjectsSection = styled.section`
  padding: 100px 1.5rem;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.colors.background};

  &::before {
    content: '';
    position: absolute;
    top: 25%;
    right: 5%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
    filter: blur(120px);
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
  max-width: 1240px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3.5rem;

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
  max-width: 650px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.92rem;
    line-height: 1.6;
  }
`;

const FilterPillsRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-bottom: 3.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.45rem;
    margin-bottom: 2rem;
  }
`;

const FilterPill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.88rem;
  font-weight: 600;
  color: ${props => (props.active ? '#fff' : props.theme.colors.textSecondary)};
  background: ${props => (props.active ? props.theme.gradients.primary : 'rgba(255, 255, 255, 0.04)')};
  border: 1px solid ${props => (props.active ? 'transparent' : 'rgba(255, 255, 255, 0.08)')};
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: ${props => (props.active ? '0 4px 15px rgba(99, 102, 241, 0.35)' : 'none')};

  &:hover {
    color: #fff;
    background: ${props => (props.active ? props.theme.gradients.primary : 'rgba(255, 255, 255, 0.08)')};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.78rem;
    padding: 0.42rem 0.85rem;
    gap: 0.35rem;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  position: relative;

  &:hover {
    border-color: ${props => props.theme.colors.cardBorderHover};
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.45), 0 0 25px rgba(99, 102, 241, 0.15);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    border-radius: 16px;
  }
`;

const CardTop = styled.div`
  padding: 1.75rem 1.75rem 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.25rem 1rem 0.85rem;
  }
`;

const CardMetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin-bottom: 0.75rem;
  }
`;

const PlatformBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => props.bg || 'rgba(99, 102, 241, 0.15)'};
  border: 1px solid ${props => props.border || 'rgba(99, 102, 241, 0.3)'};
  color: ${props => props.color || props.theme.colors.primaryLight};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
  }
`;

const RoleTag = styled.span`
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 500;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.7rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.3px;
  margin-bottom: 0.35rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

const ProjectSubtitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => props.theme.colors.cyanLight};
  margin-bottom: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.92rem;
  line-height: 1.65;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 1.25rem;
  flex: 1;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.88rem;
    line-height: 1.55;
    margin-bottom: 1rem;
  }
`;

const HighlightsList = styled.ul`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin-bottom: 1.15rem;
    gap: 0.35rem;
  }
`;

const HighlightBullet = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #cbd5e1;

  svg {
    color: ${props => props.theme.colors.emeraldLight};
    flex-shrink: 0;
    margin-top: 3px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.35rem;
    padding-top: 0.75rem;
  }
`;

const TechTag = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
  }
`;

const CardBottomBar = styled.div`
  padding: 1.25rem 1.75rem;
  background: rgba(13, 17, 26, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.9rem 1rem;
  }
`;

const ActionButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const PrimaryCardLink = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.55rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  background: ${props => props.theme.gradients.primary};
  transition: all 0.2s ease;
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.25);

  &:hover {
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
    transform: translateY(-2px);
    color: #fff;
  }

  @media (max-width: 400px) {
    width: 100%;
    min-height: 40px;
  }
`;

const SecondaryCardLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.55rem 0.85rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(99, 102, 241, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 400px) {
    width: 100%;
    min-height: 40px;
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'pram-edu',
      title: 'PRAM Edu',
      subtitle: 'Education Management Platform',
      category: 'mobile',
      platform: 'App Store (iOS)',
      platformIcon: <SiApple />,
      platformBg: 'rgba(56, 189, 248, 0.12)',
      platformBorder: 'rgba(56, 189, 248, 0.3)',
      platformColor: '#38bdf8',
      role: 'Lead Mobile Module Owner',
      description:
        'End-to-end mobile application supporting students, parents, faculty, tuition teachers, and bus operators with role-based access control and streamlined fee collections.',
      highlights: [
        'Built full Parent & Student workflows with reusable components',
        'State management & caching with Redux Toolkit and RTK Query',
        'Integrated Razorpay secure payment gateway workflows',
        'Full production deployment and release maintenance'
      ],
      technologies: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'REST APIs', 'Razorpay'],
      liveUrl: 'https://apps.apple.com/in/app/pram-edu/id6502035315',
      primaryActionLabel: 'App Store'
    },
    {
      id: 'movingful',
      title: 'Movingful',
      subtitle: 'Referral-Based Networking Application',
      category: 'mobile',
      platform: 'iOS / Reference',
      platformIcon: <FiSmartphone />,
      platformBg: 'rgba(168, 85, 247, 0.12)',
      platformBorder: 'rgba(168, 85, 247, 0.3)',
      platformColor: '#c084fc',
      role: 'React Native Developer',
      description:
        'Business referral, favorites, and earnings platform built with React Native CLI, featuring smooth navigation and seamless GraphQL data orchestration.',
      highlights: [
        'Integrated GraphQL queries & mutations with client caching',
        'Built reusable UI components & core user journeys',
        'Authored Jest automated unit and regression tests',
        'Performance optimization and memory leak mitigation'
      ],
      technologies: ['React Native CLI', 'TypeScript', 'Context API', 'GraphQL', 'AWS', 'Jest'],
      liveUrl: 'https://movingful-ios.soft112.com/',
      primaryActionLabel: 'View App Reference'
    },
    {
      id: 'worldschool',
      title: 'WorldSchool',
      subtitle: 'Online Interactive Learning Application',
      category: 'mobile',
      platform: 'App Store / iOS',
      platformIcon: <SiApple />,
      platformBg: 'rgba(34, 211, 238, 0.12)',
      platformBorder: 'rgba(34, 211, 238, 0.3)',
      platformColor: '#22d3ee',
      role: 'Mobile Engineer',
      description:
        'Real-time learning ecosystem featuring live chat, appointment scheduling, and multi-tenant class management across public and private groups.',
      highlights: [
        'Real-time chat & class schedule coordination with Firebase',
        'Modular component architecture with Redux state handling',
        'Optimized list rendering and smooth touch interactions',
        'Defect resolution and ongoing App Store release support'
      ],
      technologies: ['React Native', 'React.js', 'Redux', 'Firebase', 'Real-Time Sync'],
      liveUrl: 'https://apps.apple.com/ec/app/worldschool/id6443949707',
      primaryActionLabel: 'App Store Link'
    },
    {
      id: 'pram-dashboard',
      title: 'PRAM Edu Admin Dashboard',
      subtitle: 'Enterprise Management Portal',
      category: 'web',
      platform: 'Next.js Web Portal',
      platformIcon: <SiNextdotjs />,
      platformBg: 'rgba(16, 185, 129, 0.12)',
      platformBorder: 'rgba(16, 185, 129, 0.3)',
      platformColor: '#34d399',
      role: 'Frontend Engineer',
      description:
        'Administrative dashboard featuring rich telemetry analytics, role-based user management, advanced filtering, server-driven pagination, and error states.',
      highlights: [
        'Built with Next.js, React, TypeScript, and Tailwind CSS',
        'Clean REST API integrations with loading & error skeletons',
        'Scalable component design with WCAG accessibility patterns',
        'Jest unit testing and client performance optimization'
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Jest'],
      liveUrl: 'https://portal.pram.education/login',
      primaryActionLabel: 'Live Admin Portal'
    },
    {
      id: 'shopswift',
      title: 'ShopSwift',
      subtitle: 'E-commerce Mobile Application',
      category: 'mobile',
      platform: 'React Native / Expo',
      platformIcon: <FiShoppingBag />,
      platformBg: 'rgba(245, 158, 11, 0.12)',
      platformBorder: 'rgba(245, 158, 11, 0.3)',
      platformColor: '#fbbf24',
      role: 'Independent Architect',
      description:
        'Modern mobile shopping experience featuring instant product discovery, fuzzy search, persistent offline cart, and seamless checkout flows.',
      highlights: [
        'Redux Toolkit & RTK Query client-side caching',
        'AsyncStorage persistent cart state across sessions',
        'Sandbox payment gateway simulation with error recovery',
        'Smooth animations and intuitive bottom-sheet filtering'
      ],
      technologies: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'AsyncStorage'],
      githubUrl: 'https://github.com/Swaroop103545',
      primaryActionLabel: 'GitHub Project'
    },
    {
      id: 'bookmart',
      title: 'BookMart',
      subtitle: 'Mobile Book Catalog & Ordering App',
      category: 'mobile',
      platform: 'Google Play Store',
      platformIcon: <SiGoogleplay />,
      platformBg: 'rgba(52, 211, 153, 0.12)',
      platformBorder: 'rgba(52, 211, 153, 0.3)',
      platformColor: '#34d399',
      role: 'React Native Developer',
      description:
        'E-commerce mobile app with extensive book catalogs, user reviews, personalized recommendations, and Razorpay integrated payment checkout.',
      highlights: [
        'Firebase backend authentication and Firestore database',
        'Razorpay payment gateway with automated status verification',
        'Optimized search index and cached asset loading',
        'Published and deployed to Google Play Store'
      ],
      technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'Firebase', 'Razorpay', 'REST APIs'],
      liveUrl: 'https://play.google.com/store/apps/details?id=com.bookmart',
      primaryActionLabel: 'Google Play'
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Projects', icon: <FiLayers /> },
    { id: 'mobile', label: 'Mobile Apps (iOS & Android)', icon: <FiSmartphone /> },
    { id: 'web', label: 'Web & Portals', icon: <FiGlobe /> }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>Featured Works</SectionTag>
          <SectionTitle>
            Production Apps & <span>Selected Projects</span>
          </SectionTitle>
          <SectionSubtitle>
            A showcase of battle-tested mobile applications on the App Store and Google Play, alongside modern web dashboards.
          </SectionSubtitle>
        </SectionHeader>

        <FilterPillsRow>
          {filterTabs.map(tab => (
            <FilterPill
              key={tab.id}
              active={filter === tab.id}
              onClick={() => setFilter(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </FilterPill>
          ))}
        </FilterPillsRow>

        <ProjectsGrid layout>
          <AnimatePresence>
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 25 }}
                transition={{ duration: 0.35 }}
              >
                <CardTop>
                  <CardMetaRow>
                    <PlatformBadge
                      bg={project.platformBg}
                      border={project.platformBorder}
                      color={project.platformColor}
                    >
                      {project.platformIcon}
                      <span>{project.platform}</span>
                    </PlatformBadge>
                    <RoleTag>{project.role}</RoleTag>
                  </CardMetaRow>

                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                  <ProjectDescription>{project.description}</ProjectDescription>

                  <HighlightsList>
                    {project.highlights.map((item, idx) => (
                      <HighlightBullet key={idx}>
                        <FiCheckCircle size={14} />
                        <span>{item}</span>
                      </HighlightBullet>
                    ))}
                  </HighlightsList>

                  <TechRow>
                    {project.technologies.map((t, idx) => (
                      <TechTag key={idx}>{t}</TechTag>
                    ))}
                  </TechRow>
                </CardTop>

                <CardBottomBar>
                  <ActionButtonGroup>
                    {project.liveUrl && (
                      <PrimaryCardLink
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{project.primaryActionLabel}</span>
                        <FiArrowUpRight size={16} />
                      </PrimaryCardLink>
                    )}

                    {project.githubUrl && (
                      <PrimaryCardLink
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub size={16} />
                        <span>GitHub</span>
                      </PrimaryCardLink>
                    )}

                    <SecondaryCardLink
                      href="https://github.com/Swaroop103545"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub"
                    >
                      <FiGithub size={16} />
                    </SecondaryCardLink>
                  </ActionButtonGroup>
                </CardBottomBar>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;