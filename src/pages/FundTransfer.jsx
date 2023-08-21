import { Container, Avatar, Box, Button, Typography } from "@mui/material"
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import TextFields from "../components/TextFields";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { accountRegEx } from "../utils";
import userService from "../services/userService";

// create schema validation
const schema = yup.object({
  accNo1: yup.string().required('Account Number is required').matches(accountRegEx, 'Account Number should be of 3 digits'),
  accNo2: yup.string().required('Account Number is required').matches(accountRegEx, 'Account Number should be of 3 digits'),
  bal: yup.string().required('Amount to be transfered is required')
});

const FundTransfer = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const { handleSubmit, reset, formState: { errors }, control } = useForm({
    defaultValues: {
      accNo1: '123',
      accNo2: '',
      bal:''
    },
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
      console.log(data);
    //   userService.saveUserId(updated_data).then((res)=>{
    //   console.log(res);
    //   navigate('/');
    // }).catch((err)=>{
    //   console.log(err);
    // })
    reset();
  }

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
      <Container maxWidth="xs">
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: '4rem',
          alignItems: 'center'
        }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <SwapHorizIcon/>
          </Avatar>
          <Typography component='h1'>FUND TRANSFER</Typography>

          {/* Form */}
          <Box noValidate component='form' onSubmit={handleSubmit(onSubmit)} sx={{width: '100%', mt: '2rem' }}>
            <TextFields errors={errors} control={control} name='accNo1' label='From Account Number' />
            <TextFields errors={errors} control={control} name='accNo2' label='To Account Number' />
            <TextFields errors={errors} control={control} name='bal' label='Amount to be transfered' />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >Transfer</Button>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default FundTransfer;