"use client"

import Navigation from "@/app/navigation"
import Link from "next/link"
import { useState } from "react"

export default function EditScholarship() {
    const [activateModal, isActivateModal] = useState(false)
    const [title, setTitle] = useState("Academic Scholarship")
    const [description, setDescription] = useState("This scholarship is considered as the school’s premier scholarship for highly qualified applicants whose qualifications are based on their scholastic achievements.")
    const [confirmationModal, setConfirmationModal] = useState(false)

    return (
        <main className="text-gray-600">
            <Navigation />
            <div className="pt-11 pl-0 sm:pl-64">
                <div className="p-5">
                    <div className="flex flex-col md:flex-row  sm:justify-between sm:items-center gap-2 mt-5 border-b border-gray-200">
                        <div className="flex items-center">
                            <h1 className="font-bold text-lg sm:text-2xl text-gray-600 mr-2">Scholarships</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span className="text-blue-600 mr-2">Academic Scholarship</span>
                        </div>

                        <div className="flex justify-center md:justify-end">
                            <Link className="font-semibold sm:text-base border-transparent hover:bg-gray-100 py-2 px-3" href="/scholarship/scholarships">Management</Link>
                            <Link className="font-semibold sm:text-base hover:bg-gray-100 py-2 px-3" href="/scholarship/createscholarship">Create Scholarship</Link>
                        </div>
                    </div>

                    <div className="flex justify-center bg-white shadow-lg rounded-lg p-5">
                        <div className="w-full md:w-[80%] lg:w-1/2">
                            <div className="">
                                <h3 className="font-semibold">Scholarship Title</h3>
                                <input className="border border-gray-200 rounded-lg w-full p-2" placeholder="Staff-Affiliated Student Tuition Discount" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="">
                                <h3 className="font-semibold">Description</h3>
                                <textarea className="border border-gray-200 rounded-lg w-full p-2 resize-none" rows={3} placeholder="I honor this scholarship to those..." value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>

                            <div className="flex flex-col sm:flex-row">
                                {/*left side*/}
                                <div className="border border-gray-200 w-full p-3">
                                    <h3 className="font-semibold mb-2">Guidelines</h3>

                                    <div className="mb-3 w-full">
                                        <div className="flex items-stretch">
                                            <input className="w-full border border-gray-200 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" placeholder="Honorable Scholarship" />
                                            <button className="bg-gray-200 hover:bg-gray-300 rounded-r-md p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>

                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full flex-1 overflow-y-auto">
                                        <div className="flex w-full items-center justify-between border border-gray-200 hover:bg-gray-200 transition duration-4 p-2 ">
                                            <span>Procedure</span>
                                            <button className="hover:bg-gray-200 rounded-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/*modal begining*/}
                                <div className={`fixed inset-0 bg-opacity-20 backdrop-blur-sm transition-opacity duration-300 ${activateModal ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => isActivateModal(false)}></div>

                                <div className={`fixed top-0 right-0 h-full w-full z-100 md:w-[30%] md:z-40 bg-white border-l border-gray-200 transform transition-transform duration-300 ${activateModal ? "translate-x-0" : "translate-x-full"}`}>
                                    <div className="flex flex-col h-full p-5 space-y-4">

                                        <div className="">
                                            <button onClick={() => isActivateModal(false)} className="text-gray-600 hover:text-black">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="flex flex-col h-full">
                                            <h3 className="font-semibold mb-2">Sample Requirements</h3>

                                            <div className="mb-2 w-full">
                                                <div className="flex items-stretch">
                                                    <input className="w-full border border-gray-200 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" />
                                                    <button className="bg-gray-200 hover:bg-gray-300 rounded-r-md p-1">add</button>
                                                </div>
                                            </div>

                                            <div className="w-full flex-1 overflow-y-auto">

                                                <div className="flex w-full items-center justify-between border border-gray-200 p-2">
                                                    requirement 1

                                                    <button className="hover:bg-gray-200 rounded-md">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="flex w-full items-center justify-between border border-gray-200 p-2">
                                                    requirement 2

                                                    <button className="hover:bg-gray-200 rounded-md">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="flex w-full items-center justify-between border border-gray-200 p-2">
                                                    requirement 3

                                                    <button className="hover:bg-gray-200 rounded-md">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                        </svg>
                                                    </button>
                                                </div>

                                            </div>
                                        </div>

                                        <button className="w-full bg-gray-200 hover:bg-gray-300 transition duration-400 p-2 rounded-lg" onClick={() => isActivateModal(false)}>
                                            Okay
                                        </button>
                                    </div>
                                </div>
                                {/*modal end*/}

                                {/*right side*/}
                                <div className="border border-gray-200 w-full p-3">

                                    <div>
                                        <h3 className="font-semibold mb-2">Procedure</h3>


                                        <div className="mb-2 ">

                                            <div>requirement 1</div>
                                            <div>requirement 2</div>
                                            <div>requirement 3</div>

                                        </div>

                                        <button className="bg-gray-200 rounded-lg p-2 flex justify-center w-full p-2 items-center hover:bg-gray-300 transition duration-400" onClick={() => isActivateModal(true)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>

                                            Add Requirements
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button className="mt-5 text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-500 font-medium rounded-md text-sm inline-flex items-center p-2" onClick={() => setConfirmationModal(true)}>Save Changes</button>
                            </div>
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
                                <Link className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm inline-flex items-center px-5 py-2.5 text-center" href="/scholarship/scholarships">
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