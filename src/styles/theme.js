export const theme = {
  colors: {
    background: '#08090e',
    backgroundSecondary: '#0d111a',
    surface: '#111726',
    surfaceHover: '#171f33',
    cardBg: 'rgba(17, 23, 38, 0.72)',
    cardBgHover: 'rgba(23, 31, 51, 0.88)',
    cardBorder: 'rgba(255, 255, 255, 0.08)',
    cardBorderHover: 'rgba(99, 102, 241, 0.45)',
    
    // Brand & Accents
    primary: '#6366f1', // Electric Indigo
    primaryLight: '#818cf8',
    primaryDark: '#4f46e5',
    primaryGlow: 'rgba(99, 102, 241, 0.35)',
    
    secondary: '#a855f7', // Vivid Purple
    secondaryLight: '#c084fc',
    secondaryGlow: 'rgba(168, 85, 247, 0.3)',
    
    cyan: '#06b6d4', // Neon Cyan
    cyanLight: '#22d3ee',
    cyanGlow: 'rgba(6, 182, 212, 0.3)',
    
    emerald: '#10b981', // Success / Active
    emeraldLight: '#34d399',
    emeraldGlow: 'rgba(16, 185, 129, 0.25)',
    
    amber: '#f59e0b',
    rose: '#f43f5e',
    
    // Typography
    text: '#f8fafc',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
    textInverse: '#08090e',
    
    // Badges & subtle backgrounds
    badgeBg: 'rgba(99, 102, 241, 0.12)',
    badgeBorder: 'rgba(99, 102, 241, 0.25)',
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
    cyanIndigo: 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
    emeraldTeal: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    cardGloss: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
    subtleDark: 'linear-gradient(180deg, #0d111a 0%, #08090e 100%)',
  },

  fonts: {
    primary: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'Fira Code', 'JetBrains Mono', monospace",
  },

  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.4)',
    md: '0 8px 24px rgba(0, 0, 0, 0.5)',
    lg: '0 16px 36px rgba(0, 0, 0, 0.6)',
    glowPrimary: '0 0 25px rgba(99, 102, 241, 0.35)',
    glowCyan: '0 0 25px rgba(6, 182, 212, 0.3)',
  },

  breakpoints: {
    mobileSm: '380px',
    mobile: '576px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
};