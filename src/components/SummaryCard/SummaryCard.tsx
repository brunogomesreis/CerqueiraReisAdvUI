import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, createStyles, makeStyles, responsiveFontSizes, Theme } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    summarycardflagnegative: {
      borderLeft: "10px solid",
      justifyContent: "center",
      alignItems: "center",
      borderLeftColor: theme.palette.error.main,
      maxHeight: "20vh"
    },
    summarycardflagpositive: {
      borderLeft: "10px solid",
      justifyContent: "center",
      alignItems: "center",
      borderLeftColor: theme.palette.success.main,
      maxHeight: "20vh"
    },
    summarycardvaluepositive: {
      color: theme.palette.success.main,
      margin: "5px",
    },
    summarycardvaluenegative: {
      color: theme.palette.error.main,
      margin: "5px"
    },
    summarycardtext: {
      color: theme.palette.primary.main,
      margin: "5px"
    },
    root: {
      borderRadius: "15px",
      padding: "0px",
      border: "0px",
      margin: "0px",
      maxWidth: "100%",
      justifyContent: "center"
    },
    
  })
);


interface SummaryCardProps {
  title: string;
  value?: string;
  positive?: boolean;
}

const SummaryCard: FC<SummaryCardProps> = ({ title, value,positive }) => {
  
const classes = useStyles();
  return (
    <>
      <Container maxWidth="sm" className={classes.root}>
        <Paper elevation={3} className={clsx( positive && classes.summarycardflagpositive, !positive && classes.summarycardflagnegative)}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <h1 className={classes.summarycardtext}>{title}</h1>
            <h2 className={clsx( positive && classes.summarycardvaluepositive, !positive && classes.summarycardvaluenegative)}>{value}</h2>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default SummaryCard;