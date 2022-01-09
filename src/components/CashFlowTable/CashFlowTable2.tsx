import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Moneyicon from '@material-ui/icons/LocalAtm'
import clsx from 'clsx';




const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      color: theme.palette.primary.main,
    },
    body: {
      fontSize: 16,
      alignContent: 'center'
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
    },    
  }),
)(TableRow);


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    columnicon: {
      width: "3px",
      alignContent: 'center'
    },
    columniconpositive: {
      color: theme.palette.success.main,
    },
    columniconnegative: {
      color: theme.palette.error.main,
    },

  })
);

function createData(positive: boolean, value: number, time: string) {
  const formatedvalue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  return { positive, formatedvalue, time };
}

const rows = [
  createData(true, 159, "6:10"),
  createData(true, 237, "9:10"),
  createData(false, -262, "16:10"),
  createData(true, 305, "3:17"),
  createData(false, -356, "16:10"),
];



export default function CashFlowTable2() {
  const classes = useStyles();
  

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={3}>
              <h2>14 DEZ - R$860,00</h2>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow>
              <StyledTableCell scope="row" className={classes.columnicon}>
                <Moneyicon className={clsx( row.positive && classes.columniconpositive, !row.positive && classes.columniconnegative)}/>
              </StyledTableCell>
              <StyledTableCell align="left">
                {row.formatedvalue}
              </StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={3}>
              <h2>14 DEZ - R$860,00</h2>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow>
              <StyledTableCell scope="row">
                <Moneyicon  className={clsx( row.positive && classes.columniconpositive, !row.positive && classes.columniconnegative)}/>
              </StyledTableCell>
              <StyledTableCell align="left">
                {row.formatedvalue}
              </StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
