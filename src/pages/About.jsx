import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Avatar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  PeopleAlt as TeamIcon,
  Business as MissionIcon,
  History as HistoryIcon,
  LocationOn as LocationIcon,
  EmojiEvents as ValuesIcon
} from '@mui/icons-material';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      icon: <MissionIcon fontSize="large" />,
      title: "Our Mission",
      description: "To revolutionize the rental industry by creating a seamless, trustworthy platform that connects renters with quality items and services."
    },
    {
      icon: <ValuesIcon fontSize="large" />,
      title: "Our Values",
      description: "Integrity, innovation, and customer satisfaction are at the core of everything we do."
    },
    {
      icon: <HistoryIcon fontSize="large" />,
      title: "Our Story",
      description: "Founded in 2023, we started with a simple idea: make renting items as easy as buying them online."
    },
    {
      icon: <LocationIcon fontSize="large" />,
      title: "Our Reach",
      description: "Serving customers across multiple cities with plans to expand globally in the coming years."
    }
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      avatar: "/assets/team/alex.jpg"
    },
    {
      name: "Sarah Williams",
      role: "CTO",
      avatar: "/assets/team/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "Head of Product",
      avatar: "/assets/team/michael.jpg"
    },
    {
      name: "Emily Davis",
      role: "Marketing Director",
      avatar: "/assets/team/emily.jpg"
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 8,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          py: 6,
          px: 4,
          borderRadius: 2,
          boxShadow: 3
        }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            About Hiring Web App
          </Typography>
          <Typography variant="h5" component="p">
            Connecting people with the items they need through a trusted rental marketplace
          </Typography>
        </Box>

        {/* Features Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              fontWeight: 600 
            }}
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  }
                }}>
                  <CardContent sx={{ 
                    flexGrow: 1,
                    textAlign: 'center',
                    py: 4
                  }}>
                    <Box sx={{ 
                      color: theme.palette.primary.main,
                      mb: 2
                    }}>
                      {feature.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body1">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Stats Section */}
        <Box sx={{ 
          background: theme.palette.grey[100],
          py: 6,
          px: 4,
          borderRadius: 2,
          mb: 8,
          textAlign: 'center'
        }}>
          <Grid container spacing={4}>
            <Grid item xs={6} sm={3}>
              <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                10K+
              </Typography>
              <Typography variant="subtitle1">
                Happy Customers
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                5K+
              </Typography>
              <Typography variant="subtitle1">
                Items Listed
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                50+
              </Typography>
              <Typography variant="subtitle1">
                Cities Served
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                99%
              </Typography>
              <Typography variant="subtitle1">
                Satisfaction Rate
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Team Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              fontWeight: 600 
            }}
          >
            Meet Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ 
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  pt: 4,
                  pb: 2
                }}>
                  <Avatar
                    alt={member.name}
                    src={member.avatar}
                    sx={{ 
                      width: 120, 
                      height: 120,
                      mb: 3,
                      border: `4px solid ${theme.palette.primary.main}`
                    }}
                  />
                  <CardContent>
                    <Typography 
                      variant="h6" 
                      component="h3"
                      sx={{ fontWeight: 600 }}
                    >
                      {member.name}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box sx={{ 
          background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
          py: 6,
          px: 4,
          borderRadius: 2,
          textAlign: 'center'
        }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ fontWeight: 700, mb: 3 }}
          >
            Ready to Join Our Community?
          </Typography>
          <Typography variant="h6" component="p" sx={{ mb: 4 }}>
            Whether you're looking to rent items or list your own, we've got you covered.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button 
              variant="contained" 
              color="inherit" 
              size="large"
              sx={{ 
                color: theme.palette.primary.main,
                fontWeight: 600
              }}
            >
              Sign Up Now
            </Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              size="large"
              sx={{ 
                borderWidth: 2,
                fontWeight: 600,
                '&:hover': {
                  borderWidth: 2
                }
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;