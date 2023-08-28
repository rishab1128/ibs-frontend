import { Container, Avatar, Box, Button, Typography } from "@mui/material"
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Modal,
  Paper,
  List,
  ListItem,
  Alert
} from '@mui/material';
import {useState, useEffect} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import TextFields from "../components/TextFields";
import SelectFields from "../components/SelectFields";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { accountRegEx } from "../utils";
import userService from "../services/userService";
import authService from "../services/authService";
import ShowBalance from "../components/ShowBalance";
import Navbar from "../components/Navbar";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

// create schema validation
const schema = yup.object({
    value: yup.number().required('Amount to withdrawn is required'),
});

const Withdraw = () => {
  
    const [modalOpen, setModalOpen] = useState(false);
    const [transactionStatus, setTransactionStatus] = useState(null);
    const [transactionData, setTransactionData] = useState(null);
    const [errorMsg , setErrorMsg] = useState('');

  
    const accInfo = authService.getAccountInfo();
    console.log(accInfo);

    const { handleSubmit, reset, formState: { errors }, control } = useForm({
        defaultValues: {
        accNo: `${accInfo?.accountNumber}`,
        value:'',
        },
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        userService.postWithdrawal(data).then((res)=>{
            console.log(res);
            setTransactionStatus("success");
            setTransactionData(res.data);
            setErrorMsg('');
            // setTimeout(()=>navigate({pathname:`/userDashboard/${accInfo?.userId}`}, {state:{userId: accInfo?.userId}},1000));
        }).catch((error)=>{
            console.log(error);
            setTransactionStatus("error");
            setErrorMsg(`${error.data.messageString}`);
        }).finally(() => {
            setModalOpen(true);
        });
        reset();
    }

    const handleCloseModal = () => {
        setModalOpen(false);
        setTransactionStatus(null);
        setTransactionData(null);
    };

    let objectDate = new Date();

    let day = objectDate.getDate();

    let month = objectDate.getMonth()+1;

    let year = objectDate.getFullYear();

    let dateFormat = day + "/" + month + "/" + year;

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
                <CurrencyRupeeIcon />
            </Avatar>
            <Typography component='h1'>WITHDRAW AMOUNT</Typography>

            {/* Form */}
            <Box noValidate component='form' onSubmit={handleSubmit(onSubmit)} sx={{width: '100%', mt: '2rem' }}>
                <TextFields disabled={true} errors={errors} control={control} name='accNo' label='User Account Number' />
                <TextFields errors={errors} control={control} name='value' label='Amount to be withdrawn' />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >Withdraw</Button>
            </Box>
            </Box>
        </Container>
        <Modal open={modalOpen} onClose={handleCloseModal}>
            <Paper sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                {transactionStatus === "success" ? (
                <>
                    <Typography variant="h6" color="success.main">Transaction Successful</Typography>
                    <List>
                        <ListItem><b>On (Date)</b> : {dateFormat}</ListItem>
                    </List>
                </>
                ) : (
                <>
                    <Typography variant="h6" color="error.main">Transaction Unsuccessful</Typography>
                    <Alert severity="error">ERROR! {errorMsg}</Alert>
                </>
                )}
            </Paper>
        </Modal>
        </div>
    )
}

export default Withdraw;