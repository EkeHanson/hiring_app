import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  Divider,
  IconButton,
  useTheme,
  Stack,
  Button, TextField
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  ArrowRightAlt
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  const footerSections = [
    {
      title: 'For Candidates',
      links: [
        { label: 'Browse Jobs', href: '/jobs' },
        { label: 'Candidate Dashboard', href: '/dashboard' },
        { label: 'Job Alerts', href: '/alerts' },
        { label: 'Career Resources', href: '/resources' }
      ]
    },
    {
      title: 'For Employers',
      links: [
        { label: 'Post a Job', href: '/post-job' },
        { label: 'Browse Candidates', href: '/candidates' },
        { label: 'Recruitment Solutions', href: '/solutions' },
        { label: 'Pricing Plans', href: '/pricing' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact Us', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Blog', href: '/blog' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Community', href: '/community' }
      ]
    }
  ];

  const contactInfo = [
    { icon: <Email fontSize="small" />, text: 'contact@hiringapp.com' },
    { icon: <Phone fontSize="small" />, text: '+1 (555) 123-4567' },
    { icon: <LocationOn fontSize="small" />, text: 'San Francisco, CA' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.common.white,
        pt: 8,
        pb: 6
      }}
    >
      <Container maxWidth="xl">
        {/* Main Footer Content */}
        <Grid container spacing={6}>
          {/* Newsletter Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={{ 
              fontWeight: 700,
              mb: 3,
              color: theme.palette.common.white
            }}>
              Stay Updated
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Subscribe to our newsletter for the latest job opportunities and hiring tips.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
              <TextField
                placeholder="Your email"
                variant="outlined"
                size="small"
                sx={{
                  flexGrow: 1,
                  backgroundColor: theme.palette.common.white,
                  borderRadius: 1
                }}
              />
              <Button 
                variant="contained" 
                color="primary"
                endIcon={<ArrowRightAlt />}
                sx={{
                  px: 3,
                  whiteSpace: 'nowrap'
                }}
              >
                Subscribe
              </Button>
            </Stack>
            
            <Typography variant="subtitle2" sx={{ mb: 2 }}>
              Connect with us:
            </Typography>
            <Stack direction="row" spacing={1}>
              {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    color: theme.palette.common.white,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main
                    }
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Footer Links Sections */}
          {footerSections.map((section, index) => (
            <Grid item xs={6} md={2} key={index}>
              <Typography variant="subtitle1" gutterBottom sx={{ 
                fontWeight: 600,
                color: theme.palette.common.white,
                mb: 2
              }}>
                {section.title}
              </Typography>
              <Stack spacing={1}>
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    color="inherit"
                    underline="none"
                    sx={{
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <ArrowRightAlt fontSize="small" sx={{ fontSize: '1rem' }} />
                      <Typography variant="body2">{link.label}</Typography>
                    </Stack>
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}

          {/* Contact Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="subtitle1" gutterBottom sx={{ 
              fontWeight: 600,
              color: theme.palette.common.white,
              mb: 2
            }}>
              Contact Us
            </Typography>
            <Stack spacing={2}>
              {contactInfo.map((item, index) => (
                <Stack key={index} direction="row" spacing={1.5} alignItems="flex-start">
                  <Box sx={{ color: theme.palette.primary.main, mt: '2px' }}>
                    {item.icon}
                  </Box>
                  <Typography variant="body2">
                    {item.text}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ 
          my: 6,
          backgroundColor: 'rgba(255,255,255,0.1)'
        }} />

        {/* Bottom Footer */}
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2">
              © {new Date().getFullYear()} Hiring Web App. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={{ xs: 1, sm: 3 }}
              justifyContent="flex-end"
            >
              <Link href="/privacy" color="inherit" variant="body2" underline="hover">
                Privacy Policy
              </Link>
              <Link href="/terms" color="inherit" variant="body2" underline="hover">
                Terms of Service
              </Link>
              <Link href="/cookies" color="inherit" variant="body2" underline="hover">
                Cookie Policy
              </Link>
              <Link href="/accessibility" color="inherit" variant="body2" underline="hover">
                Accessibility
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;