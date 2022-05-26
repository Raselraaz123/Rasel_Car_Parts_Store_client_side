
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/Page/About/About';
import AddReview from './component/Page/AddReview/AddReview';
import Blogs from './component/Page/Blogs/Blogs';
import Dashboard from './component/Page/Dashboard/Dashboard';
import Home from './component/Page/Home/Home';
import Login from './component/Page/Login/Login';
import RequireAuth from './component/Page/Login/RequireAuth';
import SignUp from './component/Page/Login/SignUp';
import Parts from './component/Page/Parts/Parts';
import UpdateParts from './component/Page/Parts/UpdatePartsDetail';

import Navbar from './component/shared/Navbar';
import NotFound from './component/shared/NotFound';

function App() {
  return (
    <div className="px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/parts" element={<Parts></Parts>}></Route>
        <Route
          path="/partsInfo/:partsId"
          element={
              <UpdateParts></UpdateParts>
          }
        ></Route>
        <Route path="/review" element={<AddReview></AddReview>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
