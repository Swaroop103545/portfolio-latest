import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Experience from './components/Experience';

const AppContent = () => {
  const { isDarkMode, isLoading } = useSelector((state) => state.ui);
  
  const theme = {
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
      background: isDarkMode ? '#0a0a0a' : '#ffffff',
      surface: isDarkMode ? '#1a1a1a' : '#f8f9fa',
      text: isDarkMode ? '#ffffff' : '#333333',
      textSecondary: isDarkMode ? '#b0b0b0' : '#666666',
      accent: '#ff6b6b',
      success: '#51cf66',
      warning: '#ffd43b',
      error: '#ff6b6b',
    },
    fonts: {
      primary: "'Poppins', sans-serif",
    },
    breakpoints: {
      mobile: '768px',
      tablet: '1024px',
      desktop: '1200px',
    },
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/experience" element={<Experience />} /> 
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App; 