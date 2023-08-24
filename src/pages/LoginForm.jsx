import React, { useState, useEffect } from 'react';
import { Container, Avatar, Box, Button, Typography } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import TextFields from "../components/TextFields";
import PasswordFields from "../components/PasswordFields"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { pswdRegEx } from "../utils";
import {Link, useNavigate} from 'react-router-dom';
import authService from '../services/authService';
import toast from 'react-hot-toast';

// create schema validation
const schema = yup.object({
  userId: yup.string().required('User ID is required'),
  loginPass: yup.string().required('Login Password is required').matches(pswdRegEx, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'),
});

const LoginForm = () => {
  const { handleSubmit, reset, formState: { errors, isDirty, isValid }, control } = useForm({
    defaultValues: {
      userId: '',
      loginPass: '',
    },
    resolver: yupResolver(schema)
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const authUser = authService.getAuthUser();

  useEffect(() => {
    let isAuth = JSON.parse(localStorage.getItem('authUser'));
    if(isAuth && isAuth !== null) {
        navigate({pathname:`/userDashboard/${authUser.userId}`});
    }
  }, []);

  

  const onSubmit = async (data) => {
    setIsSubmitted(true);
    console.log(data);
    if(data.userId==="ADMIN" && data.loginPass==="AdminPass@1")
    {
        navigate("/admin/dashboard");
    }
    else
    {
      try {
        const result = await authService.login(data);
        if (result?.data?.jwtToken) {
          console.log("JWT : ", result.data.jwtToken);
          navigate({pathname:`/userDashboard/${data.userId}`}, {state:{userId: data.userId}});
        }
        else{
          alert("Check credentials");
        }
      } catch (error) {
        console.log("err" , error);
        alert("Check credentials");
        // toast.error("Check credentials");
      }
    }
    
    setIsSubmitted(false)
    reset();
    
  }

  // console.log(userId);

  const userIdTitle = {content:"FORGOT USER ID"};
  const pswdTitle = {content: "FORGOT PASSWORD"};

  return (
    <Container maxWidth="xs">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: '4rem',
        alignItems: 'center'
      }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LoginIcon />
        </Avatar>
        <Typography component='h1'>LOGIN TO YOUR ACCOUNT</Typography>

        {/* Form */}
        <Box noValidate component='form' onSubmit={handleSubmit(onSubmit)} sx={{width: '100%', mt: '2rem' }}>
          <TextFields errors={errors} control={control} name='userId' label='Enter User ID' />
          <PasswordFields errors={errors} control={control} name='loginPass' label='Enter Login Password' type="password"/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isSubmitted || !isDirty || !isValid}
          >Login</Button>
        </Box>
        <p>First time User?<Link to="/register"> Register</Link></p>
        <p>Forgot<Link to="/forgotcredentials" state={userIdTitle}> UserID?</Link></p>
        <p>Forgot<Link to="/forgotcredentials" state={pswdTitle}> Password?</Link></p>
      </Box>
    </Container>
  )
}

// export default {LoginForm,userId};
export default LoginForm;