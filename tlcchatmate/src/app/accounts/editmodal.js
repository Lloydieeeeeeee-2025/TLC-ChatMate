"use client"

import { useState } from "react"

export default function EditModal({open, close}) {
    const [adminName, setAdminName] = useState("John Doe")
    const [adminEmail, setAdminEmail] = useState("johndoe@gmail.com")
    const [adminCurrentPassword, setAdminCurrentPassword] = useState("***")
    const [adminNewPassword, setAdminNewPassword] = useState("****")

    return (
        <main>
            <div className={`fixed inset-0 bg-opacity-20 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={close}></div>

            <div className={`fixed top-0 right-0 h-full w-full z-100 md:w-[30%] md:z-40 bg-white border-l border-gray-200 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col h-full p-5 space-y-4">

                    <div className="">
                        <button onClick={close} className="text-gray-600 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col h-full ">
                        <div className="mb-4 w-full">
                            <h2 className="text-lg font-semibold  mb-2">Alter Account</h2>
                        </div>

                        <div className="w-full flex-1 overflow-y-auto">
                            <div className="space-y-4 md:space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" id="name" name="name" className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg" value={adminName} onChange={(e) => setAdminName(e.target.value)} placeholder="Your full name" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" name="email" className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} placeholder="your.email@example.com" />
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <h3 className="text-lg font-medium text-gray-800 mb-3">Change Password</h3>

                                    <div className="space-y-2">
                                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
                                        <input type="password" id="currentPassword" name="currentPassword" className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg" value={adminCurrentPassword} onChange={(e) => setAdminCurrentPassword(e.target.value)} placeholder="••••••••" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                                        <input type="password" id="newPassword" name="newPassword" className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg" value={adminNewPassword} onChange={(e) => setAdminNewPassword(e.target.value)} placeholder="••••••••" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-gray-200 hover:bg-gray-300 transition duration-400 p-2 rounded-lg" onClick={close}>
                        Save
                    </button>
                </div>
            </div>
        </main>
    )
}