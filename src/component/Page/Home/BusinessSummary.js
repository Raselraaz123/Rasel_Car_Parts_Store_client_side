import React from "react";

const BusinessSummary = () => {
  return (
    <div className="flex flex-col mt-20 text-center ">
      <h1 className="text-center mb-5 text-3xl font-semibold text-pink-500">
        Our Business Summary
      </h1>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Monthly Visits</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc text-purple-400">
            21% more than last month
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Sale</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc text-green-400">
            21% more than last month
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Client love it</div>
          <div className="stat-desc text-secondary">
            We trying provide our bast facilities
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
