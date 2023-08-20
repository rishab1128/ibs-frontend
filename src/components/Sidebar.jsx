import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarItems = [
    { text: 'Account Summary', icon: <AccountBalanceIcon /> },
    { text: 'Fund Transfer', icon: <SwapHorizIcon /> },
    { text: 'NEFT Payment', icon: <LocalAtmIcon /> },
    { text: 'RTGS Payment', icon: <MonetizationOnIcon /> },
    { text: 'IMPS Payment', icon: <PaymentIcon /> },
    { text: 'Add Beneficiary', icon: <PersonAddIcon /> },
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
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
