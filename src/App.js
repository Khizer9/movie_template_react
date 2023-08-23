import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Movies from './components/Movies';
import Home from './components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
