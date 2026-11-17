import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiCopy,
  FiExternalLink,
  FiClock,
  FiMessageSquare
} from 'react-icons/fi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  padding: 100px 1.5rem;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.colors.backgroundSecondary};

  &::before {
    content: '';
    position: absolute;
    bottom: -100px;
    left: 20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%);
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
  margin-bottom: 4rem;

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
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.92rem;
    line-height: 1.6;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

const InfoColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`;

const ContactCard = styled.div`
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 18px;
  padding: 2rem;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.25rem 1rem;
    border-radius: 16px;
  }
`;

const AvailabilityBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.25rem;
  border-radius: 12px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  color: #34d399;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.7rem 0.9rem;
    font-size: 0.78rem;
    margin-bottom: 1.25rem;
  }
`;

const PulseDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
  display: inline-block;
  flex-shrink: 0;
  animation: pulse 2s infinite ease-in-out;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(99, 102, 241, 0.3);
    background: rgba(99, 102, 241, 0.05);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.85rem 0.9rem;
    gap: 0.65rem;
  }
`;

const InfoLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;
  flex: 1;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.75rem;
  }
`;

const InfoIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: rgba(99, 102, 241, 0.15);
  color: ${props => props.theme.colors.primaryLight};
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

const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
  overflow: hidden;
`;

const InfoLabel = styled.span`
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InfoValue = styled.a`
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  transition: color 0.2s ease;
  word-break: break-all;
  overflow-wrap: anywhere;

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.85rem;
  }
`;

const CopyButton = styled.button`
  padding: 0.45rem 0.65rem;
  border-radius: 8px;
  font-size: 0.8rem;
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: #fff;
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.4);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.35rem 0.55rem;
    font-size: 0.75rem;
  }
`;

const SocialConnections = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.65rem;
    margin-top: 1.25rem;
    padding-top: 1.25rem;
  }
`;

const SocialButton = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 600;
  color: #fff;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.25s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: ${props => props.theme.colors.primaryLight};
    transform: translateY(-2px);
    color: #fff;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.82rem;
    padding: 0.65rem 0.75rem;
    gap: 0.35rem;
  }
`;

const FormCard = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 18px;
  padding: 2.25rem;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.25rem 1rem;
    border-radius: 16px;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.35rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

const FormSubtitle = styled.p`
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 1.75rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
  }
`;

const PresetRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.35rem;
    margin-bottom: 1.25rem;
  }
`;

const PresetChip = styled.button`
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 500;
  color: ${props => (props.active ? '#fff' : '#94a3b8')};
  background: ${props => (props.active ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255, 255, 255, 0.04)')};
  border: 1px solid ${props => (props.active ? props.theme.colors.primary : 'rgba(255, 255, 255, 0.08)')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    border-color: ${props => props.theme.colors.primaryLight};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.74rem;
    padding: 0.3rem 0.65rem;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 0;
    margin-bottom: 0;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-bottom: 1.25rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin-bottom: 1rem;
  }
`;

const Label = styled.label`
  font-size: 0.82rem;
  font-weight: 600;
  color: #cbd5e1;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  background: rgba(8, 9, 14, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 0.95rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primaryLight};
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.25);
    background: rgba(8, 9, 14, 0.9);
  }

  &::placeholder {
    color: #64748b;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 16px;
    padding: 0.75rem 0.85rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  background: rgba(8, 9, 14, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 0.95rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primaryLight};
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.25);
    background: rgba(8, 9, 14, 0.9);
  }

  &::placeholder {
    color: #64748b;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 16px;
    padding: 0.75rem 0.85rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.95rem;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
  background: ${props => props.theme.gradients.primary};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(99, 102, 241, 0.55);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    min-height: 48px;
    font-size: 0.92rem;
    padding: 0.85rem;
  }
`;

const AlertMessage = styled(motion.div)`
  margin-top: 1.25rem;
  padding: 0.9rem;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => (props.success ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)')};
  border: 1px solid ${props => (props.success ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)')};
  color: ${props => (props.success ? '#34d399' : '#f87171')};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedType, setCopiedType] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const presets = [
    'Senior React Native Role',
    'Full-Time Frontend Role',
    'Contract Mobile Architecture',
    'AI Code Review Consultation'
  ];

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (serviceID && templateID && publicKey) {
      emailjs.send(serviceID, templateID, formData, publicKey)
        .then(() => {
          setIsSubmitting(false);
          setFeedback({ success: true, text: 'Thank you! Your message has been sent successfully.' });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setFeedback(null), 6000);
        })
        .catch(err => {
          console.error(err);
          setIsSubmitting(false);
          setFeedback({
            success: false,
            text: 'Direct send failed. Opening your mail client as fallback...'
          });
          window.location.href = `mailto:swaroopprataparao@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Swaroop,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
        });
    } else {
      // Direct mailto fallback
      setTimeout(() => {
        setIsSubmitting(false);
        setFeedback({ success: true, text: 'Opening your default email application...' });
        window.location.href = `mailto:swaroopprataparao@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Swaroop,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
      }, 500);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>Get In Touch</SectionTag>
          <SectionTitle>
            Let's Build Something <span>Exceptional</span>
          </SectionTitle>
          <SectionSubtitle>
            Whether you have an upcoming senior mobile role, contract opportunity, or engineering inquiry, my inbox is always open.
          </SectionSubtitle>
        </SectionHeader>

        <ContactGrid>
          <InfoColumn
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactCard>
              <AvailabilityBanner>
                <PulseDot />
                <span>Currently available for full-time & high-impact contracts</span>
              </AvailabilityBanner>

              <InfoItem>
                <InfoLeft>
                  <InfoIcon><FiMail /></InfoIcon>
                  <InfoDetails>
                    <InfoLabel>Email Address</InfoLabel>
                    <InfoValue href="mailto:swaroopprataparao@gmail.com">
                      swaroopprataparao@gmail.com
                    </InfoValue>
                  </InfoDetails>
                </InfoLeft>
                <CopyButton
                  onClick={() => handleCopy('swaroopprataparao@gmail.com', 'email')}
                  title="Copy email"
                >
                  {copiedType === 'email' ? <FiCheck color="#34d399" /> : <FiCopy />}
                  <span>{copiedType === 'email' ? 'Copied' : 'Copy'}</span>
                </CopyButton>
              </InfoItem>

              <InfoItem>
                <InfoLeft>
                  <InfoIcon><FiPhone /></InfoIcon>
                  <InfoDetails>
                    <InfoLabel>Phone / WhatsApp</InfoLabel>
                    <InfoValue href="tel:+918341114950">+91 8341114950</InfoValue>
                  </InfoDetails>
                </InfoLeft>
                <CopyButton
                  onClick={() => handleCopy('+918341114950', 'phone')}
                  title="Copy phone number"
                >
                  {copiedType === 'phone' ? <FiCheck color="#34d399" /> : <FiCopy />}
                  <span>{copiedType === 'phone' ? 'Copied' : 'Copy'}</span>
                </CopyButton>
              </InfoItem>

              <InfoItem>
                <InfoLeft>
                  <InfoIcon><FiMapPin /></InfoIcon>
                  <InfoDetails>
                    <InfoLabel>Location</InfoLabel>
                    <InfoValue as="span">India (Open to Global Remote)</InfoValue>
                  </InfoDetails>
                </InfoLeft>
              </InfoItem>

              <SocialConnections>
                <SocialButton
                  href="https://github.com/Swaroop103545"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub size={18} />
                  <span>GitHub</span>
                </SocialButton>

                <SocialButton
                  href="https://www.linkedin.com/in/swaroop-prataparao-9a4066153/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLinkedin size={18} />
                  <span>LinkedIn</span>
                </SocialButton>
              </SocialConnections>
            </ContactCard>
          </InfoColumn>

          <FormCard
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FormTitle>Send a Message</FormTitle>
            <FormSubtitle>
              Select an inquiry topic or fill out the form below. I usually respond within 24 hours.
            </FormSubtitle>

            <PresetRow>
              {presets.map(item => (
                <PresetChip
                  type="button"
                  key={item}
                  active={formData.subject === item}
                  onClick={() => setFormData({ ...formData, subject: item })}
                >
                  {item}
                </PresetChip>
              ))}
            </PresetRow>

            <form onSubmit={handleSubmit}>
              <FormGrid>
                <FormGroup>
                  <Label htmlFor="contact-name">Your Name</Label>
                  <Input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormGroup>
              </FormGrid>

              <FormGroup>
                <Label htmlFor="contact-subject">Subject</Label>
                <Input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="contact-message">Message</Label>
                <TextArea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Share details about your role, project timeline, or questions..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                <FiSend size={16} />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </SubmitButton>

              <AnimatePresence>
                {feedback && (
                  <AlertMessage
                    success={feedback.success}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <FiCheck size={16} />
                    <span>{feedback.text}</span>
                  </AlertMessage>
                )}
              </AnimatePresence>
            </form>
          </FormCard>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;