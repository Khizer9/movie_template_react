import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Movies from './components/Movies';
import Home from './components/Home';
import { DataProvider } from './context/DataContext';
import News from './components/News';
import Tvshows from './components/Tvshows';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <DataProvider>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/tv-shows' element={<Tvshows/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
