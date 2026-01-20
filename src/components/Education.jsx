import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Electronics and Telecommunication',
      institution: 'Yeshwantrao Chavan College Of Engineering, Nagpur',
      year: '2019 - 2023',
      description: 'specialized in Electronics & Telecommunication with a strong foundation in embedded systems and software development.',
    },
    {
      degree: 'Higher Secondary School Certificate (12th Grade)',
      institution: 'Ashok Jr. College, Umred',
      year: '2019',
      description: 'Science Stream',
    },
    {
      degree: 'Secondary School Certificate (10th Grade)',
      institution: 'Sanskar Vidya Sagar',
      year: '2017',
      description: 'Completed with academic excellence.',
    }
  ]

  return (
    <Box sx={{ py: 8 }} id="education">
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Education
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {education.map((edu, index) => (
            <Box 
              key={index} 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 2, md: 4 }
              }}
            >
              {/* Year Column (Desktop) */}
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
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: { md: 'flex-end' }, gap: 1, fontWeight: 700 }}
                >
                    <SchoolIcon fontSize="small" sx={{ display: { xs: 'inline-block', md: 'none' } }} />
                    {edu.year}
                 </Typography>
              </Box>

              {/* Timeline Graphic (Desktop) */}
              <Box 
                 sx={{ 
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'column',
                    alignItems: 'center',
                    mr: 2
                 }}
              >
                  <Box sx={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    bgcolor: 'background.paper',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 0 10px rgba(0, 240, 255, 0.3)',
                    mt: 2.5,
                    zIndex: 1
                  }} />
                  {index !== education.length - 1 && (
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
                 {/* Mobile Timeline strip */}
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
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: 'text.primary' }}>
                    {edu.degree}
                  </Typography>
                  <Typography variant="subtitle1" color="primary.light" gutterBottom sx={{ mb: 1.5, fontWeight: 500 }}>
                    {edu.institution}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary">
                     {edu.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Education