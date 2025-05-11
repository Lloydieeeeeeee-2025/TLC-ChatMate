import Navigation from "@/app/navigation"
import Link from "next/link"

export default function SchoolFees() {
    return (
        <main className="">
            <Navigation />
            <div className="pt-11 pl-0 sm:pl-64">
                <div className="p-5">
                    <div className="flex flex-col md:flex-row  sm:justify-between sm:items-center gap-2 mt-5 border-b border-gray-200">
                        <h1 className="font-bold text-lg sm:text-2xl text-gray-600">School Fees</h1>
                        <div className="flex justify-center md:justify-end">
                        <Link className="text-blue-700 font-semibold sm:text-base border-b-3 border-blue-700 hover:bg-gray-100 py-2 px-3" href="/tuitionfee/schoolfees">Management</Link>
                            <Link className="text-gray-600 font-semibold sm:text-base border-transparent hover:bg-gray-100 py-2 px-3" href="/tuitionfee/createfee">Create Scholarship</Link>
                        </div>
                    </div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                                    <th scope="col" className="px-6 py-3">sfe_id</th>
                                    <th scope="col" className="px-6 py-3">sfe_education_type</th>
                                    <th scope="col" className="px-6 py-3">sfe_level</th>
                                    <th scope="col" className="px-6 py-3">sfe_tuition</th>
                                    <th scope="col" className="px-6 py-3">sfe_down_payment</th>
                                    <th scope="col" className="px-6 py-3">sfe_miscellaneous</th>
                                    <th scope="col" className="px-6 py-3">sfe_other_fees</th>
                                    <th scope="col" className="px-6 py-3"></th>
                                    <th scope="col" className="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sfe_b001</th>
                                    <td className="px-6 py-4 w-1/4">Basic Education</td>
                                    <td className="px-6 py-4 w-1/4">Kinder Garten 2</td>
                                    <td className="px-6 py-4 w-1/4">P 16,105.00</td>
                                    <td className="px-6 py-4">P 2,000 ONLY</td>
                                    <td className="px-6 py-4">P 6,056.00</td>
                                    <td className="px-6 py-4">NULL</td>
                                    <td className="px-6 py-4">Remove</td>
                                    <td className="px-6 py-4">
                                        <Link href="/tuitionfee/edittuitionfee" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sfe_b002</th>
                                    <td className="px-6 py-4 w-1/4">Basic Education</td>
                                    <td className="px-6 py-4 w-1/4">Elementary</td>
                                    <td className="px-6 py-4 w-1/4">P 16,105.00</td>
                                    <td className="px-6 py-4">P 2,000 ONLY</td>
                                    <td className="px-6 py-4">P 6,056.00</td>
                                    <td className="px-6 py-4">NULL</td>
                                    <td className="px-6 py-4">Remove</td>
                                    <td className="px-6 py-4">
                                        <Link href="/tuitionfee/edittuitionfee" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sfe_b003</th>
                                    <td className="px-6 py-4 w-1/4">Basic Education</td>
                                    <td className="px-6 py-4 w-1/4">Junior High School</td>
                                    <td className="px-6 py-4 w-1/4">P 16,105.00</td>
                                    <td className="px-6 py-4">P 2,000 ONLY</td>
                                    <td className="px-6 py-4">P 6,358.00</td>
                                    <td className="px-6 py-4">NULL</td>
                                    <td className="px-6 py-4">Remove</td>
                                    <td className="px-6 py-4">
                                        <Link href="/tuitionfee/edittuitionfee" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sfe_b004</th>
                                    <td className="px-6 py-4 w-1/4">Higher Education</td>
                                    <td className="px-6 py-4 w-1/4">HED Old Students</td>
                                    <td className="px-6 py-4 w-1/4">Php 475.00 per unit</td>
                                    <td className="px-6 py-4">Php 2,500</td>
                                    <td className="px-6 py-4">Php 3,150.00</td>
                                    <td className="px-6 py-4">NSTP: Php 638.00 per semester, PRISAA: Php 300.00</td>
                                    <td className="px-6 py-4">Remove</td>
                                    <td className="px-6 py-4">
                                        <Link href="/tuitionfee/edittuitionfee" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sfe_b005</th>
                                    <td className="px-6 py-4 w-1/4">Higher Education</td>
                                    <td className="px-6 py-4 w-1/4">HED New Students</td>
                                    <td className="px-6 py-4 w-1/4">Php 475.00 per unit</td>
                                    <td className="px-6 py-4">Php 2,500</td>
                                    <td className="px-6 py-4">Php 3,150.00</td>
                                    <td className="px-6 py-4">NSTP: Php 638.00 per semester, PRISAA: Php 300.00</td>
                                    <td className="px-6 py-4">Remove</td>
                                    <td className="px-6 py-4">
                                        <Link href="/tuitionfee/edittuitionfee" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sfe_b006</th>
                                    <td className="px-6 py-4 w-1/4">Higher Education</td>
                                    <td className="px-6 py-4 w-1/4">Students in Teacher Certificate Program</td>
                                    <td className="px-6 py-4 w-1/4">Php 550.00 per unit</td>
                                    <td className="px-6 py-4">Php 2,850.00</td>
                                    <td className="px-6 py-4">NULL</td>
                                    <td className="px-6 py-4">NULL</td>
                                    <td className="px-6 py-4">Remove</td>
                                    <td className="px-6 py-4">
                                        <Link href="/tuitionfee/edittuitionfee" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}