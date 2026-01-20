import { Box, Container, Typography, Link, Stack, Divider } from '@mui/material'

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Divider sx={{ mb: 4, borderColor: '#333333' }} />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              fontWeight: 500,
              color: '#cccccc',
            }}
          >
            © 2024 Vishal Lende. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={4}>
            <Link
              href="www.linkedin.com/in/vishal-lende"
              target="_blank"
              sx={{
                color: '#cccccc',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.3s ease',
                '&:hover': { 
                  color: '#ffffff',
                  textDecoration: 'underline',
                },
              }}
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/VishalLende24"
              target="_blank"
              sx={{
                color: '#cccccc',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.3s ease',
                '&:hover': { 
                  color: '#ffffff',
                  textDecoration: 'underline',
                },
              }}
            >
              GitHub
            </Link>
            <Link
              href="mailto:vishallende24@gmail.com"
              sx={{
                color: '#cccccc',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.3s ease',
                '&:hover': { 
                  color: '#ffffff',
                  textDecoration: 'underline',
                },
              }}
            >
              Email
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer