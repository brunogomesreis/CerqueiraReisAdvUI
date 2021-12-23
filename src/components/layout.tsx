import React, { FC, useReducer } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

// components
import Header from "./Header/header";
// import {Navigation} from "./Navigation";
// import {Footer} from "./Footer";

// constants
import { DRAWER_WIDTH, FOOTER_HEIGHT } from "../utils/constants";

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
      marginLeft: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(9) + 1,
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
interface Props {
  // toggleTheme: () => void;
  useDefaultTheme: boolean;
  // children: ReactNode;
}

// functional component
// const Layout: FC<Props> = ({ toggleTheme, useDefaultTheme, children }) => {
const Layout: FC<Props> = ({ useDefaultTheme }) => {
  const classes = useStyles();
  const [open, toggle] = useReducer((open) => !open, true);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header text="Fluxo de Caixa"/>
      {/* <Navigation open={open} handleClose={toggle} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.toolbar} />
        {children}
      </main>
      <footer>
        <Footer />
      </footer> */}
    </div>
  );
};

export default Layout;