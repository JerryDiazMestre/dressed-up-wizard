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
function handleSubmit(e: FormEvent) {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const data = Object.fromEntries(new FormData(form).entries());
  // console.log(data);
}

interface Props {
  onComplete: (data: User) => void;

    //  onComplete({
    //   email: data.email as string,
    //   password: data.password as string,
    //   confirmPassword: data["confirm-password"] as string,
    //   newsletter: (data.newsletter as string) === "on",
    //   terms: (data.terms as string) === "on",
    // });

}
export default function UserInformationForm({onComplete}: Props) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>User Information</h2>
        <FormControl>
            <FormLabel>Email:</FormLabel>
            <TextField sx={{width:320}} autoFocus id="email" name="email"></TextField>
            <FormLabel>Passsword:</FormLabel>
            <TextField type="password" id="password" name="password"></TextField>
            <FormLabel>Confirm password:</FormLabel>
            <TextField type="password" id="confirmPassword" name="confirmPassword"></TextField>
            <FormControlLabel id="terms" name="terms" required control={<Checkbox />} label="I accept the terms and conditions" />
            <FormControlLabel id="newsletters" name="newsletters" control={<Checkbox />} label="I would like to receive email updates" />
            <Button type="submit" sx={{marginTop:2}} variant="contained">Next</Button>
        </FormControl>
      </form>
    </>
  )
}

