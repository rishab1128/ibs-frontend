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

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarItems = [
    { text: 'User Profile', icon: <PersonIcon /> , link: "/userDashboard" },
    { text: 'Account Summary', icon: <AccountBalanceIcon /> , link: "/showTransactions" },
    { text: 'Fund Transfer', icon: <SwapHorizIcon />, link: "/fundTransfer" },
    { text: 'NEFT Payment', icon: <LocalAtmIcon />, link: "/" },
    { text: 'RTGS Payment', icon: <MonetizationOnIcon />, link: "/" },
    { text: 'IMPS Payment', icon: <PaymentIcon />, link: "/" },
    { text: 'Add Beneficiary', icon: <PersonAddIcon />, link: "/" },
  ];

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
            <ListItem button key={index}>
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
