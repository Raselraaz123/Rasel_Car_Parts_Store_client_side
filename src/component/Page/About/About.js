import React from 'react';
import Footer from '../../shared/Footer';

const About = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-20">About Us</h1>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/nw140VG/carI.jpg"
            class="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">
              About{" "}
              <span className="text-amber-400">Rasel Car parts Store</span>
            </h1>
            <p class="py-6">
              This is a list of automotive parts mostly for vehicles using
              internal combustion engines which are manufactured components of
              automobiles. This category is for components and parts that make
              up automobile (car) bodies including accessories. On motorbikes
              their main function is to shield the rider from wind, though not
              as completely as in a car, whereas on sports and racing
              motorcycles the main function is reducing drag when the rider
            </p>
          </div>
        </div>
      </div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/LQtCw9f/close-up-car-bonnet.jpg"
            class="max-w-sm lg:max-w-lg rounded-lg shadow-2xl "
          />
          <div>
            <h1 class="text-5xl font-bold text-amber-400">Our mission</h1>
            <p class="py-6">
              This is a list of automotive parts mostly for vehicles using
              internal combustion engines which are manufactured components of
              automobiles. This category is for components and parts that make
              up automobile (car) bodies including accessories. On motorbikes
              their main function is to shield the rider from wind, though not
              as completely as in a car, whereas on sports and racing
              motorcycles the main function is reducing drag when the rider
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;