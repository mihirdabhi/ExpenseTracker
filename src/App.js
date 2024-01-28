
import './App.css';
<<<<<<< HEAD
import { Header} from './components/Header';
import { Balance} from './components/Balance';
import {IncomeExpense } from './components/IncomeExpense';
import {TranscationList } from './components/TranscationList';
import { AddTranscation } from './components/AddTranscation';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className="Container">
        <Balance />
        <IncomeExpense />
        <TranscationList />
        <AddTranscation />
      </div>
    </GlobalProvider>
=======

function App() {
  return (
    <div className="App">
      
    </div>
>>>>>>> ffe64ed63c9dee6d9fd432428ae1c3feb89b0e10
  );
}

export default App;
