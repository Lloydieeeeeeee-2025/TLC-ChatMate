"use client"
import { useState } from "react"

export default function CreateModal({ open, close, onSuccess }) {
    const [schoolFeeData, setSchoolFeeData] = useState({
        "sfe_education_type": "",
        "sfe_level": "",
        "sfe_tuition": "",
        "sfe_down_payment": "",
        "sfe_miscellaneous": "",
        "sfe_other_fees": ""
    })
    const [schoolFeesInputError, setSchoolFeesInputError] = useState({
        "sfe_education_type": "",
        "sfe_level": "",
        "sfe_tuition": "",
        "sfe_down_payment": "",
        "sfe_miscellaneous": "",
        "sfe_other_fees": ""
    })

    const submitData = (e) => {
        setSchoolFeeData({ ...schoolFeeData, [e.target.name]: e.target.value })
    }

    const onData = async (e) => {
        e.preventDefault()

        if (schoolFeeData.sfe_education_type.length === 0 || schoolFeeData.sfe_level.length === 0 || schoolFeeData.sfe_tuition.length === 0 || schoolFeeData.sfe_down_payment.length === 0 || schoolFeeData.sfe_miscellaneous === 0) {
            return setSchoolFeesInputError({
                "sfe_education_type": "Education type is required",
                "sfe_level": "Education level is required",
                "sfe_tuition": "Tuition fee is required",
                "sfe_down_payment": "Down payment is required",
                "sfe_miscellaneous": "Miscellaneous fee is required"
            })
        }

        // clear error message
        setSchoolFeesInputError({
            "sfe_education_type": "",
            "sfe_level": "",
            "sfe_tuition": "",
            "sfe_down_payment": "",
            "sfe_miscellaneous": "",
            "sfe_other_fees": ""
        })

        const response = await fetch("/api/createschoolfees", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(schoolFeeData)
        })

        onSuccess()
        await response.json()

        setSchoolFeeData({
            "sfe_education_type": "",
            "sfe_level": "",
            "sfe_tuition": "",
            "sfe_down_payment": "",
            "sfe_miscellaneous": "",
            "sfe_other_fees": ""
        })
        // alert(data.message)
    }

    return (
        <main className="text-gray-600">
            <div className={`fixed inset-0 bg-opacity-20 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={close}></div>

            <form onSubmit={onData} className={`fixed top-0 right-0 h-full w-full z-100 md:w-[30%] md:z-40 bg-white border-l border-gray-200 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
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
                            <h2 className="text-lg font-semibold mb-2">Create Fees</h2>
                        </div>

                        <div className="w-full flex-1 overflow-y-auto">
                            <div className="space-y-4 md:space-y-6">
                                <div className="w-full bg-white rounded-lg">

                                    <div className="flex flex-col gap-4 mb-3">
                                        <div className="w-full">
                                            <label className="mb-1 font-semibold text-sm sm:text-base">Education Type</label>
                                            <select id="sfe_education_type" name="sfe_education_type" value={schoolFeeData.sfe_education_type} onChange={submitData} className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg">
                                                <option value="" disabled>--Select education type--</option>
                                                <option value="Basic Education">Basic Education</option>
                                                <option value="Higher Education">Higher Education</option>
                                            </select>
                                            {schoolFeesInputError.sfe_education_type && (<span className="text-red-600 text-sm mt-2">{schoolFeesInputError.sfe_education_type}</span>)}
                                        </div>

                                        <div className="w-full">
                                            <label className="mb-1 font-semibold text-sm sm:text-base">Education Level</label>
                                            <select id="sfe_level" name="sfe_level" value={schoolFeeData.sfe_level} onChange={submitData} className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg">
                                                <option value="" disabled>--Select education level--</option>
                                                <option value="Kinder Garten 2">Kinder Garten 2</option>
                                                <option value="Elementary">Elementary</option>
                                                <option value="Junior High School">Junior High School</option>
                                                <option value="HED Old Students">HED Old Students</option>
                                                <option value="HED New Students">HED New Students</option>
                                                <option value="Students in Teacher Certificate Program">Students in Teacher Certificate Program</option>
                                            </select>
                                            {schoolFeesInputError.sfe_level && (<span className="text-red-600 text-sm mt-2">{schoolFeesInputError.sfe_level}</span>)}
                                        </div>

                                        <div className="border border-gray-100 my-2"></div>

                                        <div className="w-full">
                                            <label className="mb-1 font-semibold text-sm sm:text-base">Tuition Fee</label>
                                            <input id="sfe_tuition" name="sfe_tuition" value={schoolFeeData.sfe_tuition} onChange={submitData} className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg" type="number" placeholder="00" />
                                            {schoolFeesInputError.sfe_tuition && (<span className="text-red-600 text-sm mt-2">{schoolFeesInputError.sfe_tuition}</span>)}
                                        </div>

                                        <div className="w-full">
                                            <label className="mb-1 font-semibold text-sm sm:text-base">Down Payment</label>
                                            <input id="sfe_down_payment" name="sfe_down_payment" value={schoolFeeData.sfe_down_payment} onChange={submitData} className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg" type="number" placeholder="00" />
                                            {schoolFeesInputError.sfe_down_payment && (<span className="text-red-600 text-sm mt-2">{schoolFeesInputError.sfe_down_payment}</span>)}
                                        </div>

                                        <div className="w-full">
                                            <label className="mb-1 font-semibold text-sm sm:text-base">Miscellaneous Fee</label>
                                            <input id="sfe_miscellaneous" name="sfe_miscellaneous" value={schoolFeeData.sfe_miscellaneous} onChange={submitData} className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg" type="number" placeholder="00" />
                                            {schoolFeesInputError.sfe_miscellaneous && (<span className="text-red-600 text-sm mt-2">{schoolFeesInputError.sfe_miscellaneous}</span>)}
                                        </div>

                                        <div className="w-full">
                                            <label className="mb-1 font-semibold text-sm sm:text-base">Other Fees</label>
                                            <input id="sfe_other_fees" name="sfe_other_fees" value={schoolFeeData.sfe_other_fees} onChange={submitData} className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg" type="text" placeholder="00" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-gray-200 hover:bg-gray-300 transition duration-400 p-2 rounded-lg" type="submit">
                        Save
                    </button>
                </div>
            </form>
        </main>
    )
}