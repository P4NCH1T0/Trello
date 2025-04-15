import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme' element={<Aboutme/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
