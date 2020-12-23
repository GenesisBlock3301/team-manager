import logo from './logo.svg';
import './App.css';
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import Header from "./components/Layout/Header";
import Dashboard from "./components/leads/Dashboard";

function App() {
  return (
    <div className="App">
      {/*<Register/>*/}
        {/*<Login/>*/}
        <Header/>
        <Dashboard/>
    </div>
  );
}

export default App;
