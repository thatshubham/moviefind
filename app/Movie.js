/* import Link from "next/link";
import Image from "next/image";

export default async function Movie({ title, id, poster_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  function formatDate(dateString) {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      const options = { day: "numeric", month: "short", year: "numeric" };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    } catch (e) {
      return dateString;
    }
  }

  const formattedDate = formatDate(release_date);

  return (
    <div className="subpixel-antialiased flex flex-col justify-start items-stretch bg-white hover:-translate-y-2 duration-300 group">
      <Link href={`/${id}`}>
        {poster_path ? (
          <Image
            className="rounded-t-xl h-auto max-w-96 mx-auto transition ease-in-out"
            src={imagePath + poster_path}
            alt={title}
            height={500}
            width={500}
          />
        ) : (
          <div className="h-[500px] w-full bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </Link>
      <p className="text-xs md:text-base bg-gray-700 text-center text-gray-100 shadow-md p-2 md:p-0">
        Released on {formattedDate}
      </p>
      <p className="text-center text-gray-700 text-sm md:text-xl font-bold group-hover:bg-amber-200 group-hover:shadow-md pt-1 pb-2 leading-tight">
        {title}
      </p>
    </div>
  );
}
 */

import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, id, poster_path, release_date }) {
    const imagePath = "https://image.tmdb.org/t/p/w500"; // Changed to w500 for better performance (original is too heavy for cards)

    function formatDate(dateString) {
        if (!dateString) return "N/A";
        try {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
        } catch (e) {
            return dateString;
        }
    }

    const formattedDate = formatDate(release_date);

    return (
        <div className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1">
            <Link href={`/${id}`} className="flex flex-col h-full">
                
                {/* Image Container with Overflow Hidden for zoom effect */}
                <div className="relative w-full aspect-[2/3] overflow-hidden bg-stone-200">
                    {poster_path ? (
                        <Image
                            src={imagePath + poster_path}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-stone-400">
                            <span className="text-sm">No Poster</span>
                        </div>
                    )}
                    
                    {/* Hover Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-grow p-4">
                    {/* Date Badge */}
                    <div className="mb-2">
                        <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wide uppercase text-orange-700 bg-orange-50 rounded-md">
                            {formattedDate}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-stone-800 font-bold text-lg leading-tight line-clamp-2 group-hover:text-orange-600 transition-colors">
                        {title}
                    </h2>
                </div>
            </Link>
        </div>
    );
}