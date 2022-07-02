
import './App.css';

import Header from './Pages/Shared/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Fruits from './Pages/Home/Fruits/Fruits';
import SignUp from './Pages/Login/SignUp/SignUp';
import FruitsInfo from './Pages/Details/FruitsInfo/FruitsInfo';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Fruit from './Pages/Home/Fruit/Fruit';
import AllFruits from './Pages/Home/AllFruits/AllFruits';
import AddNewItem from './Pages/Inventory/AddNewItem/AddNewItem';
import Error from './Pages/Shared/Error/Error';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/fruit' element={<FruitsInfo></FruitsInfo>}></Route>
        <Route path='/manage' element={<AllFruits></AllFruits>}></Route>
        <Route path='/add' element={<AddNewItem></AddNewItem>}></Route>


        <Route path='/fruitsInfo/:fruitsId' element={<RequireAuth><FruitsInfo></FruitsInfo> </RequireAuth>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
