import { createTheme, responsiveFontSizes, Theme, ThemeProvider } from '@material-ui/core/styles';
import {Helmet} from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { routes } from "./config";
import { APP_TITLE } from "./utils/constants";


import RouteItem from "./model/RouteItem.model";
import { FC, ReactElement, useReducer } from 'react';

import { lightTheme, darkTheme } from "./theme/AppTheme";

//rotes
import Layout from './pages/Layout';
import MonthSelectotToolbar from './components/MonthSelectorToolbar/MonthSelectorToolbar';





// default component
const DefaultComponent: FC<{}> = (): ReactElement => (
  <h1>Not Found 404</h1>
);


function App() {
  const [useDefaultTheme, toggle] = useReducer((theme) => !theme, true);

  // define custom theme
  let theme: Theme = createTheme(useDefaultTheme ? lightTheme : darkTheme);
  theme = responsiveFontSizes(theme);

  return (
    <>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout
                  toggleTheme={toggle}
                  useDefaultTheme={useDefaultTheme}
                />
              }
            >
              <Route path="/teste" element={<MonthSelectotToolbar title={'sdas'} />} />
              <Route path="teste2" element={<h1>teste teste2</h1>} />
            </Route>
            <Route path="*" element={DefaultComponent} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}


export default App;
