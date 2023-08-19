import { Container, Avatar, Box, Button, Typography } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import TextFields from "../components/TextFields";
import PasswordFields from "../components/PasswordFields"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { pswdRegEx } from "../utils";
import {Link, useNavigate} from 'react-router-dom';

// create schema validation
const schema = yup.object({
  userId: yup.string().required('User ID is required'),
  loginPassword: yup.string().required('Login Password is required').matches(pswdRegEx, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'),
});

const LoginForm = () => {
  const { handleSubmit, reset, formState: { errors }, control } = useForm({
    defaultValues: {
      userId: '',
      loginPassword: '',
    },
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/userDashboard');
    reset();
  }

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
          <PasswordFields errors={errors} control={control} name='loginPassword' label='Enter Login Password' type="password"/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >Login</Button>
        </Box>
        <p>First time User?<Link to="/register"> Register</Link></p>
        <p>Forgot<Link to="/forgotcredentials" state={userIdTitle}> UserID?</Link></p>
        <p>Forgot<Link to="/forgotcredentials" state={pswdTitle}> Password?</Link></p>
      </Box>
    </Container>
  )
}

export default LoginForm;