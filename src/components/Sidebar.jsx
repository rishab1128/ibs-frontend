import React from 'react';
import {Link} from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import toast from 'react-hot-toast';
import authService from "../services/authService";

const Sidebar = ({ isOpen, onClose }) => {

  const authUser = authService.getAuthUser();

  const sidebarItems = [
    { text: 'User Profile', icon: <PersonIcon /> , link: `/userDashboard/${authUser?.userId}` },
    { text: 'Account Summary', icon: <AccountBalanceIcon /> , link: "/showTransactions" },
    { text: 'Fund Transfer', icon: <SwapHorizIcon />, link: "/fundTransfer" },
    { text: 'NEFT Payment', icon: <LocalAtmIcon />, link: `/userDashboard/${authUser?.userId}` },
    { text: 'RTGS Payment', icon: <MonetizationOnIcon />, link: `/userDashboard/${authUser?.userId}` },
    { text: 'IMPS Payment', icon: <PaymentIcon />, link: `/userDashboard/${authUser?.userId}` },
    { text: 'Add Beneficiary', icon: <PersonAddIcon />, link: `/userDashboard/${authUser?.userId}` },
    { text: 'Logout', icon: <ExitToAppIcon />}
  ];

  const handleLogout = () => { 
    try {
      localStorage.removeItem('authUser');
      localStorage.removeItem('accountInfo');
      window.location.reload(true);
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  }


  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column' }}>
        <IconButton
          color="inherit"
          aria-label="Close"
          onClick={onClose}
          style={{ alignSelf: 'flex-end', marginRight: '10px', marginTop: '5px' }}
        >
          <CloseIcon />
        </IconButton>
        <List>
          {sidebarItems.map((item, index) => (
            item.text === 'Logout' ? 
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Link to={'/'} onClick={handleLogout}><ListItemText primary={item.text} /></Link>
            </ListItem>
            : <ListItem button key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <Link to={item.link}><ListItemText primary={item.text} /></Link>
              </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
