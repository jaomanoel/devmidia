import './css/App.css';
import './css/Cadastrar.css'
import { BrowserRouter } from 'react-router-dom'
import  Routes  from './Router';
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
