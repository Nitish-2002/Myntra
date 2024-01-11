
import React from "react";
import { Button } from "@mui/material";
import {useForm} from "react-hook-form";
import { pink, purple,yellow } from "@mui/material/colors";
import TextField from '@mui/material/TextField';
const Signup = ({ handleTabChange, handleSignup }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = React.useRef({});
  password.current = watch('password', '');

  const handleSignupClick = (data) => {
    if (data.password === data.reEnterPassword) {
      handleSignup(data.email, data.password);
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className='signup'>
      <div className='signup--page'>
        <h2>Signup Page</h2>
        <form onSubmit={handleSubmit(handleSignupClick)}>
          
            <TextField
              id='filled-basic'
              type='email'
              placeholder='Email'
              {...register('email', { required: true })}
              label='Email'
              variant='filled'
              
              sx={{width:400, margin:"10px"}}
            />
            {errors.email && <div className='signup--validations'> This field is required</div>}
          
          
         
            <TextField
              id='filled-basic'
              type='password'
              placeholder='Password'
              {...register('password', { required: true })}
              label='Password'
              variant='filled'
              sx={{width:400, margin:"10px"}}
            />
            {errors.password && <div className='signup--validations'>This field is required</div>}
          
          
          
            <TextField
              id='filled-basic'
              type='password'
              placeholder='Re-enter Password'
              {...register('reEnterPassword', {
                validate: (value) => value === password.current || 'The passwords do not match'
              })}
              label='Re-enter Password'
              variant='filled'
              sx={{width:400, margin:"10px"}}
            />
            {errors.reEnterPassword && <div className='signup--validations'>{errors.reEnterPassword.message}</div>}
          <div>
          <Button sx={{ backgroundColor: pink[700], color:"white"}} type='submit' variant='outlined'>
            Sign In
          </Button>
          </div>
        </form>
        <div>
        <Button className='signup--login--button' onClick={() => handleTabChange('login')} >
          Go to Login
        </Button>
        </div>
      </div>
    </div>
  );
};
export default Signup;