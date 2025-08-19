import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const FooterWrapper = styled.footer`
  padding: 2rem;
  text-align: center;
  border-top: 1px solid ${props => props.theme.colors.cardBorder};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const Footers = () => {
  const githubUrl = 'https://github.com/Swaroop103545';
  const linkedinUrl = 'https://www.linkedin.com/in/swaroop-prataparao-9a4066153/';

  const handleEmailClick = () => {
    window.location.href = 'mailto:swaroopprataparao@gmail.com';
  };
  return (
    <FooterWrapper>
      <SocialLinks>
        <SocialLink href={githubUrl} target="_blank" rel="noopener noreferrer"><FiGithub /></SocialLink>
        <SocialLink href={linkedinUrl} target="_blank" rel="noopener noreferrer"><FiLinkedin /></SocialLink>
        <SocialLink href="#" onClick={handleEmailClick}><FiMail /></SocialLink>
      </SocialLinks>
      <Copyright>&copy; {new Date().getFullYear()} Swaroop Prataparao. All Rights Reserved.</Copyright>
    </FooterWrapper>
  );
};

export default Footers;
