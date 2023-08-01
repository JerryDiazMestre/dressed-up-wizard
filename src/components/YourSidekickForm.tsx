import React, {FormEvent} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';

export interface Sidekick {
    name: string;
    skill: string;
}

interface Props {
  onComplete: (sidekick: Sidekick) => void;
}
  
export default function UserInformationForm({onComplete}:Props) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log(data);
    onComplete({
      name: data.sidekick as string,
      skill: data.skill as string,
  });
}

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Your Sidekick</h2>
        <FormControl>
            <FormLabel>Name:</FormLabel>
            <TextField sx={{width:320}} autoFocus id="name" name="name" ></TextField>

            <FormLabel>Skill (Optional):</FormLabel>
            <TextField sx={{width:320}} autoFocus id="skill" name="skill" ></TextField>

            <Button type="submit" sx={{marginTop:2}} variant="contained">Next</Button>
        </FormControl>
      </form>
    </>
  )
}

