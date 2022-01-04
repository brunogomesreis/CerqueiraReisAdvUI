import React, { FC } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Paper from '@material-ui/core/Paper/Paper';
import { Button, Grid } from '@material-ui/core';





interface MonthSelectorToolbarProps {
  title: string;
  subtitle?: string;
}

const MonthSelectotToolbar: FC<MonthSelectorToolbarProps> = ({ title, subtitle }) => {
  return (
    <>
      <Paper elevation={3}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
        >
          <Grid item justify="flex-start">
            <Button>
              <ArrowBackIosIcon />
            </Button>
          </Grid>
          <Grid item justify="center">
            <h1>Dezembro 2021</h1>
          </Grid>
          <Grid item justify="flex-end" >
            <Button>
              <ArrowForwardIosIcon />
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default MonthSelectotToolbar;