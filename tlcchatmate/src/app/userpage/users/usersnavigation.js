"use client"

import Link from "next/link"
import { useState } from "react"

export default function UsersNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAsideOpen, setIsAsideOpen] = useState(false)

    const [isSignout, setIsSignout] = useState(false)

    const toggleAside = () => {
        setIsAsideOpen(!isAsideOpen)
    }

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    return (
        <main className="fixed top-0 text-gray-600 w-full z-200">
            <header className="w-full flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-3 bg-white">
                <img className="object-contain h-8 sm:h-10 lg:h-12 w-auto" src="/logo/logo.png" alt="TLC Logo" />
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    <span className="text-[#205781]">TLC ChatMate</span>
                </h1>
            </header>

            <nav className="relative flex items-center justify-between h-auto sm:h-10 md:justify-center bg-[#205781] py-6">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0 px-4 sm:px-6 md:px-8">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <button className="text-white mr-3" onClick={toggleAside}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                            </svg>
                        </button>

                        <a className="inline-flex gap-1 sm:gap-2 items-center bg-white p-1.5 sm:p-2 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs sm:text-sm text-center hover:bg-gray-50 transition-colors" href="/userpage/users/faqs">
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

                <div className="flex ms-auto items-center relative">
                    <div className="relative ">
                        <button type="button" onClick={toggleDropdown} className="flex mr-5 items-center gap-2 text-sm text-white rounded-lg focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            <span>John Doe</span>
                        </button>

                        {/* Dropdown menu */}
                        <div className={`${dropdownOpen ? 'block' : 'hidden'} absolute top-full right-0 mt-2 w-48 bg-[#205781] rounded-md shadow-lg z-50`}>
                            <ul className="py-1">
                                <li>
                                    <Link href="/userpage/users/userprofile" className="flex items-center w-full text-left px-4 py-2 text-sm text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/userpage/users/changepassword" className="flex items-center w-full text-left px-4 py-2 text-sm text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                        Change Password
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={() => setIsSignout(true)} className="flex items-center w-full text-left px-4 py-2 text-sm text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                        </svg>
                                        Signout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </nav>

            {isSignout && (
                <main>
                    <div className="fixed z-70 inset-0 z-50 flex items-center justify-center w-full h-full bg-opacity-50 bg-black/30 backdrop-blur-xs overflow-y-auto" onClick={() => setSuccessModal(false)}> {/* close when clicked outside of the modal*/}
                        <div className="relative p-4 w-full max-w-md h-full sm:h-auto" onClick={(e) => e.stopPropagation()}> {/* close when clicked outside of the modal*/}
                            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                                <button onClick={() => setIsSignout(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <div className="p-4 md:p-5 text-center">
                                    <img className="w-20 sm:w-24 md:w-28 mb-4 object-contain mx-auto" src="/logo/logo.png" />
                                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                        Do you want to signout?
                                    </h3>
                                    <button onClick={() => setIsSignout(false)} className="bg-gray-200 hover:bg-gray-300 font-medium rounded-md text-sm inline-flex items-center px-5 py-2.5 text-center">
                                        Cancel
                                    </button>
                                    <Link href="/userpage/userlogin" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                        Yes
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )}

            <div className="flex relative">
                <aside className={`absolute top-full left-0 border border-r bg-white border-gray-200 text-gray-700 h-screen  transition-all duration-300 ease-in-out z-40 ${isAsideOpen ? 'w-64 opacity-100' : 'w-0 opacity-0 md:opacity-100 md:w-16'}  overflow-hidden`}>
                    {isAsideOpen && (
                        <button className="absolute top-3 right-3 text-gray-500 md:hidden" onClick={toggleAside}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}

                    <ul className="pt-3">
                        <li className="hover:bg-gray-200">
                            <Link href="/userpage/users/userprofile" className="h-16 justify-start ml-4 flex items-center w-full focus:text-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                {isAsideOpen && <span className="ml-3">Account Settings</span>}
                            </Link>
                        </li>
                        <li className="">
                            <div className="h-16 flex items-center justify-start ml-4 w-full focus:text-orange-500 font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                {isAsideOpen && <span className="ml-3">Chat Histories</span>}
                            </div>
                            {isAsideOpen && (
                                <div className="px-6">
                                    <p className=" hover:bg-gray-200 p-2 transition duration-200 rounded-lg">Tuition Fees</p>
                                    <p className=" hover:bg-gray-200 p-2 transition duration-200 rounded-lg">Admission Requirements</p>
                                    <p className=" hover:bg-gray-200 p-2 transition duration-200 rounded-lg">Scholarship Grants</p>
                                </div>
                            )}
                        </li>
                    </ul>
                </aside>
            </div>
        </main>
    )
}