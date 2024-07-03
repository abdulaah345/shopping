import logo from './logo.svg';
import './App.css';
import {Routes,Route}from "react-router-dom"
import{Container} from "react-bootstrap"
import Home from './component/Home';
import Store from './component/Store';
import About from './component/About';
import Navbarr from './component/Navbarr';

function App() {
  return (  <>
  < Navbarr/>
  <Container className="mb-4">

   <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='store' element={<Store/>}/>
         <Route path='about' element={<About/>}/>

   </Routes>
 </Container>
  
  
  </>);


  
}

export default App;
