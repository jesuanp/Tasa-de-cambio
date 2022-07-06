import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Home from './components/home/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<LandingPage />} />

        <Route path='/home' element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
