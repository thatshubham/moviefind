
import Link from "next/link"

export default function Navbar() {
    return (
        <>
    <header className="text-gray-600 body-font border-gray-300 md:border-b-2 mb-2 md:mb-6 w-full ">
        <div className="mx-auto flex flex-wrap p-2 flex-col justify-between md:flex-row items-center">
            
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <Link className="text-4xl font-bold text-gray-700" href="/">Find Movies</Link>
            </nav>
            <Link href="https://github.com/thatshubham">
            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-gray-100">Github
            <svg fill="black" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </button>
            </Link>
        </div>
    </header>
        </>
    )
}