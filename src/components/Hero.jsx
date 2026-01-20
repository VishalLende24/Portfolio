import { Box, Container, Typography, Button, Stack, Grid, Avatar } from '@mui/material'
import profilePhoto from '../assets/linkedImage.png'

const Hero = () => {
  return (
    <Box
      sx={{
        background: 'transparent',
        color: 'white',
        py: { xs: 8, md: 12 },
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          // background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 100%)', // Adjusted to dark fade
          
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Photo Section */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                display: 'inline-block',
              }}
            >
              {/* Decorative background glow - brighter for better visibility */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: -30,
                  background: 'radial-gradient(circle, rgba(0,240,255,0.4) 0%, rgba(188,19,254,0.2) 50%, transparent 70%)',
                  borderRadius: '16px',
                  filter: 'blur(40px)',
                  zIndex: 0,
                }}
              />
              
              {/* Profile Photo */}
              <Box
                component="img"
                src={profilePhoto}
                alt="Vishal Lende"
                sx={{
                  width: { xs: '100%', md: '420px' },
                  maxWidth: '420px',
                  height: 'auto',
                  border: '5px solid',
                  borderColor: 'rgba(0,240,255,0.3)',
                  borderRadius: '16px',
                  boxShadow: '0 0 40px rgba(0,240,255,0.3), 0 20px 60px rgba(0,0,0,0.6)',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'all 0.3s ease',
                  filter: 'brightness(1.1) contrast(1.05)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  objectFit: 'cover',
                  display: 'block',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 0 60px rgba(0,240,255,0.5), 0 25px 80px rgba(0,0,0,0.7)',
                    borderColor: 'rgba(0,240,255,0.5)',
                  }
                }}
              />
            </Box>
          </Grid>

          {/* Content Section */}
          <Grid item xs={12} md={7}>
            <Box textAlign={{ xs: 'center', md: 'left' }}>
              <Typography 
                variant="h1" 
                gutterBottom
                sx={{ 
                  mb: 2,
                  fontWeight: 900,
                  background: 'linear-gradient(45deg, #ffffff 30%, #cccccc 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Vishal Lende
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 300,
                  color: '#cccccc',
                  letterSpacing: '0.05em',
                }}
              >
                Full Stack Developer
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 5, 
                  maxWidth: { xs: '100%', md: 600 },
                  mx: { xs: 'auto', md: 0 },
                  fontWeight: 400,
                  color: '#aaaaaa',
                  lineHeight: 1.8,
                }}
              >
                Full Stack Developer with strong expertise in backend and frontend development. Skilled in building scalable web applications using React.js, Node.js, and TypeScript. Proficient in database design with PostgreSQL, MongoDB, and Redis. Adept at efficient, high-quality, and clean architecture solutions.
              </Typography>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3} 
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ mt: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="#projects"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    '&:hover': { 
                      backgroundColor: '#f0f0f0',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#contact"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderColor: '#ffffff',
                    color: '#ffffff',
                    borderWidth: 2,
                    '&:hover': { 
                      backgroundColor: '#ffffff',
                      color: '#000000',
                      borderColor: '#ffffff',
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero