import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper/Paper';
import {createStyles, makeStyles, Theme } from '@material-ui/core';
import Logo from '../../utils/images/horizontalLogo';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logostyle: {
      fill: theme.palette.primary.main,
      maxHeight: '10vh',
      maxWidth:'80vw',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })
);


const Footer: FC = () => {
  
const classes = useStyles();
  return (
    <>
      <Paper elevation={1}>
        <Logo className={classes.logostyle}></Logo> 
      </Paper>
    </>
  );
};

export default Footer;
