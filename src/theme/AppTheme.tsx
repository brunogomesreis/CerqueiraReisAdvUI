import { createTheme, Theme } from '@material-ui/core/styles';


// define light theme colors
export const lightTheme: Theme = createTheme({
    typography:{fontFamily: "Roboto Slab"},
    palette: {
        type: "light",
        primary: {
            main: "#434c57",
        },
        secondary: {
            main: "#9bb2ba"
        },
    },
    
});

// define dark theme colors
export const darkTheme: Theme = createTheme({
    typography:{fontFamily: "Roboto Slab"},
    palette: {
        type: "dark",
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#434c57"
        },
    },
});