"use client"
import { useState } from "react"
import Link from "next/link"

export default function Dropdown() {
    const [dropdown, setDropdown] = useState(false)
    const toggleDropdown = () => setDropdown(prev => !prev)

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex items-center px-4 py-2.5">
                <div className="relative">
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" onClick={toggleDropdown}>
                        More
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>

                    {/* Dropdown menu */}
                    {dropdown && (
                        <div id="dropdownNavbar" className="z-10 absolute right-0 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg border border-gray-200 w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownNavbarLink">
                            <li>
                                <Link href="/admission/hedtransferees" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Transferees
                                </Link>
                            </li>
                            <li>
                                <Link href="/admission/newstudents" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    New Students
                                </Link>
                            </li>
                            <li>
                                <Link href="/admission/oldstudents" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Old Students
                                </Link>
                            </li>
                            <li>
                                <Link href="/admission/returnees" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Returnees
                                </Link>
                            </li>
                            <li>
                                <Link href="/admission/basiceducation" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Basic Education
                                </Link>
                            </li>
                        </ul>
                    </div>
                    )}
                </div>
            </div>
        </nav>
    )
}