
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './component/Page/About/About';
import AddReview from './component/Page/AddReview/AddReview';
import Blogs from './component/Page/Blogs/Blogs';
import AllUsers from './component/Page/Dashboard/AllUsers';
import Dashboard from './component/Page/Dashboard/Dashboard';
import MyOrders from './component/Page/Dashboard/MyOrders';
import MyProfile from './component/Page/Dashboard/MyProfile';
import Home from './component/Page/Home/Home';
import Login from './component/Page/Login/Login';
import RequireAuth from './component/Page/Login/RequireAuth';
import SignUp from './component/Page/Login/SignUp';
import MyPortfolio from './component/Page/MyPortfolio/MyPortfolio';
import Parts from './component/Page/Parts/Parts';
import UpdateParts from './component/Page/Parts/UpdatePartsDetail';
import Purchase from './component/Page/Purchase/Purchase';

import Navbar from './component/shared/Navbar';
import NotFound from './component/shared/NotFound';

function App() {
  return (
    <div className="px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/parts"
          element={
            <RequireAuth>
              <Parts></Parts>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/partsInfo/:partsId"
          element={
            <RequireAuth>
              <UpdateParts></UpdateParts>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/purchase/:partsId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="allusers" element={<AllUsers></AllUsers>}></Route>
        </Route>
        <Route
          path="/myportfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
