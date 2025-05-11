"use client"

import Navigation from "@/app/navigation"
import Dropdown from "../dropdown"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function AdmissionAccounts() {
    const [activateModal, isActivateModal] = useState(false)

    const openAttrReqrModal = () => {
        isActivateModal(true)
    }

    const [studentName, setStudentName] = useState("John Doe")
    const [studentEmail, setStudentEmail] = useState("johndoe@gmail.com")
    const [studentCurrentPassword, setStudentCurrentPassword] = useState("***")
    const [studentNewPassword, setStudentNewPassword] = useState("****")

    const searchParams = useSearchParams()

    useEffect(() => {
        const showModal = searchParams.get("showModal") === "true";
        isActivateModal(showModal);
    }, [searchParams])

    return (
        <main className="text-gray-600">
            <Navigation />
            <div className="pt-11 pl-0 sm:pl-64">
                <div className="p-5">
                    <div className="flex flex-col md:flex-row  sm:justify-between sm:items-center gap-2 mt-5 border-b border-gray-200">
                        <h1 className="font-bold text-lg sm:text-2xl text-gray-600">Students</h1>
                        <div className="flex justify-center md:justify-end">
                            <Dropdown />
                        </div>
                    </div>

                    <div className="relative overflow-x-auto border border-gray-200 sm:rounded-lg">
                        {/*"flex flex-col-reverse items-start md:flex-row md:items-center justify-between gap-2 mb-5"*/}
                        <div className="my-2 ml-2">
                            {/*
                            <div className="">
                                <button className="text-white font-md bg-blue-700 hover:bg-blue-800 transition duration-400 px-2 py-2 rounded-lg">New Scholarship   </button>
                            </div>
                            */}
                            <div className="bg-white dark:bg-gray-900">
                                <label htmlFor="table-search" className="sr-only">Search</label>
                                <div className="relative mt-1">
                                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="table-search" className="block max-w-[10rem] sm:max-w-[20rem] md:max-w-[24rem] h-10 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                                </div>
                            </div>
                        </div>

                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-[#205781] text-white dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">stu_id</th>
                                    <th scope="col" className="px-6 py-3">stu_name</th>
                                    <th scope="col" className="px-6 py-3">stu_email</th>
                                    <th scope="col" className="px-6 py-3"></th>
                                    <th scope="col" className="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">stu-0059</th>
                                    <td className="px-6 py-4 w-1/4">Jimmy Alapag</td>
                                    <td className="px-6 py-4 w-1/2">jimmyalapag@thelewiscollege.edu.ph</td>
                                    <td className="px-6 py-4">Remove</td>
                                    <td className="px-6 py-4">
                                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={openAttrReqrModal}>Edit</button>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">stu-0060</th>
                                    <td className="px-6 py-4 w-1/4">Jason Catro</td>
                                    <td className="px-6 py-4 w-1/2">jasoncastro@thelewiscollege.edu.ph</td>
                                    <td className="px-6 py-4">Remove</td>
                                    <td className="px-6 py-4">
                                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={openAttrReqrModal}>Edit</button>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">stu-0061</th>
                                    <td className="px-6 py-4 w-1/4">James Yap</td>
                                    <td className="px-6 py-4 w-1/2">jamesyap@thelewiscollege.edu.ph</td>
                                    <td className="px-6 py-4">Remove</td>
                                    <td className="px-6 py-4">
                                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={openAttrReqrModal}>Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

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

                                <div className="flex flex-col h-full ">
                                    <div className="mb-4 w-full">
                                        <h2 className="text-lg font-semibold  mb-2">Administrator</h2>
                                    </div>

                                    <div className="w-full flex-1 overflow-y-auto">
                                        <div className="space-y-4 md:space-y-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                                <input type="text" id="name" name="name" className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Your full name" />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                                <input type="email" id="email" name="email" className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" value={studentEmail} onChange={(e) => setStudentEmail(e.target.value)} placeholder="your.email@example.com" />
                                            </div>

                                            <div className="pt-4 border-t border-gray-200">
                                                <h3 className="text-lg font-medium text-gray-800 mb-3">Change Password</h3>

                                                <div className="space-y-2">
                                                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
                                                    <input type="password" id="currentPassword" name="currentPassword" className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" value={studentCurrentPassword} onChange={(e) => setStudentCurrentPassword(e.target.value)} placeholder="••••••••" />
                                                </div>

                                                <div className="space-y-2">
                                                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                                                    <input type="password" id="newPassword" name="newPassword" className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" value={studentNewPassword} onChange={(e) => setStudentNewPassword(e.target.value)} placeholder="••••••••" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <button className="w-full bg-gray-200 hover:bg-gray-300 transition duration-400 p-2 rounded-lg" onClick={() => isActivateModal(false)}>
                                    Okay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}