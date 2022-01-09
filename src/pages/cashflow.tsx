import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MonthSelectotToolbar from '../components/MonthSelectorToolbar/MonthSelectorToolbar'
import SummaryCard from '../components/SummaryCard/SummaryCard'
import CashFlowTable2 from '../components/CashFlowTable/CashFlowTable2';
import Fab from '@material-ui/core/Fab';
import Add from '@material-ui/icons/Add'

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
    floatingbutton: {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
      position: "fixed",
      bottom: '2vh',
      right: '2vh',

    }
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
        <Grid item xs={12} sm={6}>
          <SummaryCard title={"Faturamento"} value={20321.0} positive />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SummaryCard title={"Despesas"} value={-12230.32} />
        </Grid>
        <Grid item xs={12}>
          <CashFlowTable2 />
        </Grid>
      </Grid>
      <Fab className={classes.floatingbutton} >
        <Add />
      </Fab>
    </div>
  );
};

export default CashFlow;
