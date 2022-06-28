
import './App.css';

import Header from './Pages/Shared/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Fruits from './Pages/Home/Fruits/Fruits';
import SignUp from './Pages/Login/SignUp/SignUp';
import FruitsInfo from './Pages/Details/FruitsInfo/FruitsInfo';
import RequireAuth from './Pages/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Fruits></Fruits>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/fruit' element={<FruitsInfo></FruitsInfo>}></Route>


        <Route path='/fruitsInfo/:fruitsId' element={<RequireAuth><FruitsInfo></FruitsInfo> </RequireAuth>}></Route>


      </Routes>
    </div>
  );
}

export default App;
