import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
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
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)``;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: ${props => props.theme.colors.surface};
  border-radius: 15px;
  border: 1px solid ${props => props.theme.colors.surface};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.secondary}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

const InfoContent = styled.div``;
const InfoLabel = styled.div`
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.25rem;
`;
const InfoValue = styled.div`
  color: ${props => props.theme.colors.textSecondary};
`;

const SocialLinks = styled(motion.div)`
  margin-top: 2rem;
`;

const SocialTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const SocialList = styled.div`
  display: flex;
  gap: 1rem;
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
    background: linear-gradient(
      135deg,
      ${props => props.theme.colors.primary},
      ${props => props.theme.colors.secondary}
    );
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`;

const ContactForm = styled(motion.form)`
  background: ${props => props.theme.colors.surface};
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${props => props.theme.colors.surface};
  position: relative;
  overflow: hidden;
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${props => props.theme.colors.surface};
  border-radius: 10px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}20;
  }

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${props => props.theme.colors.surface};
  border-radius: 10px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}20;
  }

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.secondary}
  );
  color: "blue";
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  padding: 1rem;
  background: ${props => props.theme.colors.success}20;
  color: ${props => props.theme.colors.success};
  border-radius: 10px;
  text-align: center;
  margin-top: 1rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    console.log('Sending email with:', { serviceID, templateID, publicKey, formData });

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setShowSuccess(false), 4000);
      })
      .catch(err => {
        console.error(err);
        setIsSubmitting(false);
        setShowError(true);
      });
  };

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: 'swaroopprataparao@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '+91 8341114950' },
    { icon: <FiMapPin />, label: 'Location', value: 'India' },
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com' },
    { icon: <FiTwitter />, url: 'https://twitter.com' },
  ];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } } };

  return (
    <ContactContainer>
      <Container>
        <SectionTitle initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          Get In Touch
        </SectionTitle>

        <Content>
          <ContactInfo variants={containerVariants} initial="hidden" animate="visible">
            <InfoTitle>Contact Information</InfoTitle>
            <InfoList>
              {contactInfo.map((info, i) => (
                <InfoItem key={i} variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <InfoIcon>{info.icon}</InfoIcon>
                  <InfoContent>
                    <InfoLabel>{info.label}</InfoLabel>
                    <InfoValue>{info.value}</InfoValue>
                  </InfoContent>
                </InfoItem>
              ))}
            </InfoList>

            <SocialLinks initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
              <SocialTitle>Follow Me</SocialTitle>
              <SocialList>
                {socialLinks.map((social, i) => (
                  <SocialLink key={i} href={social.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    {social.icon}
                  </SocialLink>
                ))}
              </SocialList>
            </SocialLinks>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <FormTitle>Send Message</FormTitle>

            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." required />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              <FiSend /> {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>

            {showSuccess && <SuccessMessage>Your message has been sent successfully!</SuccessMessage>}
            {showError && <SuccessMessage style={{ background: 'red', color: 'white' }}>Oops! Something went wrong.</SuccessMessage>}
          </ContactForm>
        </Content>
      </Container>
    </ContactContainer>
  );
};

export default Contact;