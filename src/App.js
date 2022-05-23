
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/Page/About/About';
import Home from './component/Page/Home/Home';
import Login from './component/Page/Login/Login';
import SignUp from './component/Page/Login/SignUp';
import Parts from './component/Page/Parts/Parts';
import UpdateParts from './component/Page/Parts/UpdateParts';
import Navbar from './component/shared/Navbar';
import NotFound from './component/shared/NotFound';

function App() {
  return (
    <div className='px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/parts' element={<Parts></Parts>}></Route>
        <Route path='/updateParts' element={<UpdateParts></UpdateParts>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
