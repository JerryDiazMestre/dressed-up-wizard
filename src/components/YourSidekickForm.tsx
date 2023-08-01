import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';

export interface Sidekick {
    name: string;
    skill: string;
}
  
export default function UserInformationForm() {
  return (
    <>
        <h2>Your Sidekick</h2>
        <FormControl>
            <FormLabel>Name:</FormLabel>
            <TextField sx={{width:320}} autoFocus id="name" name="name" ></TextField>

            <FormLabel>Skill (Optional):</FormLabel>
            <TextField sx={{width:320}} autoFocus id="skill" name="skill" ></TextField>

            <Button sx={{marginTop:2}} variant="contained">Next</Button>
        </FormControl>
    </>
  )
}

