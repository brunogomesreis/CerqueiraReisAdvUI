import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper/Paper';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { Container as Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    summarycardflagnegative: {
      borderLeft: "10px solid",
      justifyContent: "center",
      alignItems: "center",
      paddingInline: "10px",
      borderLeftColor: "#CB1717",
    },
    summarycardflagpositive: {
      borderLeft: "10px solid",
      justifyContent: "center",
      alignItems: "center",
      paddingInline: "10px",
      borderLeftColor: "#52B224",
    },
    summarycardvaluepositive: {
      color: "#52B224"
    },
    summarycardvaluenegative: {
      color: "#CB1717"
    },
    summarycardtext: {
      color: theme.palette.primary.main
    },
    
  })
);


interface SummaryCardProps {
  title: string;
  value?: string;
  positive?: boolean;
}

const SummaryCards: FC<SummaryCardProps> = ({ title, value,positive }) => {
  
const classes = useStyles();
  return (
    <>
      <Container maxWidth="sm">
        <Paper elevation={3} className={clsx( positive && classes.summarycardflagpositive, !positive && classes.summarycardflagnegative)}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <h1 className={classes.summarycardtext}>{title}</h1>
            <h2 className={clsx( positive && classes.summarycardvaluepositive, !positive && classes.summarycardvaluenegative)}>{value}</h2>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default SummaryCards;