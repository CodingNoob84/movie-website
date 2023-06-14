"use client";
import { getCastandCrew } from "@/services/movies";
import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";

function CastCrew({ movieID }) {
  const {
    isLoading,
    isError,
    data: castcrew,
    error,
  } = useQuery(["castcrew", movieID], () => getCastandCrew(movieID));
  return (
    <>
      {castcrew && (
        <div className="border bg-gray-900 rounded-lg m-2 p-2">
          <div className="h-[280px] m-2 flex flex-col">
            <div className="text-2xl font-bold m-1">Cast and Crew</div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                {castcrew.cast.slice(0, 5).map((cast, i) => (
                  <div
                    key={i}
                    className="border flex flex-col shadow-xl w-[100px] h-[220px] m-2"
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                      alt={"title"}
                      width={100}
                      height={150}
                    />
                    <div className="text-xs text-white font-bold text-center mt-2">
                      {cast.name}
                    </div>
                    <div className="text-xs text-white text-center ">
                      {cast.character}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row">
                {castcrew?.crew?.map((crew, i) => {
                  if (crew.job === "Director") {
                    return (
                      <div
                        key={i}
                        className="border flex flex-col shadow-xl w-[100px] h-[220px] m-2"
                      >
                        <Image
                          src={`https://image.tmdb.org/t/p/w500/${crew.profile_path}`}
                          alt={"title"}
                          width={100}
                          height={150}
                        />
                        <div className="text-xs text-white font-bold text-center mt-2">
                          {crew.name}
                        </div>
                        <div className="text-xs text-white text-center ">
                          {crew.job}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CastCrew;
