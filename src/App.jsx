import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TechBackground from './components/TechBackground'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f0ff', // Cyberpunk Cyan
      light: '#5be4ff',
      dark: '#00b0bd',
    },
    secondary: {
      main: '#bc13fe', // Neon Purple
    },
    background: {
      default: 'transparent', // Crucial for Three.js background visibility
      paper: 'rgba(20, 20, 35, 0.7)', // Semi-transparent dark blueish grey
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      letterSpacing: '-0.02em',
      color: '#ffffff',
    },
    h2: {
      fontWeight: 700,
      fontSize: 'clamp(2rem, 4vw, 2.75rem)',
      letterSpacing: '-0.02em',
      color: '#ffffff',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.5rem',
      letterSpacing: '-0.01em',
      color: '#ffffff',
    },
    h4: {
      fontWeight: 600,
      fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
      letterSpacing: '-0.01em',
      color: '#e0e0e0',
    },
    h6: {
      fontWeight: 700,
      fontSize: '1.25rem',
      color: '#ffffff',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#e0e0e0',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#b0bec5',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#050505', // Fallback color
          overflowX: 'hidden',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          background: 'rgba(30, 30, 40, 0.6)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 30px rgba(0, 240, 255, 0.1)', // Cyan glow on hover
            border: '1px solid rgba(0, 240, 255, 0.3)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
        },
        contained: {
          backgroundColor: '#ffffff',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#e0e0e0',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
          },
        },
        outlined: {
          borderColor: '#ffffff',
          color: '#ffffff',
          '&:hover': {
            borderColor: '#00f0ff',
            color: '#00f0ff',
            backgroundColor: 'rgba(0, 240, 255, 0.05)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          backdropFilter: 'blur(5px)',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#e0e0e0',
          '&:hover': {
             background: 'rgba(255, 255, 255, 0.1)',
             borderColor: '#00f0ff',
          },
        },
        outlined: {
          borderColor: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
            },
            '&:hover fieldset': {
              borderColor: '#ffffff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00f0ff',
            },
            '& input': {
              color: '#ffffff',
            },
          },
          '& .MuiInputLabel-root': {
             color: '#b0bec5',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#00f0ff',
          },
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TechBackground />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App