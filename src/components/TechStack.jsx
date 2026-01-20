import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack, useTheme, alpha } from '@mui/material'
import { techStackData } from '../data/techStack'

// Keyframes for subtle animations could be added in a global CSS or styled via sx prop with @keyframes
// For now, we use standard transitions.

const TechStack = () => {
    const theme = useTheme();

  return (
    <Box sx={{ py: 10, position: 'relative', overflow: 'hidden' }}>
        {/* Background decorative elements */}
        <Box 
            sx={{
                position: 'absolute',
                top: '10%',
                left: '-10%',
                width: '40%',
                height: '40%',
                // background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.15)} 0%, transparent 70%)`,
                zIndex: 0,
                pointerEvents: 'none'
            }}
        />
        <Box 
            sx={{
                position: 'absolute',
                bottom: '10%',
                right: '-10%',
                width: '40%',
                height: '40%',
                // background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 70%)`,
                zIndex: 0,
                pointerEvents: 'none'
            }}
        />

      {/* <Container> */}
        <Typography 
            variant="h2" 
            textAlign="center" 
            gutterBottom 
            sx={{ 
                mb: 2, 
                fontWeight: 800,
                background: 'linear-gradient(135deg, #fff 30%, #a5b4fc 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(255,255,255,0.1)' 
            }}
        >
          Tech Stack
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {techStackData.map((category, index) => (
            <Grid item xs={12} sm={5} md={3} key={index}>
              <Card 
                sx={{ 
                    height: '100%',
                    background: alpha('#1e1e28', 0.6),
                    backdropFilter: 'blur(16px)',
                    border: '1px solid',
                    borderColor: alpha('#fff', 0.08),
                    borderRadius: 1,
                    overflow: 'visible',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: -1,
                        borderRadius: 4,
                        padding: '1px', 
                        background: `linear-gradient(45deg, transparent, ${alpha(category.accentColor, 0.3)}, transparent)`,
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        opacity: 0.5,
                        transition: 'opacity 0.4s ease'
                    },
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 40px -10px ${alpha(category.accentColor, 0.3)}`,
                        borderColor: alpha(category.accentColor, 0.5),
                        '&::before': {
                            opacity: 1
                        }
                    }
                }}
              >
                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {/* Header */}
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box 
                        sx={{ 
                            p: 1.5, 
                            borderRadius: 2, 
                            bgcolor: alpha(category.accentColor, 0.1),
                            color: category.accentColor,
                            display: 'flex',
                            boxShadow: `0 0 15px ${alpha(category.accentColor, 0.2)}`
                        }}
                    >
                        {category.icon}
                    </Box>
                    <Typography 
                        variant="h6" 
                        fontWeight={700} 
                        sx={{ 
                            fontSize: '1.25rem', 
                            color: '#fff',
                            letterSpacing: '0.02em'
                        }}
                    >
                        {category.title}
                    </Typography>
                  </Stack>

                  {/* Skills Chips */}
                  <Stack direction="row" flexWrap="wrap" gap={1.5}>
                    {category.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        icon={skill.icon}
                        label={skill.name}
                        variant="outlined"
                        sx={{ 
                            height: 'auto',
                            py: 0.75,
                            borderRadius: '8px',
                            border: '1px solid',
                            borderColor: alpha('#fff', 0.1),
                            bgcolor: alpha('#fff', 0.03),
                            color: '#e2e8f0',
                            fontWeight: 500,
                            transition: 'all 0.3s ease',
                            '& .MuiChip-label': {
                                px: 1.5,
                                fontSize: '0.9rem'
                            },
                            '& .MuiChip-icon': {
                                color: 'inherit',
                                ml: 1
                            },
                            '&:hover': { 
                                borderColor: category.accentColor,
                                bgcolor: alpha(category.accentColor, 0.1),
                                color: '#fff',
                                boxShadow: `0 2px 12px ${alpha(category.accentColor, 0.15)}`,
                                transform: 'translateY(-2px)'
                            }
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      {/* </Container> */}
    </Box>
  )
}

export default TechStack