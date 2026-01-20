import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Link,
  Stack,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // EmailJS Service ID, Template ID, and Public Key
    // You should create a .env file with these values
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Fallback or warning if keys are missing
    if (!serviceId || !templateId || !publicKey) {
        setSnackbar({
            open: true,
            message: 'EmailJS keys are missing in environment variables. Check console.',
            severity: 'error'
        })
        console.error('Missing EmailJS keys. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.')
        setLoading(false)
        return
    }

    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Vishal' 
    }

    try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey)
        setSnackbar({ open: true, message: 'Message sent successfully!', severity: 'success' })
        setFormData({ name: '', email: '', message: '' })
    } catch (error) {
        console.error('FAILED...', error)
        setSnackbar({ open: true, message: 'Failed to send message. Please try again later.', severity: 'error' })
    } finally {
        setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbar({ ...snackbar, open: false })
  }

  return (
    <Box sx={{ py: 8 }} id="contact">
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Get in Touch
        </Typography>
        <Grid container gap={1}>
          <Grid item xs={12} md={3}>
            <Card sx={{ height: '100%', position: 'relative', overflow: 'visible' }}>
              <CardContent sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', gap: 4, height: '100%' }}>
                <Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
                    Contact Information
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    Feel free to reach out for collaborations, job opportunities, or just to say hello!
                  </Typography>
                </Box>

                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box sx={{ 
                      p: 1.5, 
                      borderRadius: 2, 
                      bgcolor: 'rgba(0, 240, 255, 0.1)', 
                      mr: 2,
                      display: 'flex'
                    }}>
                      <EmailIcon sx={{ color: 'primary.main' }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
                        Email
                      </Typography>
                      <Typography variant="body1" fontWeight="500">
                        vishallende24@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box sx={{ 
                      p: 1.5, 
                      borderRadius: 2, 
                      bgcolor: 'rgba(0, 240, 255, 0.1)', 
                      mr: 2,
                      display: 'flex'
                    }}>
                      <PhoneIcon sx={{ color: 'primary.main' }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
                        Phone
                      </Typography>
                      <Typography variant="body1" fontWeight="500">
                        +91 73853 04259
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box sx={{ 
                      p: 1.5, 
                      borderRadius: 2, 
                      bgcolor: 'rgba(0, 240, 255, 0.1)', 
                      mr: 2, 
                      display: 'flex'
                    }}>
                      <LinkedInIcon sx={{ color: 'primary.main' }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
                         Socials
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Link
                          href="https://www.linkedin.com/in/vishal-lende"
                          target="_blank"
                          underline="hover"
                          sx={{ color: 'text.primary', fontWeight: 500 }}
                        >
                          LinkedIn
                        </Link>
                        <Link
                          href="https://github.com/VishalLende24"
                          target="_blank"
                          underline="hover"
                          sx={{ color: 'text.primary', fontWeight: 500 }}
                        >
                          GitHub
                        </Link>
                      </Stack>
                    </Box>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Stack spacing={3}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                         <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          disabled={loading}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          disabled={loading}
                        />
                      </Grid>
                    </Grid>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      disabled={loading}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      sx={{ 
                        py: 1.5,
                        mt: 2,
                        fontSize: '1rem',
                        fontWeight: 700 
                      }}
                    >
                      {loading ? <CircularProgress size={24} /> : 'Send Message'}
                    </Button>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Contact