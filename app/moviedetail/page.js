import Image from "next/image";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";

function MovieDetail() {
  return (
    <main className="max-w-screeen min-h-screen w-full">
      <div className="border bg-gray-900 rounded-lg m-2 h-[450px] relative">
        <div
          className="w-full h-[300px] rounded-lg relative"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w500/2klQ1z1fcHGgQPevbEQdkCnzyuS.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "right 50%",
            backgroundClip: "content-box",
            paddingRight: "50%",
            backgroundColor: "black",
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-[100px] absolute bottom-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

            <div className="w-full h-[100px] absolute bottom-0 backdrop-filter backdrop-blur-xs"></div>
          </div>
          <div className="">
            <div className="absolute top-[150px] left-20 shadow-xl w-[700px] h-[300px] backdrop-filter backdrop-blur-sm bg-opacity-20 bg-gray-500">
              <div className="flex flex-row">
                <Image
                  src={`https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg`}
                  alt="title"
                  width={200}
                  height={340}
                  className=""
                />
                <div className="p-2">
                  <div className="text-[25px] font-[1000]">
                    The Super Mario Bros. Movie
                  </div>
                  <div className="font-black flex flex-row justify-between mr-5">
                    <div>2023</div>
                    <div className="flex flex-row justify-center items-center text-yellow-500">
                      <BsFillStarFill size={16} />
                      7.8
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 m-2 text-[8px] font-[800]">
                    <div className="border rounded-3xl bg-red-400 py-1 px-3">
                      Animation
                    </div>
                    <div className="border rounded-3xl bg-red-400 py-1 px-3">
                      Adventure
                    </div>
                    <div className="border rounded-3xl bg-red-400 py-1 px-3">
                      Fantasy
                    </div>
                    <div className="border rounded-3xl bg-red-400 py-1 px-3">
                      Comedy
                    </div>
                  </div>
                  <div className="text-white">
                    While working underground to fix a water main, Brooklyn
                    plumbers—and brothers—Mario and Luigi are transported down a
                    mysterious pipe and wander into a magical new world. But
                    when the brothers are separated, Mario embarks on an epic
                    quest to find Luigi.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>movie-detail</div>
    </main>
  );
}

export default MovieDetail;
