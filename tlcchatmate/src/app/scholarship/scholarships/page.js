import Link from "next/link";
import Navigation from "../../navigation";
import RemoveModal from "../removemodal";

export default function Scholarships() {
    return (
        <main className="">
            <Navigation />
            <div className="pt-11 pl-0 sm:pl-64">
                <div className="p-5">
                    <div className="flex flex-col md:flex-row  sm:justify-between sm:items-center gap-2 mt-5 border-b border-gray-200">
                        <h1 className="font-bold text-lg sm:text-2xl text-gray-600">Scholarships</h1>
                        <div className="flex justify-center md:justify-end">
                            <Link className="text-blue-700 font-semibold sm:text-base border-b-3 border-blue-700 hover:bg-gray-100 py-2 px-3" href="/scholarship/scholarships">Management</Link>
                            <Link className="text-gray-600 font-semibold sm:text-base border-transparent hover:bg-gray-100 py-2 px-3" href="/scholarship/createscholarship">Create Scholarship</Link>
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
                                    <th scope="col" className="px-6 py-3"></th>
                                    <th scope="col" className="px-6 py-3"></th>
                                    <th scope="col" className="px-6 py-3">sch_id</th>
                                    <th scope="col" className="px-6 py-3">sch_name</th>
                                    <th scope="col" className="px-6 py-3">sch_description</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">
                                        <RemoveModal className="font-medium dark:text-red-500 hover:underline" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link href="/scholarship/editscholarship" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sch_a001</th>
                                    <td className="px-6 py-4 w-1/4">Validictorian and Salutatorian Scholarship</td>
                                    <td className="px-6 py-4 w-1/2">This scholarship program is open to all incoming freshmen students who graduated valedictorian and salutatorian from different private and public secondary schools.</td>

                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">
                                        <RemoveModal className="font-medium dark:text-red-500 hover:underline" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link href="/scholarship/editscholarship" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sch_a002</th>
                                    <td className="px-6 py-4 w-1/4">Academic Scholarship</td>
                                    <td className="px-6 py-4 w-1/2">This scholarship is considered as the school’s premier scholarship for highly qualified applicants whose qualifications are based on their scholastic achievements.</td>

                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">
                                        <RemoveModal className="font-medium dark:text-red-500 hover:underline" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link href="/scholarship/editscholarship" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sch_a003</th>
                                    <td className="px-6 py-4 w-1/4">Student Assistant Scholarship</td>
                                    <td className="px-6 py-4 w-1/4">The student assistant scholarship is open to less-privileged students who would like to enroll in the Higher Education Department (HED).</td>

                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">
                                        <RemoveModal className="font-medium dark:text-red-500 hover:underline" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link href="/scholarship/editscholarship" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sch_a004</th>
                                    <td className="px-6 py-4 w-1/4">Varsity Scholarship</td>
                                    <td className="px-6 py-4 w-1/4">Varsity Scholarship is open to all college students who are determined to continue their education through their skills and talents in the field of sports.</td>

                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">
                                        <RemoveModal className="font-medium dark:text-red-500 hover:underline" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link href="/scholarship/editscholarship" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sch_a005</th>
                                    <td className="px-6 py-4 w-1/4">Arts and Culture Scholarship</td>
                                    <td className="px-6 py-4 w-1/4">This scholarship is open to all students who have commendable talents in the area of singing, dancing, and acting. </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}