import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.surface};
  border-top: 1px solid ${props => props.theme.colors.surface};
  padding: 3rem 0 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled(motion.div)``;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const FooterText = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`;

const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const QuickLink = styled(motion.li)`
  margin-bottom: 0.5rem;
`;

const QuickLinkItem = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactItem = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${props => props.theme.colors.surface};
  padding-top: 2rem;
  text-align: center;
`;

const Copyright = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const HeartIcon = styled(motion.div)`
  color: ${props => props.theme.colors.accent};
  display: inline-block;
`;

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/Swaroop103545' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/swaroop-prataparao-9a4066153/' },
  ];

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Projects', url: '/projects' },
    { name: 'Experience', url: '/experience'},
    { name: 'Skills', url: '/skills' },
    { name: 'Contact', url: '/contact' }
  ];

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
    hidden: { y: 30, opacity: 0 },
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
    <FooterContainer>
      <Container>
        <FooterContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <FooterSection variants={itemVariants}>
            <FooterTitle>About Me</FooterTitle>
            <FooterText>
              A versatile Mobile App Developer with over 5 years of experience 
              in designing and developing cross-platform applications using 
              React Native, Expo, Flutter, and related technologies.
            </FooterText>
            <SocialLinks>
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </SocialLink>
              ))}
            </SocialLinks>
          </FooterSection>

          <FooterSection variants={itemVariants}>
            <FooterTitle>Quick Links</FooterTitle>
            <QuickLinks>
              {quickLinks.map((link, index) => (
                <QuickLink key={index}>
                  <QuickLinkItem href={link.url}>
                    {link.name}
                  </QuickLinkItem>
                </QuickLink>
              ))}
            </QuickLinks>
          </FooterSection>

          <FooterSection variants={itemVariants}>
            <FooterTitle>Contact Info</FooterTitle>
            <ContactInfo>
              <ContactItem>
                📧 swaroopprataparao@gmail.com
              </ContactItem>
              <ContactItem>
                📱 +91 8341114950, +91 9703692227
              </ContactItem>
              <ContactItem>
                📍 India
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © 2025 Swaroop Prataparao. All rights reserved. Made with
            <HeartIcon
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart />
            </HeartIcon>
            using React & Redux
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 