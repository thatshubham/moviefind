/* import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );
    const response = await data.json();
    return response.results.map((movie) => ({
        movie: toString(movie.id),
    }));
}

export default async function MovieDetail({ params }) {
    const { movie } = params;
    const imagePath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
    );
    const response = await data.json();
    const imdb = "https://www.imdb.com/title/" + response.imdb_id;

    function formatDate(dateString) {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return "Not Available";
        }
        const options = { day: "numeric", month: "short", year: "numeric" };
        return new Intl.DateTimeFormat("en-US", options).format(date);
    }

    response.release_date = formatDate(response.release_date);
    if (response.budget == 0) {
        response.budget = "Not Available";
    } else {
        response.budget = formatMoney(response.budget);
    }

    function formatMoney(number) {
        const units = ["Thousand", "Million", "Billion", "Trillion"];
        let unit = -1;
        while (Math.abs(number) >= 1000 && unit < units.length - 1) {
            number /= 1000;
            unit++;
        }
        const formattedNumber = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 1,
        }).format(number);
        return `${formattedNumber} ${units[unit] || ""}`;
    }

    return (
        <>
            <div className="container">
                <Link href="/">
                    <div className="text-center bg-blue-200 hover:bg-blue-400 rounded-xl text-2xl font-bold mb-8 mt-2 p-2 flex flex-row items-center justify-center md:justify-start mx-8 md:mx-0 md:inline-flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                            />
                        </svg>{" "}
                        &nbsp; Go Back
                    </div>
                </Link>

                <div className="bg-teal-200 mx-auto md:px-8">
                    <div className="md:grid grid-cols-5 mb-6 md:mb-0 bg-gray-100">
                        <div className="col-span-1 md:px-0 px-4">
                            <Image
                                className="mx-auto"
                                src={imagePath + response.poster_path}
                                alt={response.title}
                                height={600}
                                width={400}
                                priority
                            />
                        </div>

                        <div className="col-span-1 flex-wrap text-md flex md:flex-col flex-row md:items-start justify-center md:justify-center font-bold">
                            <p className="p-2 m-1 md:m-0 bg-blue-200 inline-block">
                                {response.status}
                            </p>
                            <p className="p-2 m-1 md:m-0  bg-slate-200 inline-block">
                                Released on {response.release_date}
                            </p>
                            <p className="p-2 m-1 md:m-0  bg-blue-200 inline-block">
                                Budget = {response.budget}
                            </p>

                            <p className="p-2 m-1 md:m-0  bg-slate-200 inline-block">
                                Language : {response.original_language}
                            </p>
                            <p className="p-2 m-1 md:m-0  bg-blue-200 inline-block">
                                Runtime : {response.runtime} minutes
                            </p>
                            <p className="p-2 m-1 md:m-0 outline outline-2 outline-gray-500 bg-slate-200 hover:bg-teal-200">
                                <Link
                                    href={imdb}
                                    target="_blank"
                                    className="font-bold inline-flex items-center justify-center gap-1"
                                >
                                    Go to IMDb
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="black"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                </Link>
                            </p>
                        </div>

                        <div className="font-serif col-span-3 subpixel-antialiased  place-self-center">
                            <h1 className="text-6xl text-center md:text-left font-bold text-gray-800 md:mb-4 p-6 md:p-0">
                                {response.title}
                            </h1>
                            <p className="p-2 bg-teal-100 text-xl leading-relaxed mx-auto font-base text-center md:text-left ">
                                {" "}
                                {response.overview}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} */
 


import Image from "next/image";
import Link from "next/link";



export async function generateMetadata({ params }) {
    const { movie } = params;

    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
    );
    const response = await data.json();

    const imagePath = "https://image.tmdb.org/t/p/original";
    const releaseYear = response.release_date ? new Date(response.release_date).getFullYear() : "";
    
    const ogImage = response.backdrop_path 
        ? imagePath + response.backdrop_path 
        : (response.poster_path ? imagePath + response.poster_path : "/default-movie.jpg");

    return {
        title: `${response.title} ${releaseYear ? `(${releaseYear})` : ""} | Movie Details`,
        description: response.overview || `Detailed information about ${response.title}, including cast, runtime, and budget.`,
        keywords: [
            response.title,
            `${response.title} review`,
            `${response.title} cast`,
            "movie details",
            "film database",
            response.original_language === 'en' ? "hollywood" : "international film"
        ],
        openGraph: {
            title: `${response.title} - Synopsis and Details`,
            description: response.overview,
            url: `https://moviefind.vercel.app/${movie}`,
            siteName: "Mvie Finder",
            images: [{
                url: ogImage,
                width: 1200,
                height: 630,
                alt: `${response.title} Movie Poster`
            }],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${response.title} (${releaseYear})`,
            description: response.tagline || response.overview,
            images: [ogImage],
        },
        alternates: {
            canonical: `https://moviefind.vercel.app/${movie}` 
        }
    };
}




export async function generateStaticParams() {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );
    const response = await data.json();
    return response.results.map((movie) => ({
         movie: toString(movie.id),
    }));
}



export default async function MovieDetail({ params }) {
    const { movie } = params;
    const imagePath = "https://image.tmdb.org/t/p/original";
    
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
    );
    const response = await data.json();




    
    const imdb = "https://www.imdb.com/title/" + response.imdb_id;
    const backdropUrl = response.backdrop_path ? imagePath + response.backdrop_path : null;

  
    function formatDate(dateString) {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return "N/A";
        return new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric" }).format(date);
    }

    function formatMoney(number) {
        if (!number || number === 0) return "Not Available";
        const units = ["Thousand", "Million", "Billion", "Trillion"];
        let unit = -1;
        while (Math.abs(number) >= 1000 && unit < units.length - 1) {
            number /= 1000;
            unit++;
        }
        return `${new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 1,
        }).format(number)} ${units[unit] || ""}`;
    }

    
    const releaseDate = formatDate(response.release_date);
    const budget = formatMoney(response.budget);
    const revenue = formatMoney(response.revenue); 

    return (
        <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-orange-200">
            
           
            {backdropUrl && (
                <div className="absolute top-0 left-0 w-full h-[50vh] overflow-hidden z-0 opacity-20 mask-image-gradient">
                    <Image 
                        src={backdropUrl} 
                        alt="Backdrop" 
                        fill 
                        className="object-cover blur-sm"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-50/10 to-stone-50"></div>
                </div>
            )}

            <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
                
               
                <Link href="/" className="inline-flex items-center text-stone-500 hover:text-orange-600 transition-colors mb-8 group font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to Browse
                </Link>

                
                <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 overflow-hidden border border-stone-100">
                    <div className="md:flex">
                        
                      
                        <div className="md:w-1/3 lg:w-1/4 relative bg-stone-100">
                            {response.poster_path ? (
                                <Image
                                    className="w-full h-full object-cover"
                                    src={imagePath + response.poster_path}
                                    alt={response.title}
                                    width={400}
                                    height={600}
                                    priority
                                />
                            ) : (
                                <div className="h-96 flex items-center justify-center text-stone-400">No Image</div>
                            )}
                        </div>

                      
                        <div className="md:w-2/3 lg:w-3/4 p-8 md:p-10 flex flex-col justify-between">
                            <div>
                              
                                <div className="mb-6">
                                    <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-2">
                                        {response.title}
                                    </h1>
                                    {response.tagline && (
                                        <p className="text-orange-600 font-medium italic text-lg opacity-90">
                                            {response.tagline}
                                        </p>
                                    )}
                                </div>

                             
                                <div className="mb-8">
                                    <h3 className="text-stone-400 text-xs font-bold uppercase tracking-wider mb-2">Synopsis</h3>
                                    <p className="text-lg text-stone-600 leading-relaxed">
                                        {response.overview}
                                    </p>
                                </div>

                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 border-t border-stone-100 pt-6">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-stone-400 uppercase">Released</span>
                                        <span className="font-semibold text-stone-700">{releaseDate}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-stone-400 uppercase">Runtime</span>
                                        <span className="font-semibold text-stone-700">{response.runtime} min</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-stone-400 uppercase">Status</span>
                                        <span className="font-semibold text-stone-700">{response.status}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-stone-400 uppercase">Budget</span>
                                        <span className="font-semibold text-stone-700">{budget}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-stone-400 uppercase">Language</span>
                                        <span className="font-semibold text-stone-700 uppercase">{response.original_language}</span>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="mt-8 pt-6 flex flex-wrap gap-4 items-center">
                                <Link
                                    href={imdb}
                                    target="_blank"
                                    className="inline-flex items-center justify-center px-6 py-3 text-white font-bold rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 shadow-lg shadow-orange-200 transition-all hover:-translate-y-0.5"
                                >
                                    View on IMDb
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </Link>

                                <span className="text-xs text-stone-400 font-medium px-2">
                                    Data provided by TMDB
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 