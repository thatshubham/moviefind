/* import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return (
        <>
            <footer className="mt-12 relative bottom-0 w-full body-font border-t-2 border-gray-200">
                <div className="container py-2 mx-auto flex items-center justify-between sm:flex-row flex-col gap-4 md:gap-0">
                    <div className="flex flex-row md:flex-col items-center md:items-start md:justify-start pr-2 sm:border-r-4 sm:border-gray-200 sm:py-2">
                        <p className="text-lg text-gray-600 font-bold">
                           
                            Powered by{" "}
                        </p>
                        <Link href="https://www.themoviedb.org/">
                            <Image
                                className="px-2 md:px-0 py-0 md:py-2"
                                src="/tmdb.svg"
                                width={200}
                                height={50}
                                alt="Logo of the The Movie Database"
                            />
                        </Link>
                    </div>

                    <span className="text-center md:text-right flex flex-col justify-end align-center md:mx-0 mx-2 md:gap-1">
                        <p className="text-gray-500 dark:text-gray-400">
                            <Link
                                href="/about"
                                className="inline-flex items-center font-bold text-blue-900 hover:underline"
                            >
                                About this project
                                <svg
                                    className="w-2 h-2 ml-1 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </Link>
                        </p>

                        <p className="text-sm md:text-base text-gray-700">
                            Made with Next.JS and tailwindcss by{" "}
                            <Link
                                href="https://thatshubham.com/"
                                className="inline-block font-bold text-gray-700 hover:bg-green-300"
                            >
                                thatshubham
                            </Link>
                            .
                        </p>
                    </span>
                </div>
            </footer>
        </>
    );
}
 */


import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-stone-100 mt-auto">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    
                    {/* Left: TMDB Attribution */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <p className="text-xs font-bold uppercase tracking-widest text-stone-400">
                            Data Source
                        </p>
                        <Link 
                            href="https://www.themoviedb.org/" 
                            target="_blank" 
                            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                        >
                            <Image
                                src="/tmdb.svg"
                                width={120}
                                height={40}
                                alt="The Movie Database"
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Right: Links & Credit */}
                    <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
                        
                        {/* About Link */}
                        <Link
                            href="/about"
                            className="group inline-flex items-center text-lg font-semibold text-stone-800 hover:text-orange-600 transition-colors"
                        >
                            About this project
                            <svg
                                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>

                        {/* Made By */}
                        <p className="text-stone-500 text-sm font-medium mt-2">
                            Crafted with Next.js & Tailwind by{" "}
                            <Link
                                href="https://thatshubham.com/"
                                target="_blank"
                                className="text-stone-900 decoration-orange-300 decoration-2 underline-offset-2 hover:underline hover:text-orange-600 transition-all"
                            >
                                thatshubham
                            </Link>
                        </p>
                    </div>
                </div>
                
                {/* Copyright / Bottom text */}
                <div className="mt-12 pt-8 border-t border-stone-100 text-center text-xs text-stone-400">
                    &copy; {new Date().getFullYear()} Movie Finder. All rights reserved.
                </div>
            </div>
        </footer>
    );
}