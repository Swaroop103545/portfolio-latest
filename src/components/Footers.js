import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FiArrowUp, FiMail, FiPhone, FiHeart } from 'react-icons/fi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const FooterWrapper = styled.footer`
  padding: 4rem 1.5rem 2rem;
  background: #06070a;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  z-index: 1;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 3rem 1rem 1.75rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    padding-bottom: 2rem;
  }
`;

const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    align-items: center;
  }
`;

const BrandTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.5px;

  span {
    background: ${props => props.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.15rem;
  }
`;

const BrandTagline = styled.p`
  font-size: 0.85rem;
  color: #94a3b8;
  max-width: 360px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

const QuickNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.75rem 1rem;
  }
`;

const NavItem = styled(Link)`
  color: #94a3b8;
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.82rem;
  }
`;

const BackToTopButton = styled(Link)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${props => props.theme.gradients.primary};
    border-color: transparent;
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 1.25rem;
    padding-top: 1.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.65rem;
  }
`;

const SocialLink = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #94a3b8;
  font-size: 1.1rem;
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    background: rgba(99, 102, 241, 0.2);
    border-color: ${props => props.theme.colors.primaryLight};
    transform: translateY(-2px);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 42px;
    height: 42px;
    font-size: 1.2rem;
  }
`;

const Copyright = styled.div`
  font-size: 0.82rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    color: #f43f5e;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.75rem;
    text-align: center;
    line-height: 1.5;
  }
`;

const Footers = () => {
  const githubUrl = 'https://github.com/Swaroop103545';
  const linkedinUrl = 'https://www.linkedin.com/in/swaroop-prataparao-9a4066153/';
  const email = 'swaroopprataparao@gmail.com';
  const phone = '+918341114950';

  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <BrandBlock>
            <BrandTitle>
              Swaroop <span>Prataparao</span>
            </BrandTitle>
            <BrandTagline>
              Senior React Native Developer & Frontend Engineer crafting robust, cross-platform digital experiences.
            </BrandTagline>
          </BrandBlock>

          <QuickNav>
            <NavItem to="hero" smooth={true} duration={500}>Home</NavItem>
            <NavItem to="about" smooth={true} duration={500} offset={-80}>About</NavItem>
            <NavItem to="experience" smooth={true} duration={500} offset={-80}>Experience</NavItem>
            <NavItem to="skills" smooth={true} duration={500} offset={-80}>Skills</NavItem>
            <NavItem to="projects" smooth={true} duration={500} offset={-80}>Projects</NavItem>
            <NavItem to="contact" smooth={true} duration={500} offset={-80}>Contact</NavItem>
          </QuickNav>

          <BackToTopButton to="hero" smooth={true} duration={600} title="Back to top">
            <FiArrowUp />
          </BackToTopButton>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            <span>&copy; {new Date().getFullYear()} Swaroop Prataparao. Designed & Engineered with precision.</span>
          </Copyright>

          <SocialIcons>
            <SocialLink href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <SiGithub />
            </SocialLink>
            <SocialLink href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <SiLinkedin />
            </SocialLink>
            <SocialLink href={`mailto:${email}`} aria-label="Email">
              <FiMail />
            </SocialLink>
            <SocialLink href={`tel:${phone}`} aria-label="Phone">
              <FiPhone />
            </SocialLink>
          </SocialIcons>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footers;
