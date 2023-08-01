import React, {FormEvent} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel, FormControlLabel, Checkbox } from '@mui/material';

export interface User {
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
    newsletters: boolean;
}

interface Props {
  onComplete : (user:User) => void;
}

export default function UserInformationForm({onComplete}:Props) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log(data);
    onComplete(
      {email: data.email as string,
      password: data.password as string,
      confirmPassword: data.confirmPassword as string,
      newsletters: (data.newsletter as string) === "on",
      terms: (data.terms as string) === "on"}
    );
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>User Information</h2>
        <FormControl>
            <FormLabel>Email:</FormLabel>
            <TextField type="email" sx={{width:320}} autoFocus id="email" name="email" required></TextField>
            <FormLabel>Passsword:</FormLabel>
            <TextField type="password" id="password" name="password" required></TextField>
            <FormLabel>Confirm password:</FormLabel>
            <TextField type="password" id="confirmPassword" name="confirmPassword" required></TextField>
            <FormControlLabel id="terms" name="terms" required control={<Checkbox />} label="I accept the terms and conditions" />
            <FormControlLabel id="newsletters" name="newsletters" control={<Checkbox />} label="I would like to receive email updates" />
            <Button type="submit" sx={{marginTop:2}} variant="contained">Next</Button>
        </FormControl>
      </form>
    </>
  )
}

