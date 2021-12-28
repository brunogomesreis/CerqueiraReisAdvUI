import React, { FC } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Paper } from '@mui/material';
import Stack from '@mui/material/Stack/Stack';
import { Button } from '@material-ui/core';




interface MonthSelectorToolbarProps {
  title: string;
  subtitle?: string;
}

const MonthSelectotToolbar: FC<MonthSelectorToolbarProps> = ({ title, subtitle }) => {
  return (
    <>
      <Paper elevation={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Button>
            <ArrowBackIosIcon />
          </Button>
          <h1>Dezembro 2021</h1>
          <Button>
            <ArrowForwardIosIcon />
          </Button>
        </Stack>
      </Paper>
    </>
  );
};

export default MonthSelectotToolbar;