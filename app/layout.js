import './globals.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "MovieFinder - Explore Trending Movies & Reviews",
  description: "Explore the must-watch movies of the week. Updated daily. Discover ratings, details and synopsis for the latest releases.",
  keywords: ["movies", "trending films", "cinema", "movie reviews", "TMDB", "popular movies", "film database"],
  authors: [{ name: "thatshubham" }],
  
  openGraph: {
    title: "MovieFinder - Your Daily Dose of Trending Movies",
    description: "Don't know what to watch? Explore the must-watch movies of the week. Updated daily with the latest hits.",
    url: "https://moviefind.vercel.app/", 
    siteName: "MovieFinder",
    images: [
      {
        url: "/main.jpg", 
        width: 1200,
        height: 630,
        alt: "MovieFinder Trending Movies Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MovieFinder - Explore Trending Movies",
    description: "Explore the must-watch movies of the week. Updated daily.",
    images: ["/main.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
  
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex items-center flex-col justify-between min-h-screen mx-auto bg-stone-50">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
