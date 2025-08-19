# Personal Portfolio Website

A modern, responsive personal portfolio website built with React JS, Redux, and beautiful animations using Framer Motion.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Redux State Management**: Centralized state management with Redux Toolkit
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery
- **Skills Display**: Interactive skills section with progress bars
- **Mobile Menu**: Responsive mobile navigation

## 🛠️ Technologies Used

- **React 18**: Latest version of React with hooks
- **Redux Toolkit**: Modern Redux for state management
- **Styled Components**: CSS-in-JS styling
- **Framer Motion**: Animation library
- **React Router**: Client-side routing
- **React Icons**: Beautiful icon library

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Home.js         # Hero section
│   ├── About.js        # About section
│   ├── Projects.js     # Projects showcase
│   ├── Skills.js       # Skills section
│   ├── Contact.js      # Contact form
│   ├── Footer.js       # Footer
│   └── LoadingScreen.js # Loading animation
├── store/              # Redux store
│   ├── index.js        # Store configuration
│   └── uiSlice.js      # UI state slice
├── styles/             # Global styles
│   └── GlobalStyles.js # Global CSS
├── App.js              # Main app component
└── index.js            # Entry point
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful gradient effects throughout
- **Glass Morphism**: Modern glass-like effects
- **Hover Animations**: Interactive hover effects
- **Smooth Transitions**: Fluid page transitions
- **Typography**: Modern typography with Poppins font
- **Color Scheme**: Consistent color palette with theme support

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Key Components

### Header
- Fixed navigation with smooth scrolling
- Dark/light mode toggle
- Mobile hamburger menu
- Active page highlighting

### Home
- Hero section with animated text
- Call-to-action buttons
- Social media links
- Floating background elements

### About
- Personal information section
- Statistics cards
- Skills tags
- Downloadable CV button

### Projects
- Filterable project gallery
- Project cards with hover effects
- Technology tags
- Live demo and code links

### Skills
- Categorized skills display
- Animated progress bars
- Tools and technologies showcase
- Interactive skill cards

### Contact
- Contact form with validation
- Contact information cards
- Social media links
- Success message handling

## 🎨 Customization

### Colors
Update the theme colors in `src/App.js`:

```javascript
const theme = {
  colors: {
    primary: '#667eea',
    secondary: '#764ba2',
    // ... other colors
  }
};
```

### Content
- Update personal information in respective components
- Add your projects to the projects array in `Projects.js`
- Modify skills and technologies in `Skills.js`
- Update contact information in `Contact.js`

### Styling
- Modify global styles in `src/styles/GlobalStyles.js`
- Update component-specific styles in each component file
- Customize animations in component files

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

Made with ❤️ using React, Redux, and Framer Motion 