import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Box,  AppBar,  Toolbar,  Drawer,  List,  ListItem,  ListItemButton,
  ListItemIcon,  ListItemText,  CssBaseline,  Typography,
  IconButton,  Avatar,  Divider,  Badge,  useTheme,  useMediaQuery, 
} from '@mui/material';
import {
  Dashboard as DashboardIcon,  People as UsersIcon,  Security as SecurityIcon,
  AttachMoney as FinanceIcon,  Menu as MenuIcon,  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,  Notifications as NotificationsIcon,
  Settings as SettingsIcon,  Logout as LogoutIcon,  Analytics as AnalyticsIcon,
  NotificationsActive as AlertsIcon,  Chat as ChatIcon,  Assessment as ReportsIcon,
  Checklist as ChecklistIcon
} from '@mui/icons-material';



import AdminDashboard from './AdminDashboard';
import AdminFinancialDashboard from './AdminFinancialDashboard';
import AdminUserManagement from './AdminUserManagement';
import SecurityComplianceDashboard from './SecurityComplianceDashboard';
import ContentUsageDashboard from './ContentUsageDashboard';
import NotificationsDashboard from './NotificationsDashboard';
import CommunicationSupportDashboard from './CommunicationSupportDashboard';
import ReportsDashboard from './ReportsDashboard';
import QualityDashbaord from './QaulityAssuranceDashboard/QualityDashbaord';

const drawerWidth = 240;

function Admin() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const [open, setOpen] = useState(!isMobile);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const menuItems = [
    { path: '/admin', name: 'Dashboard', icon: <DashboardIcon /> },
    { path: '/admin/users', name: 'User Management', icon: <UsersIcon /> },
    { path: '/admin/security-info', name: 'Security & Compliance', icon: <SecurityIcon /> },
    { path: '/admin/finance', name: 'Financial Dashboard', icon: <FinanceIcon /> },
    { path: '/admin/quality-assurance', name: 'Quality Assurance', icon: <ChecklistIcon /> },

    { path: '/admin/analytics', name: 'Content & Analytics', icon: <AnalyticsIcon /> },
    { path: '/admin/alerts', name: 'Notifications & Alerts', icon: <AlertsIcon /> },
    { path: '/admin/communication', name: 'Communication & Support', icon: <ChatIcon /> },
    { path: '/admin/reports', name: 'Custom Reports', icon: <ReportsIcon /> },
   
  ];

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: 'none',
          borderBottom: `1px solid ${theme.palette.divider}`
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Admin Portal
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <SettingsIcon />
            </IconButton>
            <Avatar 
              alt="Admin User" 
              src="/path-to-avatar.jpg" 
              sx={{ width: 32, height: 32 }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: theme.palette.background.default,
            borderRight: `1px solid ${theme.palette.divider}`
          },
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          p: theme.spacing(2, 3),
          height: '64px'
        }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Admin Console
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
        
        <Divider />
        
        <List>
          {menuItems.map((item) => (
            <ListItem 
              key={item.path} 
              disablePadding
              sx={{
                backgroundColor: location.pathname === item.path ? 
                  theme.palette.action.selected : 'transparent'
              }}
            >
              <ListItemButton 
                component={Link} 
                to={item.path}
                sx={{
                  py: 1.5,
                  px: 3,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: '40px', color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.name} 
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        <Divider sx={{ my: 1 }} />
        
        <List>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                py: 1.5,
                px: 3,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: '40px', color: 'inherit' }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Logout" 
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${open ? drawerWidth : 0}px)`,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: 'hidden'
        }}
      >
        <Toolbar /> {/* Spacer for AppBar */}
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: 2,
            boxShadow: theme.shadows[1],
            p: 3,
            minHeight: 'calc(100vh - 96px)'
          }}
        >
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/finance" element={<AdminFinancialDashboard />} />
            <Route path="/users" element={<AdminUserManagement />} />
            <Route path="/security-info" element={<SecurityComplianceDashboard />} />
            <Route path="/analytics" element={<ContentUsageDashboard />} />
            <Route path="/alerts" element={<NotificationsDashboard />} />
            <Route path="/communication" element={<CommunicationSupportDashboard />} />
            <Route path="/reports" element={<ReportsDashboard />} />
            <Route path="/quality-assurance" element={<QualityDashbaord />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default Admin;