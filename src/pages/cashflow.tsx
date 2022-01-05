import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper/Paper';
import MonthSelectotToolbar from '../components/MonthSelectorToolbar/MonthSelectorToolbar'
import SummaryCard from '../components/SummaryCard/SummaryCard'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "0px",
      margin: "0px",
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const CashFlow: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12}>
          <MonthSelectotToolbar title={"Jan 2022"} />
        </Grid>
        <Grid item xs={12} sm={6} xl={2}>
          <SummaryCard title={"Faturamento"} value="R$ 20.321,00" positive />
        </Grid>
        <Grid item xs={12} sm={6} xl={2}>
          <SummaryCard title={"Despesas"} value="-R$ 12.230,32" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CashFlow;
