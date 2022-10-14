
import './App.css';
import { MuiButton } from './components/MuiButton';
import { MuiLayout } from './components/MuiLayout';
import { MuiRating } from './components/MuiRating.';
import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      <MuiTypography/>
      <MuiButton/>
      <MuiRating/>
      <MuiLayout/>
    </div>
  );
}

export default App;
