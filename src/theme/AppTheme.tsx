import { createTheme, Theme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

// define light theme colors
export const lightTheme: Theme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#434c57",
        },
    },
});

// define dark theme colors
export const darkTheme: Theme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#9bb2ba",
        },
        secondary: {
            main: "#434c57"
        },
    },
});