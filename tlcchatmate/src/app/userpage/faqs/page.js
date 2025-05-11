"use client"

import React, { useEffect, useState } from 'react';
import FAQSNavigation from '../faqnavigation';

export default function FAQS() {
    const [isAdmissionPolicices, setIsAdmissionPolicies] = useState(false)

    const [isUserAsking, setIsUserAsking] = useState("")
    const [isUserToggleAsking, setIsUserToggleAsking] = useState(false)

    const [displayedMessage, setDisplayedMessage] = useState("")

    const userChat = () => {
        return (
            <div className="flex justify-end mb-2">
                <div className="max-w-[80%] bg-blue-100 rounded-lg p-3 border border-gray-200">
                    {displayedMessage}
                </div>
            </div>
        )
    }

    const sendChat = () => {
        const message = isUserAsking.trim()
        if (message === "") return
        setDisplayedMessage(message)
        setIsUserAsking("")
        setIsUserToggleAsking(true)
    }

    const Reponse = () => {
        const [loadingEffect, setIsLoadingEffect] = useState(true)
        useEffect(() => {
            const timer = setTimeout(() => {
                setIsLoadingEffect(false)
            }, 2000)

            return () => clearTimeout(timer)
        }, [])

        if (loadingEffect) {
            return (
                <div className='flex space-x-1 bg-white dark:invert' >
                    <span className='sr-only'>Loading...</span>
                    <div className='h-3 w-3 bg-[#205781] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                    <div className='h-3 w-3 bg-[#205781] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                    <div className='h-3 w-3 bg-[#205781] rounded-full animate-bounce'></div>
                </div >
            )
        }

        return (
            <div className="flex justify-start mb-2">
                <div className="text-sm max-w-[80%] bg-gray-100 rounded-lg p-3 border border-gray-200">
                    <p className="font-bold">Transfer and Returning Students</p>
                    <p>a. Transcript of Records</p>
                    <p>b. Certificate of Honorable Dismissal</p>
                    <p>c. NSO/PSA Birth Certificate (Original/ Photocopy)</p>
                    <p>d. 2 copies 2x2 most recent colored ID pictures</p>
                    <p>e. Medical Certificate (Issued not over 1 month)</p>
                    <p>f. Qualifying Rating in the Entrance Examination</p>
                    <p>g. Police Clearance (Issued not over 3 months)</p>
                    <p>h. Drug Test Certificate from Accredited Drug Testing Center (Recent, not over 15 days after testing)</p>
                    <p>i.  Accomplished Registration Form</p>
                </div>
            </div>
        )
    }

    const AdmissionPolicies = () => {
        const [showQuestion, setShowQuestion] = useState(false);

        useEffect(() => {
            const timer = setTimeout(() => {
                setShowQuestion(true);
            }, 2000);

            return () => clearTimeout(timer);
        }, []);

        return (
            <div>
                <div className="flex justify-start mb-2">
                    <div className="text-sm max-w-[80%] bg-gray-100 rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold">New Students</p>
                        <p>a. Qualifying Rating in the Entrance Examination</p>
                        <p>b. Form 138 (Report Card)</p>
                        <p>c. Certificate of Good Moral Character</p>
                        <p>d. NSO/ PSA Birth Certificate (Original/ Photocopy)</p>
                        <p>e. 2 copies 2x2 most recent colored ID pictures</p>
                        <p>f. 2 long size folders</p>
                        <p>g. Medical Certificate (Issued not over 1 month)</p>
                        <p>h. Police Clearance (Issued not over 3 months)</p>
                        <p>i. Drug Test Certificate (Recent, not over 15 days after testing)</p>
                    </div>
                </div>

                {showQuestion && (
                    <div className="flex justify-start mb-2">
                        <div className="text-sm max-w-[80%] bg-gray-100 rounded-lg p-3 border border-gray-200">
                            <p>Do you have any questions?</p>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <main className="text-gray-600 pt-[140px] bg-gray-50 min-h-screen">
            <FAQSNavigation />

            <div className="px-4 max-w-6xl mx-auto pb-[100px]">
                {!isAdmissionPolicices && (
                    <div className="text-center my-10 space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">Good day! How may I assist you today?</h2>
                        <p className="text-base text-gray-600">
                            You can select from the options below or feel free to type your questions.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                            <button onClick={() => setIsAdmissionPolicies(!isAdmissionPolicices)} className="rounded-xl bg-blue-100 border border-blue-300 text-left p-5 shadow hover:shadow-md transition-all hover:border-blue-500 hover:bg-blue-50 cursor-pointer">
                                <p className="font-semibold text-lg mb-2 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                    </svg>

                                    Admission Policies
                                </p>
                                <p className="text-sm text-gray-700">Know about our requirements and qualifications for new students.</p>
                            </button>

                            <div className="rounded-xl bg-blue-100 border border-blue-300 text-left p-5 shadow hover:shadow-md transition-all hover:border-blue-500 hover:bg-blue-50 cursor-pointer">
                                <p className="font-semibold text-lg mb-2 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                    </svg>
                                    Enrollment Process
                                </p>
                                <p className="text-sm text-gray-700">Step-by-step guide on how to enroll.</p>
                            </div>

                            <div className="rounded-xl bg-blue-100 border border-blue-300 text-left p-5 shadow hover:shadow-md transition-all hover:border-blue-500 hover:bg-blue-50 cursor-pointer">
                                <p className="font-semibold text-lg mb-2 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                    </svg>
                                    Scholarship Grant
                                </p>
                                <p className="text-sm text-gray-700">Explore our available scholarships and how to apply.</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="px-4 py-6">
                    <div className="max-w-6xl mx-auto space-y-6">
                        {isAdmissionPolicices && <AdmissionPolicies />}
                        {isUserToggleAsking && userChat()}
                        {isUserToggleAsking && <Reponse />}
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 w-full bg-white p-4 flex justify-center items-center h-20 shadow-lg border-t border-gray-200 z-10">
                <div className="relative w-full max-w-4xl">
                    <input className="w-full border border-gray-400 rounded-full p-3 pl-5 pr-12 focus:ring-4 focus:outline-none focus:ring-blue-100 focus:border-blue-400" value={isUserAsking} onChange={(e) => setIsUserAsking(e.target.value)} placeholder="Ask here..." />
                    <button className="text-blue-600 absolute right-4 top-1/2 -translate-y-1/2" onClick={sendChat}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </main>

    );
}