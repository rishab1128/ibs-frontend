import React, { useEffect, useState } from 'react';
import Input from '../input/Input'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  email_validation,
  password_validation,
  about_validation
} from '../../utils/inputValidations'
import { Link } from 'react-router-dom';
import { BsFillCheckSquareFill } from 'react-icons/bs'
import './Register.css';
import userService from "../../services/userService"


const Register = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false);

  const [user , setUser] = useState({
    name:"",
    email:"",
    password:"",
    about:""
  });

  useEffect(()=>{
    document.title = "Register";
  },[])

  

  const saveUser = methods.handleSubmit(data => {
    console.log(data);

    userService.saveUser(data).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })

    methods.reset()
    setSuccess(true)
  })

  

  return (
    <div className="signup-container">
        <FormProvider {...methods}>
                <form
                    onSubmit={e => e.preventDefault()}
                    noValidate
                    autoComplete="off"
                >
                <h2>Register for Net Banking</h2>
                <Input {...name_validation} />
                <Input {...email_validation} />
                <Input {...password_validation} />
                <Input {...about_validation} />
                <button onClick={saveUser} className="btn btn-primary">Register</button>
                <div>
                    {success && (
                        <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
                        <BsFillCheckSquareFill /> Form has been submitted successfully
                        </p>
                    )}
                </div>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </FormProvider>
    </div>
    );
}; 

export default Register;