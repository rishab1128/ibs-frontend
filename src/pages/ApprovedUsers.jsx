//@CrossOrigin(origins="*",allowedHeaders="*")
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import userService from '../services/userService';
import authService from "../services/authService";

function ApprovedUsers() {
  const [approvedUsers, setApprovedUsers] = useState([
    { accNo: '12345', firstName: 'John', lastName: 'Doe' },
    // Add more pending users here
  ]);


  useEffect(() => {
    fetchData();
  }, []);

    const authUser = authService.getAuthUser();  
    const fetchData =  async () => {
        try {
        const result = await userService.getApprovedUsers();
        console.log(result);
        setApprovedUsers(result?.data)
        } catch (error) {
        console.log("Err : " , error);
        }
    }



  

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Account Number</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {approvedUsers.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.accNo}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ApprovedUsers;
