import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel, FormControlLabel, Select, MenuItem, Radio, RadioGroup } from '@mui/material';

enum Alignment {
    GOOD = "Good",
    EVIL = "Evil"
  }
  
  const WIZARD_SCHOOLS = [
    "Abjuration",
    "Conjuration",
    "Divination",
    "Enchantment",
    "Evocation",
    "Illusion",
    "Necromancy",
    "Transmutation"
  ];
  
  export interface Wizard {
    name: string;
    level: number;
    school: string;
    alignment: Alignment;
  }
  

export default function UserInformationForm() {
  return (
    <>
        <h2>Your Wizard</h2>
        <FormControl>
            <FormLabel>Name:</FormLabel>
            <TextField sx={{width:320}} autoFocus id="name" name="name" ></TextField>

            <FormLabel>Level:</FormLabel>
            <TextField type="number" id="level" name="level"></TextField>

            <FormLabel id="school-name-label">School:</FormLabel>
            <Select
              displayEmpty
              labelId="school-name-label"
              id="school"
              name="school"
            >
              <MenuItem key={""} value="">Select School name</MenuItem>
              {WIZARD_SCHOOLS.map((x) => <MenuItem key={x} value={x}>{x}</MenuItem>)}
            </Select>

            <FormLabel sx={{marginTop:1,fontWeight:700,color:'blue'}} id="alignment-label">Alignment</FormLabel>
            <RadioGroup
              aria-labelledby="alignment-label"
              defaultValue={Alignment.GOOD}
              id="alignment"
              name="alignment"
              sx={{flexDirection:'row', marginTop:1,marginLeft:'auto',marginRight:'auto'}}
            >
              <FormControlLabel value={Alignment.GOOD} control={<Radio />} label={Alignment.GOOD} />
              <FormControlLabel value={Alignment.EVIL} control={<Radio />} label={Alignment.EVIL} />
            </RadioGroup>

            <Button sx={{marginTop:2}} variant="contained">Next</Button>
        </FormControl>
    </>
  )
}

