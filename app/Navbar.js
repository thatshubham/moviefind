/* import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <header className="container text-gray-600 body-font border-gray-200 border-b-2 mb-2 md:mb-6 w-full">
                <div className="flex px-2 md:py-2 flex-row flex-nowrap justify-between items-center">
                    <nav className="w-1/2 text-base">
                        <Link
                            className="text-sm md:text-lg uppercase tracking-widest font-bold text-gray-700"
                            href="/"
                        >
                            Movie finder
                        </Link>
                    </nav>
                    <Link href="https://buymeacoffee.com/ppheonix" className="max-w-1/4 py-2 md:py-0">
                        <Image
                            width="200"
                            height="150"
                            className="rounded-lg max-h-6 md:max-h-10 w-auto hover:shadow-amber-400 hover:shadow-lg duration-150"
                            src="/c.png"
                            alt="buymeacoffee"
                        />
                    </Link>
                </div>
            </header>
        </>
    );
}
 */

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-stone-50/80 border-b border-stone-200/60 supports-[backdrop-filter]:bg-stone-50/60">
            <div className="container mx-auto px-4 h-16 flex flex-row justify-between items-center max-w-7xl">
                
                {/* Logo / Brand */}
                <nav className="flex items-center">
                    <Link
                        className="text-xl md:text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-stone-600 hover:from-orange-600 hover:to-rose-600 transition-all duration-300"
                        href="/"
                    >
                        MovieFinder
                    </Link>
                </nav>

                {/* Right Side Action */}
                <Link 
                    href="https://buymeacoffee.com/ppheonix" 
                    target="_blank"
                    className="group relative transition-transform hover:-translate-y-0.5 active:translate-y-0"
                >
                    <div className="relative h-8 w-auto md:h-10">
                        {/* We use Next Image for optimization, but styled to look clean */}
                        <Image
                            width={200}
                            height={60}
                            className="h-full w-auto object-contain drop-shadow-sm group-hover:drop-shadow-lg group-hover:shadow-orange-200 transition-all duration-300 rounded-lg"
                            src="/c.png"
                            alt="Buy me a coffee"
                            priority
                        />
                    </div>
                </Link>
            </div>
        </header>
    );
}