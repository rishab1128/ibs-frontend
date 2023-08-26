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

function PendingUsers() {
  const [pendingUsers, setPendingUsers] = useState([
    { accNo: '12345', firstName: 'John', lastName: 'Doe' },
    // Add more pending users here
  ]);


  useEffect(() => {
    fetchData();
  }, []);

    const authUser = authService.getAuthUser();  
    const fetchData =  async () => {
        try {
        const result = await userService.getPendingUsers();
        console.log(result);
        setPendingUsers(result?.data)
        } catch (error) {
        console.log("Err : " , error);
        }
    }

  const handleDelete = (index) => {
    const updatedPendingUsers = pendingUsers.filter((user, i) => i !== index);
    setPendingUsers(updatedPendingUsers);
  };

  const navigate = useNavigate();

  const handleApprove = (index) => {
    const approvedUser = pendingUsers[index];
    // Call an API to insert the approvedUser into the database
    console.log(approvedUser);
    const {accNo,...data} = approvedUser;
    userService.postPendingUsers(approvedUser).then((res)=>{
        navigate('/approvedUsers');
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
    const updatedPendingUsers = pendingUsers.filter((user, i) => i !== index);
    setPendingUsers(updatedPendingUsers);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Account Number</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pendingUsers.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.accNo}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => handleApprove(index)}
                  color="primary"
                  aria-label="approve"
                >
                  <CheckIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={() => handleDelete(index)}
                  color="secondary"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PendingUsers;
