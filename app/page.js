import Movie from "./Movie";

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const data = await res.json();

  const movies = data.results || [];

  return (
    <main className="min-h-screen bg-gray-50 text-stone-800">
      <div className="pt-12 pb-12 px-4 max-w-7xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-500">
            Trending Movies
          </span>
        </h1>
        <p className="text-lg text-stone-500 max-w-2xl mx-auto font-medium">
          Explore the must-watch movies of the week. Updated daily.
        </p>
        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

          <span className="relative z-10 bg-stone-50 text-stone-500 text-base font-medium px-6">
            IMDb & Info? Click the Poster!
          </span>
        </span>
      </div>
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-xl text-stone-400">
                No movies found. Check your API configuration.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
