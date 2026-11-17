import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSmartphone,
  FiCode,
  FiDatabase,
  FiServer,
  FiCloud,
  FiSliders,
  FiLayout,
  FiCheckCircle,
  FiGitPullRequest,
  FiLock,
  FiCpu,
  FiSearch,
  FiLayers
} from 'react-icons/fi';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiFirebase,
  SiAmazonaws,
  SiJest,
  SiGit,
  SiGithubactions,
  SiApple,
  SiGoogleplay,
  SiFigma
} from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 100px 1.5rem;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.colors.backgroundSecondary};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 800px;
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
  max-width: 1200px;
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
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.92rem;
    line-height: 1.6;
  }
`;

const FilterControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1.25rem 0.8rem 2.85rem;
  border-radius: 9999px;
  background: rgba(17, 23, 38, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 0.95rem;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primaryLight};
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
    background: rgba(17, 23, 38, 0.95);
  }

  &::placeholder {
    color: #64748b;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 16px;
    padding: 0.72rem 1.1rem 0.72rem 2.6rem;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 1.15rem;
  transform: translateY(-50%);
  color: #64748b;
  display: flex;
  align-items: center;
  pointer-events: none;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    left: 1rem;
  }
`;

const FilterTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.45rem;
  }
`;

const FilterTab = styled.button`
  padding: 0.5rem 1.15rem;
  border-radius: 9999px;
  font-size: 0.85rem;
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
    border-color: ${props => (props.active ? 'transparent' : 'rgba(99, 102, 241, 0.3)')};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.78rem;
    padding: 0.4rem 0.85rem;
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
  gap: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SkillCategoryCard = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 18px;
  padding: 1.75rem;
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: ${props => props.theme.colors.cardBorderHover};
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.25rem 1rem;
    border-radius: 14px;
  }
`;

const CardHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

const CategoryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CategoryIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${props => props.bg || 'rgba(99, 102, 241, 0.15)'};
  color: ${props => props.color || props.theme.colors.primaryLight};
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

const CategoryName = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const SkillCountBadge = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #94a3b8;
`;

const SkillsPillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.45rem;
  }
`;

const SkillBadge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: #e2e8f0;
  transition: all 0.2s ease;

  svg {
    font-size: 0.95rem;
    color: ${props => props.theme.colors.cyanLight};
    flex-shrink: 0;
  }

  &:hover {
    background: rgba(99, 102, 241, 0.15);
    border-color: rgba(99, 102, 241, 0.35);
    color: #fff;
    transform: translateY(-2px);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.78rem;
    padding: 0.35rem 0.65rem;
    word-break: break-word;
    max-width: 100%;
  }
`;

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const skillCategories = [
    {
      id: 'languages',
      group: 'core',
      name: 'Programming Languages',
      icon: <FiCode />,
      iconColor: '#38bdf8',
      iconBg: 'rgba(56, 189, 248, 0.15)',
      skills: [
        { name: 'TypeScript', icon: <SiTypescript color="#38bdf8" /> },
        { name: 'JavaScript (ES6+)', icon: <SiJavascript color="#facc15" /> },
        { name: 'Java', icon: <FiCode color="#f97316" /> }
      ]
    },
    {
      id: 'mobile',
      group: 'core',
      name: 'Mobile Development',
      icon: <FiSmartphone />,
      iconColor: '#818cf8',
      iconBg: 'rgba(129, 140, 248, 0.15)',
      skills: [
        { name: 'React Native CLI', icon: <SiReact color="#38bdf8" /> },
        { name: 'Expo', icon: <SiReact color="#fff" /> },
        { name: 'Cross-Platform Architecture', icon: <FiLayers /> },
        { name: 'Native Module Integration', icon: <FiSliders /> },
        { name: 'Application Lifecycle Management', icon: <FiCheckCircle /> }
      ]
    },
    {
      id: 'frontend',
      group: 'core',
      name: 'Frontend Development',
      icon: <FiLayout />,
      iconColor: '#34d399',
      iconBg: 'rgba(52, 211, 153, 0.15)',
      skills: [
        { name: 'React.js', icon: <SiReact color="#38bdf8" /> },
        { name: 'Next.js', icon: <SiNextdotjs color="#fff" /> },
        { name: 'Responsive Web Design', icon: <FiLayout /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" /> },
        { name: 'Reusable Components', icon: <FiCode /> }
      ]
    },
    {
      id: 'state',
      group: 'state_api',
      name: 'State Management & Fetching',
      icon: <FiDatabase />,
      iconColor: '#c084fc',
      iconBg: 'rgba(192, 132, 252, 0.15)',
      skills: [
        { name: 'Redux Toolkit', icon: <SiRedux color="#a855f7" /> },
        { name: 'RTK Query', icon: <SiRedux color="#c084fc" /> },
        { name: 'React Query', icon: <FiDatabase /> },
        { name: 'Zustand', icon: <FiDatabase /> },
        { name: 'Context API', icon: <SiReact color="#38bdf8" /> },
        { name: 'Client-Side Caching', icon: <FiLayers /> },
        { name: 'AsyncStorage', icon: <FiDatabase /> },
        { name: 'MMKV Storage', icon: <FiDatabase /> }
      ]
    },
    {
      id: 'api',
      group: 'state_api',
      name: 'API Integration',
      icon: <FiServer />,
      iconColor: '#f472b6',
      iconBg: 'rgba(244, 114, 182, 0.15)',
      skills: [
        { name: 'REST APIs', icon: <FiServer /> },
        { name: 'GraphQL', icon: <SiGraphql color="#ec4899" /> },
        { name: 'Apollo Client', icon: <SiGraphql color="#ec4899" /> },
        { name: 'OpenAPI SDK Integration', icon: <FiCode /> },
        { name: 'JSON Data Handling', icon: <FiCode /> }
      ]
    },
    {
      id: 'backend',
      group: 'backend_cloud',
      name: 'Backend Services & Cloud',
      icon: <FiCloud />,
      iconColor: '#fbbf24',
      iconBg: 'rgba(251, 191, 36, 0.15)',
      skills: [
        { name: 'Firebase Authentication', icon: <SiFirebase color="#f59e0b" /> },
        { name: 'Cloud Firestore', icon: <SiFirebase color="#f59e0b" /> },
        { name: 'Firebase Cloud Messaging (FCM)', icon: <SiFirebase color="#f59e0b" /> },
        { name: 'AWS Service Integrations', icon: <SiAmazonaws color="#f97316" /> }
      ]
    },
    {
      id: 'features',
      group: 'core',
      name: 'Mobile Features & Hardware',
      icon: <FiSmartphone />,
      iconColor: '#22d3ee',
      iconBg: 'rgba(34, 211, 238, 0.15)',
      skills: [
        { name: 'Push Notifications (FCM)', icon: <FiSmartphone /> },
        { name: 'Deep Linking & Universal Links', icon: <FiCode /> },
        { name: 'Offline Data Handling', icon: <FiDatabase /> },
        { name: 'Camera Integration', icon: <FiSmartphone /> },
        { name: 'SMS Integration', icon: <FiSmartphone /> },
        { name: 'Razorpay Payment Gateway', icon: <FiCheckCircle /> }
      ]
    },
    {
      id: 'ui_a11y',
      group: 'core',
      name: 'UI Engineering & Accessibility',
      icon: <FiLayout />,
      iconColor: '#a78bfa',
      iconBg: 'rgba(167, 139, 250, 0.15)',
      skills: [
        { name: 'Figma-to-Code Implementation', icon: <SiFigma color="#f43f5e" /> },
        { name: 'Responsive Layouts', icon: <FiLayout /> },
        { name: 'Design-System Principles', icon: <FiLayers /> },
        { name: 'WCAG Accessibility Fundamentals', icon: <FiCheckCircle /> }
      ]
    },
    {
      id: 'testing',
      group: 'testing_devops',
      name: 'Testing & Quality Assurance',
      icon: <FiCheckCircle />,
      iconColor: '#34d399',
      iconBg: 'rgba(52, 211, 153, 0.15)',
      skills: [
        { name: 'Jest', icon: <SiJest color="#ef4444" /> },
        { name: 'Unit Testing', icon: <FiCheckCircle /> },
        { name: 'React Native Debugging (Flipper)', icon: <FiCode /> },
        { name: 'Basic End-to-End Testing', icon: <FiCheckCircle /> },
        { name: 'Appium', icon: <FiCpu /> }
      ]
    },
    {
      id: 'build_release',
      group: 'testing_devops',
      name: 'Build, CI/CD & Store Release',
      icon: <FiGitPullRequest />,
      iconColor: '#f97316',
      iconBg: 'rgba(249, 115, 22, 0.15)',
      skills: [
        { name: 'Git & GitHub Version Control', icon: <SiGit color="#f97316" /> },
        { name: 'GitHub Actions CI/CD', icon: <SiGithubactions color="#38bdf8" /> },
        { name: 'Apple App Store Deployment', icon: <SiApple color="#fff" /> },
        { name: 'Google Play Store Deployment', icon: <SiGoogleplay color="#34d399" /> }
      ]
    },
    {
      id: 'security',
      group: 'ai_security',
      name: 'Application Security',
      icon: <FiLock />,
      iconColor: '#ef4444',
      iconBg: 'rgba(239, 68, 68, 0.15)',
      skills: [
        { name: 'Authentication Flows', icon: <FiLock /> },
        { name: 'Token & Session Handling', icon: <FiLock /> },
        { name: 'Secure API Integration', icon: <FiServer /> },
        { name: 'Awareness of CORS, XSS, & CSRF', icon: <FiLock /> }
      ]
    },
    {
      id: 'ai_assisted',
      group: 'ai_security',
      name: 'AI-Assisted Development',
      icon: <FiCpu />,
      iconColor: '#c084fc',
      iconBg: 'rgba(192, 132, 252, 0.15)',
      skills: [
        { name: 'AI-Generated Code Review', icon: <FiCheckCircle /> },
        { name: 'Prompt Engineering', icon: <FiCode /> },
        { name: 'Cursor AI', icon: <FiCpu /> },
        { name: 'AntiGravity', icon: <FiCpu /> },
        { name: 'Claude', icon: <FiCpu /> },
        { name: 'AI-Assisted Debugging', icon: <FiCode /> }
      ]
    }
  ];

  const groupTabs = [
    { id: 'all', label: 'All 12 Domains' },
    { id: 'core', label: 'Mobile & Frontend' },
    { id: 'state_api', label: 'State & APIs' },
    { id: 'backend_cloud', label: 'Cloud & Backend' },
    { id: 'testing_devops', label: 'Testing & DevOps' },
    { id: 'ai_security', label: 'AI & Security' }
  ];

  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter(category => activeGroup === 'all' || category.group === activeGroup)
      .map(category => {
        if (!searchTerm.trim()) return category;
        const matchingSkills = category.skills.filter(s =>
          s.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
        );
        const categoryMatches = category.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
        if (categoryMatches || matchingSkills.length > 0) {
          return {
            ...category,
            skills: categoryMatches ? category.skills : matchingSkills
          };
        }
        return null;
      })
      .filter(Boolean);
  }, [activeGroup, searchTerm]);

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>Technical Proficiency</SectionTag>
          <SectionTitle>
            Specialized <span>Skills & Ecosystem</span>
          </SectionTitle>
          <SectionSubtitle>
            A comprehensive overview of my core competencies, libraries, architectures, and engineering tools.
          </SectionSubtitle>
        </SectionHeader>

        <FilterControls>
          <SearchContainer>
            <SearchIconWrapper>
              <FiSearch size={18} />
            </SearchIconWrapper>
            <SearchInput
              type="text"
              placeholder="Search skills (e.g. Redux, GraphQL, MMKV, Jest, Next.js, WCAG)..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </SearchContainer>

          <FilterTabs>
            {groupTabs.map(tab => (
              <FilterTab
                key={tab.id}
                active={activeGroup === tab.id}
                onClick={() => setActiveGroup(tab.id)}
              >
                {tab.label}
              </FilterTab>
            ))}
          </FilterTabs>
        </FilterControls>

        <SkillsGrid layout>
          <AnimatePresence>
            {filteredCategories.map(cat => (
              <SkillCategoryCard
                key={cat.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <CardHead>
                  <CategoryInfo>
                    <CategoryIconWrapper bg={cat.iconBg} color={cat.iconColor}>
                      {cat.icon}
                    </CategoryIconWrapper>
                    <CategoryName>{cat.name}</CategoryName>
                  </CategoryInfo>
                  <SkillCountBadge>{cat.skills.length} skills</SkillCountBadge>
                </CardHead>

                <SkillsPillsContainer>
                  {cat.skills.map((skill, sIdx) => (
                    <SkillBadge key={sIdx} whileHover={{ y: -2 }}>
                      {skill.icon}
                      <span>{skill.name}</span>
                    </SkillBadge>
                  ))}
                </SkillsPillsContainer>
              </SkillCategoryCard>
            ))}
          </AnimatePresence>
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;