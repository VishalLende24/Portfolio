import { Box, Container, Typography, Card, CardContent, Chip, Stack } from '@mui/material'
import WorkIcon from '@mui/icons-material/Work'

const Experience = () => {
  const experiences = [
    //  {
    //   period: 'Dec 2025 - Present',
    //   title: 'Software Development',
    //   company: 'Hoora Technologies Private Limited',
    //   responsibilities: [
    //     'Working as a Software Developer, contributing to the development of new features and fixing bugs to improve application stability and performance.',
    //     'Developed and enhanced application features using Node.js, Express, and TypeScript with MongoDb.',
    //     'Collaborated with cross-functional teams including QA and product to ensure smooth feature delivery.',
    //     'Identified, debugged, and resolved software defects to improve system reliability and user experience.',
    //     'Optimized application performance and scalability through code optimization and database management.'
    //   ],
    //   tech: ['Node.js', 'TypeScript', 'MongoDb', 'Redis', 'Express', 'API integration']
    // },
    {
      period: 'Nov 2023 - Nov 2025',
      title: 'Software Development Team Lead',
      company: 'Leadows Technologies Private Limited',
      responsibilities: [
        'Led and managed a team of 5 developers to deliver scalable white-label software solutions.',
        'Designed microservices architecture using Node.js, Express, and TypeScript with PostgreSQL.',
        'Implemented JWT authentication, cookie-based session management, and Redis caching.',
        'Optimized PostgreSQL data models and mentored team on best practices and debugging.'
      ],
      tech: ['Node.js', 'TypeScript', 'PostgreSQL','MongoDb', 'Redis', 'Express', 'Microservices','API integration']
    }
  ]

  return (
    <Box sx={{ py: 8 }} id="experience">
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
           Experience
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {experiences.map((exp, index) => (
            <Box 
                key={index} 
                sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 2, md: 4 }
                }}
            >
              {/* Date Column (Desktop) */}
              <Box 
                sx={{ 
                    width: { xs: '100%', md: '200px' }, 
                    flexShrink: 0,
                    textAlign: { xs: 'left', md: 'right' },
                    pt: { md: 2 }
                }}
              >
                 <Typography 
                    variant="h6" 
                    color="primary.main" 
                    component="span" 
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: { md: 'flex-end' }, gap: 1 }}
                >
                    <WorkIcon fontSize="small" sx={{ display: { xs: 'inline-block', md: 'none' } }} />
                    {exp.period}
                 </Typography>
              </Box>

              {/* Verified Timeline Line (Desktop Only) */}
              <Box 
                 sx={{ 
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'column',
                    alignItems: 'center',
                    mr: 2
                 }}
              >
                  {/* Dot */}
                  <Box sx={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    boxShadow: '0 0 0 4px rgba(0, 240, 255, 0.2)',
                    mt: 2.5,
                    zIndex: 1
                  }} />
                  {/* Line */}
                  {index !== experiences.length - 1 && (
                      <Box sx={{
                        width: 2,
                        flexGrow: 1,
                        bgcolor: 'divider',
                        my: 0.5
                      }} />
                  )}
              </Box>

              {/* Content Card */}
              <Card sx={{ flexGrow: 1, width: '100%', position: 'relative', overflow: 'visible' }}>
                 {/* Mobile Timeline Line indicator */}
                 <Box sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 4,
                    bgcolor: 'primary.main',
                    display: { xs: 'block', md: 'none' }
                 }} />

                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ mb: 2 }}>
                    {exp.company}
                  </Typography>
                  
                  <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <Typography component="li" key={respIndex} variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                        {resp}
                      </Typography>
                    ))}
                  </Box>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {exp.tech.map((tech, techIndex) => (
                      <Chip 
                        key={techIndex} 
                        label={tech} 
                        size="small" 
                        variant="outlined" 
                        sx={{ borderColor: 'rgba(255,255,255,0.15)' }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Experience