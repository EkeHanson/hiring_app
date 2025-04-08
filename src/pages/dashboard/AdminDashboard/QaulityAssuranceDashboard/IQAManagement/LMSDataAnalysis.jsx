import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  IconButton,
  Tooltip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress
} from '@mui/material';
import {
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  Timeline as TimelineIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Refresh as RefreshIcon,
  FileDownload as FileDownloadIcon,
  FilterList as FilterListIcon
} from '@mui/icons-material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartTooltip,
  Legend,
  ArcElement
);

const courses = [
  'Health and Safety Level 2',
  'First Aid at Work',
  'Manual Handling',
  'Fire Safety Awareness',
  'Food Hygiene'
];

const completionData = {
  labels: courses,
  datasets: [
    {
      label: 'Completion Rate (%)',
      data: [92, 85, 78, 88, 95],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

const passRateData = {
  labels: ['Pass', 'Fail', 'Incomplete'],
  datasets: [
    {
      data: [75, 15, 10],
      backgroundColor: [
        'rgba(75, 192, 192, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 206, 86, 0.5)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

const activityData = [
  {
    course: 'Health and Safety Level 2',
    learners: 124,
    completionRate: 92,
    avgScore: 85,
    lastUpdated: '2023-06-18'
  },
  {
    course: 'First Aid at Work',
    learners: 98,
    completionRate: 85,
    avgScore: 78,
    lastUpdated: '2023-06-17'
  },
  {
    course: 'Manual Handling',
    learners: 156,
    completionRate: 78,
    avgScore: 82,
    lastUpdated: '2023-06-16'
  },
  {
    course: 'Fire Safety Awareness',
    learners: 112,
    completionRate: 88,
    avgScore: 91,
    lastUpdated: '2023-06-15'
  },
  {
    course: 'Food Hygiene',
    learners: 87,
    completionRate: 95,
    avgScore: 89,
    lastUpdated: '2023-06-14'
  },
];

export default function LMSDataAnalysis() {
  const [timeRange, setTimeRange] = useState('30days');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate data refresh
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Course Completion Rates',
      },
    },
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        LMS Data Analysis
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl size="small" sx={{ width: 150 }}>
            <InputLabel>Time Range</InputLabel>
            <Select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              label="Time Range"
            >
              <MenuItem value="7days">Last 7 Days</MenuItem>
              <MenuItem value="30days">Last 30 Days</MenuItem>
              <MenuItem value="90days">Last 90 Days</MenuItem>
              <MenuItem value="year">This Year</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl size="small" sx={{ width: 200 }}>
            <InputLabel>Course Filter</InputLabel>
            <Select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              label="Course Filter"
            >
              <MenuItem value="all">All Courses</MenuItem>
              {courses.map((course) => (
                <MenuItem key={course} value={course}>{course}</MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            onClick={() => alert('Advanced filters coming soon')}
          >
            Filters
          </Button>
        </Box>
        
        <Box>
          <Tooltip title="Refresh Data">
            <IconButton onClick={handleRefresh} sx={{ mr: 1 }}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
          <Button
            variant="contained"
            startIcon={<FileDownloadIcon />}
            onClick={() => alert('Export functionality coming soon')}
          >
            Export
          </Button>
        </Box>
      </Box>
      
      {isLoading && <LinearProgress sx={{ mb: 2 }} />}
      
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Card elevation={3}>
            <CardHeader
              title="Course Completion Rates"
              action={
                <IconButton>
                  <BarChartIcon />
                </IconButton>
              }
            />
            <Divider />
            <CardContent sx={{ height: 400 }}>
              <Bar data={completionData} options={options} />
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardHeader
              title="Overall Pass Rates"
              action={
                <IconButton>
                  <PieChartIcon />
                </IconButton>
              }
            />
            <Divider />
            <CardContent sx={{ height: 400 }}>
              <Pie data={passRateData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Card elevation={3} sx={{ mb: 3 }}>
        <CardHeader
          title="Course Activity Summary"
          action={
            <IconButton>
              <TimelineIcon />
            </IconButton>
          }
        />
        <Divider />
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'primary.light' }}>
                  <TableCell>Course</TableCell>
                  <TableCell align="right">Learners</TableCell>
                  <TableCell align="right">Completion Rate</TableCell>
                  <TableCell align="right">Average Score</TableCell>
                  <TableCell align="right">Last Updated</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {activityData.map((row) => (
                  <TableRow key={row.course}>
                    <TableCell>{row.course}</TableCell>
                    <TableCell align="right">{row.learners}</TableCell>
                    <TableCell align="right">
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        {row.completionRate}%
                        <Box sx={{ width: '60%', ml: 1 }}>
                          <LinearProgress 
                            variant="determinate" 
                            value={row.completionRate} 
                            color={row.completionRate > 90 ? 'success' : row.completionRate > 75 ? 'primary' : 'warning'}
                          />
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="right">{row.avgScore}%</TableCell>
                    <TableCell align="right">{row.lastUpdated}</TableCell>
                    <TableCell align="center">
                      {row.completionRate > 90 ? (
                        <CheckCircleIcon color="success" />
                      ) : (
                        <WarningIcon color={row.completionRate > 75 ? 'warning' : 'error'} />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}