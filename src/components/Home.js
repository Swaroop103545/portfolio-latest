import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const HEADER_HEIGHT = '100px';

const HomeContainer = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${HEADER_HEIGHT} 2rem 4rem;
  position: relative;
  overflow: hidden;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, ${props => props.theme.colors.primary}20 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, ${props => props.theme.colors.secondary}20 0%, transparent 50%);
  z-index: -1;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

const Greeting = styled(motion.div)`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.8;
`;

const Buttons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;

  &.primary {
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    color: white;
  }

  &.outline {
    background: transparent;
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}20, ${props => props.theme.colors.secondary}20);
  filter: blur(2px);
`;

const AnimatedShape = styled(motion.div)`
  position: absolute;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}15, ${props => props.theme.colors.secondary}15);
  border-radius: ${props => props.shape === 'circle' ? '50%' : props.shape === 'triangle' ? '0' : '20px'};
  clip-path: ${props => props.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none'};
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  box-shadow: 0 0 10px ${props => props.theme.colors.primary};
`;

const Home = () => {
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

  const floatingVariants = {
    animate: {
      y: [0, -30, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const shapeVariants = {
    animate: {
      y: [0, -40, 0],
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const particleVariants = {
    animate: {
      y: [0, -100],
      opacity: [1, 0],
      scale: [1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/Swaroop103545" },
    { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/swaroop-prataparao-9a4066153/" }
  ];

  return (
    <HomeContainer>
      <BackgroundGradient />
      
      <FloatingElements>
        <FloatingElement style={{ top: '10%', left: '10%' }} variants={floatingVariants} animate="animate" />
        <FloatingElement style={{ top: '20%', right: '15%' }} variants={floatingVariants} animate="animate" transition={{ delay: 1 }} />
        <FloatingElement style={{ bottom: '20%', left: '20%' }} variants={floatingVariants} animate="animate" transition={{ delay: 2 }} />
        <FloatingElement style={{ bottom: '10%', right: '10%' }} variants={floatingVariants} animate="animate" transition={{ delay: 3 }} />

        <AnimatedShape shape="circle" style={{ top: '15%', left: '60%', width: '80px', height: '80px' }} variants={shapeVariants} animate="animate" transition={{ delay: 0.5 }} />
        <AnimatedShape shape="triangle" style={{ top: '70%', left: '80%', width: '60px', height: '60px' }} variants={shapeVariants} animate="animate" transition={{ delay: 1.5 }} />
        <AnimatedShape shape="square" style={{ top: '60%', left: '5%', width: '50px', height: '50px' }} variants={shapeVariants} animate="animate" transition={{ delay: 2.5 }} />

        {[...Array(20)].map((_, i) => (
          <Particle
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{ delay: Math.random() * 2 }}
          />
        ))}
      </FloatingElements>

      <Content>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Greeting variants={itemVariants}>Hello, I'm</Greeting>
          <Name variants={itemVariants}>Swaroop Prataparao</Name>
          <Title variants={itemVariants}>Senior React Native Developer</Title>
          <Description variants={itemVariants}>
            Versatile Mobile App Developer with over 5 years of experience in designing and developing 
            cross-platform applications using React Native, Expo, Flutter, and related technologies. 
            Passionate about creating innovative solutions and delivering high-quality applications.
          </Description>

          <Buttons variants={itemVariants}>
            <Button to="/projects" className="primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View My Work <FiArrowRight />
            </Button>
            <Button to="/contact" className="outline" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Get In Touch
            </Button>
          </Buttons>

          <SocialLinks variants={itemVariants}>
            {socialLinks.map((link, index) => (
              <SocialLink key={index} href={link.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {link.icon}
              </SocialLink>
            ))}
          </SocialLinks>
        </motion.div>
      </Content>
    </HomeContainer>
  );
};

export default Home;
