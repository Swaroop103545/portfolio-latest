import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    color-scheme: dark;
    -webkit-text-size-adjust: 100%;
    overflow-x: hidden;
    width: 100%;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    width: 100%;
    position: relative;
    background-image: 
      radial-gradient(circle at 15% 10%, rgba(99, 102, 241, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 85% 30%, rgba(168, 85, 247, 0.06) 0%, transparent 45%),
      radial-gradient(circle at 50% 75%, rgba(6, 182, 212, 0.05) 0%, transparent 50%);
    background-attachment: fixed;
  }

  /* Custom Modern Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #08090e;
  }

  ::-webkit-scrollbar-thumb {
    background: #1e293b;
    border-radius: 4px;
    border: 2px solid #08090e;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.primary};
  }

  /* Text Selection */
  ::selection {
    background: ${props => props.theme.colors.primary}40;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: inherit;
    background: none;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input, textarea {
    font-family: inherit;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      padding: 0 1rem;
    }
  }

  @keyframes pulseSlow {
    0%, 100% {
      transform: scale(1) translate(0, 0);
      opacity: 0.6;
    }
    50% {
      transform: scale(1.08) translate(15px, -15px);
      opacity: 0.85;
    }
  }

  @keyframes floatSlow {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }
`;

export default GlobalStyles;