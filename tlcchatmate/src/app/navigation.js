"use client"

import Link from "next/link"

// import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navigation() {
    const get_current_page = usePathname()
    const [isMenuActive, setIsManuActive] = useState(false)

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    return (
        <main className="text-white">
            <nav className="fixed top-0 z-55 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button onClick={() => setIsManuActive(!isMenuActive)} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                                <img src="/logo/logo.png" className="h-8 sm:h-10 me-3" alt="TLC ChatMate Logo" />
                                <span className="self-center text-xl font-bold sm:text-4xl whitespace-nowrap text-[#205781]">
                                    TLC ChatMate
                                </span>
                            </a>
                        </div>

                        <div className="flex items-center">
                            <div className="flex items-center ms-3 relative">
                                <div>
                                    <button type="button" onClick={toggleDropdown} className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                    </button>
                                </div>

                                {dropdownOpen && (
                                    <div className="absolute top-full right-0 z-50 mt-2 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded-sm border border-gray-200 dark:bg-gray-700 dark:divide-gray-600">
                                        <div className="px-4 py-3" role="none">
                                            <p className="text-sm text-gray-600 dark:text-white" role="none">
                                                John Doe
                                            </p>
                                            <p className="text-sm  text-gray-600 truncate dark:text-gray-300" role="none">
                                                johndoe@gmail.com
                                            </p>
                                        </div>
                                        <ul className="py-1" role="none">
                                            <li>
                                                <Link href="/accounts/adminaccounts?showModal=true" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Account settings
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/login" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Sign out
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className={`fixed top-0 left-0 z-50 w-64 h-screen pt-20 transition-transform bg-gradient-to-b from-[#1e4b6e] to-[#205781] border-r border-gray-200/20 dark:bg-gray-800 dark:border-gray-700 ${isMenuActive ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
                <div className="h-full px-4 pb-4 overflow-y-auto">
                    <ul className="space-y-3">
                        <li className="border-b border-white/20 pb-3 mb-2">
                            <Link href="#" className="flex items-center p-2 rounded-lg transition-all duration-200 hover:bg-white/10">
                                <div className="shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-9 md:h-9 mr-3 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base font-medium text-white truncate">John Doe</span>
                                    <span className="text-sm text-gray-200 truncate">Administrator</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center p-3 rounded-lg transition-all duration-200 group hover:bg-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-200 group-hover:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                                </svg>
                                <span className="ml-3 text-sm md:text-base text-gray-200 group-hover:text-white">Department Laws</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/scholarship/scholarships" className={`flex items-center p-3 rounded-lg transition-all duration-200 group hover:bg-white/10 ${get_current_page === "/scholarship/scholarships" ? "bg-white/20 shadow-lg" : ""}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${get_current_page === "/scholarship/scholarships" ? "text-white" : "text-gray-200 group-hover:text-white"}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>
                                <span className={`ml-3 text-sm md:text-base ${get_current_page === "/scholarship/scholarships" ? "text-white" : "text-gray-200 group-hover:text-white"}`}>Scholarships</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/admission/hedtransferees" className={`flex items-center p-3 rounded-lg transition-all duration-200 group hover:bg-white/10 ${get_current_page === "/admission/hedtransferees" ? "bg-white/20 shadow-lg" : ""}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${get_current_page === "/admission/hedtransferees" ? "text-white" : "text-gray-200 group-hover:text-white"}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                </svg>
                                <span className={`ml-3 text-sm md:text-base ${get_current_page === "/admission/hedtransferees" ? "text-white" : "text-gray-200 group-hover:text-white"}`}>Admission Requirements</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/tuitionfee/schoolfees" className={`flex items-center p-3 rounded-lg transition-all duration-200 group hover:bg-white/10 ${get_current_page === "/tuitionfee/schoolfees" ? "bg-white/20 shadow-lg" : ""}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${get_current_page === "/tuitionfee/schoolfees" ? "text-white" : "text-gray-200 group-hover:text-white"}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                </svg>
                                <span className={`ml-3 text-sm md:text-base ${get_current_page === "/tuitionfee/schoolfees" ? "text-white" : "text-gray-200 group-hover:text-white"}`}>School Fees</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/accounts/adminaccounts" className={`flex items-center p-3 rounded-lg transition-all duration-200 group hover:bg-white/10 ${get_current_page === "/accounts/adminaccounts" ? "bg-white/20 shadow-lg" : ""}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${get_current_page === "/accounts/adminaccounts" ? "text-white" : "text-gray-200 group-hover:text-white"}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                <span className={`ml-3 text-sm md:text-base ${get_current_page === "/accounts/adminaccounts" ? "text-white" : "text-gray-200 group-hover:text-white"}`}>Accounts</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

        </main>
    )
}