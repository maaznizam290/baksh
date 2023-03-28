import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox  />} label="Remember me" style={{marginLeft:'5pc'}} />
      <h6 style={{display:'block',marginLeft:'20pc',marginTop:'-2pc',fontSize:'12px'}}>Forget password?</h6>
    </FormGroup>
  );
}