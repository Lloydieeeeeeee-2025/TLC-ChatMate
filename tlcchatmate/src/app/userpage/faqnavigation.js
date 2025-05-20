"use client"

// import Link from "next/link"
import { useState } from "react"

export default function FAQSNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <main className="fixed top-0 text-gray-600 w-full z-50 shadow-sm">
            <header className="w-full flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-3 bg-white">
                <img className="object-contain h-8 sm:h-10 lg:h-12 w-auto" src="/logo/logo.png" alt="TLC Logo" />
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    <span className="text-[#205781]">TLC ChatMate</span>
                </h1>
            </header>

            <nav className="relative flex items-center justify-between h-auto sm:h-10 md:justify-center bg-[#205781] py-6">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0 px-4 sm:px-6 md:px-8">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <a className="inline-flex gap-1 sm:gap-2 items-center bg-white p-1.5 sm:p-2 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs sm:text-sm text-center hover:bg-gray-50 transition-colors" href="/userpage/guest/faqs">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <span>New Chat</span>
                        </a>

                        <div className="flex items-center md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" id="main-menu" aria-label="Main menu" aria-haspopup="true" className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-[#17446a] focus:outline-none focus:bg-[#17446a] transition duration-150 ease-in-out">
                                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center absolute top-full left-0 w-full md:static md:w-auto md:bg-transparent md:ml-auto px-4 sm:px-6 md:px-8`}>
                    <div className="bg-[#205781] border-t border-[#17446a] flex flex-col md:flex-row md:border-none md:bg-transparent py-2 md:py-3">
                        <span className="inline-flex py-1.5 md:py-0">
                            <a href="/userpage/userlogin" className="w-full px-4 py-2 text-white hover:text-gray-200 hover:bg-[#17446a] md:hover:bg-transparent rounded md:rounded-none transition-colors">
                                Login
                            </a>
                        </span>
                        <span className="inline-flex py-1.5 md:py-0">
                            <a href="/userpage/userregister" className="w-full px-4 py-2 text-white hover:text-gray-200 hover:bg-[#17446a] md:hover:bg-transparent rounded md:rounded-none transition-colors">
                                Signup
                            </a>
                        </span>
                    </div>
                </div>
            </nav>
        </main>
    )
}