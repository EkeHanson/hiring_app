import React from 'react';
import Avatar from '@mui/material/Avatar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardActions from '@mui/material/CardActions';
import Footer from "../components/common/Footer/Footer";
import FeaturedListings from "./featuredListings";
import Testimonials from "./Testimonials";
import HowItWorks from "./HowItWorks";
import StatsSection from "./StatsSection";
import CTASection from "./CTASection";
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";

import {
  Box, Container, Typography,
  Button,  Grid,  Paper, InputAdornment, TextField, useTheme, useMediaQuery, Stack } from '@mui/material';
import { Search as SearchIcon,  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon, CheckCircle as CheckIcon,  Groups as GroupsIcon, Storefront as StorefrontIcon,
  EmojiEvents as QualityIcon,  SupportAgent as SupportIcon ,  ArrowBackIos as PrevIcon, ArrowForwardIos as NextIcon } from '@mui/icons-material';
  import './Home.css';


// Custom arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{ 
        ...style, 
        right: -40,
        zIndex: 1,
        '&:before': { display: 'none' }
      }}
      onClick={onClick}
    >
      <NextIcon fontSize="large" color="primary" />
    </Box>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{ 
        ...style, 
        left: -40,
        zIndex: 1,
        '&:before': { display: 'none' }
      }}
      onClick={onClick}
    >
      <PrevIcon fontSize="large" color="primary" />
    </Box>
  );
}

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Featured listings data




// Enhanced Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    arrows: !isMobile,
    swipe: true,
    draggable: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
          arrows: !isMobile
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };


  return (

    <Box>
      {/* Hero Section */}
      <HeroSection theme={theme} />

      {/* Categories Section */}
      <CategoriesSection 
        theme={theme} // Pass the theme prop
      />

      {/* Featured Listings - Professional Alignment */}
      <FeaturedListings 
        theme={theme} // Pass the theme prop
      />

      <HowItWorks 
        theme={theme} // Pass the theme prop
      />


       {/* Testimonials Carousel Section */}
       <StatsSection   theme={theme}/>

       <Testimonials   theme={theme}/>

      {/* CTA Section */}
      <CTASection   theme={theme}/>
     
    </Box>
  );
};

export default Home;