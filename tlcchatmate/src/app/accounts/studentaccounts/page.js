"use client"

import Navigation from "@/app/navigation"
import Dropdown from "../dropdown"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import AddModal from "../addmodal"
import RemoveModal from "../removemodal"
import EditModal from "../editmodal"

export default function AdmissionAccounts() {
    // const [activateModal, isActivateModal] = useState(false)
    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)

    {/*
    const openAttrReqrModal = () => {
        isActivateModal(true)
    }

    const [studentName, setStudentName] = useState("John Doe")
    const [studentEmail, setStudentEmail] = useState("johndoe@gmail.com")
    const [studentCurrentPassword, setStudentCurrentPassword] = useState("***")
    const [studentNewPassword, setStudentNewPassword] = useState("****")
    */ }

    const searchParams = useSearchParams()

    useEffect(() => {
        const showModal = searchParams.get("showModal") === "true";
        setEditModal(showModal);
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
                            <button className="font-semibold sm:text-base hover:bg-gray-100 py-2 px-3" onClick={() => setAddModal(true)}>Create Account</button>
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
                                    <input type="text" id="table-search" className="block max-w-[10rem] bg-gray-50 sm:max-w-[20rem] md:max-w-[24rem] h-10 ps-10 text-sm border rounded-lg border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent " placeholder="Search" />
                                </div>
                            </div>
                        </div>

                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-[#205781] text-white dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3"></th>
                                    <th scope="col" className="px-6 py-3"></th>
                                    <th scope="col" className="px-6 py-3">stu_id</th>
                                    <th scope="col" className="px-6 py-3">stu_name</th>
                                    <th scope="col" className="px-6 py-3">stu_email</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">
                                        <RemoveModal className="font-medium dark:text-red-500 hover:underline" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => setEditModal(true)}>Edit</button>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">stu-0059</th>
                                    <td className="px-6 py-4 w-1/4">Jimmy Alapag</td>
                                    <td className="px-6 py-4 w-1/2">jimmyalapag@thelewiscollege.edu.ph</td>

                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">
                                        <RemoveModal className="font-medium dark:text-red-500 hover:underline" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => setEditModal(true)}>Edit</button>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">stu-0060</th>
                                    <td className="px-6 py-4 w-1/4">Jason Catro</td>
                                    <td className="px-6 py-4 w-1/2">jasoncastro@thelewiscollege.edu.ph</td>

                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">
                                        <RemoveModal className="font-medium dark:text-red-500 hover:underline" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => setEditModal(true)}>Edit</button>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">stu-0061</th>
                                    <td className="px-6 py-4 w-1/4">James Yap</td>
                                    <td className="px-6 py-4 w-1/2">jamesyap@thelewiscollege.edu.ph</td>

                                </tr>
                            </tbody>
                        </table>

                        <AddModal open={addModal} close={() => setAddModal(false)} />
                        <EditModal open={editModal} close={() => setEditModal(false)}/>

                    </div>
                </div>
            </div>
        </main>
    )
}