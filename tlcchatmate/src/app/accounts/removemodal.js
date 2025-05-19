"use client"
import { useState } from "react"

export default function RemoveModal() {
    const [successModal, setSuccessModal] = useState(false)
    const toggleSuccessModal = () => setSuccessModal(prev => !prev)

    return (
        <main>
            <div className="flex justify-center m-5">
                <button onClick={toggleSuccessModal} className="font-medium dark:text-red-500 hover:underline" type="button">
                    Remove
                </button>
            </div>

            {successModal && (
                <div className="fixed z-70 inset-0 z-50 flex items-center justify-center w-full h-full bg-opacity-50 bg-black/30 backdrop-blur-xs overflow-y-auto" onClick={() => setSuccessModal(false)}> {/* close when clicked outside of the modal*/}
                    <div className="relative p-4 w-full max-w-md h-full sm:h-auto" onClick={(e) => e.stopPropagation()}> {/* close when clicked outside of the modal*/}
                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                            <button onClick={() => setSuccessModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 md:p-5 text-center">
                                <img className="w-20 sm:w-24 md:w-28 mb-4 object-contain mx-auto" src="/logo/logo.png" />
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Do you want to remove John Doe's information?
                                </h3>
                                <button onClick={() => setSuccessModal(false)} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-md text-sm inline-flex items-center px-5 py-2.5 text-center">
                                    Remove
                                </button>
                                <button onClick={() => setSuccessModal(false)} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
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