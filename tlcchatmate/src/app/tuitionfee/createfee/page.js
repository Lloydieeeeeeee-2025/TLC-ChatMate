"use client"

import Navigation from "@/app/navigation"
import Link from "next/link"
import { useState } from "react"

export default function CreateFee() {
    const [confirmationModal, setConfirmationModal] = useState(false)

    return (
        <main className="text-gray-600">
            <Navigation />
            <div className="pt-11 pl-0 sm:pl-64">
                <div className="p-5">
                    <div className="flex flex-col md:flex-row  sm:justify-between sm:items-center gap-2 mt-5 border-b border-gray-200">
                        <div className="flex items-center">
                            <h1 className="font-bold text-lg sm:text-2xl text-gray-600 mr-2">School Fees</h1>
                        </div>
                        <div className="flex justify-center md:justify-end">
                        <Link className="text-gray-600 font-semibold sm:text-base border-transparent hover:bg-gray-100 py-2 px-3" href="/tuitionfee/schoolfees">Management</Link>
                            <Link className="text-blue-700 font-semibold sm:text-base border-b-3 border-blue-700 hover:bg-gray-100 py-2 px-3" href="/tuitionfee/createfee">Create Scholarship</Link>
                        </div>
                    </div>

                    <div className="w-full bg-white shadow-lg rounded-lg p-5">

                        <div className="flex flex-col md:flex-row gap-4 mb-3">
                            <div className="flex-1">
                                <label className="mb-1 font-semibold">Education Type</label>
                                <select defaultValue="" className="w-full rounded-md border border-gray-200 p-2">
                                    <option value="" selected disabled>--Select education type--</option>
                                    <option>Basic Education</option>
                                    <option>Higher Education</option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="mb-1 font-semibold">Education Level</label>
                                <select defaultValue="" className="w-full rounded-md border border-gray-200 p-2">
                                    <option value="" selected disabled>--Select education level--</option>
                                    <option>Kinder Garten 2</option>
                                    <option>Elementary</option>
                                    <option>Junior High School</option>
                                    <option>HED Old Students</option>
                                    <option>HED New Students</option>
                                    <option>Students in Teacher Certificate Program</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mb-3">
                            <div className="flex-1">
                                <label className="mb-1 font-semibold">Tuition Fee</label>
                                <input className="w-full rounded-md border border-gray-200  p-2" type="number" placeholder="450"/>
                            </div>
                            <div className="flex-1">
                                <label className="mb-1 font-semibold">Down Payment</label>
                                <input className="w-full rounded-md border border-gray-200  p-2" type="number" placeholder="2500"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <label className="mb-1 font-semibold">Miscellaneous Fee</label>
                                <input className="w-full rounded-md border border-gray-200  p-2" type="number" placeholder="3000"/>
                            </div>
                            <div className="flex-1">
                                <label className="mb-1 font-semibold">Other Fees</label>
                                <input className="w-full rounded-md border border-gray-200  p-2" type="string" placeholder=""/>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 mt-5">
                            <button className="text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-500 font-medium rounded-md text-sm inline-flex items-center p-2" onClick={() => setConfirmationModal(true)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

            {confirmationModal && (
                <div className="fixed z-70 inset-0 z-50 flex items-center justify-center w-full h-full bg-opacity-50 backdrop-blur-sm overflow-y-auto">
                    <div className="relative p-4 w-full max-w-md h-full sm:h-auto">
                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                            <button onClick={() => setConfirmationModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 md:p-5 text-center">
                                <img className="w-20 sm:w-24 md:w-28 mb-4 object-contain mx-auto" src="/logo/logo.png" />
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Do you wish to make a changes on this?
                                </h3>
                                <Link className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm inline-flex items-center px-5 py-2.5 text-center" href="/tuitionfee/schoolfees">
                                    Okay
                                </Link>
                                <button onClick={() => setConfirmationModal(false)} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}