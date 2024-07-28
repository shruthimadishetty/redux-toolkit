


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import Home from './Components/Home';
import Headers from './Components/Headers';
import CartDetails from './Components/CartDetails';

function App() {
  return (
    <>
     <Headers/>
     <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/cart' element={<CartDetails/>}/>
     </Routes>
     <Toaster />
    </>
  );
}

export default App;