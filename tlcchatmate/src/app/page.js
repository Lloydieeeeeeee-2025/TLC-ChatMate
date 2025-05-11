// import Link from 'next/link';
"use client"
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function TLCChatMate() {
  const [isDecision, setIsDecision] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    function whenUserClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsDecision(false)
      }
    }
    if (isDecision) { document.addEventListener("mousedown", whenUserClickOutside) }
    return () => document.removeEventListener("mousedown", whenUserClickOutside)
  }, [isDecision])

  return (
    <main className="bg-[#f2f2f2] h-screen flex items-center justify-center font-sans relative">
      <div className="max-w-4xl w-full px-6 flex flex-col md:flex-row items-center justify-between z-10">
        <div className="w-64 md:w-80 lg:w-96 order-first md:order-last">
          <div className="rounded-full p-4 flex items-center justify-center">
            <img className="object-contain w-full h-full" src="logo/logo.png" alt="TLC Chatmate logo" />
          </div>
        </div>

        <div className="text-center md:text-left mb-8 md:mb-0 order-last md:order-first mt-6 md:mt-0">
          <h1 className="text-blue-500 font-bold">
            <span className="text-4xl block mb-2 text-[#205781]">Welcome to</span>
            <span className="text-4xl font-bold block text-[#205781]">TLC ChatMate</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg mb-2">A Conversational Agent for The Lewis College</p>

          <button className="mt-8 bg-[#0678CF] hover:bg-blue-900 text-white font-medium py-2 px-8 rounded-full transition duration-400" onClick={() => setIsDecision(true)}>
            Get Started
          </button>
        </div>
      </div>

      {/*
      <div className="absolute bottom-24 left-1/4">
        <div className="w-6 h-6 bg-[#205781] rounded-full opacity-70"></div>
      </div>
      <div className="absolute bottom-40 left-1/3">
        <div className="w-4 h-4 bg-[#205781] rounded-full opacity-70"></div>
      </div>
      <div className="absolute bottom-32 left-1/5">
        <div className="w-3 h-3 bg-[#205781] rounded-full opacity-70"></div>
      </div>
      <div className="absolute bottom-57 left-1/2">
        <div className="w-3 h-3 bg-[#205781] rounded-full opacity-70"></div>
      </div>


      <div className="absolute top-20 right-1/3">
        <div className='w-3 h-3 bg-[#205781] rounded-full opacity-70'></div>
      </div>
      <div className="absolute top-33 right-1/2">
        <div className='w-3 h-3 bg-[#205781] rounded-full opacity-70'></div>
      </div>
      */}

      {isDecision && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10" />
      )}

      <div ref={modalRef} className={`fixed p-4 top-0 right-0 h-full w-full sm:w-full md:w-1/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-45 ${isDecision ? "translate-x-0" : "translate-x-full"}`}>
        <div className="">
          <button className="text-gray-600 hover:text-gray-800 transition duration-200" onClick={() => setIsDecision(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/*link*/}
        <div className=" flex h-full items-center justify-center">
          <div className="p-4 flex flex-col justify-between items-center">
          <img className="w-32 sm:w-40 md:w-48 lg:w-56 mx-auto" src="logo/logo.png" alt="TLC ChatMate Logo" />
            <h2 className="text-xl font-semibold text-gray-600 text-center mb-4">How would you like to continue?</h2>

            <div className="flex flex-col mt-8 items-center w-full">
              <div className="w-full flex flex-col items-center">
                <Link className="block w-full bg-[#3141D0] hover:bg-blue-900 rounded-full text-center font-bold text-white transition duration-200 shadow-md py-2 mb-3" href="/userpage/userlogin">Login</Link>
                <Link className="block w-full bg-green-500 hover:bg-green-700 rounded-full text-center font-bold text-white transition duration-200 shadow-md py-2" href="userpage/userregister">Sign Up</Link>
                <Link className="border-b text-gray-600 mt-10" href="">Continue as a guest</Link>
              </div>
            </div>
            {/*
            <footer className="text-center text-xs text-gray-600 mt-8">
              © 2025 TLC Chatmate
            </footer>
            */}
          </div>
        </div>
      </div>
    </main>
  )
}