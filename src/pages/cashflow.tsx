import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MonthSelectotToolbar from '../components/MonthSelectorToolbar/MonthSelectorToolbar'
import SummaryCard from '../components/SummaryCard/SummaryCard'
import CashFlowTable from '../components/CashFlowTable/CashFlowTable';


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
        <Grid item xs={12} sm={6} >
          <SummaryCard title={"Faturamento"} value={20321.00} positive />
        </Grid>
        <Grid item xs={12} sm={6} >
          <SummaryCard title={"Despesas"} value={-12230.32}/>
        </Grid>
        <Grid item xs={12}>
          <CashFlowTable/>
        </Grid>
      </Grid>
    </div>
  );
};

export default CashFlow;
