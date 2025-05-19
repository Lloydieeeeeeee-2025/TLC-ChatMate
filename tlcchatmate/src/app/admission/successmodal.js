"use client"
import { useState } from "react"

export default function SuccessModal() {
    const [successModal, setSuccessModal] = useState(false)
    const toggleSuccessModal = () => setSuccessModal(prev => !prev)

    return (
        <main>
            <div className="flex justify-center m-5">
                <button onClick={toggleSuccessModal} className="block bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-500 font-medium rounded-md text-sm inline-flex items-center p-2" type="button">
                    Save Changes
                </button>
            </div>

            {successModal && (
                <div className="fixed z-70 inset-0 z-50 flex items-center justify-center w-full h-full bg-opacity-50 bg-black/30 backdrop-blur-xs overflow-y-auto">
                    <div className="relative p-4 w-full max-w-md h-full sm:h-auto">
                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                            <button onClick={toggleSuccessModal} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 md:p-5 text-center">
                                <img className="w-20 sm:w-24 md:w-28 mb-4 object-contain mx-auto" src="/logo/logo.png" />
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Save Successfully!
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}