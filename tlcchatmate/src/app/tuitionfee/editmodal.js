"use client"
import { useEffect, useState } from "react"

export default function EditModal({ open, close, sfeItem }) {
    const [sfe_tuition, set_sfe_tuition] = useState(0)
    const [sfe_down_payment, set_sfe_down_payment] = useState(0)
    const [sfe_miscellaneous, set_sfe_miscellaneous] = useState(0)
    const [sfe_other_fees, set_sfe_other_fees] = useState(0)
    const [sfe_education_type, setEducationType] = useState("")
    const [sfe_level, setEducationLevel] = useState("")
    const [sfeItemError, setSfeItemError] = useState({
        "sfe_tuition": "",
        "sfe_down_payment": "",
        "sfe_miscellaneous": "",
        "sfe_education_type": "",
        "sfe_level": "",
    })

    useEffect(() => {
        if (sfeItem) {
            set_sfe_tuition(sfeItem.sfe_tuition)
            set_sfe_down_payment(sfeItem.sfe_down_payment)
            set_sfe_miscellaneous(sfeItem.sfe_miscellaneous)
            set_sfe_other_fees(sfeItem.sfe_other_fees)
            setEducationLevel(sfeItem.sfe_level)
            setEducationType(sfeItem.sfe_education_type)
        }
    }, [sfeItem])

    const save = async (e) => {
        e.preventDefault()

        if (sfe_tuition.length === 0 || sfe_down_payment.length === 0 || sfe_miscellaneous.length === 0 || sfe_education_type.length === 0 || sfe_level.length === 0) {
            setSfeItemError({
                sfe_tuition: "Tuition is required.",
                sfe_down_payment: "Down payment is required.",
                sfe_miscellaneous: "Miscellaneous is required.",
                sfe_education_type: "Education Type is required.",
                sfe_level: "Education Level is required.",
            })

            return
        }

        try {
            const response = await fetch("/api/editschoolfees", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({ sfe_id: sfeItem.sfe_id, sfe_tuition, sfe_down_payment, sfe_miscellaneous, sfe_other_fees, sfe_education_type, sfe_level}) 
            })

            await response.json()

            close()
        }
        catch (error) {
            console.error("Error encountered while updating the value", error)
        }

        setSfeItemError({
            "sfe_tuition": "",
            "sfe_down_payment": "",
            "sfe_miscellaneous": "",
            "sfe_education_type": "",
            "sfe_level": ""
        })
    }

    return (
        <main className="text-gray-600">
            <div className={`fixed inset-0 bg-opacity-20 bg-black/30 backdrop-blur-xs transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={close}></div>

            <div className={`fixed top-0 right-0 h-full w-full z-100 md:w-[30%] md:z-40 bg-white border-l border-gray-200 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
                <form onSubmit={save} className="flex flex-col h-full p-5 space-y-4">

                    <div className="">
                        <button onClick={close} className="text-gray-600 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col h-full ">
                        <div className="mb-4 w-full">
                            <h2 className="text-lg font-semibold mb-2">Alter Fees</h2>
                        </div>

                        <div className="w-full flex-1 overflow-y-auto">
                            <div className="space-y-4 md:space-y-6">
                                <div className="w-full bg-white rounded-lg">

                                    <div className="flex flex-col gap-4 mb-3">
                                        <div className="w-full">
                                            <label className="mb-1 font-semibold text-sm sm:text-base">Education Type</label>
                                            <select value={sfe_education_type} onChange={(e) => setEducationType(e.target.value)} className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg">
                                                <option value="" disabled>--Select education type--</option>
                                                <option value="Basic Education">Basic Education</option>
                                                <option value="Higher Education">Higher Education</option>
                                            </select>
                                        </div>

                                        <div className="w-full">
                                            <label className="mb-1 font-semibold text-sm sm:text-base">Education Level</label>
                                            <select value={sfe_level} onChange={(e) => setEducationLevel(e.target.value)} className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg">
                                                <option value="" disabled>--Select education level--</option>
                                                <option value="Kinder Garten 2">Kinder Garten 2</option>
                                                <option value="Elementary">Elementary</option>
                                                <option value="Junior High School">Junior High School</option>
                                                <option value="HED Old Students">HED Old Students</option>
                                                <option value="HED New Students">HED New Students</option>
                                                <option value="Students in Teacher Certificate Program">Students in Teacher Certificate Program</option>
                                            </select>
                                        </div>

                                        <div className="border border-gray-100 my-2"></div>

                                        <div className="w-full">
                                            <label className="mb-1 font-semibold text-sm sm:text-base">Tuition Fee</label>
                                            <input className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg" type="number" placeholder="450" value={sfe_tuition} onChange={(e) => set_sfe_tuition(e.target.value)} />
                                            {sfeItemError.sfe_tuition && (<span className="text-red-600 text-sm mt-2">{sfeItemError.sfe_tuition}</span>)}
                                        </div>

                                        <div className="w-full">
                                            <label className="mb-1 font-semibold text-sm sm:text-base">Down Payment</label>
                                            <input className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg" type="number" placeholder="2500" value={sfe_down_payment} onChange={(e) => set_sfe_down_payment(e.target.value)} />
                                            {sfeItemError.sfe_down_payment && (<span className="text-red-600 text-sm mt-2">{sfeItemError.sfe_down_payment}</span>)}
                                        </div>

                                        <div className="w-full">
                                            <label className="mb-1 font-semibold text-sm sm:text-base">Miscellaneous Fee</label>
                                            <input className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg" type="number" placeholder="3000" value={sfe_miscellaneous} onChange={(e) => set_sfe_miscellaneous(e.target.value)} />
                                            {sfeItemError.sfe_miscellaneous && (<span className="text-red-600 text-sm mt-2">{sfeItemError.sfe_miscellaneous}</span>)}
                                        </div>

                                        <div className="w-full">
                                            <label className="mb-1 font-semibold text-sm sm:text-base">Other Fees</label>
                                            <input className="w-full border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent rounded-lg" type="text" placeholder="" value={sfe_other_fees} onChange={(e) => set_sfe_other_fees(e.target.value)} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-gray-200 hover:bg-gray-300 transition duration-400 p-2 rounded-lg" type="submit">
                        Save
                    </button>
                </form>
            </div>
        </main>
    )
}