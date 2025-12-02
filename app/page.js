import Movie from "./Movie";

export default async function Home() {
    // 1. Fetch the data
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );

    // 2. Parse the JSON
    const data = await res.json();

    // 3. Debugging: If "results" is missing, log what we actually got
    if (!data.results) {
        console.error("❌ TMDB API Error:", data);
    }

    // 4. Safely assign the results (default to empty array if missing)
    const movies = data.results || [];

    return (
        <main>
            <div className="pt-4 pb-12 md:pt-0 md:pb-6">
                <h1 className="mb-4 text-2xl font-bold text-center text-gray-800 leading-tight">
                    Explore the must-watch movies of the week, every week.
                </h1>
                <h2 className="text-center text-black text-sm"></h2>
                <span className="relative flex justify-center">
                    <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

                    <span className="relative z-10 bg-white px-6">
                        IMDb & Info? Click the Poster!
                    </span>
                </span>
            </div>

            <div className="px-2 grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-16 md:gap-y-8 container w-full">
                {/* 5. Check if we have movies before mapping */}
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
                    <p className="text-center col-span-full text-red-500">
                        No movies found. Check your API Key console logs.
                    </p>
                )}
            </div>
        </main>
    );
}