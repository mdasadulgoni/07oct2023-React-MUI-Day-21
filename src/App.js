// 1. Import Area
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';

// 2. Define Area
function App(props) {
  console.log(props.mycolor);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home mycolor2={props.mycolor} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// 3.Export Area
// 3.1 Default Area
export default App;

// 3.2 Named Export