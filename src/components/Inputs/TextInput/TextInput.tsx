import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"    
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}
