export async function POST(request) {
  const res = await request.json();
  const id = res.movieid;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };
  const url = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return Response.json(data);
}
