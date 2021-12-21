import { createTheme, Theme } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';
import SummaryCards from './components/SummaryCard/SummaryCard';
import Layout from './components/layout';

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
