
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Page/Home/Home';
import Navbar from './component/shared/Navbar';

function App() {
  return (
    <div className='px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
