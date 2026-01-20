
import { FaVuejs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaGitAlt, FaUsers, FaChalkboardTeacher, FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiMui, SiExpress, SiPostgresql, SiMongodb, SiRedis, SiPostman, SiJira, SiJsonwebtokens, SiSwagger } from 'react-icons/si';
import { MdSecurity, MdApi } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';

export const techStackData = [
  {
    title: 'Frontend Development',
    icon: <FaCode size={24} color="#61dafb" />, 
    accentColor: '#61dafb',
    skills: [
      { name: 'Vue.js', icon: <FaVuejs size={20} color="#4FC08D" /> },
      { name: 'React.js', icon: <FaReact size={20} color="#61DAFB" /> },
      { name: 'TypeScript', icon: <SiTypescript size={20} color="#3178C6" /> },
      { name: 'JavaScript (ES6+)', icon: <SiJavascript size={20} color="#F7DF1E" /> },
      { name: 'HTML5', icon: <FaHtml5 size={20} color="#E34F26" /> },
      { name: 'CSS3', icon: <FaCss3Alt size={20} color="#1572B6" /> },
      { name: 'Material UI', icon: <SiMui size={20} color="#007FFF" /> }
    ]
  },
  {
    title: 'Backend Development',
    icon: <FaServer size={24} color="#68a063" />,
    accentColor: '#68a063',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs size={20} color="#339933" /> },
      { name: 'Express.js', icon: <SiExpress size={20} color="#fdfbfbff" /> },
      { name: 'Microservices', icon: <FaServer size={20} color="#555555" /> }, // Generic server icon
    //   { name: 'RESTful APIs', icon: <MdApi size={20} color="#E0E0E0" /> },
    //   { name: 'JWT Auth', icon: <SiJsonwebtokens size={20} color="#D63AFF" /> },
    //   { name: 'Session Management', icon: <MdSecurity size={20} color="#FF5722" /> }
    ]
  },
  {
    title: 'Databases & Storage',
    icon: <FaDatabase size={24} color="#00f0ff" />,
    accentColor: '#00f0ff',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql size={20} color="#4169E1" /> },
      { name: 'MongoDB', icon: <SiMongodb size={20} color="#47A248" /> },
      { name: 'Redis', icon: <SiRedis size={20} color="#DC382D" /> },
      
    ]
  },
  {
    title: 'API Integration & Tools',
    icon: <TbApi size={24} color="#bc13fe" />,
    accentColor: '#bc13fe',
    skills: [
      { name: 'Docker', icon: <FaDocker size={20} color="#2496ED" /> },
      { name: 'Postman', icon: <SiPostman size={20} color="#FF6C37" /> },
      { name: 'Git', icon: <FaGitAlt size={20} color="#F05032" /> },
    ]
  },
  {
    title: 'Project Management',
    icon: <FaUsers size={24} color="#ff0055" />,
    accentColor: '#ff0055',
    skills: [
      { name: 'Jira', icon: <SiJira size={20} color="#0052CC" /> },
      { name: 'Mentorship', icon: <FaChalkboardTeacher size={20} color="#FF9800" /> },
      { name: 'Code Reviews', icon: <FaCode size={20} color="#9C27B0" /> }
    ]
  }
];
