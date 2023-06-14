import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const sliderRef = useRef(null);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>Movies</div>
        <div>
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>

      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={6}
        slidesToScroll={1}
        ref={sliderRef}
        className="flex flex-col"
      >
        <div className="border bg-yellow-200 w-[100px] h-64 flex items-center justify-center">
          <h3 className="text-4xl">1</h3>
        </div>
        <div className="border bg-yellow-200 w-[100px] h-64 flex items-center justify-center">
          <h3 className="text-4xl">2</h3>
        </div>
        <div className="border bg-yellow-200 w-[100px] h-64 flex items-center justify-center">
          <h3 className="text-4xl">3</h3>
        </div>
        <div className="border bg-yellow-200 w-[100px] h-64 flex items-center justify-center">
          <h3 className="text-4xl">4</h3>
        </div>
        <div className="border bg-yellow-200 w-[100px] h-64 flex items-center justify-center">
          <h3 className="text-4xl">5</h3>
        </div>
        <div className="border bg-yellow-200 w-[100px] h-64 flex items-center justify-center">
          <h3 className="text-4xl">6</h3>
        </div>
        <div className="border bg-yellow-200 w-[100px] h-64 flex items-center justify-center">
          <h3 className="text-4xl">3</h3>
        </div>
        <div className="border bg-yellow-200 w-[100px] h-64 flex items-center justify-center">
          <h3 className="text-4xl">4</h3>
        </div>
        <div className="border bg-yellow-200 w-[100px] h-64 flex items-center justify-center">
          <h3 className="text-4xl">5</h3>
        </div>
        <div className="border bg-yellow-200 w-[100px] h-64 flex items-center justify-center">
          <h3 className="text-4xl">6</h3>
        </div>
        <div className="border bg-yellow-200 w-[100px] h-64 flex items-center justify-center">
          <h3 className="text-4xl">3</h3>
        </div>
        <div className="border bg-yellow-200 w-[100px] h-64 flex items-center justify-center">
          <h3 className="text-4xl">4</h3>
        </div>
        <div className="border bg-yellow-200 w-[100px] h-64 flex items-center justify-center">
          <h3 className="text-4xl">5</h3>
        </div>
        <div className="border bg-yellow-200 w-[100px] h-64 flex items-center justify-center">
          <h3 className="text-4xl">6</h3>
        </div>
      </Slider>
    </div>
  );
}
