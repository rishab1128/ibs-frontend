import { Container, Avatar, Box, Button, Typography } from "@mui/material"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TextFields from "../components/TextFields";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from 'react';
import Navbar from "../components/Navbar";

// create schema validation
const schema = yup.object({
    benefName: yup.string().required('Beneficiary Name is required'),
    accNo: yup.string().required('Account Number is required'),
    reEnterAccNo: yup.string().oneOf([yup.ref('accNo'),null], 'Account Numbers should match')
});

const AddBeneficiary = () => {
  const { handleSubmit, reset, formState: { errors, isDirty, isValid }, control } = useForm({
    defaultValues: {
        benefName:'',
        accNo: '',
        reEnterAccNo:''
    },
    resolver: yupResolver(schema)
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit =  (data) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
    setIsSubmitted(false);
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Navbar/>
        <Container maxWidth="xs">
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                mt: '4rem',
                alignItems: 'center'
            }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <PersonAddIcon />
                </Avatar>
                <Typography component='h1'>ADD NEW BENEFICIARY</Typography>

                {/* Form */}
                <Box noValidate component='form' onSubmit={handleSubmit(onSubmit)} sx={{width: '100%', mt: '2rem' }}>
                    <TextFields errors={errors} control={control} name='benefName' label='Beneficiary Name' />
                    <TextFields errors={errors} control={control} name='accNo' label='Account Number' />
                    <TextFields errors={errors} control={control} name='reEnterAccNo' label='Re-enter Account Number' />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={isSubmitted || !isDirty || !isValid}
                    >Add Beneficiary</Button>
                </Box>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    // disabled={isSubmitted || !isDirty || !isValid}
                >Show Beneficiaries</Button>
            </Box>
        </Container>
    </div>
  )
}

export default AddBeneficiary