import React, {FormEvent} from 'react'
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
  
interface Props {
  onComplete: (wizard: Wizard) => void;
}
  
export default function UserInformationForm({onComplete}:Props) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(form);
    const data = Object.fromEntries(new FormData(form).entries());
    console.log(data);
    onComplete(
      {
        name: data.name as string,
        level: +(data.level as string),
        school: data.school as string,
        alignment:
          (data.alignment as string) === "Good" ?
            Alignment.GOOD : Alignment.EVIL,
      }
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Your Wizard</h2>
        <FormControl>
            <FormLabel>Name:</FormLabel>
            <TextField sx={{width:320}} autoFocus id="name" name="name" ></TextField>

            <FormLabel>Level:</FormLabel>
            <TextField type="number" id="level" name="level"></TextField>

            <FormLabel id="school-name-label">School:</FormLabel>
            <Select
              // displayEmpty
              labelId="school-name-label"
              id="school"
              name="school"
            >
              {['Select School name', ...WIZARD_SCHOOLS].map((x) => <MenuItem key={x} value={x}>{x}</MenuItem>)}
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

            <Button type="submit" sx={{marginTop:2}} variant="contained">Next</Button>
        </FormControl>
      </form>
    </>
  )
}

