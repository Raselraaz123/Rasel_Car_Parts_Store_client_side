import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div class="drawer drawer-end drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
          <h1 className="text-center font-bold text-3xl text-orange-400 mt-20">
            Dashboard
          </h1>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-48  bg-orange-300 text-base-content  ">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link className="text-white font-bold" to="/dashboard">
                My Order
              </Link>
            </li>
            <li>
              <Link className="text-white font-bold" to="/dashboard/review">
                Add Review
              </Link>
            </li>
            <li>
              <Link className="text-white font-bold" to="/dashboard/myprofile">
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;