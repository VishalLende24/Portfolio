import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Stack, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import StorageIcon from '@mui/icons-material/Storage'
import SpeedIcon from '@mui/icons-material/Speed'
import CodeIcon from '@mui/icons-material/Code'

const Projects = () => {
  const projects = [
    {
      title: 'Inventory Management System',
      description: 'Developed a centralized system to manage inventory, stock levels, and transactions in real time, replacing manual tracking with a fully digital solution.',
      tech: ['Vue.js', 'Node.js', 'Express', 'TypeScript', 'MongoDB'],
      features: [
        'Real-time inventory insights and analytics using Vue.js dashboards.',
        'Role-based access control and JWT authentication.',
        'Automated background jobs for syncing data across branches.',
        'Real-time low-stock alerts to prevent stockouts.'
      ],
      backendLogic: 'RESTful APIs with TypeScript for type-safe backend operations. Atomic transactions used for data consistency across branches.',
      database: 'MongoDB optimized for large datasets. Aggregation pipelines used for real-time analytics.',
      impact: 'Ensured data accuracy and consistency, replacing manual errors. Enabled real-time decision making for stock management.',
      demoLink: 'https://management-frotend.vercel.app'
    },
    {
      title: 'Scalable Microservices Backend',
      description: 'developed a robust backend system for a white-label software solution with a strong focus on scalability, security, and Single Sign-On (SSO) authentication.',
      tech: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Microservices'],
      features: [
        'Decomposed monolithic logic into scalable microservices.',
        'Implemented secure session management with Redis.',
        'Containerized services using Docker for consistent deployment.'
      ],
      backendLogic: 'Event-driven communication between services. Efficient caching strategies to reduce database load.',
      database: 'PostgreSQL with optimized schema design for high-performance relations.',
      impact: 'Improved system reliability and reduced API response times significantly.'
    }
  ]

  return (
    <Box sx={{ py: 8 }} id="projects">
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={8} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  width:"100%",
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'visible' 
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 4 } }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, color: 'primary.main' }}>
                      {project.title}
                    </Typography>
                  </Stack>
                  
                  <Typography color="text.primary" paragraph sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.6 }}>
                    {project.description}
                  </Typography>

                  <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                    {project.tech.map((tech, techIndex) => (
                      <Chip 
                        key={techIndex} 
                        label={tech} 
                        size="small" 
                        variant="outlined"
                        sx={{ borderColor: 'rgba(255,255,255,0.2)', color: 'text.secondary' }}
                      />
                    ))}
                  </Stack>

                  <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />

                  {/* Enhanced Details Section */}
                  <Stack spacing={2} sx={{ mb: 3 }}>
                    <Box>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1, color: 'secondary.main' }}>
                            <CodeIcon fontSize="small" />
                            <Typography variant="subtitle2" fontWeight="bold">Backend Logic</Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary">
                            {project.backendLogic}
                        </Typography>
                    </Box>

                    <Box>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1, color: 'secondary.main' }}>
                            <StorageIcon fontSize="small" />
                            <Typography variant="subtitle2" fontWeight="bold">Database & Caching</Typography>
                        </Stack>
                         <Typography variant="body2" color="text.secondary">
                            {project.database}
                        </Typography>
                    </Box>

                    <Box>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1, color: 'secondary.main' }}>
                            <SpeedIcon fontSize="small" />
                            <Typography variant="subtitle2" fontWeight="bold">Impact</Typography>
                        </Stack>
                         <Typography variant="body2" color="text.secondary">
                            {project.impact}
                        </Typography>
                    </Box>
                  </Stack>
                  
                  <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />
                  
                  <Typography variant="subtitle2" color="primary.light" sx={{ mb: 1 }}>Key Features</Typography>
                  <List dense disablePadding>
                    {project.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} disablePadding sx={{ mb: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <CheckIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature} 
                          primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                    {project.demoLink && (
                        <Button 
                            variant="outlined" 
                            size="small" 
                            href={project.demoLink} 
                            target="_blank"
                        >
                        Live Demo
                        </Button>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Projects