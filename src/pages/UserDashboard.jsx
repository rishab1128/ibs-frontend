import React, { useState, useEffect } from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Grid,
  Paper,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../components/Sidebar';
import authService from "../services/authService";
import userService from '../services/userService';
import userAvatar from '../assets/user-avatar.jpg'; 

const UserDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const authUser = authService.getAuthUser();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const result = await userService.getUser(authUser?.userId);
      console.log(result);
      setUser(result?.data)
    } catch (error) {
      console.log("Err : " , error);
    }
  }


  
  const accountInfo = {
    userId : authUser?.userId,
    accountNumber: user?.accNo,
    aadharNumber: user?.aadharNo,
    mobileNumber:user?.mobile,
    email: user?.email,
    panNumber: user?.panNo,
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
      <Container sx={{ marginTop: '80px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flex: 1 }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8} lg={6}>
            <Paper elevation={3} sx={{ p: 3, display: 'flex', justifyContent: 'center', height: '100%' }}>
              <Paper sx={{ width: 150, height: 150 }}>
                <img src={userAvatar} alt="User Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5">Account Information</Typography>
              <Typography variant="body1">User ID: {accountInfo.userId}</Typography>
              <Typography variant="body1">Account Number: {accountInfo.accountNumber}</Typography>
              <Typography variant="body1">Aadhar Number: {accountInfo.aadharNumber}</Typography>
              <Typography variant="body1">Mobile Number: {accountInfo.mobileNumber}</Typography>
              <Typography variant="body1">Email: {accountInfo.email}</Typography>
              <Typography variant="body1">PAN Number: {accountInfo.panNumber}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default UserDashboard;
