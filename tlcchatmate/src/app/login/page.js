"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [invalid_email, setIsInvalidEmail] = useState("")
    const [invalid_password, setIsInvalidPassword] = useState("")
    const router = useRouter()

    const success_or_invalid = () => {
        if (email === 'admin' && password  === '123') {
            setIsInvalidEmail("")
            setIsInvalidPassword("")
            router.push("scholarship/scholarships")
        }
        else {
            setIsInvalidEmail("Email is invalid");
            setIsInvalidPassword("Password is invalid");
        }
    }

    const [focus, setFocus] = useState('')

    const makeFocus = (inputField) => setFocus(inputField)
    const displayPopLabel = (where, value) => {
        if (value === '') {
            setFocus((prev) => (prev === where ? '' : prev))
        }
    }

    const [showPass, setShowPass] = useState(false)

    return (
        <main className="flex justify-center items-center min-h-screen px-4 bg-gray-50 py-6">
            <div className="flex flex-col sm:flex-row w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl h-[60vh]">

                {/*bg-gradient-to-br from-blue-500 to-blue-700*/}

                {/*left*/}
                <div className="flex w-full flex-col justify-center items-center  rounded shadow p-8">
                    <div className="mb-5 text-center">
                        <span className="text-[#205781] font-bold">LOG IN </span>
                        <span className="text-gray-600">to continue chatting with</span>
                    </div>

                    <h1 className="text-4xl font-bold text-[#205781] text-center">TLC ChatMate</h1>

                    <div className="relative w-40 h-40 sm:w-40 sm:h-40 md:w-50 md:h-50 lg:w-60 lg:h-60">
                        <Image className="drop-shadow-md" src="/logo/logo.png" alt="TLC ChatMate logo" layout="fill" objectFit="contain" />
                    </div>
                </div>

                {/*right*/}
                <div className="flex w-full flex-col justify-center p-8 lg:p-12 bg-[#f2f2f2] rounded shadow">
                    <p className="font-bold text-gray-600 mb-2 text-center">Acess your account</p>


                    <div className="mb-6">
                        <div className="relative mb-2">
                            {(focus === 'email') && (
                                <label htmlFor="email" className={`absolute -top-2 bg-white px-1 left-3 rounded-xl text-xs transition-all ${email ? 'text-[#205781]' : 'text-gray-400'}`}>
                                    Email
                                </label>
                            )}
                            <input type="email" placeholder="Email" id="email" value={email} className={`block w-full bg-white p-2 rounded-lg outline-none transition-all ${email ? 'border border-[#205781]' : ' border border-gray-400'}`} onChange={(e) => setEmail(e.target.value)} onFocus={() => makeFocus('email')} onBlur={() => displayPopLabel('email', email)} />
                            {invalid_email && <span className="text-red-600 text-sm">{invalid_email}</span>}
                        </div>

                        {/* nag add ako ng w-80&*/}
                        <div className="relative mb-2">
                            {(focus === 'password') && (
                                <label htmlFor="password" className={`absolute -top-2 bg-white px-1 left-3 rounded-xl text-xs transition-all ${password ? 'text-[#205781]' : 'text-gray-400'}`}>
                                    Password
                                </label>
                            )}
                            <input type={showPass ? 'text' : 'password'} placeholder="Password" id="password" value={password} className={`block w-full bg-white w-full p-2 rounded-lg outline-none transition-all ${password ? 'border border-[#205781]' : ' border border-gray-400'}`} onChange={(e) => setPassword(e.target.value)} onFocus={() => makeFocus('password')} onBlur={() => displayPopLabel('password', password)} />
                            {invalid_password && <span className="text-red-600 text-sm">{invalid_password}</span>}
                            <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400" type="button" onClick={() => setShowPass(prev => !prev)}>
                                {showPass ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>

                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>

                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-end items-center mb-6">
                        <Link className="text-sm text-[#205781] hover:text-blue-900 hover:underline" href="">Forgot password?</Link>
                    </div>


                    <button className="block w-full text-white font-bold rounded-full shadow-md bg-[#3141D0] hover:bg-blue-900 transition duration-400 text-center py-3 mb-6" onClick={success_or_invalid}>Login</button>
                </div>
            </div>
        </main>
    )
}