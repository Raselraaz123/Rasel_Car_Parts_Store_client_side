import React from 'react';

const Banner = () => {
  return (
    <div className="w-full ">
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/KKG3TF6/sam-loyd-qy27-Jns-H9s-U-unsplash.jpg"
            class="w-full h-[400px]"
          />

          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/MVf7FN0/pexels-javier-aguilera-2611707.jpg"
            class="w-full h-[400px]"
          />

          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/3NH837y/pexels-pixabay-159293.jpg"
            class="w-full h-[400px]"
          />

          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Ks56BS0/pexels-mike-b-441179.jpg"
            class="w-full h-[400px]"
          />

          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;