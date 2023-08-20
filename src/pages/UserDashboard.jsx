import React, { useState } from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Grid,
  Paper,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../components/Sidebar';
import userAvatar from '../assets/user-avatar.jpg'; 
import '../styles/UserDashboard.css';

const UserDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Mock user account data
  const accountInfo = {
    accountNumber: '123456789',
    aadharNumber: '1234 5678 9012',
    mobileNumber: '+1 123 456 7890',
    email: 'user@example.com',
    panNumber: 'ABCDE1234F',
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleSidebar} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Bank Account Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Container
        sx={{
          marginTop: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isSidebarOpen ? 'flex-end' : 'center', 
          flex: 1,
        }}
        className = "dashboard-container"
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8} lg={6} className = "account-info-container">
            <Paper elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'center', height: '100%' }}>
              <Avatar sx={{ width: 120, height: 120, marginRight: 2 }}>
                <img src={userAvatar} alt="User Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Avatar>
              <div>
                <Typography variant="h5">Account Information</Typography>
                <Typography variant="body1">Account Number: {accountInfo.accountNumber}</Typography>
                <Typography variant="body1">Aadhar Number: {accountInfo.aadharNumber}</Typography>
                <Typography variant="body1">Mobile Number: {accountInfo.mobileNumber}</Typography>
                <Typography variant="body1">Email: {accountInfo.email}</Typography>
                <Typography variant="body1">PAN Number: {accountInfo.panNumber}</Typography>
              </div>
            </Paper>
          </Grid>
          {/* Add more Grid items for other sections */}
        </Grid>
      </Container>
    </div>
  );
};

export default UserDashboard;
