import React, { FC, ReactNode, useReducer } from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

// components
import Header from "../components/Header/header";
// import {Navigation} from "./Navigation";
// import {Footer} from "./Footer";

// constants
import { DRAWER_WIDTH, FOOTER_HEIGHT } from "../utils/constants";
import { Outlet } from "react-router-dom";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
      background: theme.palette.background.paper,
      marginLeft: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
      },
    },
    toolbar: {
      ...theme.mixins.toolbar,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: DRAWER_WIDTH,
    },
  })
);

// define interface to represent component props
interface LayoutProps {
  toggleTheme: () => void;
  useDefaultTheme: boolean;
}

// functional component
const Layout: FC<LayoutProps> = ({ toggleTheme, useDefaultTheme }) => {
// const Layout: FC<LayoutProps> = ({ useDefaultTheme }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header text="Fluxo de Caixa" toggleTheme={toggleTheme}>
        <main className={clsx(classes.content)}>
          <div className={classes.toolbar}> </div>
          <Outlet />
        </main>
      </Header>
      {/* <Navigation open={open} handleClose={toggle} /> */}

      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};

export default Layout;