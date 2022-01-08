import { createTheme, Theme } from '@material-ui/core/styles';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../utils/constants';


// define light theme colors
export const lightTheme: Theme = createTheme({
    typography:{fontFamily: "Roboto Slab"},
    palette: {
        type: LIGHT_MODE_THEME,
        primary: {
            main: "#434c57",
        },
        secondary: {
            main: "#9bb2ba"
        },
        error:{
            main: "#CB1717"
        },
        success:{
            main: "#52B224"
        }
        
    },
    
});

// define dark theme colors
export const darkTheme: Theme = createTheme({
    typography:{fontFamily: "Roboto Slab"},
    palette: {
        type: DARK_MODE_THEME,
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#434c57"
        },
    },
});