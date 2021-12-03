import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {About} from './About';
import {Dashboard} from './Dashboard';
import {Home}from'./Home';
import {Header}from'./Header';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
