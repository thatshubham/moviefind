/* import Movie from "./Movie";

export default async function Home() {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );

  
    const data = await res.json();
    if (!data.results) {
        console.error("❌ TMDB API Error:", data);
    }

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
} */


    import Movie from "./Movie";

export default async function Home() {
    // 1. Fetch the data
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );
    const data = await res.json();

    if (!data.results) {
        console.error("❌ TMDB API Error:", data);
    }

    const movies = data.results || [];

    return (
        // Changed background to stone-50 for that warm, paper-like feel
        <main className="min-h-screen bg-stone-50 text-stone-800">
            {/* Header Section */}
            <div className="pt-12 pb-12 px-4 max-w-7xl mx-auto text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-500">
                        Trending Movies
                    </span>
                </h1>
                <p className="text-lg text-stone-500 max-w-2xl mx-auto font-medium">
                    Explore the must-watch movies of the week. Updated daily.
                </p>
                
                {/* Decorative Divider */}
                {/* <div className="flex justify-center mt-6">
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-rose-400 rounded-full opacity-80"></div>
                </div> */}

                <span className="relative flex justify-center">
                    <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

                    <span className="relative z-10 bg-stone-50 text-stone-500 text-base font-medium px-6">
                        IMDb & Info? Click the Poster!
                    </span>
                </span>
            </div>

            {/* Grid Section */}
            <div className="container mx-auto px-4 pb-20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
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