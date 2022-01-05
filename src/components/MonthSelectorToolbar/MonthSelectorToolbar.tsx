import React, { FC } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Paper from '@material-ui/core/Paper/Paper';
import { Button, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "15px",
      padding: "0px",
      border: "0px"
    },
    selectortext: {
      padding: "0px",
      border: "0px",
      margin: "0px",
      color: theme.palette.primary.main
    }
  })
);



interface MonthSelectorToolbarProps {
  title: string;
}

const MonthSelectotToolbar: FC<MonthSelectorToolbarProps> = ({ title }) => {

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root} elevation={3}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          <Grid item justify="flex-start">
            <Button>
              <ArrowBackIosIcon className={classes.selectortext} />
            </Button>
          </Grid>
          <Grid item justify="center">
            <h1 className={classes.selectortext}>{title}</h1>
          </Grid>
          <Grid item justify="flex-end">
            <Button>
              <ArrowForwardIosIcon className={classes.selectortext} />
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default MonthSelectotToolbar;