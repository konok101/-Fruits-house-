
import './App.css';

import Header from './Pages/Shared/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Fruits from './Pages/Home/Fruits/Fruits';
import SignUp from './Pages/Login/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Fruits></Fruits>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
