"use client"

import Navigation from "@/app/navigation"
import Link from "next/link"
import RemoveModal from "../removemodal"
import { useEffect, useState } from "react"
import EditModal from "../editmodal"
import CreateModal from "../createmodal"

export default function SchoolFees() {
    const [editModal, setEditModal] = useState(false)
    const [createModal, setCreateModal] = useState(false)
    const [schoolFeeData, setSchoolFeeData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredData, setFilteredData] = useState([])

    const loadSchoolFees = async () => {
        setLoading(true)
        try {
            const response = await fetch("/api/getschoolfees")

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            const data = await response.json()
            setSchoolFeeData(data)
            setFilteredData(data)
            setError(null)
        }
        catch (error) {
            console.error("Error fetching school fees:", error)
            setError(error.message)
            setSchoolFeeData([])
            setFilteredData([])
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadSchoolFees()
    }, [])


    useEffect(() => {
        if (!searchTerm.trim()) {
            setFilteredData(schoolFeeData)
            return
        }

        const lowercasedSearch = searchTerm.toLowerCase()
        const filtered = schoolFeeData.filter(fee => {
            return Object.values(fee).some(value =>
                value !== null && value.toString().toLowerCase().includes(lowercasedSearch)
            )
        })

        setFilteredData(filtered)
    }, [searchTerm, schoolFeeData])

    const search = (e) => {
        setSearchTerm(e.target.value)
    }

    const removeData = (sfe_id) => {
        const updatedData = schoolFeeData.filter(sfe_name => sfe_name.sfe_id !== sfe_id)
        setSchoolFeeData(updatedData)
        setFilteredData(filteredData.filter(sfe_name => sfe_name.sfe_id !== sfe_id))
    }

    const [selectedFee, setSelectedFee] = useState(null)
    const editData = (sfeItem) => {
        setSelectedFee(sfeItem)
        setEditModal(true)
    }

    return (
        <main className="text-gray-600">
            <Navigation />
            <div className="pt-11 pl-0 sm:pl-64">
                <div className="p-5">
                    <div className="flex flex-col md:flex-row sm:justify-between sm:items-center gap-2 mt-5 border-b border-gray-200">
                        <h1 className="font-bold text-lg sm:text-2xl text-gray-600">School Fees</h1>
                        <div className="flex justify-center md:justify-end">
                            <Link className="text-blue-700 font-semibold sm:text-base border-b-3 border-blue-700 hover:bg-gray-100 py-2 px-3" href="/tuitionfee/schoolfees">Management</Link>
                            <button className="text-gray-600 font-semibold sm:text-base border-transparent hover:bg-gray-100 py-2 px-3" onClick={() => setCreateModal(true)}>Create School Fee</button>
                        </div>
                    </div>

                    <div className="relative overflow-x-auto border border-gray-200 sm:rounded-lg">
                        <div className="my-2 ml-2">
                            <div className="bg-white dark:bg-gray-900">
                                <label htmlFor="table-search" className="sr-only">Search</label>
                                <div className="relative mt-1">
                                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="table-search" className="block max-w-[10rem] sm:max-w-[20rem] md:max-w-[24rem] h-10 ps-10 text-sm  border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg" placeholder="Search" value={searchTerm} onChange={search} />
                                </div>
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex justify-center items-center h-40">
                                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#205781]"></div>
                            </div>
                        ) : error ? (
                            <div className="flex justify-center items-center h-40 text-red-500 p-4">
                                <p>Error occur while loading the data: {error}</p>
                            </div>
                        ) : filteredData.length === 0 ? (
                            <div className="flex justify-center items-center h-40 text-gray-500">
                                {searchTerm ? "No matching school fees found" : "No school fee data available"}
                            </div>
                        ) : (
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-[#205781] text-white dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3"></th>
                                        <th scope="col" className="px-6 py-3"></th>
                                        <th scope="col" className="px-6 py-3">sfe_id</th>
                                        <th scope="col" className="px-6 py-3">sfe_education_type</th>
                                        <th scope="col" className="px-6 py-3">sfe_level</th>
                                        <th scope="col" className="px-6 py-3">sfe_tuition</th>
                                        <th scope="col" className="px-6 py-3">sfe_down_payment</th>
                                        <th scope="col" className="px-6 py-3">sfe_miscellaneous</th>
                                        <th scope="col" className="px-6 py-3">sfe_other_fees</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((row) => (
                                        <tr key={row.sfe_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="px-6 py-4">
                                                <RemoveModal sfe_id={row.sfe_id} sfe_name={`${row.sfe_education_type} - ${row.sfe_level}`} sfe_remove={removeData} onSuccess={loadSchoolFees} className="font-medium dark:text-red-500 hover:underline" />
                                            </td>
                                            <td className="px-6 py-4">
                                                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => editData(row)}>Edit</button>
                                            </td>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.sfe_id}</th>
                                            <td className="px-6 py-4 w-1/4">{row.sfe_education_type}</td>
                                            <td className="px-6 py-4 w-1/4">{row.sfe_level}</td>
                                            <td className="px-6 py-4 w-1/4">{row.sfe_tuition}</td>
                                            <td className="px-6 py-4">{row.sfe_down_payment}</td>
                                            <td className="px-6 py-4">{row.sfe_miscellaneous}</td>
                                            <td className="px-6 py-4">{row.sfe_other_fees}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        <CreateModal open={createModal} close={() => setCreateModal(false)} onSuccess={loadSchoolFees} />

                        <EditModal open={editModal} close={() => setEditModal(false)} sfeItem={selectedFee} />
                    </div>
                </div>
            </div>
        </main>
    )
}