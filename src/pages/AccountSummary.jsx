import React, { useState } from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../components/Sidebar';

const AccountSummary = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Mock account summary data
  const accountSummaryData = [
    { payer: 'John Doe', payee: 'Alice Smith', modeOfPayment: 'UPI', typeOfPayment: 'Credit', amountTransferred: '$100', currentBalance: '$900' },
    { payer: 'Alice Smith', payee: 'Bob Johnson', modeOfPayment: 'NEFT', typeOfPayment: 'Debit', amountTransferred: '$200', currentBalance: '$700' },
    // Add more data here
  ];

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
        <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: '800px' }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Payer</TableCell>
                  <TableCell>Payee</TableCell>
                  <TableCell>Mode of Payment</TableCell>
                  <TableCell>Type of Payment</TableCell>
                  <TableCell>Amount Transferred</TableCell>
                  <TableCell>Current Balance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accountSummaryData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.payer}</TableCell>
                    <TableCell>{row.payee}</TableCell>
                    <TableCell>{row.modeOfPayment}</TableCell>
                    <TableCell>{row.typeOfPayment}</TableCell>
                    <TableCell>{row.amountTransferred}</TableCell>
                    <TableCell>{row.currentBalance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>
  );
};

export default AccountSummary;
