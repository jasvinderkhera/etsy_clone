import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/common/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/common/Footer/Footer';

function App() {
  document.title="Etsy India - Shop for Handmade"
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>

    </div>
  );
}

export default App;
