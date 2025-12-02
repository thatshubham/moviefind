
import Link from "next/link"
export default function About() {
    return (
        <div className="subpixel-antialiased mx-auto max-w-4xl tracking-tight px-4 md:px-0 mb-8">
           

            <Link href="/" className="inline-flex items-center text-stone-500 hover:text-orange-600 transition-colors mb-8 group font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Go Back
                </Link>

            <h1 className="text-gray-600 text-5xl mt-12 mb-4">Welcome to Find a Movie</h1>
            <p className="text-lg text-gray-700 ">
                Hello, my name is Shubham and this mini-project is to try my hands with Next.js.
            </p>

            <h2 className="text-xl text-gray-700 font-bold mt-6">Technology used</h2>
            <h3 className="text-gray-600 text-lg mt-2 mb-2 font-bold">Next.js v13</h3>
            <p className="text-lg text-gray-700 ">
                The new app directory makes it easy to enable advanced routing patterns. In this project, I&apos;ve made use of both - Server and Client Components. The home page which consumes an API is a server component while the movie page is a client component.
            </p>

            <h3 className="text-gray-600 text-lg mt-6 mb-2 font-bold">API Integration</h3>
            <p className="text-lg text-gray-700 ">
                This project uses The Movie Database (TMDB) API.             </p>

            <h3 className="text-gray-600 text-lg mt-6 mb-2 font-bold">GitHub Integration</h3>
            <p className="text-lg text-gray-700 ">
                I am hosting this project on Vercel. I&apos;ve used other hosting platforms and VPS in the past, however when it comes to next.js, deploying to Vercel is really effortless. The platform automatically detects it, runs the build command and optimizes the output for me. The code lives on a github repo and all changes are synced automatically.
            </p>

            <h3 className="text-gray-600 text-lg mt-6 mb-2 font-bold">TailwindCSS</h3>
            <p className="text-lg text-gray-700 ">
                Makes the page responsive and it is pretty easy to work with.
            </p>

            <h2 className="text-gray-600 text-lg mt-6 mb-2 font-bold">My personal webpage</h2>
            <p className="text-lg text-gray-700 ">
                You can find my <Link href="https://thatshubham.com"
                    className="underline underline-offset-2 decoration-4 decoration-blue-700 font-bold">personal website here</Link> where I list out my other mini-projects and a firefox addon that I maintain! Thanks.
            </p>

        </div >
    )
}

