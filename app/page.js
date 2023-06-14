"use client";
import MovieRow from "@/components/MovieRow";
import SimpleSlider from "@/components/slider";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/services/movies";
import Image from "next/image";
import { useQuery } from "react-query";

export default function Home() {
  const { isLoading: nowplayingmoviesloading, data: nowplayingmovies } =
    useQuery("nowplayingmovies", getNowPlayingMovies);
  const { isLoading: popularmoviesloading, data: popularmovies } = useQuery(
    "popularmovies",
    getPopularMovies
  );
  const { isLoading: topratedmoviesloading, data: topratedmovies } = useQuery(
    "topratedmovies",
    getTopRatedMovies
  );
  const { isLoading: upcomingmoviesloading, data: upcomingmovies } = useQuery(
    "upcomingmovies",
    getUpcomingMovies
  );
  console.log(upcomingmovies);
  return (
    <main className="max-w-screeen min-h-screen w-full">
      <MovieRow
        title={"Now Playing Movies"}
        movies={nowplayingmovies?.results}
      />
      <MovieRow title={"Top Rated Movies"} movies={topratedmovies?.results} />
      <MovieRow title={"Popular Movies"} movies={popularmovies?.results} />
      <MovieRow title={"Upcoming Movies"} movies={upcomingmovies?.results} />
    </main>
  );
}
