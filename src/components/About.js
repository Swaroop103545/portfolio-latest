import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiUsers, FiCode } from 'react-icons/fi';

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
    desktop: '992px',
  },
};

const AboutWrapper = styled.section`
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
    animation: pulse 20s infinite ease-in-out alternate;
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
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -1px;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 2fr;
    gap: 5rem;
  }
`;

const LeftColumn = styled(motion.div)`
  text-align: center;
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    text-align: left;
    position: sticky;
    top: 100px;
    align-self: start;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${props => props.theme.colors.cardBorder};
  margin: 0 auto 1.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 25px ${props => props.theme.colors.primary}70;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 280px;
    height: 280px;
    margin: 0 0 1.5rem;
  }
`;

const Name = styled.h1`
    font-size: 2.2rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5rem;
`;

const RoleTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1.5rem;
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 1.8rem;
  border: 1px solid ${props => props.theme.colors.cardBorder};
  background: transparent;
  color: ${props => props.theme.colors.text};
  border-radius: 100px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  text-decoration: none;
  
  &:hover {
    color: #fff;
    background: ${props => props.theme.colors.primary}40;
    border-color: ${props => props.theme.colors.primary}80;
    transform: translateY(-2px);
  }
`;

const RightColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const AboutSection = styled(motion.div)``;

const SectionSubheader = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.cardBorder};
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
`;

const StatItem = styled.div`
  padding: 1.5rem;
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 12px;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 8px;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textSecondary};
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    background: ${props => props.theme.colors.primary}40;
    border-color: ${props => props.theme.colors.primary}80;
  }
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EducationItem = styled.div`
  padding: 1rem 1.5rem;
  background: ${props => props.theme.colors.cardBg};
  border-radius: 10px;
  border-left: 3px solid ${props => props.theme.colors.cardBorder};
  transition: all 0.3s ease;
  
  &:hover {
    border-left-color: ${props => props.theme.colors.primary};
  }
`;

const EducationDegree = styled.div`
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`;

const EducationSchool = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;


const About = () => {
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const skills = [
    "React Native", "Expo", "Flutter", "React.js", "TypeScript",
    "Redux", "Redux Toolkit", "Razorpay", "Firebase", "GraphQL", "Jest",
    "Material UI", "GitHub", "JIRA", "Appium", "SQL"
  ];

  const resumeUrl = "/Swaroop_Prataparao_Sr_React_Native_Developer.pdf";

  return (
    <ThemeProvider theme={theme}>
      <AboutWrapper>
        <Container>
          <SectionHeader initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            {/* <SectionTitle>About Me</SectionTitle> */}
          </SectionHeader>

          <AboutGrid>
            <LeftColumn initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              {/* <ProfileImage src="https://via.placeholder.com/300" alt="Swaroop Prataparao" whileHover={{ scale: 1.05 }} /> */}
              <Name>Swaroop Prataparao</Name>
              <RoleTitle>Senior React Native Developer</RoleTitle>
              <DownloadButton href={resumeUrl} download="Swaroop_Prataparao_Resume.pdf" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <FiDownload />
                Download CV
              </DownloadButton>
            </LeftColumn>

            <RightColumn>
              <AboutSection variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                <SectionSubheader>My Story</SectionSubheader>
                <Description>
                  I'm a versatile Mobile App Developer with over 5 years of experience in designing and developing cross-platform applications using React Native, Expo, and related technologies.
                </Description>
                <Description>
                  My expertise includes implementing role-based access controls, optimizing API performance, and ensuring seamless user experiences. I'm passionate about problem-solving and continuously learning new technologies to deliver high-quality, impactful applications.
                </Description>
              </AboutSection>

              <AboutSection variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                <SectionSubheader>Career Snapshot</SectionSubheader>
                <StatsGrid>
                  <StatItem><StatNumber>5+</StatNumber><StatLabel>Years Experience</StatLabel></StatItem>
                  <StatItem><StatNumber>8</StatNumber><StatLabel>Completed Projects</StatLabel></StatItem>
                  <StatItem><StatNumber>10+</StatNumber><StatLabel>Happy Clients</StatLabel></StatItem>
                </StatsGrid>
              </AboutSection>

              <AboutSection variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                <SectionSubheader>Skills & Technologies</SectionSubheader>
                <SkillsList>
                  {skills.map((skill) => (
                    <SkillTag key={skill} whileHover={{ y: -2 }}>{skill}</SkillTag>
                  ))}
                </SkillsList>
              </AboutSection>

              <AboutSection variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                <SectionSubheader>Education</SectionSubheader>
                <EducationList>
                  <EducationItem><EducationDegree>Masters in Computer Science</EducationDegree><EducationSchool>Manipal University - 2022</EducationSchool></EducationItem>
                  <EducationItem><EducationDegree>Bachelors in Computer Science</EducationDegree><EducationSchool>Sri Gayatri Degree College - 2019</EducationSchool></EducationItem>
                </EducationList>
              </AboutSection>
            </RightColumn>
          </AboutGrid>
        </Container>
      </AboutWrapper>
    </ThemeProvider>
  );
};

export default About;