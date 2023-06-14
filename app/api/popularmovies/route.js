export async function GET(request) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return Response.json(data);
}
