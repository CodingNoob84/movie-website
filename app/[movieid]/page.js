"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import React, { useRef } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { useQuery } from "react-query";
import { getMovieByID, getSimilarMovies } from "@/services/movies";
import CastCrew from "@/components/CastCrew";
import MovieRow from "@/components/MovieRow";

function MovieDetailwithID({ params }) {
  const movieID = params.movieid.split("-")[0];
  const { isLoading, isError, data, error } = useQuery(
    ["movieid", movieID],
    () => getMovieByID(movieID)
  );
  const { isLoading: smloading, data: similarmovies } = useQuery(
    ["similarmovies", movieID],
    () => getSimilarMovies(movieID)
  );

  console.log(data);
  return (
    <main className="max-w-screeen min-h-screen w-full">
      {data ? (
        <div className="border bg-gray-900 rounded-xl m-2  h-[600px]">
          <div
            className="w-full h-[580px] rounded-xl relative"
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/w500/${data.backdrop_path}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-[100px] absolute bottom-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

              <div className="w-full h-[100px] absolute bottom-0 backdrop-filter backdrop-blur-xs"></div>
            </div>
            <div className="">
              <div className="absolute bottom-[1px] left-20 shadow-3xl w-[700px] h-[300px] backdrop-filter backdrop-blur-sm bg-opacity-20 bg-gray-500">
                <div className="flex flex-row">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                    alt="title"
                    width={200}
                    height={340}
                    className=""
                  />
                  <div className="p-2 w-[500px]">
                    <div className="text-[25px] font-[1000]">{data.title}</div>
                    <div className="font-black flex flex-row justify-between mr-5">
                      <div>{data?.release_date?.split("-")[0]}</div>
                      <div className="flex flex-row justify-center items-center text-yellow-500">
                        <BsFillStarFill size={16} />
                        {parseFloat(data.vote_average).toFixed(1)}
                      </div>
                    </div>
                    <div className="flex flex-row gap-3 m-2 text-[8px] font-[800]">
                      {data.genres.map((genre, i) => (
                        <div
                          key={i}
                          className="border rounded-3xl bg-red-400 py-1 px-3"
                        >
                          {genre.name}
                        </div>
                      ))}
                    </div>
                    <div className="text-white">{data.overview}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="border bg-gray-900 rounded-xl m-2 text-white flex justify-center  h-[600px]">
          Loading...
        </div>
      )}
      <CastCrew movieID={movieID} />
      {!smloading && (
        <MovieRow title={"Similiar Movies"} movies={similarmovies?.results} />
      )}
    </main>
  );
}

export default MovieDetailwithID;
