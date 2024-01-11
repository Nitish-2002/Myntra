import React from "react";
import { Button } from "@mui/material";
import {useForm} from "react-hook-form";
import { pink, purple,yellow } from "@mui/material/colors";
import TextField from '@mui/material/TextField';
const Login1 = ({ handleTabChange, handleLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLoginClick = (data) => {
    handleLogin(data.email, data.password);
  };

  return (
    <div className='login'>
      <div className='login--page'>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit(handleLoginClick)}>
  
            <TextField
              id="filled-basic"
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
              label="Email"
              variant="filled"
              sx={{width:400, margin:"10px"}}
            />
            
            {errors.email && <span className='login--validations'>This field is required</span>}
          
            <TextField
              id="filled-basic"
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
              label="Password"
              variant="filled"
              sx={{width:400, margin:"10px"}}
            />
            {errors.password && <span className='login--validations'>This field is required</span>}
          
          <div><Button sx={{ backgroundColor: pink[700], color:"white"}} type="submit" variant="outlined">
            Login
          </Button>
          </div>
        </form>
        <Button className='login--signup--button' onClick={() => handleTabChange('signup')}>
          Go to Signup
        </Button>
      </div>
    </div>
  );
};
export default Login1;