import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
  useTheme,
  Divider,
  Pagination,
  Grid
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Refresh as RefreshIcon,
  Assignment as AssignmentIcon,
  Person as PersonIcon
} from '@mui/icons-material';

const FeedbackManagement = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  // Sample feedback data
  const feedbackData = [
    {
      id: 1,
      trainer: 'John Smith',
      course: 'Advanced React',
      date: '2023-05-15',
      type: 'Assessment',
      status: 'Pending',
      comments: 'Assessment criteria needs clarification',
      iqaAction: 'Review required'
    },
    {
      id: 2,
      trainer: 'Sarah Johnson',
      course: 'Node.js Fundamentals',
      date: '2023-05-10',
      type: 'Observation',
      status: 'Resolved',
      comments: 'Excellent session delivery observed',
      iqaAction: 'No action needed'
    },
    {
      id: 3,
      trainer: 'Michael Brown',
      course: 'Database Design',
      date: '2023-05-08',
      type: 'Learner Feedback',
      status: 'In Progress',
      comments: 'Learners requested more practical examples',
      iqaAction: 'Content update scheduled'
    },
    {
      id: 4,
      trainer: 'Emily Davis',
      course: 'UI/UX Principles',
      date: '2023-05-05',
      type: 'Assessment',
      status: 'Pending',
      comments: 'Inconsistent grading across assessments',
      iqaAction: 'Standardization needed'
    },
    {
      id: 5,
      trainer: 'Robert Wilson',
      course: 'JavaScript Advanced',
      date: '2023-05-01',
      type: 'Observation',
      status: 'Resolved',
      comments: 'Technical issues during demo',
      iqaAction: 'Tech check completed'
    },
    {
      id: 6,
      trainer: 'Lisa Thompson',
      course: 'Python Basics',
      date: '2023-04-28',
      type: 'Learner Feedback',
      status: 'In Progress',
      comments: 'Pace too fast for beginners',
      iqaAction: 'Pacing adjustment in progress'
    }
  ];

  const filteredData = feedbackData.filter(item => {
    const matchesSearch = 
      item.trainer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.comments.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = 
      statusFilter === 'all' || item.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (id, newStatus) => {
    // In a real app, this would update the backend
    console.log(`Updating feedback ${id} to status ${newStatus}`);
  };

  const handleDelete = (id) => {
    // In a real app, this would delete from backend
    console.log(`Deleting feedback ${id}`);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'warning';
      case 'in progress':
        return 'info';
      case 'resolved':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Feedback Management
      </Typography>
      
      {/* Filters and Search */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search feedback..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: theme.palette.text.secondary, mr: 1 }} />
            }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              label="Status"
            >
              <MenuItem value="all">All Statuses</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="in progress">In Progress</MenuItem>
              <MenuItem value="resolved">Resolved</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FilterIcon />}
            sx={{ height: '56px' }}
          >
            Advanced Filters
          </Button>
        </Grid>
      </Grid>

      {/* Feedback Table */}
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: theme.palette.grey[100] }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Trainer</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Course</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Comments</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>IQA Action</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ width: 32, height: 32, mr: 1, bgcolor: theme.palette.primary.main }}>
                      <PersonIcon fontSize="small" />
                    </Avatar>
                    {row.trainer}
                  </Box>
                </TableCell>
                <TableCell>{row.course}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={getStatusColor(row.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell sx={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {row.comments}
                </TableCell>
                <TableCell>{row.iqaAction}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title="Mark as Resolved">
                      <IconButton size="small" onClick={() => handleStatusChange(row.id, 'Resolved')}>
                        <CheckIcon color="success" fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton size="small">
                        <EditIcon color="info" fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton size="small" onClick={() => handleDelete(row.id)}>
                        <DeleteIcon color="error" fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Showing {paginatedData.length} of {filteredData.length} feedback items
        </Typography>
        <Pagination
          count={Math.ceil(filteredData.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>

      {/* Quick Actions */}
      <Divider sx={{ my: 3 }} />
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
        Quick Actions
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Button variant="contained" startIcon={<AssignmentIcon />}>
          Generate Feedback Report
        </Button>
        <Button variant="outlined" startIcon={<RefreshIcon />}>
          Refresh Data
        </Button>
      </Box>
    </Box>
  );
};

export default FeedbackManagement;