import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
  return (
    <div>
      <h1 className="text-center text-lime-300 font-bold text-3xl mt-20">
        My Portfolio
      </h1>
      <div class="card  bg-base-100 shadow-2xl">
        <figure class="px-10 pt-10">
          <img
            src="https://i.ibb.co/Jcp1LMj/rasel2-removebg-preview.png"
            alt="Rasel"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="font-bold text-xl">Name : Rasel Rana</h2>
          <h3>Email : raselraaz91@gmail.com</h3>
          <p>Educational background : SSC</p>
          <div>
            {" "}
            <li>HTML-5</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Tailwind css</li>
            <li>javascript</li>
            <li>React</li>
            <li>React Router</li>
            <li>Firebase</li>
            <li>Heroku</li>
            <li>etc</li>
          </div>
          <a
            className="btn btn-link"
            target="_blank"
            href="https://comforting-paletas-22826a.netlify.app/"
          >
            Fast Food Restaurants 99
          </a>
          <a
            className="btn btn-link"
            target="_blank"
            href="https://raaz-perfumes-store.web.app/"
          >
            Perfumes website
          </a>
          <a
            className="btn btn-link"
            target="_blank"
            href="https://travel-to-world-7da9f.web.app/"
          >
            Travel to world
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;