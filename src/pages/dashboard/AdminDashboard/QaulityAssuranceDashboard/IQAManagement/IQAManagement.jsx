import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  TextField,
  InputAdornment
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  Add as AddIcon,
  Assignment as ReportsIcon,
  Person as TrainerIcon,
  Assessment as AssessmentIcon,
  Feedback as FeedbackIcon,
  Timeline as TimelineIcon, 
  Assignment as AssignmentIcon,
} from '@mui/icons-material';
import TrainerMonitoring from './TrainerMonitoring';
import AssessmentSampling from './AssessmentSampling';
import LMSDataAnalysis from './LMSDataAnalysis';
import FeedbackManagement from './FeedbackManagement';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`iqa-tabpanel-${index}`}
      aria-labelledby={`iqa-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function IQAManagement() {
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Sample data for recent activities
  const recentActivities = [
    { id: 1, trainer: 'John Smith', action: 'Session Observed', date: '2023-06-15', status: 'Completed' },
    { id: 2, trainer: 'Sarah Johnson', action: 'Assessment Sampled', date: '2023-06-14', status: 'Pending Review' },
    { id: 3, trainer: 'Michael Brown', action: 'Feedback Provided', date: '2023-06-12', status: 'Completed' },
    { id: 4, trainer: 'Emily Davis', action: 'Session Scheduled', date: '2023-06-10', status: 'Upcoming' },
  ];

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader 
              title="Internal Quality Assurance"
              subheader="Monitor and improve training quality"
              action={
                <Button 
                  variant="contained" 
                  startIcon={<AddIcon />}
                  size="small"
                >
                  New IQA Check
                </Button>
              }
            />
            <Divider />
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
              <TextField
                size="small"
                placeholder="Search IQA records..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button startIcon={<FilterIcon />}>Filters</Button>
            </Box>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Trainer Monitoring" icon={<TrainerIcon fontSize="small" />} />
              <Tab label="Assessment Sampling" icon={<AssessmentIcon fontSize="small" />} />
              <Tab label="LMS Data" icon={<TimelineIcon fontSize="small" />} />
              <Tab label="Feedback" icon={<FeedbackIcon fontSize="small" />} />
              <Tab label="Reports" icon={<ReportsIcon fontSize="small" />} />
            </Tabs>
            <Divider />
            <TabPanel value={tabValue} index={0}>
              <TrainerMonitoring />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <AssessmentSampling />
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              <LMSDataAnalysis />
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
              <FeedbackManagement />
            </TabPanel>
            <TabPanel value={tabValue} index={4}>
              <Typography>IQA Reports will be displayed here</Typography>
            </TabPanel>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Recent IQA Activities" />
            <Divider />
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Trainer</TableCell>
                    <TableCell>Action</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentActivities.map((activity) => (
                    <TableRow key={activity.id}>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar sx={{ width: 24, height: 24, mr: 1 }}>
                            {activity.trainer.charAt(0)}
                          </Avatar>
                          {activity.trainer}
                        </Box>
                      </TableCell>
                      <TableCell>{activity.action}</TableCell>
                      <TableCell>{activity.date}</TableCell>
                      <TableCell>
                        <Chip 
                          label={activity.status}
                          size="small"
                          color={
                            activity.status === 'Completed' ? 'success' :
                            activity.status === 'Pending Review' ? 'warning' : 'info'
                          }
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
          
          <Card sx={{ mt: 3 }}>
            <CardHeader title="Quick Actions" />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button 
                    variant="outlined" 
                    fullWidth
                    startIcon={<AssignmentIcon />}
                  >
                    Sample Assessments
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button 
                    variant="outlined" 
                    fullWidth
                    startIcon={<FeedbackIcon />}
                  >
                    Give Feedback
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button 
                    variant="outlined" 
                    fullWidth
                    startIcon={<TimelineIcon />}
                  >
                    Generate Report
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button 
                    variant="outlined" 
                    fullWidth
                    startIcon={<TrainerIcon />}
                  >
                    Schedule Observation
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default IQAManagement;