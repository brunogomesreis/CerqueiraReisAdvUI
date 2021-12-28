import { createTheme, Theme } from '@material-ui/core/styles';
import {Helmet} from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { routes } from "./config";
import { APP_TITLE } from "./utils/constants";

import RouteItem from "./model/RouteItem.model";
import { FC, ReactElement } from 'react';

//rotes
import Layout from './pages/Layout';
import CashFlow from './pages/CashFlow';
import { Router } from '@material-ui/icons';



export const lightTheme: Theme = createTheme({
  palette: {
      type: "light",
  },
});


// default component
const DefaultComponent: FC<{}> = (): ReactElement => (
  <div>{`No Component Defined.`}</div>
);


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Layout
                toggleTheme={function (): void {
                  throw new Error("Function not implemented.");
                }}
                useDefaultTheme={false}
              >
                <h1>Index</h1>
              </Layout>
            }
          />
          <Route
            path="/teste"
            element={
              <Layout
                toggleTheme={function (): void {
                  throw new Error("Function not implemented.");
                }}
                useDefaultTheme={false}
              >
                <h1>teste teste</h1>
              </Layout>
            }
          />
          <Route path="/teste2" element={<h1>teste teste</h1>} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
