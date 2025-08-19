import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiUsers, FiCode } from 'react-icons/fi';

const AboutContainer = styled.div`
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 2rem;
  }
`;

const ImageSection = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
`;

const ProfileImage = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  font-weight: 700;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent, ${props => props.theme.colors.primary}20, transparent);
    animation: rotate 4s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const DownloadButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`;

const TextSection = styled(motion.div)`
  max-width: 800px;
  width: 100%;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const Stats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: ${props => props.theme.colors.surface};
  border-radius: 15px;
  border: 1px solid ${props => props.theme.colors.surface};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 30px rgba(102, 126, 234, 0.2);
  }
`;

const StatIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Skills = styled(motion.div)`
  margin-top: 2rem;
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const SkillTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.primary}30;
  border-radius: 25px;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const Education = styled(motion.div)`
  margin-top: 2rem;
`;

const EducationTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const EducationItem = styled.div`
  padding: 1rem;
  background: ${props => props.theme.colors.surface};
  border-radius: 10px;
  border-left: 3px solid ${props => props.theme.colors.primary};
  transition: all 0.3s ease;
  width: 100%;
  max-width: 500px;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.1);
  }
`;

const EducationDegree = styled.div`
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.25rem;
`;

const EducationSchool = styled.div`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const EducationDetails = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const stats = [
    { icon: <FiCode />, number: "9", label: "Projects" },
    { icon: <FiUsers />, number: "10+", label: "Clients" },
    { icon: <FiAward />, number: "5+", label: "Years" },
  ];

  const skills = [
    "React Native", "Expo", "Flutter", "React.js", "TypeScript",
    "Redux", "Redux Toolkit", "Razorpay", "Firebase", "GraphQL", "Jest",
    "Material UI", "GitHub", "JIRA", "Appium", "SQL"
  ];

  const link = "https://drive.google.com/file/d/147b1vyegycB2a5FzkQMlhvQSHXPx0aWH/view?usp=sharing";

  return (
    <AboutContainer>
      <Container>
        <SectionTitle
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </SectionTitle>

        <Content>
          <ImageSection
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ProfileImage
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SP
            </ProfileImage>

            <DownloadButton
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Swaroop_Prataparao_Sr_React_Native_Developer.pdf";
                link.download = "Swaroop_Prataparao_Sr_React_Native_Developer.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <FiDownload />
              Download CV
            </DownloadButton>


          </ImageSection>

          <TextSection
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Description variants={itemVariants}>
              I'm a versatile Mobile App Developer with over 5 years of experience
              in designing and developing cross-platform applications using React Native,
              Expo, Flutter, and related technologies. I specialize in creating efficient
              software solutions and collaborating with cross-functional teams.
            </Description>

            <Description variants={itemVariants}>
              My expertise includes implementing role-based access controls, optimizing
              API performance, and ensuring seamless user experiences across multiple
              platforms. I'm passionate about problem-solving and continuously learning
              new technologies to deliver high-quality applications.
            </Description>

            <Stats variants={itemVariants}>
              {stats.map((stat, index) => (
                <StatItem
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <StatIcon>{stat.icon}</StatIcon>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              ))}
            </Stats>

            <Skills variants={itemVariants}>
              <SkillsTitle>Skills & Technologies</SkillsTitle>
              <SkillsList>
                {skills.map((skill, index) => (
                  <SkillTag
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {skill}
                  </SkillTag>
                ))}
              </SkillsList>
            </Skills>

            <Education variants={itemVariants}>
              <EducationTitle>Education</EducationTitle>
              <EducationList>
                <EducationItem>
                  <EducationDegree>Masters in Computer Science</EducationDegree>
                  <EducationSchool>Manipal University</EducationSchool>
                  <EducationDetails>CGPA: 7.8, 2022</EducationDetails>
                </EducationItem>
                <EducationItem>
                  <EducationDegree>Bachelors in Computer Science</EducationDegree>
                  <EducationSchool>Sri Gayatri Degree College</EducationSchool>
                  <EducationDetails>CGPA: 7.8, 2019</EducationDetails>
                </EducationItem>
                <EducationItem>
                  <EducationDegree>Intermediate (10+2)</EducationDegree>
                  <EducationSchool>Srinivasa Junior College</EducationSchool>
                  <EducationDetails>Percentage: 77.4%, 2015</EducationDetails>
                </EducationItem>
                <EducationItem>
                  <EducationDegree>SSC</EducationDegree>
                  <EducationSchool>Sri Sarada Vidya Peeth School</EducationSchool>
                  <EducationDetails>CGPA: 8.8, 2013</EducationDetails>
                </EducationItem>
              </EducationList>
            </Education>
          </TextSection>
        </Content>
      </Container>
    </AboutContainer>
  );
};

export default About; 