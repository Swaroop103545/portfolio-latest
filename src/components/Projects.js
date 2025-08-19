// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiGithub, FiExternalLink, FiCode, FiMonitor, FiSmartphone } from 'react-icons/fi';

// const ProjectsContainer = styled.div`
//   padding: 120px 0 80px;
//   background: ${props => props.theme.colors.background};
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 2rem;
// `;

// const SectionTitle = styled(motion.h2)`
//   font-size: 2.5rem;
//   font-weight: 700;
//   text-align: center;
//   margin-bottom: 3rem;
//   background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// `;

// const FilterButtons = styled(motion.div)`
//   display: flex;
//   justify-content: center;
//   gap: 1rem;
//   margin-bottom: 3rem;
//   flex-wrap: wrap;
// `;

// const FilterButton = styled(motion.button)`
//   padding: 0.75rem 1.5rem;
//   border: 2px solid ${props => props.theme.colors.primary};
//   background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
//   color: ${props => props.active ? 'white' : props.theme.colors.primary};
//   border-radius: 25px;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background: ${props => props.theme.colors.primary};
//     color: white;
//     transform: translateY(-2px);
//   }
// `;

// const ProjectsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//   gap: 2rem;

//   @media (max-width: ${props => props.theme.breakpoints.mobile}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ProjectCard = styled(motion.div)`
//   background: ${props => props.theme.colors.surface};
//   border-radius: 20px;
//   overflow: hidden;
//   border: 1px solid ${props => props.theme.colors.surface};
//   transition: all 0.3s ease;
//   position: relative;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(135deg, ${props => props.theme.colors.primary}10, ${props => props.theme.colors.secondary}10);
//     opacity: 0;
//     transition: opacity 0.3s ease;
//     z-index: 1;
//   }

//   &:hover::before {
//     opacity: 1;
//   }

//   &:hover {
//     transform: translateY(-10px) scale(1.02);
//     box-shadow: 0 25px 50px rgba(102, 126, 234, 0.2);
//   }

//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: 3px;
//     background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
//     transform: scaleX(0);
//     transition: transform 0.3s ease;
//   }

//   &:hover::after {
//     transform: scaleX(1);
//   }
// `;

// const ProjectImage = styled.div`
//   width: 100%;
//   height: 200px;
//   background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 3rem;
//   color: white;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%);
//     transform: translateX(-100%);
//     transition: transform 0.6s ease;
//   }

//   &:hover::before {
//     transform: translateX(100%);
//   }

//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.1) 70%);
//     opacity: 0;
//     transition: opacity 0.3s ease;
//   }

//   &:hover::after {
//     opacity: 1;
//   }
// `;

// const ProjectContent = styled.div`
//   padding: 1.5rem;
// `;

// const ProjectTitle = styled.h3`
//   font-size: 1.3rem;
//   font-weight: 600;
//   margin-bottom: 0.5rem;
//   color: ${props => props.theme.colors.text};
// `;

// const ProjectDescription = styled.p`
//   color: ${props => props.theme.colors.textSecondary};
//   line-height: 1.6;
//   margin-bottom: 1rem;
// `;

// const ProjectTech = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `;

// const TechTag = styled.span`
//   padding: 0.25rem 0.75rem;
//   background: ${props => props.theme.colors.primary}20;
//   color: ${props => props.theme.colors.primary};
//   border-radius: 15px;
//   font-size: 0.8rem;
//   font-weight: 500;
// `;

// const ProjectLinks = styled.div`
//   display: flex;
//   gap: 1rem;
// `;

// const ProjectLink = styled(motion.a)`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   padding: 0.5rem 1rem;
//   background: ${props => props.theme.colors.surface};
//   border: 1px solid ${props => props.theme.colors.primary}30;
//   border-radius: 8px;
//   color: ${props => props.theme.colors.text};
//   font-size: 0.9rem;
//   font-weight: 500;
//   transition: all 0.3s ease;

//   &:hover {
//     background: ${props => props.theme.colors.primary};
//     color: white;
//     transform: translateY(-2px);
//   }
// `;

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const filters = [
//     { id: 'all', label: 'All', icon: <FiCode /> },
//     { id: 'mobile', label: 'Mobile Apps', icon: <FiSmartphone /> },
//     { id: 'web', label: 'Web Apps', icon: <FiMonitor /> },
//   ];

//   const projects = [
//     {
//       id: 1,
//       title: "PRAM Edu",
//       description: "Comprehensive edu-tech platform enhancing communication between students, parents, and faculty. Features role-based access, assignment management, attendance tracking, and fee management.",
//       image: "🎓",
//       category: "mobile",
//       technologies: ["React Native", "Expo", "TypeScript", "Razorpay", "Redux", "RTK Query"],
//       github: "https://github.com",
//       live: "https://play.google.com/store/apps/details?id=com.prameducation.pramedu&hl=en",
//     },
//     {
//       id: 2,
//       title: "Movingful",
//       description: "Business referral app where users can refer businesses to friends and earn money. Features include favorited businesses, friends management, and earnings tracking.",
//       image: "💰",
//       category: "mobile",
//       technologies: ["React Native", "TypeScript", "GraphQL", "Context API", "AWS", "Apollo Client", "Native iOS", "Native Android", "Jest"],
//       github: "https://github.com",
//       live: "https://play.google.com/store/apps/details?id=com.movingful_provider&hl=en_IN&gl=US",
//     },
//     {
//       id: 3,
//       title: "WorldSchool",
//       description: "Online teaching app for iOS and Android with chat, appointments, and class search functionality. Teachers can create public/private classes and invite students.",
//       image: "🌍",
//       category: "mobile",
//       technologies: ["React Native", "Redux", "Native iOS", "Native Android"],
//       github: "https://github.com",
//       live: "https://play.google.com/store/apps/details?id=com.worldschool&pcampaignid=web_share",
//     },
//     {
//       id: 4,
//       title: "MediSync",
//       description: "Health tracking app with Bluetooth integration for medical devices. Monitors blood pressure, glucose, heart rate, and oxygen saturation with real-time data visualization.",
//       image: "🏥",
//       category: "mobile",
//       technologies: ["React Native", "TypeScript", "Bluetooth LE", "Redux", "React Native SVG Charts"],
//       github: "https://github.com",
//       live: "https://demo.com",
//     },
//     {
//       id: 5,
//       title: "Thruptis Food Darbar",
//       description: "Online food ordering platform with customer accounts, food filtering, shopping cart, and COD payment. Includes admin panel for menu management.",
//       image: "🍕",
//       category: "mobile",
//       technologies: ["React Native", "React", "Redux", "Firebase", "Native iOS", "Native Android"],
//       github: "https://github.com",
//       live: "https://demo.com",
//     },
//     {
//       id: 6,
//       title: "Plants Management System",
//       description: "Plant care app with online shopping, plant categorization, camera search, and watering reminders. Includes admin panel for plant management.",
//       image: "🌱",
//       category: "mobile",
//       technologies: ["React Native", "Material UI", "Redux", "Firebase", "Native iOS", "Native Android"],
//       github: "https://github.com",
//       live: "https://demo.com",
//     },
//     {
//       id: 7,
//       title: "Thruptis Food Darbar",
//       description: "Online food ordering platform with customer accounts, food filtering, shopping cart, and COD payment. Includes admin panel for menu management.",
//       image: "🍕",
//       category: "web",
//       technologies: ["React Native", "React", "Redux", "Firebase", "Native iOS", "Native Android"],
//       github: "https://github.com",
//       live: "https://demo.com",
//     },
//     {
//       id: 8,
//       title: "Plants Management System",
//       description: "Plant care app with online shopping, plant categorization, camera search, and watering reminders. Includes admin panel for plant management.",
//       image: "🌱",
//       category: "web",
//       technologies: ["React Native", "React JS", "Material UI", "Redux", "Firebase", "Native iOS", "Native Android"],
//       github: "https://github.com",
//       live: "https://demo.com",
//     },
//     {
//       id: 9,
//       title: "Cab Ordering System",
//       description: "Mobile app for booking cabs with real-time tracking, driver management, and payment integration. Features include ride history and user profiles.",
//       image: "🌱",
//       category: "web",
//       technologies: ["React Native", "React JS", "Razorpay", "Redux", "Material UI", "ExpressJs", "Firebase"],
//       github: "https://github.com",
//       live: "https://demo.com",
//     },
//   ];

// //   Cab Ordering System
// // Technologies: React Native, React, Redux, Material UI, ExpressJs, Firebase


//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === activeFilter);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <ProjectsContainer>
//       <Container>
//         <SectionTitle
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           My Projects
//         </SectionTitle>

//         <FilterButtons
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           {filters.map((filter) => (
//             <FilterButton
//               key={filter.id}
//               active={activeFilter === filter.id}
//               onClick={() => setActiveFilter(filter.id)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {filter.icon} {filter.label}
//             </FilterButton>
//           ))}
//         </FilterButtons>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <ProjectsGrid>
//             <AnimatePresence mode="wait">
//               {filteredProjects.map((project) => (
//                 <ProjectCard
//                   key={project.id}
//                   variants={cardVariants}
//                   layout
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <ProjectImage>
//                     {project.image}
//                   </ProjectImage>
                  
//                   <ProjectContent>
//                     <ProjectTitle>{project.title}</ProjectTitle>
//                     <ProjectDescription>{project.description}</ProjectDescription>
                    
//                     <ProjectTech>
//                       {project.technologies.map((tech, index) => (
//                         <TechTag key={index}>{tech}</TechTag>
//                       ))}
//                     </ProjectTech>
                    
//                     <ProjectLinks>
//                       <ProjectLink
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <FiGithub />
//                         Code
//                       </ProjectLink>
                      
//                       <ProjectLink
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <FiExternalLink />
//                         Live Demo
//                       </ProjectLink>
//                     </ProjectLinks>
//                   </ProjectContent>
//                 </ProjectCard>
//               ))}
//             </AnimatePresence>
//           </ProjectsGrid>
//         </motion.div>
//       </Container>
//     </ProjectsContainer>
//   );
// };

// export default Projects; 

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiSmartphone, FiMonitor, FiCode } from 'react-icons/fi';

const ProjectsContainer = styled.div`
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
  background-clip: text;
`;

const FilterButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.theme.colors.primary};
  background: ${props => (props.active ? props.theme.colors.primary : 'transparent')};
  color: ${props => (props.active ? 'white' : props.theme.colors.primary)};
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.surface};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 50px rgba(102, 126, 234, 0.2);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: ${props => props.theme.colors.primary}20;
  color: ${props => props.theme.colors.primary};
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.primary}30;
  border-radius: 50%;
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All', icon: <FiCode /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <FiSmartphone /> },
    { id: 'web', label: 'Web Apps', icon: <FiMonitor /> },
  ];

  const projects = [
    {
      id: 1,
      title: "PRAM Edu",
      description: "Comprehensive edu-tech platform for students, parents, and faculty.",
      image: "🎓",
      category: "mobile",
      technologies: ["React Native", "Expo", "TypeScript", "Razorpay", "Redux", "RTK Query"],
      github: "https://github.com",
      playstore: "https://play.google.com/store/apps/details?id=com.prameducation.pramedu&hl=en",
      appstore: "https://apps.apple.com/app/idXXXXXXXX",
    },
    {
      id: 2,
      title: "Movingful",
      description: "Business referral app with rewards, friends management, and earnings tracking.",
      image: "💰",
      category: "mobile",
      technologies: ["React Native", "TypeScript", "GraphQL", "AWS", "Apollo Client", "Jest"],
      github: "https://github.com",
      playstore: "https://play.google.com/store/apps/details?id=com.movingful_provider&hl=en_IN&gl=US",
      appstore: "https://apps.apple.com/app/idXXXXXXXX",
    },
    {
      id: 3,
      title: "WorldSchool",
      description: "Online teaching app with chat, appointments, and class search functionality.",
      image: "🌍",
      category: "mobile",
      technologies: ["React Native", "Redux", "Native iOS", "Native Android"],
      github: "https://github.com",
      playstore: "https://play.google.com/store/apps/details?id=com.worldschool&pcampaignid=web_share",
      appstore: "https://apps.apple.com/app/idXXXXXXXX",
    },
    {
      id: 4,
      title: "MediSync",
      description: "Health tracking app with Bluetooth integration and real-time data visualization.",
      image: "🏥",
      category: "mobile",
      technologies: ["React Native", "TypeScript", "Bluetooth LE", "Redux", "React Native SVG Charts"],
      github: "https://github.com",
      playstore: "https://demo.com",
      appstore: "https://demo.com",
    },
    {
      id: 5,
      title: "Thruptis Food Darbar",
      description: "Online food ordering platform with admin panel and COD payment.",
      image: "🍕",
      category: "mobile",
      technologies: ["React Native", "React", "Redux", "Firebase", "Native iOS", "Native Android"],
      github: "https://github.com",
      playstore: "https://demo.com",
      appstore: "https://demo.com",
    },
    {
      id: 6,
      title: "Plants Management System",
      description: "Plant care app with online shopping, watering reminders, and admin panel.",
      image: "🌱",
      category: "mobile",
      technologies: ["React Native", "Material UI", "Redux", "Firebase"],
      github: "https://github.com",
      playstore: "https://demo.com",
      appstore: "https://demo.com",
    },
    {
      id: 7,
      title: "Thruptis Food Darbar",
      description: "Online food ordering platform with customer accounts and admin panel.",
      image: "🍕",
      category: "web",
      technologies: ["React", "Redux", "Firebase"],
      github: "https://github.com",
      playstore: "",
      appstore: "",
    },
    {
      id: 8,
      title: "Plants Management System",
      description: "Plant care app with shopping, camera search, and admin panel.",
      image: "🌱",
      category: "web",
      technologies: ["React", "Material UI", "Redux", "Firebase"],
      github: "https://github.com",
      playstore: "",
      appstore: "",
    },
    {
      id: 9,
      title: "Cab Ordering System",
      description: "Mobile app for booking cabs with real-time tracking and payments.",
      image: "🚖",
      category: "web",
      technologies: ["React", "Redux", "Material UI", "ExpressJs", "Firebase"],
      github: "https://github.com",
      playstore: "https://demo.com",
      appstore: "https://demo.com",
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <ProjectsContainer>
      <Container>
        <SectionTitle initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          My Projects
        </SectionTitle>

        <FilterButtons initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          {filters.map(filter => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.icon} {filter.label}
            </FilterButton>
          ))}
        </FilterButtons>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <ProjectsGrid>
            <AnimatePresence mode="wait">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} variants={cardVariants} layout whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <ProjectImage>{project.image}</ProjectImage>
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectTech>
                      {project.technologies.map((tech, i) => <TechTag key={i}>{tech}</TechTag>)}
                    </ProjectTech>
                    <ProjectLinks>
                      {project.github && <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer"><FiGithub /></ProjectLink>}
                      {project.playstore && <ProjectLink href={project.playstore} target="_blank" rel="noopener noreferrer"><FiSmartphone /></ProjectLink>}
                      {project.appstore && <ProjectLink href={project.appstore} target="_blank" rel="noopener noreferrer"><FiMonitor /></ProjectLink>}
                    </ProjectLinks>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </AnimatePresence>
          </ProjectsGrid>
        </motion.div>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;
