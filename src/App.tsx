import { createTheme, Theme } from '@material-ui/core/styles';
// import { routes } from "./config";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/cashflow';

export const lightTheme: Theme = createTheme({
  palette: {
      type: "light",
  },
});

function App() {
  return (
    <Layout useDefaultTheme={true} />
  );
}

/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <SummaryCards title='Hello Cerqueira Reis Adv'/>
</header>
</div> */

export default App;
