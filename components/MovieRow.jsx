"use client";
import { getNowPlayingMovies } from "@/services/movies";
import Image from "next/image";
import { useQuery } from "react-query";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function truncateString(str, length) {
  if (str.length <= length) {
    return str; // Return the original string if its length is less than or equal to the specified length
  } else {
    return str.slice(0, length) + "..."; // Return a substring of the specified length with ellipsis at the end
  }
}

function transformString(string, year) {
  // Convert to lowercase
  let transformedString = string.toLowerCase();

  // Replace spaces with hyphens
  transformedString = transformedString.replace(/\s+/g, "-");

  // Remove special characters
  transformedString = transformedString.replace(/[^\w-]+/g, "");

  // Append year with a hyphen
  transformedString += `-${year}`;

  return transformedString;
}

function MovieRow({ title, movies }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleItemHover = (index) => {
    setHoveredIndex(index);
  };

  const handleItemLeave = () => {
    setHoveredIndex(null);
  };
  const sliderRef = useRef(null);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  console.log(movies);
  return (
    <div className="border bg-gray-900 rounded-lg m-2 p-2">
      <div className="h-[300px] m-2 flex flex-col">
        <div className="flex flex-row justify-between mb-2">
          <div className="text-2xl text-white font-bold m-1">{title}</div>
          <div className="flex flex-row text-white justify-center gap-3 mr-4">
            <button onClick={handlePrevious}>
              <BsFillArrowLeftCircleFill size={25} />
            </button>
            <button onClick={handleNext}>
              <BsFillArrowRightCircleFill size={25} />
            </button>
          </div>
        </div>
        <Slider
          dots={false}
          infinite={true}
          speed={400}
          slidesToShow={8}
          slidesToScroll={1}
          ref={sliderRef}
          prevArrow={<></>}
          nextArrow={<></>}
          className=""
        >
          {movies?.map((movie, index) => (
            <div
              key={index}
              className={`w-[130px] h-[240px] transition-all duration-300 ${
                hoveredIndex === index ? "hover:w-[140px] hover:h-[270px]" : ""
              }`}
              onMouseEnter={() => handleItemHover(index)}
              onMouseLeave={handleItemLeave}
            >
              <a
                className=" cursor-pointer transition duration-300 ease-in-out bg-gray-900 rounded-xl"
                href={`${movie.id}-${transformString(
                  movie.title,
                  movie.release_date.split("-")[0]
                )}`}
              >
                <div className="relative rounded-xl w-[130px] hover:w-[150px]">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="title"
                    width={140}
                    height={200}
                    className="rounded-t-xl"
                  />
                  <div className="absolute bottom-0 right-2 flex justify-center items-center h-[30px] w-[30px] rounded-3xl bg-gray-900 font-bold text-red-600">
                    {parseInt(movie.vote_average * 10)}
                  </div>
                </div>
                <div className="text-[11px] font-bold flex flex-col justify-between">
                  <div className=" text-white">
                    {truncateString(movie.title, 20)}
                  </div>
                  <div className="text-white">
                    {movie.release_date.split("-")[0]}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
        {/* </div> */}
      </div>
    </div>
  );
}

export default MovieRow;
