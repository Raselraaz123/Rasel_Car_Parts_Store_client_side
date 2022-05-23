import React from 'react';

const NotFound = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-red-500 mt-20 mb-5">
        Page Not Found
      </h1>
      <div>
        <img className='w-full rounded-3xl' src="https://i.ibb.co/K9JzKgJ/404.jpg" alt="" />
      </div>
    </div>
  );
};

export default NotFound;