import Link from "next/link";
import UsersNavigation from "../usersnavigation";

export default function ChangePassword() {
    
    return (
        <main className="text-gray-600 pt-[140px] min-h-screen">
            <UsersNavigation />
            <div className="flex justify-center px-4 max-w-6xl mx-auto border border-gray-200 pb-[100px]">
                <div className="w-full max-w-md bg-white p-6 rounded-lg">
                    <h3 className="text-[#205781] font-semibold text-xl mb-6 text-center">Change Password</h3>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Current: </label>
                        <div className="relative">
                            <input type="password" placeholder="•••" className="w-full p-2 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-medium mb-2">New Password: </label>
                        <div className="relative">
                            <input type="password" placeholder="••••••" className="w-full p-2 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-medium mb-2">Confirm Password: </label>
                        <div className="relative">
                            <input type="password" placeholder="••••••" className="w-full p-2 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <hr className="border border-gray-200 mb-8" />

                    <div className="flex justify-end">
                        <div className="flex flex-col sm:flex-row sm:justify-end space-y-3 sm:space-y-0 sm:space-x-3 mr-2">
                            <Link href="/userpage/users/faqs" className="bg-gray-200 p-2 rounded-lg w-full sm:w-auto hover:bg-gray-300">
                                Cancel
                            </Link>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-end space-y-3 sm:space-y-0 sm:space-x-3">
                            <Link href="/userpage/users/faqs" className="bg-blue-600 text-white p-2 rounded-lg w-full sm:w-auto hover:bg-blue-700">
                                Save
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}