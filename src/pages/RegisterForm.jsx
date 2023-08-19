import { Container, Avatar, Box, Button, Typography } from "@mui/material"
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TextFields from "../components/TextFields";
import PasswordFields from "../components/PasswordFields"
import CheckboxFields from "../components/CheckboxFields";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { pswdRegEx, accountRegEx } from "../utils";

// create schema validation
const schema = yup.object({
  accountNumber: yup.string().required('Account Number is required').matches(accountRegEx, 'Account Number should be of 14 digits'),
  userId: yup.string().required('User ID is required'),
  loginPassword: yup.string().required('Login Password is required').matches(pswdRegEx, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'),
  confirmLoginPassword: yup.string().oneOf([yup.ref('loginPassword'), null], 'Password must match'),
  transactionPassword: yup.string().required('Transaction Password is required').matches(pswdRegEx, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'),
  confirmTransactionPassword: yup.string().oneOf([yup.ref('transactionPassword'), null], 'Password must match'),
  privacy: yup.bool().oneOf([true], 'Field must be checked'),
});

const RegisterForm = () => {
  const { handleSubmit, reset, formState: { errors }, control } = useForm({
    defaultValues: {
      accountNumber: '',
      userId: '',
      loginPassword: '',
      confirmLoginPassword: '',
      transactionPassword:'',
      confirmTransactionPassword:'',
      privacy: false
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  }

  return (
    <Container maxWidth="xs">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: '4rem',
        alignItems: 'center'
      }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <HowToRegIcon />
        </Avatar>
        <Typography component='h1'>REGISTER FOR NET BANKING</Typography>

        {/* Form */}
        <Box noValidate component='form' onSubmit={handleSubmit(onSubmit)} sx={{width: '100%', mt: '2rem' }}>
          <TextFields errors={errors} control={control} name='accountNumber' label='Account Number' />
          <TextFields errors={errors} control={control} name='userId' label='Set User ID' />
          <PasswordFields errors={errors} control={control} name='loginPassword' label='Set Login Password' type="password"/>
          <PasswordFields errors={errors} control={control} name='confirmLoginPassword' label='Confirm Login Password' />
          <PasswordFields errors={errors} control={control} name='transactionPassword' label='Set Transaction Password' />
          <PasswordFields errors={errors} control={control} name='confirmTransactionPassword' label='Confirm Transaction Password' />
          <CheckboxFields errors={errors} control={control} name='privacy' />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >Register</Button>
        </Box>
      </Box>
    </Container>
  )
}

export default RegisterForm